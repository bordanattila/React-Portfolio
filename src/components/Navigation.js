import React from "react";
import "./styles/Navigation.css";
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect expand="lg"  >
      <Navbar.Brand >
        Attila Bordán
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" data-target="#navbarRightAlignExample" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" data-target="#navbarRightAlignExample">
          <Nav.Link href="#AboutMe"
            onClick={() => handlePageChange("AboutMe")}
            className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
          >About me</Nav.Link>
          <Nav.Link href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          >Portfolio</Nav.Link>
          <Nav.Link href="#ContactMe"
            onClick={() => handlePageChange("ContactMe")}
            className={currentPage === "ContactMe" ? "nav-link active" : "nav-link"}
          >Contact me</Nav.Link>
          <Nav.Link href="#Resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
