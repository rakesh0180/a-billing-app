import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { setUserLoginStatus } from "./action/userLoginStatusAction";
import "./App.css";
const NotFound = lazy(() =>
  import(/* webpackChunkName:"NotFound" */ "./component/user/NotFound")
);
const BillSubContainer = lazy(() =>
  import(/* webpackChunkName:"BillSub" */ "./component/bill/BillSubContainer")
);
const CustomerContainer = lazy(() =>
  import(
    /* webpackChunkName:"Customer" */ "./component/customer/CustomerContainer"
  )
);
const DashboardContainer = lazy(() =>
  import(
    /* webpackChunkName:"Dashboard" */ "./component/dashboard/DashboardContainer"
  )
);
const ProductContainer = lazy(() =>
  import(
    /* webpackChunkName:"Product" */ "./component/product/ProductContainer"
  )
);
const Home = lazy(() =>
  import(/* webpackChunkName:"Home" */ "./component/user/Home")
);
const Login = lazy(() =>
  import(/* webpackChunkName:"Login" */ "./component/user/Login")
);
const Navbar = lazy(() =>
  import(/* webpackChunkName:"Navbar" */ "./component/user/Navbar")
);
const PrivateRoute = lazy(() =>
  import(/* webpackChunkName:"PrivateRoute" */ "./component/user/PrivateRoute")
);
const PublicRoute = lazy(() =>
  import(/* webpackChunkName:"PublicRoute" */ "./component/user/PublicRoute")
);
const Signup = lazy(() =>
  import(/* webpackChunkName:"Signup" */ "./component/user/Signup")
);
const UserDetails = lazy(() =>
  import(/* webpackChunkName:"User" */ "./component/user/UserDetails")
);
const BillContainer = lazy(() =>
  import(/* webpackChunkName:"NotFound" */ "./component/bill/BillContainer")
);

function App() {
  const dispatch = useDispatch();

  //when ever web restart get Jwt or login token
  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      dispatch(setUserLoginStatus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <>
      <Navbar />
      <div className="container-fluid container-fluid-sm con pt-3">
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
          <PrivateRoute
            path="/cart"
            component={BillSubContainer}
            exact={true}
          />
          <PrivateRoute path="/bill" component={BillContainer} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
