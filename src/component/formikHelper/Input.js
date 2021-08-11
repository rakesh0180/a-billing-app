import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function Input(props) {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage
        className="invalid-feedback"
        component={TextError}
        name={name}
      />
    </div>
  );
}

export default Input;
