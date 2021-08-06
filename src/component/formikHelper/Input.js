import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="form-control rounded-pill ">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} placeholder={placeholder} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
