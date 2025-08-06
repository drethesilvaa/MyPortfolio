import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import AsDialog from "./feedback/dialog.jsx";
import ProjectGallery from "./projects/projectGallery.jsx";
import { useSanityData } from "../context/SanityDataContext.js";
import ImageWithSkeleton from "./ui/images/ImageWithSkeleton.js";

export default function Project() {
  const { projects } = useSanityData();

  const [dialogOpen, setdialogOpen] = useState(null);
  const [dialogData] = useState(null);

  const handleDialogClose = () => {
    setdialogOpen(false);
  };

  const socialIconsStyle = { height: 45, width: 45 };

  return (
    <main className="mt-4" id="mywork">
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          {projects &&
            projects.map((project, index) => (
              <div className="p-4 h-full relative overflow-hidden rounded-xl aspect-[4/3.6]">
                <div className="z-10 relative flex justify-between items-center">
                  {/* <p className="project-type main-titleColor">
                    {project.projectType}
                  </p> */}
                  <h3 className="project-title font-semibold ">
                    <strong className="main-textColor">{project.title}</strong>
                  </h3>
                  {/* <div className="project-description w-full">
                    <p className="main-textColor">{project.description}</p>
                  </div> */}
                  {/* <ul className="project-tech-list">
                    <li className="main-textColor">
                      {project.Language_Frameworks}
                    </li>
                  </ul> */}
                  <div className="project-links mt-3">
                    {project.Links?.map((link, index) => (
                      <SocialIcon
                        key={index}
                        url={link}
                        className="mr-4 shadow-sm rounded-full hover:scale-105 active:scale-95 transition-all"
                        target={"_blank"}
                        fgColor="#131417"
                        bgColor="#fcfcfc"
                        style={socialIconsStyle}
                      ></SocialIcon>
                    ))}
                    {/* {project.gallery && (
                      <div
                        onClick={() => handleDialogOpen(project.title)}
                        className="galleryOpen"
                      >
                        <CollectionsIcon></CollectionsIcon>
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="project-image">
                  <ImageWithSkeleton
                    src={project.projectImage}
                    alt={project.title}
                    className={"w-full h-full"}
                  />
                </div>
              </div>
            ))}
        </div>
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
    </main>
  );
}
