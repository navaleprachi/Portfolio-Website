import { HERO_CONTENT } from "../../constants";
import profileImage from "../../assets/ProfileImage2.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Engineer",
    "Frontend Developer",
    "UI/UX Designer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
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
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:items-start">
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
                style={{ height: "40px", display: "inline-block" }}
              >
                {text}
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="mt-1 my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                {HERO_CONTENT}
              </motion.p>
              <a
                href="https://drive.google.com/file/d/1YhiKI1YgTmJukPKipeVLUNUpHtYJLM5s/view?usp=sharing"
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
