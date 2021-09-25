import React, {useState, useEffect} from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const link = {
  color: "#adb5bd",
  textDecoration: "none",
};
const linkActive = {
  color: "#0d6efd",
  background: 'transparent',
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
    <Navbar bg="light" expand="lg" style={{ fontSize: 16}}>
      <Container>
        <Navbar.Brand style={{ fontSize: 18, color: "#d9534f" }}>
          Мой Город
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavLink className="nav-link" exact to="/" style={link} activeStyle={linkActive}>
                Главная
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/initiatives"
                style={link}
                activeStyle={linkActive}
                
              >
                Инициативы
              </NavLink>
            
            <NavLink
              className="nav-link"
              exact
              to="/activities"
              style={link}
              activeStyle={linkActive}
            >
              Мероприятия
            </NavLink>
          </Nav>
          {width>991?
          <Nav>
            <NavDropdown title="Аккаунт" id="collasible-nav-dropdown">
                <NavLink className="dropdown-item" exact to="/account" style={link} activeStyle={linkActive}>
                  Личный кабинет 
                </NavLink>
              <NavDropdown.Divider />
              
              <NavDropdown.Item >
                <Button className="m-auto w-100" >
                  Выйти
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :false  
          }
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
