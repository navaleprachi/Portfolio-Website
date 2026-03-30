import { RiReactjsLine } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaGit,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiSupabase,
  SiOpenai,
  SiStripe,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Frontend */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 sm:px-8 py-6 sm:py-8 h-auto md:h-[420px] flex flex-col"
          >
            <div className="text-center text-2xl font-bold mb-10">Frontend</div>
            <div className="flex flex-wrap items-center justify-center gap-3 flex-1 content-start">
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <RiReactjsLine className="text-4xl text-cyan-400" /> React
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiTypescript className="text-4xl text-blue-500" /> TypeScript
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiNextdotjs className="text-4xl text-neutral-200" /> Next.js
              </motion.div>
              <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiJavascript className="text-4xl text-yellow-400" /> JavaScript
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaHtml5 className="text-4xl text-orange-500" /> HTML5
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaCss3Alt className="text-4xl text-blue-400" /> CSS3
              </motion.div>
            </div>
          </motion.div>

          {/* Backend & Data */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 sm:px-8 py-6 sm:py-8 h-auto md:h-[420px] flex flex-col"
          >
            <div className="text-center text-2xl font-bold mb-10">
              Backend & Data
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 flex-1 content-start">
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaNodeJs className="text-4xl text-green-500" /> Node.js
              </motion.div>
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiFastapi className="text-4xl text-teal-400" /> FastAPI
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiExpress className="text-4xl text-neutral-300" /> Express.js
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <TbApi className="text-4xl text-purple-400" /> REST API
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <BiLogoPostgresql className="text-4xl text-sky-500" />{" "}
                PostgreSQL
              </motion.div>
              <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiMongodb className="text-4xl text-green-400" /> MongoDB
              </motion.div>
              <motion.div
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiSupabase className="text-4xl text-emerald-400" /> Supabase
              </motion.div>
            </div>
          </motion.div>

          {/* AI & GenAI */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-white/5 backdrop-blur-sm px-6 sm:px-8 py-6 sm:py-8 h-auto md:h-[420px] flex flex-col"
          >
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="text-center text-2xl font-bold">AI & GenAI</div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium">
                NEW
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 flex-1 content-start">
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiOpenai className="text-4xl text-neutral-200" /> OpenAI
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaPython className="text-4xl text-yellow-400" /> Python
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <BiLogoPostgresql className="text-4xl text-sky-400" /> pgvector
              </motion.div>
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 sm:px-8 py-6 sm:py-8 h-auto md:h-[420px] flex flex-col"
          >
            <div className="text-center text-2xl font-bold mb-10">
              Tools & Platforms
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 flex-1 content-start">
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaGit className="text-4xl text-orange-500" /> Git
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaGithub className="text-4xl text-neutral-200" /> GitHub
                Actions
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaAws className="text-4xl text-yellow-500" /> AWS
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaDocker className="text-4xl text-blue-400" /> Docker
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <FaFigma className="text-4xl text-pink-400" /> Figma
              </motion.div>
              <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <SiStripe className="text-4xl text-indigo-400" /> Stripe
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
