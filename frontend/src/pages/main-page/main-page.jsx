import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

const MainPage = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <h1>Начните менять ваш город прямо сейчас</h1>
          </Row>
          <Row>
            <Button variant="primary">Создать инициативу</Button>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default MainPage;
