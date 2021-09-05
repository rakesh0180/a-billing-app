import React from "react";
import { Modal } from "react-bootstrap";
import "../user/css/closeButton.css";
import CustomerForm from "./CustomerForm";

function EditCustomer({ customer, ...props }) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Update Customer Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomerForm
          customer={customer}
          formType="editForm"
          onHide={props.onHide}
        />
      </Modal.Body>
    </Modal>
  );
}

export default EditCustomer;
