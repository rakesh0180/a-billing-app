import React, { useEffect, useState } from "react";
import { Hint } from "react-autocomplete-hint";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { useSelector } from "react-redux";

const BillProduct = (props) => {
  const products = useSelector((state) => state.products);
  const [productDetails, setProductDetails] = useState([
    { id: "", name: "", quantity: "", subTotal: "" },
  ]);
  const [product, setProduct] = useState({});
  const [total, setTotal] = useState("");

  const { addLineItem, modalShow } = props;

  useEffect(() => {
    const result = productDetails.reduce((acc, curr) => acc + curr.subTotal, 0);
    setTotal(result);
  }, [productDetails]);

  useEffect(() => {
    if (modalShow) {
      setProductDetails([{ id: "", name: "", quantity: "", subTotal: "" }]);
    }
  }, [modalShow]);

  const productNames = products.map((ele) => ele.name);

  const handleAutoFill = (e, index) => {
    const productName = e.target.value;
    const productFind = products.find((ele) => ele.name === productName);
    if (productFind) {
      const res = productDetails.map((ele, i) => {
        if (index === i) {
          return {
            ...ele,
            id: productFind._id,
            subTotal: ele.quantity * productFind.price,
          };
        } else {
          return ele;
        }
      });
      setProduct(productFind);
      setProductDetails(res);
    } else {
      if (productName !== "") {
        alert("product not available");
        const res = productDetails.map((ele, i) => {
          if (index === i) {
            return { ...ele, name: "" };
          } else {
            return ele;
          }
        });
        setProductDetails(res);
      }
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const res = productDetails.map((ele, i) => {
      if (index === i) {
        return { ...ele, [name]: value, subTotal: 0 };
      } else {
        return ele;
      }
    });
    setProductDetails(res);
  };

  const handleAddLineItem = () => {
    setProductDetails([
      ...productDetails,
      { id: "", name: "", quantity: "", subTotal: "" },
    ]);
  };

  const handleRemoveLineItem = (index) => {
    const res = productDetails.filter((ele, i) => {
      return i !== index;
    });
    setProductDetails(res);
  };

  const handleBlur = (e, index) => {
    const res = productDetails.map((ele, i) => {
      if (i === index) {
        return { ...ele, subTotal: ele.quantity * product.price };
      } else {
        return ele;
      }
    });
    setProductDetails(res);
    const lineItems = res
      // eslint-disable-next-line array-callback-return
      .map((ele) => {
        if (ele.name && ele.quantity) {
          return { product: ele.id, quantity: ele.quantity };
        }
      })
      .filter((ele) => ele);
    addLineItem(lineItems);
  };

  return (
    <div>
      {productDetails.map((ele, i) => {
        return (
          <div key={i}>
            <div className="row align-items-end m-3" key={i}>
              <div className="col-12   col-sm-12  col-md-4 col-lg-4 col-xl-4">
                <Hint options={productNames}>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    value={ele.name}
                    onBlur={(e) => handleAutoFill(e, i)}
                    onChange={(e) => handleChange(e, i)}
                  />
                </Hint>
              </div>
              <div className="col-12      col-sm-12   col-md-4 col-lg-4 col-xl-4">
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  placeholder="Enter Product quantity"
                  value={ele.quantity}
                  onChange={(e) => handleChange(e, i)}
                  onBlur={(e) => handleBlur(e, i)}
                />
              </div>
              <div className="col-12    col-sm-12  col-md-2 col-lg-2 col-xl-2">
                <input
                  className="form-control"
                  type="text"
                  name="subTotal"
                  value={ele.subTotal}
                  disabled={true}
                />
              </div>
              <div className="col-12      col-sm-12  col-md-2 col-lg-2 col-xl-2">
                {productDetails.length > 1 && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveLineItem(i)}
                  >
                    <MdIndeterminateCheckBox style={{ fontSize: "16px" }} />
                  </button>
                )}
                {i === productDetails.length - 1 && (
                  <button
                    className="btn btn-success ml-3 "
                    onClick={handleAddLineItem}
                  >
                    <MdAddBox />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className="row  my-4 mx-4 col-12 col-sm-12 justify-content-end  align-items-center">
        <label className="mx-2 my-1 col-12  col-sm-12">Total</label>
        <input
          className="form-control col-12  col-sm-12 justify-content-center"
          type="text"
          value={total}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default BillProduct;
