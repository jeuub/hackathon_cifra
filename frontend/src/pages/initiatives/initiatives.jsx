import React from "react";
import { Button, Row, Container} from "react-bootstrap";
import { useState, useEffect } from "react";

import InitiativeCard from "../../components/initiative-card/initiative-card"

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

const initiatives = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <Container>
      <h1 className="text-center">Инициативы</h1>
      <Row xs={1} md={3}>
        <InitiativeCard />
          <InitiativeCard />
        <InitiativeCard />
      </Row>
      <Row xs={1} md={3}>
        <InitiativeCard />
          <InitiativeCard />
        <InitiativeCard />
      </Row>
      <Row> 
        <Button style={{ width: 150, margin: "20px auto" }}>
          Загрузить ещё
        </Button>
      </Row>  
    </Container>
  );
};

export default initiatives;
