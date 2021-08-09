import React from "react";
import { Link, Switch, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUserLoginStatus } from "../../action/userLoginStatusAction";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "../dashboard/Dashboard";
import swal from "sweetalert";

function Navbar(props) {
  const dispatch = useDispatch();

  const userLoginStatus = useSelector((state) => state.userLoginStatus);

  return (
    <div>
      <div>
        <ul>
          {!userLoginStatus ? (
            <>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/sign-up">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    localStorage.removeItem("loginToken");
                    swal("Successfully", "logged out", "success");
                    dispatch(resetUserLoginStatus());
                    props.history.push("/");
                  }}
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/customers"> Customer Details</Link>
              </li>
              <li>
                <Link to="/products">Product</Link>
              </li>
              <li>
                <Link to="/bill">Bill</Link>
              </li>
              <li>
                <button>DarkMode</button>
              </li>
            </>
          )}
        </ul>
      </div>
      <Switch>
        <PublicRoute path="/home" component={Home} exact={true} />
        <PublicRoute path="/" component={Login} exact={true} />
        <PublicRoute path="/sign-up" component={Signup} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        {/* <PrivateRoute path="/dashboard" component={Logou} exact={true} /> */}
      </Switch>
    </div>
  );
}

export default withRouter(Navbar);
