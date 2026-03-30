import { useState } from "react";
import { EXPERIENCES } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="experience">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-0 px-0">
          {/* Tab list */}
          <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-neutral-800 shrink-0">
            {/* Sliding active indicator */}
            <motion.div
              className="hidden md:block absolute left-0 w-0.5 bg-purple-400 rounded-full"
              animate={{
                top: `${active * 56}px`,
                height: "56px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {EXPERIENCES.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`relative px-4 md:px-6 py-3 md:py-4 text-sm text-left whitespace-nowrap md:whitespace-normal transition-colors duration-200 border-b-2 md:border-b-0 md:border-l-2
                  ${
                    active === index
                      ? "text-purple-400 border-purple-400 bg-purple-500/5"
                      : "text-neutral-500 border-transparent hover:text-neutral-200 hover:bg-white/5"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1 md:pl-12 pt-4 md:pt-0 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
              >
                {/* Role + company + year */}
                <div className="flex items-center gap-4 mb-1 flex-wrap">
                  <div className="w-9 h-9 rounded-lg overflow-hidden bg-neutral-800 flex items-center justify-center shrink-0">
                    <img
                      src={EXPERIENCES[active].logo}
                      alt={EXPERIENCES[active].company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-100">
                      {EXPERIENCES[active].role}{" "}
                      <span className="text-purple-400">
                        @ {EXPERIENCES[active].company}
                      </span>
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5 font-mono tracking-wide">
                      {EXPERIENCES[active].year}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="mt-5 space-y-3">
                  {EXPERIENCES[active].description.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-neutral-400 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {EXPERIENCES[active].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-purple-500/30 text-purple-300 bg-purple-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
