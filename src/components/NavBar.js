import React from "react";
// import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useMediaQuery } from "react-responsive";

import "../stylesheets/navbar.css";

require("bootstrap");

export default function NavBar() {
  const stylenav =
    "inline-flex items-center lg:py-3 px-3 lg:my-6 rounded text-green-100 hover:text-white tracking-wide text-2xl";

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  // const activeStyleNav = "text-red-1999 bg-red-700";

  const socialIconsStyle = { height: 35, width: 35 };

  return (
    <header className="">
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <AnimatedOnScroll
            animationIn="fadeIn"
            animationInDelay={500}
            screenOffset={0}
          >
            <Navbar.Brand href="#home">
              <Link
                to="/"
                exact
                className="inline-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-white text-4xl font-bold cursive tracking-widest"
              >
                Andre Silva
              </Link>
            </Navbar.Brand>
          </AnimatedOnScroll>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isTabletOrMobile && (
                <React.Fragment>
                  <Nav.Link>
                    <Link to="/#myprojects" smooth className={stylenav}>
                      Projects
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/#aboutme" smooth className={stylenav}>
                      About Me
                    </Link>
                  </Nav.Link>
                  <div className="inline-flex lg:py-3 px-3 lg:my-6">
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
                </React.Fragment>
              )}
              {isBigScreen && (
                <React.Fragment>
                  <AnimatedOnScroll
                    animationIn="fadeIn"
                    animationInDelay={1000}
                  >
                    <Nav.Link>
                      <Link to="/#myprojects" smooth className={stylenav}>
                        Projects
                      </Link>
                    </Nav.Link>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll
                    animationIn="fadeIn"
                    animationInDelay={1250}
                  >
                    <Nav.Link>
                      <Link to="/#aboutme" smooth className={stylenav}>
                        About Me
                      </Link>
                    </Nav.Link>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll
                    animationIn="fadeIn"
                    animationInDelay={1500}
                  >
                    <div className="inline-flex lg:py-3 px-3 lg:my-6">
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
                  </AnimatedOnScroll>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
