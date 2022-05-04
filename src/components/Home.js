import React from "react";
// import image from "../images/bg-portfolio.jpg";
// import background from "../images/bg2.jpg";
import About from "./About";
import Projects from "./Project";
import Footer from "./Footer";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Container } from "react-bootstrap";

export default function Home() {
  // const homestyle = {
  //   background: `url(${background})`,
  //   height: "100%",
  //   "background-position": "center",
  //   "background-repeat": "no-repeat",
  //   "background-size": "cover",
  // };

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

        <section className="relative h-screen">
          <AnimatedOnScroll
            animationIn="fadeInDown"
            animationInDelay={1000}
            style={{ top: "20%", position: "absolute" }}
          >
            <h1 className="text-6xl text-green-100 font-bold cursive leading-none home-name">
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
