import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../utils/const";

const link = {
  color: "#adb5bd",
  textDecoration: "none",
};
const linkActive = {
  color: "#0d6efd",
  background: "transparent",
};

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

const Header = () => {
  const { height, width } = useWindowDimensions();
  return (
    <Navbar bg="light" expand="lg" style={{ fontSize: 16 }}>
      <Container>
        <Navbar.Brand style={{ fontSize: 18, color: "#d9534f" }}>
          Мой Город
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }}>
            <NavLink
              className="nav-link"
              exact
              to={AppRoute.MAIN}
              style={link}
              activeStyle={linkActive}
            >
              Главная
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to={AppRoute.INITIATIVES}
              style={link}
              activeStyle={linkActive}
            >
              Инициативы
            </NavLink>

            <NavLink
              className="nav-link"
              exact
              to={AppRoute.ACTIVITIES}
              style={link}
              activeStyle={linkActive}
            >
              Мероприятия
            </NavLink>
            {width >= 991 ? (
              <NavDropdown
                style={{ marginLeft: "auto" }}
                title="Аккаунт"
                id="collasible-nav-dropdown"
              >
                <NavLink
                  className="dropdown-item"
                  exact
                  to={AppRoute.REGISTRATION}
                  style={link}
                  activeStyle={linkActive}
                >
                  Личный кабинет
                </NavLink>
                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Button className="m-auto w-100">Выйти</Button>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title="Аккаунт" id="collasible-nav-dropdown">
                <NavLink
                  className="dropdown-item"
                  exact
                  to={AppRoute.REGISTRATION}
                  style={link}
                  activeStyle={linkActive}
                >
                  Личный кабинет
                </NavLink>
                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Button className="m-auto w-100">Выйти</Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
