import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import AsDialog from "./feedback/dialog.jsx";
import ProjectGallery from "./projects/projectGallery.jsx";
import CollectionsIcon from "@mui/icons-material/Collections";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "./carousel/Carousel.js";
import { useSanityData } from "../context/SanityDataContext.js";
import ImageWithSkeleton from "./ui/images/ImageWithSkeleton.js";

export default function Project() {
  const {
    projects,
  } = useSanityData();

  const [dialogOpen, setdialogOpen] = useState(null);
  const [dialogData, setdialogData] = useState(null);

  const handleDialogOpen = (title) => {
    setdialogOpen(true);

    let data = projects.filter((i) => i.title === title);
    setdialogData(data[0]);
  };

  const handleDialogClose = () => {
    setdialogOpen(false);
  };

  const socialIconsStyle = { height: 45, width: 45 };

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
          <Carousel>
            {projects &&
              projects.map((project, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="p-4 h-full">
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
                      {project.Links?.map((link, index) => (
                        <SocialIcon
                          key={index}
                          url={link}
                          className="mr-4"
                          target={"_blank"}
                          fgColor="#fff"
                          style={socialIconsStyle}
                        ></SocialIcon>
                      ))}
                      {project.gallery && (
                        <div
                          onClick={() => handleDialogOpen(project.title)}
                          className="galleryOpen"
                        >
                          <CollectionsIcon></CollectionsIcon>
                        </div>
                      )}
                    </div>
                    <div
                      className="project-image"
                      style={{
                        backgroundImage: "url(" + project.projectImage + ")",
                      }}
                    >
                      <ImageWithSkeleton
                        src={project.projectImage}
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Carousel>
          {dialogData && (
            <AsDialog
              open={dialogOpen}
              close={handleDialogClose}
              title={dialogData && dialogData.title}
              actions={""}
              topRight={""}
            >
              <ProjectGallery data={dialogData}></ProjectGallery>
            </AsDialog>
          )}
        </section>
      </section>
    </main>
  );
}
