import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const link = {
  color: "#adb5bd",
  textDecoration: "none",
};
const linkActive = {
  color: "#0d6efd",
};

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ fontSize: 16}}>
      <Container>
        <Navbar.Brand style={{ fontSize: 18, color: "#d9534f" }}>
          Мой Город
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink exact to="/" style={link} activeStyle={linkActive}>
                Главная
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                exact
                to="/initiatives"
                style={link}
                activeStyle={linkActive}
              >
                Инициативы
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                exact
                to="/activities"
                style={link}
                activeStyle={linkActive}
              >
                Мероприятия
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact to="/lk" style={link} activeStyle={linkActive}>
                Личный кабинет
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
