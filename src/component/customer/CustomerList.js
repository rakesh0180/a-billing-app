import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllCustomers } from "../../action/customerAction";
import CustomerItem from "./CustomerItem";

function CustomerList() {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(startGetAllCustomers());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [customers]);

  useEffect(() => {
    dispatch(startGetAllCustomers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {customers.length === 0 ? (
        <div className=" col col-12  col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div className="card card-body  mx-auto  w-100 h-100">
            <div className="text-center">
              <h3 className="mt-4 fw-bold mb-3">No Customer found</h3>
              <p className="mt-4 fw-bold mb-3">add your first Customer</p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" col col-12  col-sm-12 col-md-12 col-lg-8 col-xl-8 overflow-auto">
          <div className="card card-body  mx-auto  w-100  overflow-scroll">
            <div class="table-responsive-sm shadow p-3  bg-white  overflow-scroll">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, i) => {
                    return (
                      //index is start from zero so 0+1 =1
                      <CustomerItem key={i} index={i + 1} customer={customer} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomerList;
