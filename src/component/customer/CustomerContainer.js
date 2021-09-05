import React from "react";
import AddCustomer from "./AddCustomer";
import CustomerList from "./CustomerList";

function CustomerContainer() {
  return (
    <div className="row mt-5">
      <CustomerList />
      <AddCustomer />
    </div>
  );
}

export default CustomerContainer;
