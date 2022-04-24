import React from "react";
import image from "../bg-portfolio.jpg";
import About from "./About";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container fluid>
        <img
          src={image}
          alt="background"
          className="absolute object-cover w-full h-full"
        ></img>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <AnimatedOnScroll animationIn="fadeInUp">
            <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
              Hello. Andre here
            </h1>
          </AnimatedOnScroll>
        </section>
      </Container>
      <Container>
        <About></About>
      </Container>
    </main>
  );
}
