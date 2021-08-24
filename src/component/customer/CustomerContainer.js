import React from "react";
import CustomerList from "./CustomerList";

function CustomerContainer() {
  return (
    <div className="row">
      <CustomerList />
      <div className="col"></div>
      <div className="col"></div>

      <div class="row ">
        <div class="col-12 col-lg-10 mx-auto">
          <div class="card radius-15">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <div class="card-body p-md-5"></div>
              </div>
              <div class="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
      <h2>CustomerContainer</h2>
      {/* <CustomerList />
      <AddCustomer /> */}
    </div>
  );
}

export default CustomerContainer;
