import { HERO_CONTENT } from "../../constants";
import profileImage from "../../assets/ProfileImage2.svg";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <section id="home">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-6xl"
              >
                Hi, I am Prachi Navale
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Frontend Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                {HERO_CONTENT}
              </motion.p>
              <a
                href="https://drive.google.com/file/d/1cm2pt9NmSmyFFWo4QuJQw7LLbn_CICQr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 mt-4 text-white bg-purple-500 rounded hover:bg-purple-700">
                  View or Download Resume
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:p-8 ml-auto">
            <div className="flex justify-center lg:justify-end">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{ height: "500px" }}
                src={profileImage}
                alt="Profile Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
