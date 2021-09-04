import React from "react";
import BillItem from "./BillItem";
function BillList(props) {
  const {
    bills,
    dateFormatter,
    findCustomer,
    customers,
    handleInvoice,
    handleDelete,
  } = props;
  return (
    <div className=" col col-12  col-sm-12 col-md-12 col-lg-12 col-xl-11">
      <div class="text-center">
        <h4>
          <center> Manage Your Bills</center>
        </h4>
      </div>
      <div className="card card-body  mx-auto mb-5 w-100 h-100">
        <div className="table-responsive-sm shadow p-3 mb-5 bg-white">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Date</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Total</th>
                <th scope="col" colspan="2" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, i) => {
                return (
                  //index is start from zero so 0+1 =1
                  <BillItem
                    key={bill._id}
                    index={i + 1}
                    bill={bill}
                    dateFormatter={dateFormatter}
                    findCustomer={findCustomer}
                    customers={customers}
                    handleInvoice={handleInvoice}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BillList;
