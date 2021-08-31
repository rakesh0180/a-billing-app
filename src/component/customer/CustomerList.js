import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetCustomers } from "../../action/customerAction";
import FormikControl from "../formikHelper/FormikControl";
import CustomerItem from "./CustomerItem";

function CustomerList() {
  const customers = useSelector((state) => state.customers);
  const [status, setStatus] = useState(false);
  const [filterCustomers, setFilterCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetCustomers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (search === "") {
      setFilterCustomers([...customers]);
    } else {
      const res = customers.filter((ele) => {
        return (
          ele.name.toLowerCase().includes(search.toLowerCase()) ||
          ele.mobile.includes(search)
        );
      });
      setFilterCustomers(res);
    }
  }, [search, customers]);

  const toggleStatus = () => {
    setStatus(!status);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      {customers.length === 0 ? (
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
          <FormikControl
            control="input"
            type="text"
            name="name"
            placeholder="search by name or number"
            onChange={handleSearchChange}
          />
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
                  {filterCustomers.map((customer, i) => {
                    return (
                      //index is start from zero so 0+1 =1
                      <CustomerItem
                        key={customer._id}
                        index={i + 1}
                        {...customer}
                        toggleStatus={toggleStatus}
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
