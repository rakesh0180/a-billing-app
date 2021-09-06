import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { startGetAllBills } from "../../action/billAction";
import { startGetAllCustomers } from "../../action/customerAction";
import { startGetAllProducts } from "../../action/ProductAction";
import { startGetUserAccountDetails } from "../../action/userAccountDetailsAction";
import StatsContainer from "./StatsContainer";

function DashboardContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(startGetUserAccountDetails());
      dispatch(startGetAllCustomers());
      dispatch(startGetAllProducts());
      dispatch(startGetAllBills());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div type="row mt-5">
      <div className="text-center mt-5">
        <h4>Dashboard</h4>
      </div>

      <StatsContainer />
    </div>
  );
}

export default withRouter(DashboardContainer);
