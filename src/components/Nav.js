import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo-headers.png";
 const MyNav = () => {
 
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
          <Navbar.Brand href="#home">
            <img src={logo} alt="App logo" />{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ color: "#FFF" }}> تسجيل الدخول</Nav.Link>
              <Nav.Link style={{ color: "#FFF" }}> إنشاء حساب</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  
}

export default MyNav;
