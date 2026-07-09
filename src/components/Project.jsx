import { useState } from "react";
import ProjectDialog, { getValidSections } from "./projects/ProjectDialog.jsx";
import { useSanityData } from "../context/SanityDataContext.js";
import ImageWithSkeleton from "./ui/images/ImageWithSkeleton.js";
import { motion } from "motion/react";
import { LinkIcon, ArrowsOutSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { getSanityImage } from "../utils/imageOptimization";

export default function Project() {
  const { projects } = useSanityData();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const openProjectDialog = (project) => {
    setDialogData(project);
    setDialogOpen(true);
  };

  return (
    <main className="mt-4" id="mywork">
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          {projects &&
            projects.map((project, index) => {
              const hasSections = getValidSections(project).length > 0;
              const hasLink = Boolean(project.Links?.[0]);

              return (
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
                    <div className="z-10 absolute left-4 top-4 flex justify-between items-center">
                      <h3 className="project-title ">
                        <strong className="main-textColor group-hover:text-[#f2f2f2]">
                          {project.title}
                        </strong>
                      </h3>
                    </div>

                    {hasLink ? (
                      <a href={project.Links[0]} target="_blank" rel="noopener noreferrer">
                        <ImageWithSkeleton
                          src={getSanityImage("landscape", project.projectImage)}
                          alt={project.title}
                          className="w-full h-full scale-105 group-hover:blur-[2px]"
                        />
                      </a>
                    ) : (
                      <ImageWithSkeleton
                        src={getSanityImage("landscape", project.projectImage)}
                        alt={project.title}
                        className="w-full h-full"
                      />
                    )}

                    {hasLink && (
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
                            pointerEvents: hoveredIndex === index ? "auto" : "none",
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
                    )}

                    {hasSections && (
                      <button
                        type="button"
                        onClick={() => openProjectDialog(project)}
                        aria-label={`Open ${project.title} details`}
                        className="z-10 absolute right-4 bottom-4 border-[2px] rounded-full p-2"
                      >
                        <ArrowsOutSimpleIcon size={20} color="#f2f2f2" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </div>
        <ProjectDialog open={dialogOpen} onClose={handleDialogClose} project={dialogData} />
      </section>
    </main>
  );
}
