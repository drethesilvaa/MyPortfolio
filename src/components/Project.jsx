import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Col, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useMediaQuery } from "react-responsive";

function isOdd(num) {
  return num % 2;
}

export default function Project() {
  const [projectData, setProject] = useState(null);
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const socialIconsStyle = { height: 45, width: 45 };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
              title,
              description,
              Language_Frameworks,
              date,
              projectType,
              "projectImage": image.asset->url,
              Links      
          }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <main className="" id="mywork">
      <span></span>
      <section>
        <AnimatedOnScroll animationIn="fadeInDown">
          <h1 className="cursive text-8xl main-titleColor text-green-100 mb-11">
            Work
          </h1>
        </AnimatedOnScroll>

        <section className="">
          <Row className="">
            {projectData &&
              projectData.map((project, index) => (
                <Col key={index} xs={12} md={6} lg={4} className="project">
                  <AnimatedOnScroll
                    animationIn={
                      isOdd(index) === 0
                        ? isBigScreen
                          ? "fadeIn"
                          : "fadeIn"
                        : isBigScreen
                        ? "fadeIn"
                        : "fadeIn"
                    }
                    // animationOut={isOdd(index) === 0 ? "fadeOut" : "fadeOut"}
                    className="relative"
                  >
                    <div className="project-content">
                      <p className="project-type main-titleColor">
                        {project.projectType}
                      </p>
                      <h3 className="project-title">
                        <strong className="main-textColor">
                          {project.title}
                        </strong>
                      </h3>
                      <div className="project-description w-full">
                        <p className="main-textColor">{project.description}</p>
                      </div>
                      <ul className="project-tech-list">
                        <li className="main-textColor">
                          {project.Language_Frameworks}
                        </li>
                      </ul>
                      <div className="project-links mt-3">
                        {project.Links.map((link, index) => (
                          <SocialIcon
                            key={index}
                            url={link}
                            className="mr-4"
                            target={"_blank"}
                            fgColor="#fff"
                            style={socialIconsStyle}
                          ></SocialIcon>
                        ))}
                      </div>
                    </div>
                    <div
                      className="project-image"
                      style={{
                        backgroundImage: "url(" + project.projectImage + ")",
                      }}
                    >
                      <img src={project.projectImage} alt={project.title}></img>
                    </div>
                  </AnimatedOnScroll>
                </Col>
              ))}
          </Row>
        </section>
      </section>
    </main>
  );
}
