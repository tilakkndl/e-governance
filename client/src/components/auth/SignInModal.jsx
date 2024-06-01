import axios from "axios";
import { useState } from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../../store/slices/userSlice";
import { loginValidation } from "./schemas";
import Container from "../Container";
import Button from "../Button";
import Input from "./Input";

const SignInModal = () => {
  const [error, setError] = useState(false);

  const user = useSelector((state) => state.user);

  const { login_email: email, login_password: password } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setUser({ ...user, [e.target.name]: e.target.value }));
  };

  const handleSignIn = async () => {
    console.log("Signing in...");
    await axios
      .post("http://localhost:5000/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        const token = data.token;
        const { name, email } = data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("data", JSON.stringify({ name, email }));
        navigate("/");
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center my-4">
        <div className="flex gap-6 my-8">
          <div>
            <h3
              className="
              text-dark-color
              font-semibold text-2xl
              pb-3 mb-3 mt-1 border-b-2 border-[#ccc]
            "
            >
              Registered Customers
            </h3>
            {error && (
              <h1 className="text-red-600 font-bold bg-slate-100 px-2 py-4 mb-4">
                Sign In Unsucessful. Please check your email or password and try
                again!!
              </h1>
            )}
            <Formik
              enableReinitialize
              initialValues={user}
              validationSchema={loginValidation}
              onSubmit={handleSignIn}
            >
              {({ errors, handleBlur, touched }) => (
                <Form>
                  <Input
                    label="Email"
                    type="text"
                    name="login_email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                  <Input
                    label="Password"
                    type="password"
                    name="login_password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                  <Button buttonText="Login" full />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 text-base text-accent-color font-semibold">
          <div className="cursor-pointer flex gap-2">
            <span>Create New Account ?</span>
            <Link to={"/signup"} className="text-primary-color">
              SignUp
            </Link>
          </div>
          <span className="cursor-pointer text-secondary-color">
            Forgot Your Password ?
          </span>
        </div>
      </div>
    </Container>
  );
};

export default SignInModal;
