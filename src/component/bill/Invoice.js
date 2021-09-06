import moment from "moment";
import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

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

  const total =
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

  return (
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
                <h6>Customer Name: {findCustomer(customer, customers).name}</h6>
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
                      {findProduct(ele.product, products).price * ele.quantity}
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
  );
};

export default Invoice;
