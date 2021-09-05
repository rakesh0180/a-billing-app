import React from "react";
import { useSelector } from "react-redux";
import { dateFormatter } from "./dateFormatter";

const BillStart = (props) => {
  const userAccountInfo = useSelector((state) => state.userAccountInfo);
  const date = dateFormatter(new Date().toISOString());
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
      }}
    >
      <div className="form-group justify-content-start">
        <div className="col-12   col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <label>Business-Name:</label>
          <h6>{userAccountInfo.businessName}</h6>
        </div>
        <div className="col-12   col-sm-12 col-lg-4 col-xl-4">
          <label>Business-Name:</label>
          <h6>{userAccountInfo.address}</h6>
        </div>
      </div>

      <div className="form-group col-12   col-sm-12 col-lg-4 col-xl-4 justify-content-end">
        <label>Date:</label>
        <h6>{date}</h6>
      </div>
    </div>
  );
};

export default BillStart;
