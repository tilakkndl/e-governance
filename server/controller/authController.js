const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../model/userModel');
const catchAsync = require('./../utils/catchAsync');
const { promisify } = require('util');
const AppError = require('../utils/appError');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    success: true,
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Provide the emai and password', 401));
  }

  const user = await User.findOne({ email }).select('+password');

  const passwordChecking = await user.correctPassword(password, user.password);
  if (!user || !passwordChecking) {
    // return res.status(401).json({ error: 'Enter correct email or password' });
    return new AppError('Enter email or password', 401);
  }

  const token = signToken(user._id);

  req.user = user;

  res.status(200).json({
    token,
    success: true,
    user: {
      name: user?.name,
      email: user?.email,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  //checing if there is token or not
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  //1) checing whether is logged in or not
  if (!token) {
    // res.status(401).json({ message: 'Get login in Firstly' });
    return new AppError('Get log in firstly', 401);
  }
  //2) verify the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) check if token belonging user is available or not
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    // res.status(401).json({
    //   status: 'Error',
    //   message: 'The token belonging user is no longer available',
    // });
    return new AppError('The token belonging user is no longer available', 401);
  }

  //  GRANT ACCESS TO THE USER
  req.user = currentUser;
  next();
});
