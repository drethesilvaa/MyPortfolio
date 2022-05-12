import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Col, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import placeholderimage from "../images/bg-portfolio.jpg";

function isOdd(num) {
  return num % 2;
}

export default function Project() {
  const [projectData, setProject] = useState(null);

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
              Links      
          }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <main className="pt-72">
      <section>
        <span id="myprojects"></span>
        <AnimatedOnScroll animationIn="fadeInDown">
          <h1 className="cursive text-8xl text-left text-green-100 mb-11">
            My Projects
          </h1>
        </AnimatedOnScroll>

        <section className="">
          <Row className="">
            {projectData &&
              projectData.map((project, index) => (
                <Col key={index} xs={12} className="project">
                  <AnimatedOnScroll
                    animationIn={
                      isOdd(index) === 0 ? "fadeInRight" : "fadeInLeft"
                    }
                    animationOut={isOdd(index) === 0 ? "fadeOut" : "fadeOut"}
                  >
                    <div className="project-content">
                      <p className="project-type text-green-100">
                        {" "}
                        {project.projectType}
                      </p>
                      <h3 className="project-title">
                        <strong>
                          <a
                            className="text-white"
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.title}
                          </a>
                        </strong>
                      </h3>
                      <div className="project-description w-full md:w-6/12">
                        <p className="text-white">{project.description}</p>
                      </div>
                      <ul className="project-tech-list">
                        <li className="text-white">
                          {project.Language_Frameworks}
                        </li>
                      </ul>
                      <div className="project-links mt-3">
                        {project.Links.map((link, index) => (
                          <SocialIcon
                            url={link}
                            className="mr-4"
                            target={"_blank"}
                            fgColor="#fff"
                            style={socialIconsStyle}
                          ></SocialIcon>
                        ))}
                      </div>
                    </div>
                    <div className="project-image">
                      <img src={placeholderimage} alt="descricao"></img>
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
