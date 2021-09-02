import { Form, Formik } from "formik";
import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  startAddCustomer,
  startUpdateCustomer,
} from "../../action/customerAction";
import FormikControl from "../formikHelper/FormikControl";
import "./css/customer.css";

function CustomerForm(props) {
  const { formType, onHide, customer } = props;
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
  });
  return (
    <>
      {formType === "editForm" ? (
        <div>
          <Formik
            initialValues={{
              name: customer.name,
              mobile: customer.mobile,
              email: customer.email,
            }}
            validationSchema={validationSchema}
            onSubmit={(customerUpdateData, onSubmitProps) => {
              dispatch(
                startUpdateCustomer(
                  customer._id,
                  customerUpdateData,
                  onSubmitProps
                )
              );
              onHide();
            }}
          >
            {(formik) => (
              <div>
                <Form>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Enter Product Name"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Price"
                    name="price"
                    placeholder="Enter Product Price"
                  />

                  <Modal.Footer>
                    <button className="btn btn-primary mr-5" type="submit">
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      type="reset"
                      onClick={onHide}
                    >
                      Close
                    </button>
                  </Modal.Footer>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      ) : (
        <div>
          <div className=" card card-body p-md-5">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(formData, onSubmitProps) => {
                console.log("formData", formData);
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
                          placeholder="Enter Product Name"
                        />
                        <FormikControl
                          control="input"
                          type="text"
                          label="Price"
                          name="price"
                          placeholder="Enter Product Price"
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
        </div>
      )}
    </>
  );
}

export default CustomerForm;
