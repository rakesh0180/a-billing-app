import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import EditProduct from "./EditProduct";
import RemoveProduct from "./RemoveProduct";

function ProductItem(props) {
  const { index, product } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{product.name}</td>
      <td>
        <BiRupee />
        {product.price}
      </td>
      <td>
        <button className="btn btn-success" onClick={() => setModalShow(true)}>
          <i className="bx bxs-edit mr-2  " style={{ color: "white" }}></i>Edit
        </button>
        <EditProduct
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={product}
        />
      </td>
      <td>
        <RemoveProduct id={product._id} />
      </td>
    </tr>
  );
}

export default ProductItem;
