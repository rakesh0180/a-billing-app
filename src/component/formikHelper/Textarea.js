import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function Textarea(props) {
  const { label, name, place, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        className="form-control"
        id={name}
        name={name}
        placeholder={place}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
