import React from "react";
import { Button, Col, Row, Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardMain from "../../components/card-main/card";

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

  const [initiatives, setInitiatives] = React.useState([]);
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    fetch("http://172.31.3.166:8000/api/initiative/")
      .then((res) => res.json())
      .then((data) => setInitiatives(data.slice(0, 3)));
  }, []);

  React.useEffect(() => {
    fetch("http://172.31.3.166:8000/api/event/")
      .then((res) => res.json())
      .then((data) => setActivities(data.slice(0, 3)));
  }, []);

  const src =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c1d4aaebc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c1d4aaebc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.4015625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  return (
    <Container>
      <Row style={{ paddingBlockStart: 20, marginBlockEnd: 40 }}>
        <Col md={{ span: 3, offset: 2 }}>
          <Row
            style={{
              margin: "0 auto",
              textAlign: "center",
              height: "60%",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontFamily: "Arial" }}>
              Начните менять <strong>ваш</strong> город прямо сейчас
            </h1>
          </Row>
          <Row style={{ width: "60%", margin: "5px auto" }}>
            <Button variant="primary">Создать инициативу</Button>
          </Row>
        </Col>
        {width >= 768 ? (
          <Col md={{ span: 3, offset: 2 }}>
            <Card.Img src={src} />
          </Col>
        ) : null}
      </Row>
      <Row>
        <h2
          style={{ fontFamily: "Arial", fontSize: "20px", textAlign: "center" }}
        >
          Инициативы
        </h2>
      </Row>
      <Row style={{ width: "80%", margin: "20px auto" }} xs={1} md={3}>
        {initiatives.map((initiative) => {
          return <CardMain key={initiative.id} thing={initiative} />;
        })}

        <Button style={{ width: 150, margin: "20px auto" }}>
          Загрузить ещё
        </Button>
      </Row>
      <Row>
        <h2
          style={{ fontFamily: "Arial", fontSize: "20px", textAlign: "center" }}
        >
          Мероприятия
        </h2>
      </Row>
      <Row style={{ width: "80%", margin: "20px auto" }} xs={1} md={3}>
        {activities.map((activity) => {
          return <CardMain key={activity.id} thing={activity} />;
        })}
        <Button style={{ width: 150, margin: "20px auto" }}>
          Загрузить ещё
        </Button>
      </Row>
    </Container>
  );
};

export default MainPage;
