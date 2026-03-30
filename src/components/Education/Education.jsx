import { useState } from "react";
import { EDUCATION } from "../../constants";
import { motion } from "framer-motion";

const CARD_ACCENTS = [
  {
    gradient: "from-purple-600/30 via-pink-600/10 to-transparent",
    border: "border-purple-500/30",
    dot: "bg-purple-400",
    tag: "border-purple-500/30 text-purple-300 bg-purple-500/10",
  },
  {
    gradient: "from-cyan-600/30 via-blue-600/10 to-transparent",
    border: "border-cyan-500/30",
    dot: "bg-cyan-400",
    tag: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10",
  },
];

const EducationCard = ({ education, index }) => {
  const [flipped, setFlipped] = useState(false);
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      style={{ perspective: 1200 }}
      className="w-full md:w-[380px] h-[400px] sm:h-[440px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, type: "spring", stiffness: 80, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* ── Front ── */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 rounded-2xl border ${accent.border} bg-neutral-900/60 overflow-hidden flex flex-col`}
        >
          {/* Gradient accent strip */}
          <div className={`h-32 bg-gradient-to-br ${accent.gradient} flex items-center justify-center`}>
            <div className="w-20 h-20 rounded-2xl bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <img
                src={education.logo}
                alt={education.university}
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col justify-between p-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-100 leading-snug mb-1">
                {education.university}
              </h3>
              <p className="text-sm text-neutral-400 leading-snug">
                {education.degree}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-mono text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full">
                {education.year}
              </span>
              <span className="text-xs text-neutral-500 flex items-center gap-1">
                Tap to explore
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </div>
          </div>
        </div>

        {/* ── Back ── */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className={`absolute inset-0 rounded-2xl border ${accent.border} bg-neutral-900/80 flex flex-col p-6 overflow-hidden`}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-neutral-200">
              {education.university}
            </h4>
            <span className="text-xs text-neutral-500">← Tap to flip</span>
          </div>

          <ul className="flex-1 space-y-2.5 overflow-y-auto pr-1">
            {education.description.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-xs text-neutral-400 leading-relaxed">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.dot} shrink-0`} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Education
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-2 sm:px-0">
          {EDUCATION.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
