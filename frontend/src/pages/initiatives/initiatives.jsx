import React from "react";
import { Button, Col, Row, Container, Card, ProgressBar } from "react-bootstrap";
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
      <div className="d-flex flex-column m-auto" style={{maxWidth: '400px'}} >
        <InitiativeCard />
        <InitiativeCard />
        <InitiativeCard />
      </div> 
    </Container>
  );
};

export default initiatives;
