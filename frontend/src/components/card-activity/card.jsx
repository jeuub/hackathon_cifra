import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const CardActivity = (props) => {
  return (
    <Row style={{ marginBlockEnd: 20 }}>
      <Card style={{ width: "70%", margin: "0 auto" }}>
        <Row md={2}>
          <Col>
            <Card.Img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c1d4aaebc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c1d4aaebc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.4015625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              style={{ minWidth: 200, margin: "10px auto" }}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title style={{ fontSize: 24 }}>{props.activity.title}</Card.Title>
              <Card.Text style={{ fontSize: 16 }}>
              {props.activity.description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};
export default CardActivity;
