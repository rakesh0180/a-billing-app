import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startUserAccountGetDetails } from "../../action/userAccoutDetailsAction";

function UserDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    // const loginToken = localStorage.getItem("loginToken");
    dispatch(startUserAccountGetDetails());
  });
  return (
    <div>
      <h2>UserDetails</h2>
    </div>
  );
}

export default UserDetails;
