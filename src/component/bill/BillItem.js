import React from "react";

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
    <div>
      <tr>
        <th scope="row">{index}</th>
        <td>{dateFormatter(bill.date)}</td>
        <td>{findCustomer(bill.customer, customers).name}</td>
        <td>{findCustomer(bill.customer, customers).mobile}</td>
        <td>{bill.total}</td>
        <td colspan="2">
          <button className="btn" onClick={() => handleInvoice(bill)}>
            invoice
          </button>
          &nbsp;
          <button className="btn" onClick={() => handleDelete(bill._id)}>
            delete
          </button>
        </td>
      </tr>
    </div>
  );
}

export default BillItem;
