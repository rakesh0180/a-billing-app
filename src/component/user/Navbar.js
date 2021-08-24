/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import * as nav from "react-bootstrap";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, Switch, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { startUserAccountGetDetails } from "../../action/userAccountDetailsAction";
import { resetUserLoginStatus } from "../../action/userLoginStatusAction";
import CustomerContainer from "../customer/CustomerContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import ProductContainer from "../product/ProductContainer";
import "./css/navbar.css";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Signup from "./Signup";
import UserDetails from "./UserDetails";

function Navbar(props) {
  const dispatch = useDispatch();
  // get user details
  const userInfo = useSelector((state) => state.userAccountInfo);
  useEffect(() => {
    dispatch(startUserAccountGetDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //

  const userLoginStatus = useSelector((state) => state.userLoginStatus);
  const color = { color: "red" };

  return (
    <div>
      <nav.Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="justify-content-center radius-15 mb-5"
        fixed="top"
      >
        <>
          <nav.Navbar.Brand>
            <Link
              className="navbar-brand text-uppercase brand  fs-5 font-weight-bold "
              to="/home"
            >
              <RiBillLine style={color} className="bx-burst  bx-fw font-30 " />
              Billing App
            </Link>
          </nav.Navbar.Brand>

          <nav.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <nav.Navbar.Collapse id="basic-navbar-nav">
            <nav.Nav className="ml-auto align-middle p-0 m-0">
              {!userLoginStatus ? (
                <>
                  <nav.Nav.Link className="nav-item">
                    <Link to="/">
                      <i className="bx bx-fw bxs-right-arrow-circle bx-fade-right-hover "></i>
                      Login
                    </Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link className="nav-item">
                    <Link to="/home">
                      <i className="bx bx-fw bx-home bx-burst-hover "> </i>
                      Home
                    </Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link className="nav-item">
                    <Link to="/sign-up">
                      <i className="bx bx-fw bx-registered"> </i>
                      Register
                    </Link>
                  </nav.Nav.Link>
                </>
              ) : (
                <>
                  <nav.Nav.Link
                  // className="nav-item secondary border-0 "
                  // data-toggle="tooltip"
                  // data-placement="bottom"
                  // title="Dashboard"
                  >
                    <Link to="/dashboard">
                      <i
                        className="bx bx-fw bxs-dashboard  "
                        style={{ color: "#AA96DA" }}
                      ></i>
                      Dashboard
                    </Link>
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item">
                    <Link to="/customer">
                      <FaUsers
                        className="bx bx-fw  "
                        style={{ color: "#ff007c" }}
                      ></FaUsers>
                      customer
                    </Link>
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item">
                    <Link to="/product">
                      <FaProductHunt
                        className="bx bx-fw   "
                        style={{ color: "#6A2C70" }}
                      ></FaProductHunt>
                      product
                    </Link>
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item"></nav.Nav.Link>

                  <nav.NavDropdown
                    title="Profile"
                    id="navbarScrollingDropdown"
                    className="dropdown-menu-right "
                    // class="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <nav.NavDropdown.Item>
                      <Link to="/user">
                        <i className="bx bx-fw bx-user bx-tada-hover  "></i>
                        User
                      </Link>
                    </nav.NavDropdown.Item>

                    <nav.NavDropdown.Item>
                      <Link
                        onClick={() => {
                          localStorage.removeItem("loginToken");
                          swal("Successfully", "logged out", "success");
                          dispatch(resetUserLoginStatus());
                          props.history.push("/");
                        }}
                      >
                        <i className="bx bx-fw bxs-left-arrow-circle bx-fade-left-hover  font-24 "></i>
                        Logout
                      </Link>
                    </nav.NavDropdown.Item>

                    <nav.NavDropdown.Item>
                      <Link to="/dashboard">
                        <i
                          className="bx bx-fw bxs-dashboard  "
                          style={{ color: "#AA96DA" }}
                        ></i>
                        Dashboard
                      </Link>
                    </nav.NavDropdown.Item>
                  </nav.NavDropdown>

                  <nav.Nav.Link className="nav-item">
                    <div>
                      <IoLanguage
                        className="bx bx-fw "
                        style={{ color: "#ff8b01" }}
                      ></IoLanguage>
                      <div id="google_translate_element"></div>
                    </div>
                  </nav.Nav.Link>
                </>
              )}
            </nav.Nav>
          </nav.Navbar.Collapse>
        </>
      </nav.Navbar>

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
  );
}

export default withRouter(Navbar);
