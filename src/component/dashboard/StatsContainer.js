import React from "react";
import { BiCart, BiRupee } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import CustomerChart from "./CustomerChart";
import Stats from "./Stats";
import TableTopOrders from "./TableTopOrders";
import TopProductsSold from "./TopProductsSold";

const StatsContainer = (props) => {
  const customers = useSelector((state) => state.customers);
  const bills = useSelector((state) => state.bills);
  const products = useSelector((state) => state.products);

  const totalCustomers = customers.length;
  const totalOrders = bills.length;
  const totalRevenue = bills.reduce((acc, curr) => acc + curr.total, 0);
  const totalProductsInInventory = products.length;

  return (
    <div className="mx-4 justify-content-between">
      {customers && bills && products ? (
        <>
          <div className="row d-flex mt-2 ml-1">
            <div className="col col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <Stats
                variant="Warning"
                Header="Customers"
                value={totalCustomers}
                icon={<FiUsers />}
              />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <Stats
                variant="Danger"
                Header="Orders"
                value={totalOrders}
                icon={<BiCart />}
              />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <Stats
                variant="Info"
                Header="Total Revenue"
                value={totalRevenue}
                icon={<BiRupee />}
              />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <Stats
                variant="Success"
                Header="Inventory"
                value={totalProductsInInventory}
                icon={<RiProductHuntFill />}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-3 ">
              <CustomerChart bills={bills} customers={customers} />
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="col col-sm-12 col-md-8 col-lg-8 col-xl-8 col-8  mt-3 ml-5 text-center"
            >
              <p
                className="text-center"
                style={{ textDecoration: "underline" }}
              >
                <b>Top 5 products</b>
              </p>
              <TopProductsSold products={products} bills={bills} />
            </div>
          </div>
          <div className="row mx-3 mt-3">
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0 5px 5px -5px #888888",
                marginLeft: "10px",
              }}
              className="col"
            >
              <TableTopOrders bills={bills} customers={customers} />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default StatsContainer;
