/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as nav from "react-bootstrap";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import { IoCartOutline, IoLanguage } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { resetUserLoginStatus } from "../../action/userLoginStatusAction";
import "./css/navbar.css";

function Navbar(props) {
  const dispatch = useDispatch();
  // get user details
  // const userInfo = useSelector((state) => state.userAccountInfo);
  // useEffect(() => {
  //   dispatch(startUserAccountGetDetails());
  // }, []);
  // //

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
          <nav.Navbar.Brand className="navbar-brand text-uppercase brand  fs-5 font-weight-bold ">
            <RiBillLine style={color} className=" ml-3   fa-2x " />
            Billing App
          </nav.Navbar.Brand>

          <nav.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <nav.Navbar.Collapse id="basic-navbar-nav">
            <nav.Nav className="ml-auto align-middle p-0 m-0">
              {!userLoginStatus ? (
                <>
                  <nav.Nav.Link className="nav-item" as={Link} to="/">
                    <i className="bx bx-fw bxs-right-arrow-circle bx-fade-right-hover  fa-2x "></i>
                    Login
                  </nav.Nav.Link>
                  <nav.Nav.Link className="nav-item" as={Link} to="/home">
                    <i className="bx bx-fw bx-home bx-burst-hover  fa-2x "> </i>
                    Home
                  </nav.Nav.Link>
                  <nav.Nav.Link className="nav-item" as={Link} to="/sign-up">
                    <i className="bx bx-fw bx-registered"> </i>
                    Register
                  </nav.Nav.Link>
                </>
              ) : (
                <>
                  <nav.Nav.Link
                    className="nav-item"
                    // className="nav-item secondary border-0 "
                    // data-toggle="tooltip"
                    // data-placement="bottom"
                    // title="Dashboard"
                    as={Link}
                    to="/dashboard"
                  >
                    <i
                      className="bx bx-fw bxs-dashboard  fa-2x "
                      style={{ color: "#AA96DA" }}
                    ></i>
                    Dashboard
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item" as={Link} to="/customer">
                    <FaUsers
                      className="bx bx-fw  "
                      style={{ color: "#ff007c" }}
                    ></FaUsers>
                    customer
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item" as={Link} to="/product">
                    <FaProductHunt
                      className="bx bx-fw   "
                      style={{ color: "#6A2C70" }}
                    ></FaProductHunt>
                    Product
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item" as={Link} to="/cart">
                    <IoCartOutline
                      style={color}
                      className="bx-burst  bx-fw  fa-2x"
                    />
                    Cart
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item" as={Link} to="/bill">
                    <RiBillLine style={color} className="bx-burst  bx-fw " />
                    Bills
                  </nav.Nav.Link>

                  <nav.Nav.Link className="nav-item" as={Link} to="/user">
                    <i className="bx bx-fw bx-user bx-tada-hover fa-3x "></i>
                    User
                  </nav.Nav.Link>
                  <nav.Nav.Link
                    className="nav-item"
                    as={Link}
                    to="/"
                    onClick={() => {
                      localStorage.removeItem("loginToken");
                      swal("Successfully", "logged out", "success");
                      dispatch(resetUserLoginStatus());
                      props.history.push("/");
                    }}
                  >
                    <i className="bx bx-fw bxs-left-arrow-circle bx-fade-left-hover  fa-3x "></i>
                    Logout
                  </nav.Nav.Link>
                  <nav.Nav.Link className="nav-item " as={Link} to="#">
                    <div id="google_translate_element"></div>

                    <IoLanguage
                      className="bx bx-fw fa-2x "
                      style={{ color: "#ff8b01" }}
                    ></IoLanguage>
                  </nav.Nav.Link>
                </>
              )}
            </nav.Nav>
          </nav.Navbar.Collapse>
        </>
      </nav.Navbar>
    </div>
  );
}

export default withRouter(Navbar);
