import { HERO_CONTENT } from "../../constants";
import profileImage from "../../assets/ProfileImage2.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  const headingWords = "Hi, I am Prachi Navale".split(" ");
  const wordVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Engineer", "Software Engineer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta(100);
    } else {
      setDelta(200 - Math.random() * 50);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200 - Math.random() * 50);
    }
  };

  return (
    <section id="home">
      <div className="min-h-[calc(100vh-7rem)] flex items-center border-b border-neutral-900 pb-4">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* ── Left column ── */}
          <div className="flex-1 flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
            {/* Greeting */}
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-mono tracking-widest text-purple-400 uppercase"
            >
              Hello, World 👋
            </motion.p> */}

            {/* Name — word by word */}
            <motion.h1
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-semibold leading-tight text-neutral-100"
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-px bg-purple-500" />
              <span className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 bg-clip-text text-2xl tracking-tight text-transparent font-medium min-w-[260px]">
                {text}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="max-w-lg text-sm text-neutral-400 leading-relaxed"
            >
              Specializing in React, Next.js & TypeScript — I build interfaces
              that are fast, accessible, and delightful to use. From payment
              flows to AI-powered products, I turn complex ideas into polished
              digital experiences. Currently shaping a B2B marketplace at{" "}
              <span className="text-purple-300 font-medium">Nooon</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              {/* Resume button */}
              <a
                href="https://drive.google.com/file/d/1pCWShGU1MxD0zjWyPTD4BXZWLiyLd9wG/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition-colors duration-200 shadow-lg shadow-purple-900/40"
                >
                  <span>Download Resume</span>
                  <motion.span className="group-hover:translate-y-0.5 transition-transform duration-200">
                    <FaDownload size={13} />
                  </motion.span>
                </motion.button>
              </a>

              {/* View Work button */}
              <Link to="projects" smooth={true} duration={600}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-600 text-neutral-300 text-sm font-medium hover:border-purple-500 hover:text-purple-300 transition-colors duration-200"
                >
                  View My Work
                  <span>→</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex items-center gap-4 mt-1"
            >
              <a
                href="https://github.com/navaleprachi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-200 transition-colors duration-200"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/prachi-navale/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-blue-400 transition-colors duration-200"
              >
                <FaLinkedin size={20} />
              </a>
              <span className="w-px h-4 bg-neutral-700" />
              <span className="text-xs text-neutral-600 font-mono">
                Open to work
              </span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>
          </div>

          {/* ── Right column — image ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow blobs — hidden on mobile to avoid overflow */}
              <div className="hidden sm:block absolute top-10 left-10 w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-purple-600/25 blur-3xl" />
              <div className="hidden sm:block absolute bottom-10 right-10 w-36 h-36 lg:w-48 lg:h-48 rounded-full bg-pink-600/20 blur-3xl" />

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-110" />

              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={profileImage}
                alt="Prachi Navale"
                className="relative drop-shadow-2xl h-56 sm:h-72 lg:h-[480px] w-auto"
              />

              {/* Floating badge */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                className="absolute bottom-8 -left-6 bg-neutral-900/90 border border-white/10 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-neutral-400">Currently building</p>
                <p className="text-sm font-semibold text-purple-300">B2B Marketplace @ Nooon</p>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
