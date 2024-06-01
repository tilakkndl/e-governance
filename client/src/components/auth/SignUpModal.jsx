import { useState } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';

import { registerValidation } from './schemas';
import Container from '../Container';
import Input from './Input';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';

const SignUpModal = () => {
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, password, passwordConfirm } = user;

  const handleChange = (e) => {
    dispatch(setUser({ ...user, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async () => {
    console.log('Registering...');

    //check if user exists already
    // const existingUser = await axios
    //   .get('http://localhost:5000/api/v1/users/email/${user.email}')
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     setError(true);
    //     setSucess(false);
    //     console.log(err);
    //     return null;
    //   });

    // if (existingUser) {
    //   setError(true);
    //   setSucess(false);
    //   console.log('User with this email already exists.');
    //   return;
    // }

    //register new user if user doesn't exists
    const data = await axios
      .post('http://localhost:5000/api/v1/users/signup', {
        name,
        email,
        password,
        passwordConfirm,
      })
      .then((res) => {
        setError(false);

        //login the user
        axios
          .post('http://localhost:5000/api/v1/users/login', {
            email,
            password,
          })
          .then((res) => {
            navigate('/');
            return res;
          })
          .catch((err) => {
            setError(true);
            console.log(err);
          });

        return res.data;
      })
      .catch((err) => {
        setError(true);
        console.log(err);
        return null;
      });

    console.log(data);
  };

  return (
    <Container>
      <div className="flex gap-6 my-8">
        <div>
          <h3
            className="
              text-dark-color
              font-semibold text-2xl
              pb-3 mb-3 mt-1 border-b-2 border-[#ccc]
            "
          >
            New User ? Register Now!
          </h3>
          {error && (
            <h1 className="text-red-600 font-bold bg-slate-100 px-2 py-4">
              Register Unsucessful. Please try again!!
            </h1>
          )}
          <Formik
            enableReinitialize
            initialValues={user}
            validationSchema={registerValidation}
            onSubmit={handleSignUp}
          >
            {({ errors, handleBlur, touched }) => (
              <Form>
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Button buttonText="Register" full />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div
        className="
            flex items-center justify-center gap-4 
            mt-4 text-base font-semibold
        "
      >
        <span className="cursor-pointer">Already Registered ?</span>
        <Link to={'/signin'} className="cursor-pointer text-primary-color">
          Sign In
        </Link>
      </div>
    </Container>
  );
};

export default SignUpModal;
