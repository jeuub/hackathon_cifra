import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 50 }}>
      <Container>
        <Navbar.Brand style={{ fontSize: 20 }}>@Мой Город</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Footer;
