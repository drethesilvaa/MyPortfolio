import { useState, useEffect, useMemo } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { XIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import ImageWithSkeleton from "../ui/images/ImageWithSkeleton";
import { getSanityImage } from "../../utils/imageOptimization";

export function getValidSections(project) {
  if (!project) return [];
  return (project.sections || [])
    .map((s) => ({
      ...s,
      images: (s.images || []).filter((img) => img?.asset?.url),
    }))
    .filter((s) => s.title && s.images.length > 0);
}

export default function ProjectDialog({ open, onClose, project }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery("(max-width: 767px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = useMemo(() => getValidSections(project), [project]);
  const active = sections[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [project?._id]);

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      fullScreen={fullScreen}
      aria-labelledby="project-dialog-title"
      PaperProps={{
        sx: {
          borderRadius: fullScreen ? 0 : "24px",
          backgroundColor: "#fcfcfc",
          backgroundImage: "none",
          height: fullScreen ? "100%" : "85vh",
          overflow: "hidden",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="close"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 20,
          backgroundColor: "rgba(0,0,0,0.05)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
        }}
      >
        <XIcon size={20} />
      </IconButton>

      <div className="flex flex-col md:flex-row h-full">
        <aside className="md:w-72 lg:w-80 flex-shrink-0 p-6 md:p-8 md:h-full md:overflow-y-auto border-b md:border-b-0 md:border-r border-black/10 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest opacity-60 main-textColor">
            {project.projectType}
            {project.date && ` · ${new Date(project.date).getFullYear()}`}
          </p>
          <p
            id="project-dialog-title"
            role="heading"
            aria-level={2}
            className="text-3xl font-bold main-titleColor"
          >
            {project.title}
          </p>
          {project.description && (
            <p className="text-sm leading-relaxed main-textColor">
              {project.description}
            </p>
          )}
          {project.Language_Frameworks && (
            <div className="flex flex-wrap gap-2">
              {project.Language_Frameworks.split(",").map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full main-textColor"
                  style={{ backgroundColor: theme.menuBg }}
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          )}

          {sections.length > 1 && (
            <nav
              className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible -mx-2 px-2"
              aria-label="Project sections"
            >
              {sections.map((s, i) => (
                <button
                  key={s._key || i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative text-left whitespace-nowrap px-4 py-2 rounded-full md:rounded-xl text-sm transition-colors ${
                    i === activeIndex ? "font-semibold" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {i === activeIndex && (
                    <motion.span
                      layoutId="active-section-pill"
                      className="absolute inset-0 rounded-full md:rounded-xl -z-10"
                      style={{ backgroundColor: theme.menuBg }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="main-titleColor">{s.title}</span>
                </button>
              ))}
            </nav>
          )}

          {project.Links?.[0] && (
            <a
              href={project.Links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: theme.mainTitleColor }}
            >
              Visit project <ArrowSquareOutIcon size={16} />
            </a>
          )}
        </aside>

        <section className="flex-1 overflow-y-auto p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {active?.description && (
                <p className="text-sm main-textColor opacity-80">
                  {active.description}
                </p>
              )}
              {active?.images?.map((img, i) => (
                <figure
                  key={img._key || i}
                  className="rounded-2xl overflow-hidden shadow-sm"
                >
                  <ImageWithSkeleton
                    src={getSanityImage("hero", img)}
                    alt={img.alt || `${project.title} — ${active.title}`}
                    className="w-full h-auto object-cover"
                    skeletonMaxHeight={400}
                  />
                  {img.cap && (
                    <figcaption className="text-center text-xs main-textColor opacity-60 py-2">
                      {img.cap}
                    </figcaption>
                  )}
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </Dialog>
  );
}
