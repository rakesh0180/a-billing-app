import React from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { startRemoveCustomer } from "../../action/customerAction";

function RemoveCustomer(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const removeCustomer = (id) => {
    swal("Are you sure?", "You want to delete the customer.", "warning", {
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
        dispatch(startRemoveCustomer(id));
      }
      return false;
    });
  };

  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        removeCustomer(id);
      }}
    >
      <i className="bx bxs-trash "></i>
      Delete
    </button>
  );
}

export default RemoveCustomer;
