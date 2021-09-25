import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const CardActivity = ({ src }) => {
  return (
    <Row style={{ marginBlockEnd: 20 }}>
      <Card style={{ width: "70%", margin: "0 auto" }}>
        <Row md={2}>
          <Col>
            <Card.Img
              src={src}
              style={{ minWidth: 200, margin: "10px auto" }}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title style={{ fontSize: 24 }}>Card Title</Card.Title>
              <Card.Text style={{ fontSize: 16 }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};
export default CardActivity;
