import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950 overflow-hidden">
      {/* Purple blob — top left */}
      <motion.div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Cyan blob — bottom right */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-700/15 blur-[120px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Pink accent — center top */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-pink-700/10 blur-[100px]"
        animate={{
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.5, 0.8, 0.4, 0.5],
        }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
