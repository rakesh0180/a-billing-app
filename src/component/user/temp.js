/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, Switch, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { resetUserLoginStatus } from "../../action/userLoginStatusAction";
import CustomerContainer from "../customer/CustomerContainer";
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
    <>
      <nav
        className="
                    navbar navbar-expand-lg navbar-dark
                    bg-secondary
                    mt-4
                    shadow-sm
                    radius-15
                  "
      >
        <Link className="navbar-brand text-uppercase fs-1 fw-bold" to="/home">
          Billing App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-secondary"
          aria-controls="navbarSupportedContent-secondary"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-secondary"
        >
          <div className="navbar-nav ml-auto">
            {/* <li className="nav-item">
            <NavLink
              className="nav-link text-uppercase py-0"
              to=""
              // tabindex="-1"
            >
              <i className="bx bxl-product-hunt font-24"></i>
            </NavLink>
          </li> */}
            {!userLoginStatus ? (
              <>
                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  to="/"
                >
                  Login
                </NavLink>

                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  to="/home"
                >
                  Home
                </NavLink>

                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  to="/sign-up"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  to="/customer"
                >
                  customer
                </NavLink>

                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  to="/product"
                >
                  product
                </NavLink>

                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  to="/user"
                >
                  User
                </NavLink>

                <NavLink
                  className="nav-item nav-link text-uppercase py-0"
                  onClick={() => {
                    localStorage.removeItem("loginToken");
                    swal("Successfully", "logged out", "success");
                    dispatch(resetUserLoginStatus());
                    // props.history.push("/");
                  }}
                >
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="container">
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

export default withRouter(Navbar);

// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Redirect, Switch, withRouter } from "react-router-dom";
// import swal from "sweetalert";
// import { resetUserLoginStatus } from "../../action/userLoginStatusAction";
// import CustomerContainer from "../customer/CustomerContainer";
// import DashboardContainer from "../dashboard/DashboardContainer";
// import ProductContainer from "../product/ProductContainer";
// import Home from "./Home";
// import Login from "./Login";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
// import Signup from "./Signup";
// import UserDetails from "./UserDetails";

// function Navbar(props) {
//   const dispatch = useDispatch();

//   const userLoginStatus = useSelector((state) => state.userLoginStatus);

//   return (

//     <div>
//       <div>
//         <header>
//           <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-5 shadow-sm radius-15">
//             <>
//               <a
//                 className="navbar-brand text-uppercase fs-1 fw-bold "
//                 href="javascript:;"
//               >
//                 Billing App
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav ml-auto">
//                   {!userLoginStatus ? (
//                     <>
//                       <li className="nav-item">
//                         <Link className="nav-link text-uppercase py-0" to="/">
//                           Login
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link text-uppercase py-0"
//                           to="/home"
//                         >
//                           Home
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link text-uppercase py-0"
//                           to="/sign-up"
//                         >
//                           Register
//                         </Link>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link text-uppercase py-0"
//                           to="/dashboard"
//                         >
//                           Dashboard
//                         </Link>
//                       </li>

//                       <li className="nav-item">
//                         <Link
//                           className="nav-link text-uppercase py-0"
//                           to="/customer"
//                         >
//                           customer
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link text-uppercase py-0"
//                           to="/product"
//                         >
//                           product
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link text-uppercase py-0"
//                           to="/user"
//                         >
//                           User
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           className="nav-link text-uppercase py-0"
//                           onClick={() => {
//                             localStorage.removeItem("loginToken");
//                             swal("Successfully", "logged out", "success");
//                             dispatch(resetUserLoginStatus());
//                             props.history.push("/");
//                           }}
//                         >
//                           Logout
//                         </Link>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//             </>
//           </nav>
//         </header>
//       </div>
//       <Switch>
//         <PublicRoute path="/home" component={Home} exact={true} />
//         <PublicRoute path="/" component={Login} exact={true} />
//         <PublicRoute path="/sign-up" component={Signup} exact={true} />
//         <PrivateRoute
//           path="/dashboard"
//           component={DashboardContainer}
//           exact={true}
//         />
//         <PrivateRoute
//           path="/customer"
//           component={CustomerContainer}
//           exact={true}
//         />
//         <PrivateRoute
//           path="/product"
//           component={ProductContainer}
//           exact={true}
//         />
//         <PrivateRoute path="/user" component={UserDetails} exact={true} />
//         <Redirect to="not-found" />
//       </Switch>
//     </div>
//   );
// }

// export default withRouter(Navbar);
