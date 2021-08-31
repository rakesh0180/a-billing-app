import React, { useState } from "react";
import RemoveCustomer from "./RemoveCustomer";

function CustomerItem(props) {
  const { index, customer } = props;
  const [modelShow, setModelShow] = useState(false);

  const handleModelShowToggle = () => {
    setModelShow(!modelShow);
  };

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{customer.name}</td>
      <td>{customer.mobile}</td>
      <td>{customer.email}</td>
      <td>
        <button className="btn" onClick={handleModelShowToggle}>
          <i className="bx bxs-edit mr-2  " style={{ color: "red" }}></i>Edit
        </button>
      </td>
      <td>
        <RemoveCustomer id={customer._id} />
      </td>
    </tr>
  );
}

export default CustomerItem;
