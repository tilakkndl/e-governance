const sendEmail = require('./../utils/email');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const NotifyModel = require('./../model/notifyingModel');

exports.createNotifyingDate = catchAsync(async (req, res, next) => {
  const notifyingDate = await NotifyModel.create(req.body);
  res.status(201).json({
    success: true,
    notifyingDate,
    message: 'Added notify Date',
  });
});

exports.getNotifyingDate = catchAsync(async (req, res, next) => {
  const notifyDate = await NotifyModel.find({});
  if (!notifyDate) {
    return next(new AppError('Notifying data are not found', 404));
  }
  res.status(200).json({
    success: true,
    notifyDate,
  });
});

exports.testSendingEmail = (catchAsync(async(req, res, next)=>{
    console.log(req.body)
    const {startingDate} = req.body;
try {
 
    const message = "aayo mail?"
    await sendEmail({
        // email: req.user.email,
        email: "santosh2021r@gmail.com",
        message,
        subject: "Thank you for the registration. We would like to inform you that the crop will be ready to harvest on the date you have provided. We will notify other events as well. Let's modernize agriculture together.Thank you."
    })
    
    return res.status(200).json({
        status: "Success",
        message: "Mail send"
    })
    } catch(err){
        console.log(err)
        return next(new AppError("Couldn't send mail", 404))
    
    }
    
}))
