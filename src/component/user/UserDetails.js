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
  return (
    <div className="container">
      <div className="text-center">
        <h3 className="mt-4 fw-bold mb-3">Create an Account</h3>
        <h6 className="mb-0 fw-bold text-uppercase">Profile Cards</h6>
      </div>
      <hr />
      <div
        className="row d-flex
          align-items-center
          justify-content-center"
      >
        <div className="col-12 col-lg-6 col-xl-6">
          <div className="card">
            <img
              src="https://via.placeholder.com/500x629"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Mark Rockwell</h5>
              <p className="mb-0">CEO - Consultant</p>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  {
    /* <h2>UserDetails</h2>
      <h3>{userInfo.username}</h3>
      <h3>{userInfo.email} </h3>
      <h3>{userInfo.businessName} </h3>
      <h3> {}</h3>
      <h3>{userInfo.createdAt} </h3> */
    <div div className="container"></div>;
  }
}

export default UserDetails;
