import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar  } from "react-bootstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useTheme } from "styled-components";
import { Stylenavbar as NavStyle } from "../stylesheets/Stylenavbar";

require("bootstrap");

export default function NavBar() {
  const [toggle, setToggler] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    toggle === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);
  // const activeStyleNav = "text-red-1999 bg-red-700";


  return (
    <header className="">
      <NavStyle></NavStyle>
      <Navbar
        bg="transparent"
        variant="dark"
        expand="lg"
        expanded={toggle}
        onToggle={setToggler}
      >
        <AnimatedOnScroll
          animationIn="fadeIn"
          animationInDelay={500}
          screenOffset={0}
        >
          {/* <div className="inline lg:hidden">
              <button
                className="dark_dayIcon"
                id="switchTheme"
                onClick={toggleonClick}
              >
                {themeName === "light" ? (
                  <RiMoonClearLine></RiMoonClearLine>
                ) : (
                  <RiSunLine></RiSunLine>
                )}
              </button>
            </div> */}
          <Navbar.Brand href="#home">
            <Link
              to="/"
              exact="true"
              className={
                "inline-flex items-center  main-titleColor text-lg font-medium " +
                theme.classForNav
              }
            >
              Andre Silva
            </Link>
          </Navbar.Brand>
        </AnimatedOnScroll>

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center lg:text-left">
            {isTabletOrMobile && (
              <React.Fragment>
                <Nav.Link>
                  <Link
                    to="/#mywork"
                    onClick={() => setToggler((prevtoggle) => !prevtoggle)}
                    className={stylenav}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    Work
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
              </React.Fragment>
            )}
            {isBigScreen && (
              <React.Fragment>
                <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1000}>
                  <Nav.Link>
                    <Link
                      to="/#mywork"
                      smooth
                      className={stylenav}
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      Work
                    </Link>
                  </Nav.Link>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1250}>
                  <Nav.Link>
                    <Link
                      to="/#aboutme"
                      smooth
                      className={stylenav}
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      About Me
                    </Link>
                  </Nav.Link>
                </AnimatedOnScroll>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </header>
  );
}
