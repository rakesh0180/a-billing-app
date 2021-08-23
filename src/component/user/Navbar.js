/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as nav from "react-bootstrap";
import { RiBillLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { resetUserLoginStatus } from "../../action/userLoginStatusAction";
import "./css/navbar.css";

function Navbar(props) {
  const dispatch = useDispatch();

  const userLoginStatus = useSelector((state) => state.userLoginStatus);

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
              <RiBillLine
                style={{ color: "red" }}
                className="bx-burst font-30 mr-1"
              />
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
                      <i className="bx bx-log-in-circle bx-fade-right-hover mr-1"></i>
                      Login
                    </Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link className="nav-item">
                    <Link to="/home">
                      <i className="bx bx-home bx-burst-hover mr-1"> </i>
                      Home
                    </Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link className="nav-item">
                    <Link to="/sign-up">
                      <i className="bx bx-registered mr-1"> </i>
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
                    <Link to="/dashboard">Dashboard</Link>
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item">
                    <Link to="/customer">customer</Link>
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item">
                    <Link to="/product">product</Link>
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
                        <i className="bx bx-user bx-tada-hover mr-1 "></i>
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
                        <i className="bx bx-log-out-circle bx-fade-left-hover mr-1"></i>
                        Logout
                      </Link>
                    </nav.NavDropdown.Item>

                    <nav.NavDropdown.Item>
                      <Link to="/user">
                        <i className="bx bx-user bx-tada-hover mr-1 "></i>
                        darkMode
                      </Link>
                    </nav.NavDropdown.Item>

                    <nav.NavDropdown.Divider />
                    <nav.NavDropdown.Item>
                      Something else here
                    </nav.NavDropdown.Item>
                  </nav.NavDropdown>

                  <nav.Nav.Link className="nav-item">
                    <div id="google_translate_element"></div>
                  </nav.Nav.Link>
                </>
              )}
            </nav.Nav>
          </nav.Navbar.Collapse>
        </>
      </nav.Navbar>

      {/* <Switch>
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
      </Switch> */}
    </div>
  );
}

export default withRouter(Navbar);
