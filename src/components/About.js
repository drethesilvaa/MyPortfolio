import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Col, Row } from "react-bootstrap";
import MyInfo from "./MyInfo.js";
import { serializers } from "../data/sanitySerializers.js";

export default function About() {
  const [author, setAuthor] = useState(null);

  const styleBioTitle = {
    position: "relative",
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
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

  if (!author) return <div> Loading... </div>;

  return (
    <main className="relative aboutsection pb-72" id="aboutme">
      <span> </span>
      <Row>
        <Col xs={12} >
          <AnimatedOnScroll animationIn="fadeInDown">
            <h1
              className="cursive text-8xl text-left main-titleColor mb-11 mt-11 md:mt-0"
              style={styleBioTitle}
            >
              About Me
            </h1>
          </AnimatedOnScroll>
          <section className="rounded-lg lg:flex">
            {/* <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} ></img> */}
            <AnimatedOnScroll animationIn="fadeInLeft">
              <div className="text-lg flex flex-col justify-center">
                {/* <h1 className="cursive text-8xl text-green-300 mb-4 "> Hey there. I'm <span className="text-green-100">{author.name}</span></h1> */}
                <div className="prose lg:prose-xl main-textColor">
                  {
                    <SanityBlockContent
                      blocks={author.bio}
                      projectId={sanityClient.projectId}
                      dataset={sanityClient.dataset}
                      serializers={serializers}
                    ></SanityBlockContent>
                  }
                </div>
              </div>
            </AnimatedOnScroll>
          </section>
        </Col>
        <Col xs={12} >
          <AnimatedOnScroll
            animationIn="fadeIn"
            className="relative lg:top-1/4"
          >
           
          </AnimatedOnScroll>
        </Col>
      </Row>
    </main>
  );
}
