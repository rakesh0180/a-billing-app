import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Switch, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { resetUserLoginStatus } from "../../action/userLoginStatusAction";
import BillContainer from "../bill/BillContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import ProductContainer from "../product/ProductContainer";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Signup from "./Signup";
import UserDetails from "./UserDetails";

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
              <li className="bx bx-home-alt">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    swal({
                      title: "Are you sure?",
                      icon: "warning",
                      buttons: ["Cancel", "Yes"],
                      dangerMode: true,
                    }).then((willLogout) => {
                      if (willLogout) {
                        localStorage.removeItem("loginToken");
                        swal("Successfully", "logged out", "success");
                        dispatch(resetUserLoginStatus());
                        props.history.push("/");
                      }
                    });
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
                <Link to="/user">User</Link>
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
        <PrivateRoute
          path="/dashboard"
          component={DashboardContainer}
          exact={true}
        />
        <PrivateRoute
          path="/product"
          component={ProductContainer}
          exact={true}
        />
        <PrivateRoute path="/bill" component={BillContainer} exact={true} />
        <PrivateRoute path="/user" component={UserDetails} exact={true} />
        {/* <PrivateRoute path="/dashboard" component={Logou} exact={true} /> */}
      </Switch>
    </div>
  );
}

export default withRouter(Navbar);
