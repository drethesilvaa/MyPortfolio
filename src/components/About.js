import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Col, Row } from "react-bootstrap";
import MyInfo from "./MyInfo.js";

export default function About() {
  const [author, setAuthor] = useState(null);

  const serializers = {
    types: {
      block: (props) => {
        const style = props.node.style || "normal";

        if (/^h\d/.test(style)) {
          const level = style.replace(/[^\d]/g, "");
          return React.createElement(
            `h${level}`,
            { className: "text-lg" },
            props.children
          );
        }

        return style === "blockquote" ? (
          <blockquote> –{props.children} </blockquote>
        ) : (
          <p> {props.children} </p>
        );
      },
      code: (props) =>
        "" || (
          <pre data-language={props.node.language}>
            <code> {props.node.code} </code>
          </pre>
        ),
      youtube: (props) => <pre> {JSON.stringify(props, null, 2)} </pre>,
    },
    list: (props) =>
      "" ||
      (props.type === "bullet" ? (
        <ul className="list-disc list-outside"> {props.children} </ul>
      ) : (
        <ol className="list-decimal list-outside"> {props.children} </ol>
      )),
    listItem: (props) =>
      "" ||
      (props.type === "bullet" ? (
        <li> {props.children} </li>
      ) : (
        <li> {props.children} </li>
      )),
    marks: {
      strong: (props) => "" || <strong> {props.children} </strong>,
      em: (props) => "" || <em> {props.children} </em>,
      code: (props) => "" || <code> {props.children} </code>,
    },
  };

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

  console.log(author);

  return (
    <main className="relative aboutsection">
      <span id="aboutme"> </span>
      <Row>
        <Col xs={12} lg={6}>
          <AnimatedOnScroll animationIn="fadeInDown">
            <h1
              className="cursive text-8xl text-left text-green-100 mb-11"
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
                <div className="prose lg:prose-xl text-white ">
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
        <Col xs={12} lg={6}>
          <AnimatedOnScroll
            animationIn="fadeIn"
            className="relative lg:top-1/4"
          >
            <MyInfo
              userName={author.name}
              userImage={author.authorImage}
              userSkills={author.Skills}
            ></MyInfo>
          </AnimatedOnScroll>
        </Col>
      </Row>
    </main>
  );
}
