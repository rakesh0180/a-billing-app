import React from "react";
import { useDispatch } from "react-redux";
import CustomerForm from "./CustomerForm";

function AddCustomer(props) {
  const dispatch = useDispatch();

  const addCustomer = (formData) => {
    dispatch(startAddCustomer(formData));
  };

  return (
    <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
      <CustomerForm addCustomer={addCustomer} />
    </div>
  );
}

export default AddCustomer;
