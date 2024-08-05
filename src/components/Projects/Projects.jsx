import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <ul className="mb-4 text-neutral-400 list-disc pl-5">
                  {project.description.map((point, index) => (
                    <li key={index} className="pl-2">
                      {point}
                    </li>
                  ))}
                </ul>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                  >
                    {tech}
                  </span>
                ))}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="block mt-8 text-sm text-blue-500 bg-transparent border-2 border-blue-500 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                    Click to view the project
                  </button>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
