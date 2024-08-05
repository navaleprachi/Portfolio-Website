import React from "react";
import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 lg:flex lg:flex-col lg:items-center"
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
                <img
                  src={experience.logo}
                  width={80}
                  height={80}
                  className="mt-5 mb-5"
                  alt={experience.university}
                />
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-200">
                    {experience.company}
                  </span>
                </h6>
                <ul className="mb-4 text-neutral-400 list-disc pl-5">
                  {experience.description.map((point, index) => (
                    <li key={index} className="pl-2">
                      {point}
                    </li>
                  ))}
                </ul>
                {experience.technologies.map((tech, index) => (
                  <span className="mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
