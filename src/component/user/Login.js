import { Form, Formik } from "formik";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Route } from "react-router-dom";
import * as Yup from "yup";
import { startLoginUser } from "../../action/userLoginStatusAction";
import FormikControl from "../formikHelper/FormikControl";
import "./css/singup.css";
import loginImage from "./image/login.jpg";
import Signup from "./Signup";
const Login = (props) => {
  const [serverErrors, setServerErrors] = useState({});
  const dispatch = useDispatch();

  //server error after 3 sec clear error message
  useEffect(() => {
    const timerVar = setTimeout(() => {
      setServerErrors({});
    }, 3000);
    return () => {
      clearTimeout(timerVar);
    };
  }, [serverErrors]);

  const initialValues = {
    email: "abc123@gmail.com",
    password: "1234567890",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="container">
      <div className="row row register-form justify-content-center align-items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, onSubmitProps) => {
            const handleRedirect = () => {
              props.history.push("/home");
            };

            const handleServerErrors = (error) => {
              setServerErrors(error);
            };

            // const handleResetForm = (props) => {
            //   props.resetForm();
            // };

            dispatch(
              startLoginUser(
                values,
                handleServerErrors,
                handleRedirect,
                onSubmitProps
              )
            );
          }}
        >
          {(formik) => (
            <div className="wrapper">
              <div
                className="
          section-authentication-login
          d-flex
          justify-content-center
          align-items-center
        "
              >
                <div className="row ">
                  <div className="col-12 col-lg-10 mx-auto">
                    <div className="card radius-15">
                      <div className="row no-gutters ">
                        <div className="col-lg-6">
                          <div className="card-body p-md-5">
                            <div className="text-center">
                              <h3 className="mt-4 font-weight-bold">
                                Welcome Back
                              </h3>

                              <div className="col-sm-12">
                                <h2>Login using Email</h2>
                              </div>
                            </div>
                            <Form>
                              <FormikControl
                                control="input"
                                type="text"
                                label="Email"
                                name="email"
                                placeholder="Enter your email"
                              />
                              <FormikControl
                                control="input"
                                type="password"
                                label="Password"
                                name="password"
                                placeholder="Enter your password"
                              />

                              {!isEmpty(serverErrors) && (
                                <div className="error text-center">
                                  {serverErrors.errors}
                                </div>
                              )}

                              <div className="text-center">
                                <button
                                  className=" btn btn1 btn-primary w-75 mt-3"
                                  type="submit"
                                  disabled={!formik.isValid}
                                >
                                  Submit
                                </button>
                              </div>

                              <hr />
                              <div className="text-center">
                                <p className="mb-0">
                                  Don't have an account? {""}
                                  <Link to="/sign-up" className="text-primary">
                                    Register
                                  </Link>
                                </p>
                              </div>
                            </Form>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src={loginImage}
                            className="card-img login-img h-100"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-danger">Note:</h5>
                  <h5 className="text-danger">
                    for demo email and password was initialized
                  </h5>
                </div>
              </div>
            </div>
          )}
        </Formik>
        <Route path="/sign-up" component={Signup} exact={true} />
      </div>
    </div>
  );
};

export default Login;
