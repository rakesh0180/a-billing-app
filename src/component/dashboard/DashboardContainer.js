import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { startGetAllBills } from "../../actions/billsActions";
import { startGetAllCustomers } from "../../actions/customerActions";
import { startGetAllProducts } from "../../actions/productsActions";
import { startGetUserDetails } from "../../actions/userAuthActions";
import StatsContainer from "./StatsContainer";

function DashboardContainer() {const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(startGetUserDetails());
      dispatch(startGetAllCustomers());
      dispatch(startGetAllProducts());
      dispatch(startGetAllBills());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div type="container">
      <h4 className="text-center">Dashboard</h4>
      <StatsContainer />
    </div>
  );
};

export default withRouter(DashboardContainer);


export default DashboardContainer;
