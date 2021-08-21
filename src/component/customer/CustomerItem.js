import React from "react";
import EditCustomer from "./EditCustomer";
import RemoveCustomer from "./RemoveCustomer";

function CustomerItem() {
  return (
    <div>
      <h2>CustomerItem</h2>
      <EditCustomer />
      <RemoveCustomer />
    </div>
  );
}

export default CustomerItem;
