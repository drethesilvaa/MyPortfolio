import React, { useEffect, useState } from "react";
import About from "./About";
import Project from "./Project";
import sanityClient from "../client.js";
import Footer from "./Footer";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Container } from "react-bootstrap";
import Lighsaber from "./Lighsaber";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import MyInfo from "./MyInfo";

export default function Home() {
  const theme = useTheme();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            "authorImage": image.asset->url,
             "Skills": *[_type=='skills']{ 
              skill,
              skill_Level
            },
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch();
  }, []);

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
            style={{ top: "10%", position: "relative" }}
          >
            <div className="flex gap-4 justify-between">
              <div className="flex items-center">
                <h1 className="text-6xl main-titleColor font-bold cursive leading-none home-name  m-0 pl-0 pb-10 lg:pb-0">
                  Hi, <br></br> I'm Andre, <br></br> Welcome to my Page!
                </h1>
              </div>
              <div className="flex items-center">
                <MyInfo
                  userName={author?.name}
                  userImage={author?.authorImage}
                  userSkills={author?.Skills}
                ></MyInfo>
              </div>

            </div>
          </AnimatedOnScroll>
        </section>
      </Container>
      <Container>
        <About></About>
      </Container>
      <Container>
        <Project></Project>
      </Container>
      <Container>
        <Footer></Footer>
      </Container>
    </main>
  );
}
