import React from "react";
import { useDispatch } from "react-redux";
import { startAddProduct } from "../../action/ProductAction";
import ProductForm from "./ProductForm";

function AddCustomer(props) {
  const dispatch = useDispatch();

  const addCustomer = (formData) => {
    dispatch(startAddProduct(formData));
  };

  return (
    <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
      <ProductForm addCustomer={addCustomer} />
    </div>
  );
}

export default AddCustomer;
