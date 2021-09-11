import moment from "moment";
import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import printIcon from "../../assets/img/icon/logo-icon.png";
import "./css/invoice.css";
const Invoice = (props) => {
  const { customer, date, lineItems } = props;

  const customers = useSelector((state) => state.customers);
  const products = useSelector((state) => state.products);
  const userAccountInfo = useSelector((state) => state.userAccountInfo);

  const printComponentRef = useRef();

  const findCustomer = (id, array) => {
    const item = array.find((ele) => {
      return ele._id === id;
    });
    return item ? { ...item } : {};
  };

  const findProduct = (id, array) => {
    const item = array.find((ele) => {
      return ele._id === id;
    });
    return item ? { ...item } : {};
  };

  const subTotal =
    lineItems &&
    lineItems
      .map((ele) => {
        return findProduct(ele.product, products).price * ele.quantity;
      })
      .reduce((acc, curr) => acc + curr, 0);

  const pageStyle = `
      @page {
        margin-top: 30mm;
      }`;

  const printBill = useReactToPrint({
    content: () => printComponentRef.current,
    pageStyle: pageStyle,
  });

  //GST=(original amount *  Gst%)/100
  const gstAmount = (subTotal * 18) / 100;

  //Grand Total
  const total = subTotal + gstAmount;

  const invociceId = 0;

  return (
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
          // style={{ margin: "0", padding: "10px", border: "1px solid #eee" }}
        >
          <div className="card">
            <div className="card-body">
              <div id="invoice">
                <div className="toolbar hidden-print">
                  <div className="text-right">
                    <button className="btn btn-dark" onClick={printBill}>
                      <i className="fa fa-print"></i> Print
                    </button>
                    <button className="btn btn-danger" disabled>
                      <i className="fa fa-file-pdf-o"></i> Export as PDF
                    </button>
                  </div>
                  <hr />
                </div>
                <div className="invoice overflow-auto">
                  <div style={{ minWidth: "600px" }}>
                    <header>
                      <div className="row">
                        <div className="col">
                          <>
                            <img src={printIcon} width="80" alt="" />
                          </>
                        </div>
                        <div className="col company-details">
                          <h2 className="name">{userAccountInfo.username}</h2>
                          <div>{userAccountInfo.address}</div>
                          <div>{userAccountInfo.email}</div>
                        </div>
                      </div>
                    </header>
                    <main>
                      <div className="row contacts">
                        <div className="col invoice-to">
                          <div className="text-gray-light">INVOICE TO:</div>
                          <h2 className="to">
                            {findCustomer(customer, customers).name}
                          </h2>
                          <div className="number address">
                            {findCustomer(customer, customers).mobile}
                          </div>
                          <div className="email">
                            {findCustomer(customer, customers).email && (
                              <h6>{findCustomer(customer, customers).email}</h6>
                            )}
                          </div>
                        </div>
                        <div className="col invoice-details">
                          <h1 className="invoice-id">
                            INVOICE {invociceId + 1}
                          </h1>
                          <div className="  invoice-id  form-group  justify-content-end">
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
                      </div>
                      <table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th className="text-left text-uppercase">
                              Product Name
                            </th>
                            <th className="text-right text-uppercase">
                              Unit Price
                            </th>
                            <th className="text-right text-uppercase">
                              Quantity
                            </th>
                            <th className="text-right">TOTAl</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lineItems &&
                            lineItems.map((ele, i) => {
                              return (
                                <tr key={i}>
                                  <td className="no">{i + 1}</td>
                                  <td className="text-left">
                                    {findProduct(ele.product, products).name}
                                  </td>
                                  <td className="unit">
                                    <BiRupee />
                                    {findProduct(ele.product, products).price}
                                  </td>
                                  <td className="qty">{ele.quantity}</td>
                                  <td className="total justify-content-center align-content-center">
                                    <BiRupee />
                                    {findProduct(ele.product, products).price *
                                      ele.quantity}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="2"></td>
                            <td colspan="2">SUBTOTAL</td>
                            <td className="justify-content-center align-content-center">
                              <BiRupee />
                              {subTotal}
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2"></td>
                            <td colspan="2">GST 18%</td>
                            <td className="justify-content-center align-content-center">
                              <BiRupee />
                              {gstAmount}
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2"></td>
                            <td colspan="2">GRAND TOTAL</td>
                            <td className="justify-content-center align-content-center">
                              <FaRupeeSign />
                              {total}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                      <div className="thanks">Thank you!</div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="notices text-left ">
            <div className="text-danger">NOTICE:</div>
            <div className="notice text-center">
              Invoice was created on a computer and is valid without the
              signature and seal.
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Invoice;
