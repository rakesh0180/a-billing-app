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
    <div className="row mt-5 justify-content-center ">
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
        <div className=" col col-12  col-sm-12 col-md-12 col-lg-12 col-xl-11">
          <div className="card card-body  mx-auto mb-5 w-100 h-100">
            <div className="text-center justify-content-center align-items-center">
              <h2>No bills found</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillContainer;
