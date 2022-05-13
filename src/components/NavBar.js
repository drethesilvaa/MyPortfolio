import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useMediaQuery } from "react-responsive";

import "../stylesheets/navbar.css";

require("bootstrap");

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -30;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export default function NavBar() {
  const [toggle, setToggler] = useState(false);

  useEffect(() => {
    toggle === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);

  const stylenav =
    "inline-flex items-center lg:py-3 px-3 lg:my-6 rounded text-green-100 hover:text-white tracking-wide text-2xl nav-link-animation";

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  // const activeStyleNav = "text-red-1999 bg-red-700";

  const socialIconsStyle = { height: 35, width: 35 };

  return (
    <header className="">
      <Navbar
        bg="transparent"
        variant="dark"
        expand="lg"
        expanded={toggle}
        onToggle={setToggler}
      >
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
            <Nav className="ms-auto text-center lg:text-left">
              {isTabletOrMobile && (
                <React.Fragment>
                  <Nav.Link>
                    <Link
                      to="/#myprojects"
                      onClick={() => setToggler((prevtoggle) => !prevtoggle)}
                      className={stylenav}
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      Projects
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to="/#aboutme"
                      onClick={() => setToggler((prevtoggle) => !prevtoggle)}
                      smooth
                      className={stylenav}
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      About Me
                    </Link>
                  </Nav.Link>
                  <div className="inline lg:inline-flex lg:py-3 px-3 lg:my-6">
                    <SocialIcon
                      url="https://github.com/drethesilvaa"
                      className="mr-4 nav-link-animation"
                      target={"_blank"}
                      fgColor="#fff"
                      style={socialIconsStyle}
                    ></SocialIcon>
                    <SocialIcon
                      url="https://www.linkedin.com/in/andréssilva/"
                      className="mr-4 nav-link-animation"
                      target={"_blank"}
                      fgColor="#fff"
                      style={socialIconsStyle}
                    ></SocialIcon>
                    <SocialIcon
                      url="https://www.instagram.com/drethegallery/"
                      className="mr-4 nav-link-animation"
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
                    <div className="inline lg:inline-flex py-3 px-3 lg:my-6 ">
                      <SocialIcon
                        url="https://github.com/drethesilvaa"
                        className="mr-4 nav-link-animation "
                        target={"_blank"}
                        fgColor="#fff"
                        style={socialIconsStyle}
                      ></SocialIcon>
                      <SocialIcon
                        url="https://www.linkedin.com/in/andréssilva/"
                        className="mr-4 nav-link-animation"
                        target={"_blank"}
                        fgColor="#fff"
                        style={socialIconsStyle}
                      ></SocialIcon>
                      <SocialIcon
                        url="https://www.instagram.com/drethegallery/"
                        className="mr-4 nav-link-animation"
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
