/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as nav from "react-bootstrap";
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
        bg="secondary"
        variant="dark"
        className="navbar shadow-sm radius-15"
      >
        <>
          <nav.Navbar.Brand>
            <Link
              className="navbar-brand text-uppercase fs-1 fw-bold "
              to="/home"
            >
              Billing App
            </Link>
          </nav.Navbar.Brand>

          <nav.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <nav.Navbar.Collapse id="basic-navbar-nav">
            <nav.Nav className="ml-auto align-middle p-0 m-0">
              {!userLoginStatus ? (
                <>
                  <nav.Nav.Link>
                    <Link to="/">Login</Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link>
                    <Link to="/home">Home</Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link>
                    <Link to="/sign-up">Register</Link>
                  </nav.Nav.Link>
                </>
              ) : (
                <>
                  <nav.Nav.Link>
                    <Link to="/dashboard">Dashboard</Link>
                  </nav.Nav.Link>

                  <nav.Nav.Link>
                    <Link to="/customer">customer</Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link>
                    <Link to="/product">product</Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link>
                    <Link to="/user">
                      <div>
                        <i
                          class="fa-solid fa-user"
                          style={{ fontSize: "1rem" }}
                        ></i>
                        User
                      </div>
                    </Link>
                  </nav.Nav.Link>
                  <nav.Nav.Link>
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
                  </nav.Nav.Link>
                  <nav.Nav.Link>
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
