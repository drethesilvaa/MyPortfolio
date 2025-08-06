import { useState } from "react";
import AsDialog from "./feedback/dialog.jsx";
import ProjectGallery from "./projects/projectGallery.jsx";
import { useSanityData } from "../context/SanityDataContext.js";
import ImageWithSkeleton from "./ui/images/ImageWithSkeleton.js";
import { motion } from "motion/react";

export default function Project() {
  const { projects } = useSanityData();

  const [dialogOpen, setdialogOpen] = useState(null);
  const [dialogData] = useState(null);

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
              >
                <div className="z-10 relative flex justify-between items-center">
                  <h3 className="project-title font-semibold ">
                    <strong className="main-textColor">{project.title}</strong>
                  </h3>
                </div>
                <div className="project-image">
                  {project.Links?.length > 0 ? (
                    project.Links[0]?.link && (
                      <a
                        href={project.Links[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ImageWithSkeleton
                          src={project.projectImage}
                          alt={project.title}
                          className="w-full h-full scale-105 hover:scale-110 transition-all active:scale-100"
                        />
                      </a>
                    )
                  ) : (
                    <ImageWithSkeleton
                      src={project.projectImage}
                      alt={project.title}
                      className="w-full h-full"
                    />
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
