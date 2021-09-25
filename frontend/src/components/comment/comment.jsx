import React from "react";
import { Row, Col } from "react-bootstrap";

const Comment = ({ avatar }) => {
  return (
    <>
      <Row style={{ width: "60%", minWidth: 300, margin: "10px auto" }}>
        <Col xs={2} style={{ marginRight: 10 }}>
          <img
            src={avatar}
            style={{
              width: "50px",
              height: "auto",
              borderRadius: "50%",
            }}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "flex-start",
            fontSize: 16,
          }}
        >
          <span>Имя Фамилия</span>
        </Col>
      </Row>
      <Row>
        <p
          style={{
            width: "60%",
            minWidth: 300,
            margin: "10px auto",
            fontSize: 14,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          impedit recusandae, nemo neque similique culpa ipsa dignissimos
          reprehenderit voluptates aliquam minima veritatis voluptatum animi!
          Eum possimus eos error animi autem.
        </p>
      </Row>
    </>
  );
};
export default Comment;
