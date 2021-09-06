import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetUserAccountDetails } from "../../action/userAccountDetailsAction";
import "./css/userDetails.css";
import user from "./image/user.png";

function UserDetails() {
  const userInfo = useSelector((state) => state.userAccountInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetUserAccountDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("userAccountDetails", userInfo);
  return (
    <div className="container">
      <div className="text-center">
        <h3 className="mt-4 fw-bold mb-3">Create an Account</h3>
        <h6 className="mb-0 fw-bold text-uppercase">User details</h6>
      </div>
      <hr />
      <div
        className="row d-flex
          align-items-center
          justify-content-center"
      >
        <div className="col-12 col-lg-6 col-xl-6">
          <div className="card">
            <div></div>
            <img src={user} className="card-img-top" alt={userInfo.username} />
            <hr />
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title mb-0 text-uppercase ">
                  Name : {userInfo.username}
                </h5>
                <p className="mb-2 ">Business : {userInfo.businessName}</p>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item col-12">
                    Email : {userInfo.email}
                  </li>
                  <li className="list-group-item col-12">
                    Address : {userInfo.address}
                  </li>
                  <li className="list-group-item col-12">
                    Created : {userInfo.createdAt}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
