import { PROJECTS } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + PROJECTS.length) % PROJECTS.length);
  };

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const project = PROJECTS[current];

  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-16">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h2>

        <div className="relative flex items-center gap-2 sm:gap-4">
          {/* Prev arrow */}
          <button
            onClick={() => paginate(-1)}
            className="flex-shrink-0 p-2 sm:p-3 rounded-full border border-neutral-700 text-neutral-400 hover:border-purple-500 hover:text-purple-400 transition-colors duration-200"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Slide */}
          <div className="overflow-hidden flex-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center"
              >
                {/* Image — browser mockup frame */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="w-full max-w-lg rounded-xl overflow-hidden border border-neutral-700/60 shadow-2xl shadow-purple-900/20">
                    {/* Browser chrome */}
                    <div className="bg-neutral-800 px-4 py-2.5 flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    {/* Image area */}
                    <div className="aspect-video bg-neutral-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5">
                  <span className="text-sm font-mono text-purple-400 tracking-widest">
                    {String(current + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                  </span>

                  <h3 className="text-3xl font-semibold text-neutral-100 leading-tight">
                    {project.title}
                  </h3>

                  <ul className="text-neutral-400 text-sm leading-relaxed space-y-2 list-disc pl-4">
                    {project.description.slice(0, 2).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border border-purple-500/40 text-purple-300 bg-purple-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-fit">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-2 px-6 py-2 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200"
                    >
                      View Project →
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => paginate(1)}
            className="flex-shrink-0 p-2 sm:p-3 rounded-full border border-neutral-700 text-neutral-400 hover:border-purple-500 hover:text-purple-400 transition-colors duration-200"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-purple-400"
                  : "w-2 bg-neutral-600 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
