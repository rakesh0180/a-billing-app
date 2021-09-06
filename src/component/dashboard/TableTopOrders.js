import React from "react";
import { Table } from "react-bootstrap";
import { dateFormatter } from "../bill/dateFormatter";

const TableTopOrders = ({ bills, customers }) => {
  const sortFromHighest = bills.sort((a, b) => b.total - a.total);
  const findCustomer = (id, array) => {
    const cust = array.find((ele) => {
      return ele._id === id;
    });
    return cust ? { ...cust } : {};
  };

  return (
    <div className="text-center mt-4">
      <strong>Highest transactions</strong>
      <Table className="mt-1" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortFromHighest.map((ele, i) => {
            return (
              i < 5 && (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{findCustomer(ele.customer, customers).name}</td>
                  <td>{ele.total}</td>
                  <td>{dateFormatter(ele.createdAt)}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableTopOrders;
