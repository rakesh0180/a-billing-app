import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import { setUserLoginStatus } from "./action/userLoginStatusAction";
import "./App.css";
const BillSubContainer = React.lazy(() =>
  import("./component/bill/BillSubContainer")
);
const CustomerContainer = React.lazy(() =>
  import("./component/customer/CustomerContainer")
);
const DashboardContainer = React.lazy(() =>
  import("./component/dashboard/DashboardContainer")
);
const ProductContainer = React.lazy(() =>
  import("./component/product/ProductContainer")
);
const Home = React.lazy(() => import("./component/user/Home"));
const Login = React.lazy(() => import("./component/user/Login"));
const Navbar = React.lazy(() => import("./component/user/Navbar"));
const PrivateRoute = React.lazy(() => import("./component/user/PrivateRoute"));
const PublicRoute = React.lazy(() => import("./component/user/PublicRoute"));
const Signup = React.lazy(() => import("./component/user/Signup"));
const UserDetails = React.lazy(() => import("./component/user/UserDetails"));
const BillContainer = React.lazy(() =>
  import("./component/bill/BillContainer")
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
          <Redirect to="not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
