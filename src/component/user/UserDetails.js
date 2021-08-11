import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUserAccountGetDetails } from "../../action/userAccountDetailsAction";
import "./css/userDetails.css";

function UserDetails() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userAccountInfo);
  useEffect(() => {
    // const loginToken = localStorage.getItem("loginToken");
    dispatch(startUserAccountGetDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("userAccountDetails", userInfo);
  return {
    /* <h2>UserDetails</h2>
      <h3>{userInfo.username}</h3>
      <h3>{userInfo.email} </h3>
      <h3>{userInfo.businessName} </h3>
      <h3> {}</h3>
      <h3>{userInfo.createdAt} </h3> */
  };
}

export default UserDetails;
