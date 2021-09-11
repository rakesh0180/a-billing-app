import React from "react";
import { Card } from "react-bootstrap";
import "./css/dashboard.css";

const Stats = (props) => {
  const { variant, Header, value, icon } = props;
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "15rem", margin: "4rem" }}
          className="mb-2"
        >
          <Card.Body>
            <div className="widgets-icons mx-auto rounded-circle bg-white">
              {icon}
            </div>
            <Card.Title style={{ fontSize: "30px", paddingTop: "10px" }}>
              {value}
            </Card.Title>
          </Card.Body>
          <Card.Header>{Header}</Card.Header>
        </Card>
      </div>
    </>
  );
};

export default Stats;
