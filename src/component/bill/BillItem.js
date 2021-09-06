import React from "react";
import { BiRupee } from "react-icons/bi";

function BillItem(props) {
  const {
    index,
    bill,
    dateFormatter,
    findCustomer,
    customers,
    handleInvoice,
    handleDelete,
  } = props;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{dateFormatter(bill.date)}</td>
      <td>{findCustomer(bill.customer, customers).name}</td>
      <td>{findCustomer(bill.customer, customers).mobile}</td>
      <td>
        <BiRupee />
        {bill.total}
      </td>
      <td>
        <button
          className="btn btn-primary text-center"
          onClick={() => handleInvoice(bill)}
        >
          invoice
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger text-center"
          onClick={() => handleDelete(bill._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default BillItem;
