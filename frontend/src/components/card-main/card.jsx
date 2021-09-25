import React from "react";
import { Col, Card } from "react-bootstrap";

const CardMain = ({ src }) => {
  return (
    <Col style={{ marginBlockEnd: 20 }}>
      <Card style={{ width: "80%", margin: "0 auto" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMain;
