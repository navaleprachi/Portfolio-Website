import { EDUCATION } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Education
        </motion.h2>
        <div>
          {EDUCATION.map((education, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 lg:flex lg:flex-col lg:items-center"
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {education.year}
                </p>
                <img
                  src={education.logo}
                  width={100}
                  height={100}
                  className="mt-5 mb-5"
                  alt={education.university}
                />
              </motion.div>

              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h4 className="mb-2 font-bold">{education.university}</h4>
                <h6 className="mb-2 text-sm font-semibold text-purple-200">
                  {education.degree}
                </h6>

                <p className="mb-4 text-neutral-400">{education.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
