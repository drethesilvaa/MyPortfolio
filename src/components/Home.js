import React, { useState } from "react";
import About from "./About";
import Projects from "./Project";
import Footer from "./Footer";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Container } from "react-bootstrap";
import Lighsaber from "./Lighsaber";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  const [text] = useState("Full Stack Developer");

  // useEffect(() => {
  //   setInterval(() => {
  //     if (text === "Full Stack Developer") {
  //       setText("Front End Developer");
  //     } else {
  //       setText("Full Stack Developer");
  //     }
  //   }, 5000);
  // }, [text]);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  return (
    <main>
      <Container>
        {/* <AnimatedOnScroll animationIn="fadeIn">
          <img
            src={image}
            alt="background"
            className="absolute object-cover w-full h-full right-0"
          ></img>
        </AnimatedOnScroll> */}

        <section id="mainDiv" className="relative h-screen">
          <AnimatedOnScroll
            animationIn="fadeInDown"
            animationInDelay={1000}
            style={{ top: "20%", position: "relative" }}
          >
            <Lighsaber
              angle={isTabletOrMobile === true ? "90" : "0"}
              color={theme.lightsaber}
            ></Lighsaber>
            <h1 className="text-6xl main-titleColor font-bold cursive leading-none home-name  m-0 pl-0 pb-10 lg:pl-10 lg:pb-0">
              Hi, <br></br> I'm Andre, <br></br> {text}
            </h1>
          </AnimatedOnScroll>
        </section>
      </Container>
      <Container>
        <About></About>
      </Container>
      <Container>
        <Projects></Projects>
      </Container>
      <Container>
        <Footer></Footer>
      </Container>
    </main>
  );
}
