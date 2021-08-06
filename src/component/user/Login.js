import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import FormikControl from "../formikHelper/FormikControl";
import { startLoginUser } from "../../action/userLoginStatusAction";
import Signup from "./Signup";
const Login = (props) => {
  const [serverErrors, setServerErrors] = useState({});
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
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
            <div>
              <div>
                <div>
                  <h2>Login using Email</h2>
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

                  <button
                    className=" btn btn-primary w-100 mt-3"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Submit
                  </button>
                  <hr />
                  <div className="text-center">
                    <p className="mb-0">
                      Don't have an account?
                      <Link to="/sign-up">Register</Link>
                    </p>
                  </div>
                </Form>
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
