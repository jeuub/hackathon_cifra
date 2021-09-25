import React, { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer text-center" style={{width: '100%', backgroundColor: '#282C34', color: 'white'}}>
        © 2021,  Мой Город - moigorod.ru
      </footer>
    </Fragment>
  );
};
export default Footer;
