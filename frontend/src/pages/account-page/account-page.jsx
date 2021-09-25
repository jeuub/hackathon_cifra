import React from "react";
import { Button, Col, Row, Container, Card, Accordion } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardMain from "../../components/card-main/card";

const AccountPage = (props) => {
  const fullname = "Бодур Эййюб Айдын Мустафаевич";

  const src =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c1d4aaebc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c1d4aaebc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.4015625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  return (
    <Container>
      <Row>
        <Col>
          <Row className="justify-content-around mb-3">
            <h1 className="col-10">Личный кабинет</h1>
            <Button variant="light text-danger" className="col-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
            </Button>
          </Row>
          <Row className="justify-content-around mb-3">
                <Button variant="primary" className="col-5">+ инициатива</Button>
                <Button variant="success" className="col-5">+ мероприятие</Button>
          </Row>
          <Row className="justify-content-center">
            <Button variant="danger" className="col-5">Оформить подписку</Button>
          </Row>
        </Col>
      </Row>
      <Row>
      <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Инициативы</Accordion.Header>
                <Accordion.Body>
                <Row style={{ width: "80%", margin: "20px auto" }} xs={1} md={3}>
                    <CardMain src={src} />
                    <CardMain src={src} />
                    <CardMain src={src} />
                </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Мероприятия</Accordion.Header>
                <Accordion.Body>
                <Row style={{ width: "80%", margin: "20px auto" }} xs={1} md={3}>
                    <CardMain src={src} />
                    <CardMain src={src} />
                    <CardMain src={src} />
                </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default AccountPage;
