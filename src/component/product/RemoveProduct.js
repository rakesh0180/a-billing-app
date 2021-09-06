import React from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { startRemoveProduct } from "../../action/ProductAction";

function RemoveProduct(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const removeProduct = (id) => {
    swal("Are you sure?", "You want to delete the product.", "warning", {
      buttons: {
        yes: {
          text: "Confirm",
          value: "yes",
        },
        no: {
          text: "Cancel",
          value: "no",
        },
      },
    }).then((value) => {
      if (value === "yes") {
        dispatch(startRemoveProduct(id));
      }
      return false;
    });
  };

  return (
    <button
      className="btn btn-danger "
      onClick={() => {
        removeProduct(id);
      }}
    >
      <i className="bx bxs-trash " style={{ color: "white" }}></i>
      Delete
    </button>
  );
}

export default RemoveProduct;
