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
        <label>Business-Name:</label>
        <h6>
          {userAccountInfo.businessName} - {userAccountInfo.address}
        </h6>
      </div>

      <div className="form-group  justify-content-end">
        <label>Date:</label>
        <h6>{date}</h6>
      </div>
    </div>
  );
};

export default BillStart;
