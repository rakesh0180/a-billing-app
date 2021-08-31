import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { startAddCustomer } from "../../action/customerAction";
import FormikControl from "../formikHelper/FormikControl";
import "./css/customer.css";

function CustomerForm(props) {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .min(10, "less then 10 digits")
      .max(10, "more then 10 digits")
      .required("mobile number is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
  });
  return (
    <div className=" card card-body p-md-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(formData, onSubmitProps) => {
          console.log(formData);
          dispatch(startAddCustomer(formData, onSubmitProps));
        }}
      >
        {(formik) => {
          return (
            <>
              <div className="text-center">
                <h3 className="mt-3 fw-bold mb-3">Add Customer</h3>
              </div>
              <div>
                <Form>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Enter your Name"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Mobile Number"
                    name="mobile"
                    placeholder="Enter your Mobile Number"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <div className="text-center">
                    <button
                      className=" btn btn-primary w-75 mt-3 radius-30"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      <span className="spinner-grow spinner-grow-sm mr-3"></span>
                      Add Customer
                    </button>
                  </div>
                </Form>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
}

export default CustomerForm;
