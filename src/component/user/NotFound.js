import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import error404 from "../../assets/img/error/404-error.png";

function NotFound(props) {
  const params = useParams();
  const history = useHistory();
  console.log(params);

  const userLoginStatus = useSelector((state) => state.userLoginStatus);
  return (
    <>
      <div className="error-404 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="card radius-15 shadow-none bg-transparent">
            <div className="row no-gutters h-100">
              <div className="col-lg-6 " style={{ backgroundColor: "#f6f6f6" }}>
                <div className="card-body ">
                  <h1 className="display-1">
                    <span className="text-primary">4</span>
                    <span className="text-danger">0</span>
                    <span className="text-success">4</span>
                  </h1>
                  <h2 className="font-weight-bold display-4">Lost in Space</h2>
                  {userLoginStatus ? (
                    <>
                      <p>
                        You have reached the edge of the universe.
                        <br />
                        The page you requested could not be found
                        <strong> {params.id}</strong>.
                        <br />
                        Dont'worry and return to the previous page.
                      </p>
                      <div className="mt-5">
                        <Link
                          to="/dashboard"
                          className="btn btn-lg btn-primary px-md-5 radius-30"
                        >
                          Go DashBoard
                        </Link>
                        <button
                          className="btn btn-lg btn-outline-dark ml-3 px-md-5 radius-30"
                          onClick={history.goBack}
                        >
                          Back
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>
                        You have reached the edge of the universe.
                        <br />
                        The page you requested could not be found
                        <strong> {params.id}</strong>.
                        <br />
                        Dont'worry first <strong>signup</strong> or{" "}
                        <strong>Login</strong>.
                        <br />
                      </p>
                      <div className="mt-5">
                        <Link
                          to="/"
                          className="btn btn-lg btn-primary px-md-5 radius-30"
                        >
                          Go to Login page
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <img src={error404} className="card-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
