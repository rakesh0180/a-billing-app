import React from "react";
import AddCustomer from "./AddCustomer";
import CustomerList from "./CustomerList";

function CustomerContainer() {
  return (
    <div className="row mt-5">
      {/* <div className="col-8 text-center">
        <h2>Customer container</h2>
      </div> */}
      {/* <div className=" col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"> */}
      {/* <div className="card card-body  mx-auto mb-5 w-75 h-75"> */}

      <AddCustomer />
      <CustomerList />

      {/* </div> */}
      {/* </div> */}
      {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"> */}

      {/* </div> */}
    </div>
  );
}

export default CustomerContainer;
