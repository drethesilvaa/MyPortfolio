import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useTheme } from "styled-components";
import { Stylenavbar as NavStyle } from "../stylesheets/Stylenavbar";
import { motion } from "motion/react";
import { useSanityData } from "../context/SanityDataContext";
import { getSanityImage } from "../utils/imageOptimization";

require("bootstrap");

export default function NavBar() {
  const [toggle, setToggler] = useState(false);
  const theme = useTheme();

  const { author } = useSanityData();

  useEffect(() => {
    toggle === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className=""
    >
      <NavStyle></NavStyle>
      <Navbar
        bg="transparent"
        variant="dark"
        expand="lg"
        className="pt-5"
        expanded={toggle}
        onToggle={setToggler}
      >
        <AnimatedOnScroll
          animationIn="fadeIn"
          animationInDelay={500}
          screenOffset={0}
        >
          <div className="flex gap-2">
            <div className="w-10 h-10 overflow-hidden rounded-full shadow-md border-[2px] border-gray-50">
              <img src={getSanityImage('square', author)} alt="Andre Profile" />
            </div>
            <p
              className={
                "inline-flex items-center  main-titleColor text-lg font-medium " +
                theme.classForNav
              }
            >
              Andre Silva
            </p>
          </div>
        </AnimatedOnScroll>
      </Navbar>
    </motion.header>
  );
}
