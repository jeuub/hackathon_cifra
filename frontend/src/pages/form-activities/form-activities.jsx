import React, { useState, useEffect } from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CardMain from "../../components/card-main/card";
import { AppRoute } from "../../utils/const";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const FormActivities = (props) => {
  const { height, width } = useWindowDimensions();
  const src =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c1d4aaebc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c1d4aaebc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.4015625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  return (
    <Container style={{ marginTop: 0 }}>
      <Row>
        <Col>
          <h2>Добавить мероприятие</h2>
          <Form className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Название</Form.Label>
              <Form.Control size="lg" type="email" placeholder="" required />
            </Form.Group>
            <Row>
              <img src={src} style={{ width: 300, margin: "0 auto" }} />
            </Row>
            <Row>
              <Button
                variant="success"
                style={{ margin: "10px auto" }}
                className="col-5"
              >
                + Добавить
              </Button>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Дата проведения</Form.Label>
              <Form.Control size="lg" type="text" placeholder="" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Место проведения</Form.Label>
              <Form.Control size="lg" type="text" placeholder="" required />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button className="col-3" size="lg" variant="primary" type="submit">
              Добавить
            </Button>
          </Form>
        </Col>
        {width >= 768 ? (
          <Col>
            <h2>Похожие мероприятие</h2>
            <Row style={{ width: "100%", margin: "20px auto" }} xs={1} md={3}>
              <CardMain src={src} />
              <CardMain src={src} />
              <CardMain src={src} />
            </Row>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default FormActivities;
