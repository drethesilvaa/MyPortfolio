import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default function _Footer() {
  return (
    <AnimatedOnScroll animationIn="fadeIn">
      <footer className="pt-72 pb-4 text-center text-white">
        <h4>Designed & Built by Andre Silva</h4>
      </footer>
    </AnimatedOnScroll>
  );
}