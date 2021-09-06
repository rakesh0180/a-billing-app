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


  /* <nav.Nav.Link className="nav-item"></nav.Nav.Link> */

  /* <nav.NavDropdown
                    title="Profile"
                    id="navbarScrollingDropdown"
                    className="dropdown-menu-right "
                    //  className="nav-link dropdown-toggle"
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
                  </nav.NavDropdown> */



<div class="card">
						<div class="card-body">
							<div id="invoice">
								<div class="toolbar hidden-print">
									<div class="text-right">
										<button type="button" class="btn btn-dark"><i class="fa fa-print"></i> Print</button>
										<button type="button" class="btn btn-danger"><i class="fa fa-file-pdf-o"></i> Export as PDF</button>
									</div>
									<hr/>
								</div>
								<div class="invoice overflow-auto">
									<div style="min-width: 600px">
										<header>
											<div class="row">
												<div class="col">
													<a href="javascript:;">
														<img src="assets/images/logo-icon.png" width="80" alt="" />
													</a>
												</div>
												<div class="col company-details">
													<h2 class="name">
												<a target="_blank" href="javascript:;">
												Arboshiki
												</a>
											</h2>
													<div>455 Foggy Heights, AZ 85004, US</div>
													<div>(123) 456-789</div>
													<div>company@example.com</div>
												</div>
											</div>
										</header>
										<main>
											<div class="row contacts">
												<div class="col invoice-to">
													<div class="text-gray-light">INVOICE TO:</div>
													<h2 class="to">John Doe</h2>
													<div class="address">796 Silver Harbour, TX 79273, US</div>
													<div class="email"><a href="mailto:john@example.com">john@example.com</a>
													</div>
												</div>
												<div class="col invoice-details">
													<h1 class="invoice-id">INVOICE 3-2-1</h1>
													<div class="date">Date of Invoice: 01/10/2018</div>
													<div class="date">Due Date: 30/10/2018</div>
												</div>
											</div>
											<table>
												<thead>
													<tr>
														<th>#</th>
														<th class="text-left">DESCRIPTION</th>
														<th class="text-right">HOUR PRICE</th>
														<th class="text-right">HOURS</th>
														<th class="text-right">TOTAL</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td class="no">04</td>
														<td class="text-left">
															<h3>
													<a target="_blank" href="javascript:;">
													Youtube channel
													</a>
													</h3>
															<a target="_blank" href="javascript:;">
													   Useful videos
												   </a> to improve your Javascript skills. Subscribe and stay tuned :)</td>
														<td class="unit">$0.00</td>
														<td class="qty">100</td>
														<td class="total">$0.00</td>
													</tr>
													<tr>
														<td class="no">01</td>
														<td class="text-left">
															<h3>Website Design</h3>Creating a recognizable design solution based on the company's existing visual identity</td>
														<td class="unit">$40.00</td>
														<td class="qty">30</td>
														<td class="total">$1,200.00</td>
													</tr>
													<tr>
														<td class="no">02</td>
														<td class="text-left">
															<h3>Website Development</h3>Developing a Content Management System-based Website</td>
														<td class="unit">$40.00</td>
														<td class="qty">80</td>
														<td class="total">$3,200.00</td>
													</tr>
													<tr>
														<td class="no">03</td>
														<td class="text-left">
															<h3>Search Engines Optimization</h3>Optimize the site for search engines (SEO)</td>
														<td class="unit">$40.00</td>
														<td class="qty">20</td>
														<td class="total">$800.00</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<td colspan="2"></td>
														<td colspan="2">SUBTOTAL</td>
														<td>$5,200.00</td>
													</tr>
													<tr>
														<td colspan="2"></td>
														<td colspan="2">TAX 25%</td>
														<td>$1,300.00</td>
													</tr>
													<tr>
														<td colspan="2"></td>
														<td colspan="2">GRAND TOTAL</td>
														<td>$6,500.00</td>
													</tr>
												</tfoot>
											</table>
											<div class="thanks">Thank you!</div>
											<div class="notices">
												<div>NOTICE:</div>
												<div class="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
											</div>
										</main>
										<footer>Invoice was created on a computer and is valid without the signature and seal.</footer>
									</div>
									<!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->
									<div></div>
								</div>
							</div>
						</div>
</div>




<>
          <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body
          ref={printComponentRef}
          style={{ margin: "0", padding: "10px", border: "1px solid #eee" }}
        >
          <div className="row m-1">
            <div className="flex-column col-12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px",
                }}
              >
                <div className="form-group  justify-content-start">
                  <label>Business-Name:</label>
                  <h6>
                    {userAccountInfo.businessName} - {userAccountInfo.address}
                  </h6>
                </div>

                <div className="form-group  justify-content-end">
                  {moment(date, "DD-MM-YYYY", true).isValid() ? (
                    <>
                      <label>Invoice Date:</label>
                      <h6>{date}</h6>
                    </>
                  ) : (
                    <>
                      <label>Invoice Date:</label>
                      <h6>{moment(date).format("DD-MM-YYYY")}</h6>
                    </>
                  )}
                </div>
              </div>
              <div className="mx-4">
                <strong>Customer Details:</strong>
                <div className="p-2">
                  <h6>
                    Customer Name: {findCustomer(customer, customers).name}
                  </h6>
                  <h6>
                    Contact Number: {findCustomer(customer, customers).mobile}
                  </h6>
                  {findCustomer(customer, customers).email && (
                    <h6>Email : {findCustomer(customer, customers).email} </h6>
                  )}
                </div>
              </div>
            </div>
          </div>
          <table className="table text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Item Total</th>
              </tr>
            </thead>
            <tbody>
              {lineItems &&
                lineItems.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{findProduct(ele.product, products).name}</td>
                      <td>{findProduct(ele.product, products).price}</td>
                      <td>{ele.quantity}</td>
                      <td>
                        {findProduct(ele.product, products).price *
                          ele.quantity}
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <b>Total -</b>
                </td>
                <td>
                  <b> {total} </b>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={printBill} className=" btn btn-danger col-2 mr-3">
            Print
          </button>
        </Modal.Footer>
      </Modal>

      </>