import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDeleteBill, startGetAllBills } from "../../action/billAction";
import BillList from "./BillList";
import Invoice from "./Invoice";

const BillContainer = (props) => {
  const bills = useSelector((state) => state.bills);
  const customers = useSelector((state) => state.customers);
  const [modalShow, setModalShow] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllBills());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findCustomer = (id, array) => {
    const item = array.find((ele) => {
      return ele._id === id;
    });
    return item ? { ...item } : {};
  };

  const dateFormatter = (date) => {
    return date.slice(0, 10).split("-").reverse().join("-");
  };

  const handleDelete = (id) => {
    dispatch(startDeleteBill(id));
  };

  const handleInvoice = (ele) => {
    const invoiceData = {
      lineItems: ele.lineItems.map((item) => {
        return { product: item.product, quantity: item.quantity };
      }),
      customer: ele.customer,
      date: dateFormatter(ele.date),
    };
    setCustomerDetails(invoiceData);
    setModalShow(true);
  };

  return (
    <div className="row mt-5">
      <div class="text-center">
        <h4>
          <center>Your Bills</center>
        </h4>
      </div>

      {bills.length > 0 ? (
        <>
          <BillList
            bills={bills}
            findCustomer={findCustomer}
            customers={customers}
            dateFormatter={dateFormatter}
            handleInvoice={handleInvoice}
            handleDelete={handleDelete}
          />
          <Invoice
            customer={customerDetails.customer}
            date={customerDetails.date}
            lineItems={customerDetails.lineItems}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      ) : (
        <div style={{ paddingTop: "100px", paddingLeft: "500px" }}>
          <h2>No bills found</h2>
        </div>
      )}
    </div>
  );
};

export default BillContainer;
