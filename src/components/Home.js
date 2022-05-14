import React from "react";
// import image from "../images/bg-portfolio.jpg";
// import background from "../images/bg2.jpg";
import About from "./About";
import Projects from "./Project";
import Footer from "./Footer";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Container } from "react-bootstrap";
import Lighsaber from "./Lighsaber";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  // const homestyle = {
  //   background: `url(${background})`,
  //   height: "100%",
  //   "background-position": "center",
  //   "background-repeat": "no-repeat",
  //   "background-size": "cover",
  // };
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
              angle={isTabletOrMobile == true ? "90" : "0"}
              color="yoda"
            ></Lighsaber>
            <h1 className="text-6xl text-green-100 font-bold cursive leading-none home-name  m-0 pl-0 pb-10 lg:pl-10 lg:pb-0">
              Hi, <br></br> I'm Andre, <br></br> Full Stack Developer
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
