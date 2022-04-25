import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Nav, Container } from "react-bootstrap";

require("bootstrap");

export default function NavBar() {
  const stylenav =
    "inline-flex items-center py-3 px-3 my-6 rounded text-green-100 hover:text-white tracking-wide text-2xl";

  // const activeStyleNav = "text-red-1999 bg-red-700";

  const socialIconsStyle = { height: 35, width: 35 };

  return (
    <header className="">
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link
              to="/"
              exact
              className="inline-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-white text-4xl font-bold cursive tracking-widest"
            >
              Andre Silva
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                {" "}
                <NavLink to="/post" className={stylenav}>
                  Blog Posts
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/project" className={stylenav}>
                  Projects
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <Link to="/#aboutme" smooth className={stylenav}>
                  About Me
                </Link>
              </Nav.Link>
              <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon
                  url="https://github.com/drethesilvaa"
                  className="mr-4"
                  target={"_blank"}
                  fgColor="#fff"
                  style={socialIconsStyle}
                ></SocialIcon>
                <SocialIcon
                  url="https://www.linkedin.com/in/andréssilva/"
                  className="mr-4"
                  target={"_blank"}
                  fgColor="#fff"
                  style={socialIconsStyle}
                ></SocialIcon>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
