import { Formik } from "formik";
import React from "react";

function CustomerForm() {
  const initialValues = {
    name: "",
    mobile: "",
    email: "",
  };
  return (
    <div class="col-lg-6">
      <h2>CustomerForm</h2>
      <Formik></Formik>
    </div>
  );
}

export default CustomerForm;
