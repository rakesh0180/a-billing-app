import { Form, Formik } from "formik";
import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  startAddProduct,
  startUpdateProduct,
} from "../../action/ProductAction";
import FormikControl from "../formikHelper/FormikControl";

function CustomerForm(props) {
  const { formType, product, onHide } = props;
  const dispatch = useDispatch();
  console.log("product", product);

  const initialValues = {
    name: "",
    price: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    price: Yup.string().required("Price is required"),
  });
  return (
    <>
      {formType === "editForm" ? (
        <div>
          <Formik
            initialValues={{
              name: product.name,
              price: product.price,
            }}
            validationSchema={validationSchema}
            onSubmit={(productUpdateData, onSubmitProps) => {
              dispatch(
                startUpdateProduct(
                  product._id,
                  productUpdateData,
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
                    <button className="btn  btn-primary mr-5" type="submit">
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      bg="danger"
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
                dispatch(startAddProduct(formData, onSubmitProps));
              }}
            >
              {(formik) => {
                return (
                  <>
                    <div className="text-center">
                      <h3 className="mt-3 fw-bold mb-3">Add Product</h3>
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
                            className=" btn btn1 btn-primary w-75 mt-3 radius-30"
                            type="submit"
                            disabled={!formik.isValid}
                          >
                            <span className="spinner-grow spinner-grow-sm mr-3"></span>
                            Add Product
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
