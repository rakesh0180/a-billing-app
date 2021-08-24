import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import { setUserLoginStatus } from "./action/userLoginStatusAction";
import "./App.css";
import CustomerContainer from "./component/customer/CustomerContainer";
import DashboardContainer from "./component/dashboard/DashboardContainer";
import ProductContainer from "./component/product/ProductContainer";
import Home from "./component/user/Home";
import Login from "./component/user/Login";
import Navbar from "./component/user/Navbar";
import PrivateRoute from "./component/user/PrivateRoute";
import PublicRoute from "./component/user/PublicRoute";
import Signup from "./component/user/Signup";
import UserDetails from "./component/user/UserDetails";

function App() {
  const dispatch = useDispatch();

  //when ever web restart get Jwt or login token
  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      dispatch(setUserLoginStatus());
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid con pt-3">
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
            path="/customer"
            component={CustomerContainer}
            exact={true}
          />
          <PrivateRoute
            path="/product"
            component={ProductContainer}
            exact={true}
          />
          <PrivateRoute path="/user" component={UserDetails} exact={true} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
