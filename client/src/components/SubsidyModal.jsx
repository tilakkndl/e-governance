import { useState, } from "react";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import axios from "axios";

import Container from "./Container";
import Input from "./auth/Input";
import Button from "./Button";
import { useDispatch } from "react-redux";
import useSnackbarController from '../utils/useSnackBar'

const SubsidyModal = () => {
  const {subsidy} = useParams();
  const { showSuccessSnackbar } = useSnackbarController()
  const [formData, setFormData] = useState();
  // const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };




  const handleSubmit = async() => {
    console.log(formData);
    console.log(subsidy)

    //making a post request to the server
        //register new user if user doesn't exists
        const data = await axios
        .post('http://localhost:5000/api/v1/subsidy', {
         ...formData,
          subsidyItem: subsidy,
        })
        .then((res) => {
          setSucess(true);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return null;
        }).finally(()=>{
            showSuccessSnackbar("Subsidy Applied Successfully")
        });
        showSuccessSnackbar("Subsidy Applied Successfully")
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
            Apply for the subsidies!
          </h3>
          {sucess && (
            <h1 className="text-primary-color font-bold bg-slate-100 px-2 py-4">
              Register Sucessful. Thank you for applying subsidies!!
            </h1>
          )}
          <Formik
            enableReinitialize
            initialValues={formData}
            onSubmit={handleSubmit}
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
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Phone no."
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Address"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Button buttonText="Apply for Subsidies" full />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};

export default SubsidyModal;
