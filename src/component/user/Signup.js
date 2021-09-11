import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { startSignupUser } from "../../action/userLoginStatusAction";
import FormikControl from "../formikHelper/FormikControl";
import "./css/singup.css";
import registerImage from "./image/register.jpg";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    businessName: "",
    address: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, "must be 4characters or less")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    businessName: Yup.string()
      .min(3, "company name be at least 3 characters")
      .required("Business Name is required"),
  });

  /* const onSubmit = (values) => {
    const handleRedirectLogin = () => {
      props.history.push("/");
    };

    const handleResetLogin = (onSubmitProps) => {
      // onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    };

    dispatch(startSignupUser(values, handleRedirectLogin, handleResetLogin));
    console.log("Register data", values);
  };
 */
  return (
    <div className="container">
      <div className="row row register-form justify-content-center align-items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, onSubmitProps) => {
            const handleRedirect = () => {
              props.history.push("/");
            };

            dispatch(startSignupUser(values, handleRedirect, onSubmitProps));
            console.log("Register Form", values);
          }}
        >
          {(formik) => {
            // console.log(formik);
            return (
              <div className="wrapper">
                <div
                  className="
          section-authentication-register
          d-flex
          align-items-center
          justify-content-center
        "
                >
                  <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                      <div className="card radius-15">
                        <div className="row no-gutters">
                          <div className="col-lg-6">
                            <div className="card-body p-md-5">
                              <div className="text-center">
                                <h3 className="mt-4 fw-bold mb-3">
                                  Create an Account
                                </h3>
                              </div>
                              <Form>
                                <FormikControl
                                  control="input"
                                  type="text"
                                  label="UserName"
                                  name="username"
                                  placeholder="Enter your name"
                                />
                                <FormikControl
                                  control="input"
                                  type="email"
                                  label="Email"
                                  name="email"
                                  placeholder="abc123@gmail.com"
                                />
                                <FormikControl
                                  control="input"
                                  type="password"
                                  label="Password"
                                  name="password"
                                  placeholder="enter the password"
                                />
                                <FormikControl
                                  control="input"
                                  type="text"
                                  label="Business Name"
                                  name="businessName"
                                  placeholder="enter the Business Name"
                                />
                                <FormikControl
                                  control="textarea"
                                  type="text"
                                  label="Address"
                                  name="address"
                                  place="enter the address"
                                />
                                <div className="text-center">
                                  <button
                                    className=" btn btn1 btn-primary w-75 mt-3 radius-30"
                                    type="submit"
                                    disabled={!formik.isValid}
                                  >
                                    Submit
                                  </button>
                                </div>

                                <hr />
                                <div className="text-center mt-4">
                                  <p className="mb-0">
                                    Already have an account?{" "}
                                    <Link to="/" className="text-primary">
                                      Log in
                                    </Link>
                                  </p>
                                </div>
                              </Form>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <img
                              src={registerImage}
                              className="card-img login-img h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
        {/* <Route to="/" component={LoginPage} exact="true" /> */}
      </div>
    </div>
  );
};

export default SignUp;
