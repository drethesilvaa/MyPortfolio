import { useState } from "react";
import AsDialog from "./feedback/dialog.jsx";
import ProjectGallery from "./projects/projectGallery.jsx";
import { useSanityData } from "../context/SanityDataContext.js";
import ImageWithSkeleton from "./ui/images/ImageWithSkeleton.js";
import { motion } from "motion/react";
import { LinkIcon } from "@phosphor-icons/react/dist/ssr";

export default function Project() {
  const { projects } = useSanityData();

  const [dialogOpen, setdialogOpen] = useState(null);
  const [dialogData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDialogClose = () => {
    setdialogOpen(false);
  };

  return (
    <main className="mt-4" id="mywork">
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          {projects &&
            projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 h-full relative overflow-hidden rounded-xl aspect-[4/3.6]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="project-image group">
                  {project.Links?.length > 0 ? (
                    project.Links[0]?.link && (
                      <>
                        <div className="z-10 absolute left-4 top-4 flex justify-between items-center">
                          <h3 className="project-title ">
                            <strong className="main-textColor group-hover:text-[#f2f2f2]">
                              {project.title}
                            </strong>
                          </h3>
                        </div>
                        <a
                          href={project.Links[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ImageWithSkeleton
                            src={project.projectImage}
                            alt={project.title}
                            className="w-full h-full scale-105 group-hover:blur-[2px]"
                          />
                        </a>
                        <motion.div
                          initial={{ opacity: 0, background: "transparent" }}
                          animate={
                            hoveredIndex === index
                              ? { opacity: 1, background: "rgb(0 0 0 / 0.5)" }
                              : { opacity: 0, background: "transparent" }
                          }
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="w-full h-full absolute top-0 left-0"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredIndex === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="items-center justify-center h-full flex"
                            style={{
                              pointerEvents:
                                hoveredIndex === index ? "auto" : "none",
                            }}
                          >
                            <a
                              href={project.Links[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-[2px] rounded-full p-2"
                              role="button"
                            >
                              <LinkIcon size={32} color="#f2f2f2" />
                            </a>
                          </motion.div>
                        </motion.div>
                      </>
                    )
                  ) : (
                    <>
                      <div className="z-10 absolute left-4 top-4 flex justify-between items-center">
                        <h3 className="project-title ">
                          <strong className="main-textColor">
                            {project.title}
                          </strong>
                        </h3>
                      </div>
                      <ImageWithSkeleton
                        src={project.projectImage}
                        alt={project.title}
                        className="w-full h-full"
                      />
                    </>
                  )}
                </div>
              </motion.div>
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
