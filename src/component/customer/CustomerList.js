import React from "react";
import { useSelector } from "react-redux";
import CustomerItem from "./CustomerItem";

function CustomerList() {
  const customers = useSelector((state) => state.customers);

  return (
    <>
      {customers.length <= 0 ? (
        <div className=" col col-12  col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div className="card card-body  mx-auto mb-5 w-75 h-75">
            <div className="text-center">
              <h3 className="mt-4 fw-bold mb-3">No Customer found</h3>
              <p className="mt-4 fw-bold mb-3">add your first Customer</p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" col col-12  col-sm-12 col-md-12 col-lg-8 col-xl-8">
          {/* <FormikControl
            control="input"
            type="text"
            name="name"
            placeholder="search by name or number"
            onChange={handleSearchChange}
          /> */}
          <div className="card card-body  mx-auto mb-5 w-100 h-100">
            <div className="table-responsive-sm shadow p-3 mb-5 bg-white rounded">
              <table className="table table-hover">
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
                      <CustomerItem
                        key={customer._id}
                        index={i + 1}
                        customer={customer}
                      />
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
