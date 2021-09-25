import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

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

const MainPage = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <Container>
      <Row>
        <Col>
          <Row style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontFamily: "Arial" }}>
              Начните менять <strong>ваш</strong> город прямо сейчас
            </h1>
          </Row>
          <Row style={{ width: "60%", margin: "10px auto" }}>
            <Button variant="primary">Создать инициативу</Button>
          </Row>
        </Col>
        {width >= 768 ? <Col></Col> : null}
      </Row>
    </Container>
  );
};

export default MainPage;
