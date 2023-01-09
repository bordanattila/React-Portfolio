import React from "react";
import "./styles/Navigation.css";
import { Nav, Navbar } from "react-bootstrap";
import Avatar from "./images/avatar.png";

function NavigationBar({ currentPage, handlePageChange }) {
  return (
    <div className="div">

    <Navbar collapseOnSelect expand="lg"  >
      <div className="avatar">
        <Navbar.Brand href="#AboutMe"
        onClick={() => handlePageChange("AboutMe")}
        className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          <img
            src={Avatar}
            className="circular"
            alt="avatar"
            />
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-target="#navbarRightAlignExample" />
        <Navbar.Collapse id="responsive-navbar-nav ">
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
      </div>
    </Navbar>
              </div>
  );
}

export default NavigationBar;
