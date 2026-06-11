import aboutImg from "../../assets/AboutImage.jpeg";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
  { value: "10+", label: "Projects Built" },
];

const FOCUS = [
  {
    icon: <RiReactjsLine className="text-xl text-cyan-400" />,
    title: "Software Engineering",
    desc: "React, Next.js, TypeScript — building performant, accessible UIs at scale.",
  },
  {
    icon: <FaFigma className="text-xl text-pink-400" />,
    title: "UI/UX Design",
    desc: "Translating Figma designs into pixel-perfect interfaces with smooth interactions.",
  },
  {
    icon: <SiOpenai className="text-xl text-neutral-300" />,
    title: "AI Integration",
    desc: "Connecting LLMs, RAG pipelines, and vector databases into real-world products.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative mt-6 sm:mt-0">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 blur-2xl opacity-20 scale-110" />

              <img
                src={aboutImg}
                alt="Prachi Navale"
                className="relative rounded-3xl object-cover shadow-2xl w-64 h-72 sm:w-80 sm:h-[340px] lg:w-[360px] lg:h-[400px]"
              />

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 bg-neutral-900/90 border border-white/10 backdrop-blur-md rounded-2xl px-3 py-2 sm:px-5 sm:py-3 shadow-xl"
              >
                <p className="text-xs text-neutral-400 mb-0.5">Currently at</p>
                <p className="text-xs sm:text-sm font-semibold text-purple-300">
                  Nooon · Software Engineer
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-3/5 flex flex-col gap-6"
          >
            {/* Headline */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-neutral-100">
                I craft experiences that{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  perform as beautifully
                </span>{" "}
                as they look.
              </h2>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-3 text-neutral-400 text-sm leading-relaxed">
              <p>
                I'm a Software Engineer with a Master's in Information Systems
                from Northeastern University. I specialize in building scalable,
                responsive web applications at the intersection of design and
                engineering where clean code meets thoughtful UX.
              </p>
              <p>
                Currently at{" "}
                <span className="text-purple-300 font-medium">Nooon</span>, I'm
                shaping a B2B marketplace connecting hotels with influencer
                marketing building subscription flows, payment integrations, and
                data-driven UIs with React, Next.js, and Stripe. Before that, I
                delivered enterprise-grade interfaces for global clients at{" "}
                <span className="text-purple-300 font-medium">Infosys</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center"
                >
                  <p className="text-2xl font-bold text-purple-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="flex flex-col gap-3">
              {FOCUS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/3 hover:bg-white/5 hover:border-purple-500/20 transition-colors duration-300 p-4"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-200">
                      {item.title}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
