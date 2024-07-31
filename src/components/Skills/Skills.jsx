import { RiReactjsLine } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaGit,
  FaGithub,
  FaBug,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiVisualstudiocode,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { useState } from "react";
import { animate, motion } from "framer-motion";

const Skills = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <section id="skills">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="border rounded-2xl border-neutral-500 px-10 py-10"
          >
            <div className="text-center text-2xl font-bold mb-10">Frontend</div>
            <div
              className="flex flex-wrap items-center justify-center gap-4"
              style={{ maxWidth: 500 }}
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <RiReactjsLine className="text-4xl text-cyan-700" /> React
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaHtml5 className="text-4xl text-orange-700" /> HTML
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaCss3Alt className="text-4xl text-blue-700" /> CSS
              </motion.div>
              <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiJavascript className="text-4xl text-yellow-400" /> JavaScript
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiTypescript className="text-4xl text-blue-600" /> TypeScript
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="border rounded-2xl border-neutral-500 px-10 py-10"
          >
            <div className="text-center text-2xl font-bold mb-10">Backend</div>
            <div
              className="flex flex-wrap items-center justify-center gap-4"
              style={{ maxWidth: 500 }}
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaPython className="text-4xl text-[#3776AB]" /> Python
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaJava className="text-4xl text-[#007396]" /> Java
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiCplusplus className="text-4xl text-[#00599C]" /> C++
              </motion.div>
              <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaNodeJs className="text-4xl text-green-500" /> Node.js
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaNodeJs className="text-4xl text-green-600" /> Express.js
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="border rounded-2xl border-neutral-500 px-10 py-10"
          >
            <div className="text-center text-2xl font-bold mb-10">Database</div>
            <div
              className="flex flex-wrap items-center justify-center gap-4"
              style={{ maxWidth: 500 }}
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiMysql className="text-4xl text-blue-500" /> MySql
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiMongodb className="text-4xl text-green-500" /> MongoDB
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <BiLogoPostgresql className="text-4xl text-sky-700" />{" "}
                PostgreSQL
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="border rounded-2xl border-neutral-500 px-10 py-10"
          >
            <div className="text-center text-2xl font-bold mb-10">
              Other Tools
            </div>
            <div
              className="flex flex-wrap items-center justify-center gap-4"
              style={{ maxWidth: 500 }}
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaFigma className="text-4xl text-[#F24E1E]" /> Figma
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaGit className="text-4xl text-[#F05032]" /> Git
              </motion.div>
              <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaGithub className="text-4xl" /> GitHub
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiVisualstudiocode className="text-4xl text-[#007ACC]" /> VS
                Code
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
