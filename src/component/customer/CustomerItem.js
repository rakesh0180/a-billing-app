import React, { useState } from "react";
import EditCustomer from "./EditCustomer";
import RemoveCustomer from "./RemoveCustomer";

function CustomerItem(props) {
  const { index, customer } = props;
  const [modalShow, setModalShow] = useState(false);

  const handleEdit = () => {
    setModalShow(true);
  };

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{customer.name}</td>
      <td>{customer.mobile}</td>
      <td>{customer.email}</td>
      <td>
        <button className="btn" onClick={handleEdit}>
          <i className="bx bxs-edit mr-2  " style={{ color: "red" }}></i>Edit
        </button>
        <EditCustomer
          show={modalShow}
          onHide={() => setModalShow(false)}
          customer={customer}
        />
      </td>
      <td>
        <RemoveCustomer id={customer._id} />
      </td>
    </tr>
  );
}

export default CustomerItem;
