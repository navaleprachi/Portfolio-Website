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

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isHovered
              ? "perspective(1000px) rotateX(10deg) rotateY(10deg) scale3d(1.1, 1.1, 1.1)"
              : "none",
            transition: "transform 0.3s ease",
          }}
        >
          <div className="border rounded-2xl border-neutral-500 px-10 py-10">
            <div className="text-center text-2xl font-bold mb-10">Frontend</div>
            <div
              className="flex flex-wrap items-center justify-center gap-4"
              style={{ maxWidth: 500 }}
            >
              <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-4xl text-cyan-700" /> React
              </div>
              <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-4xl text-orange-700" /> HTML
              </div>
              <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-4xl text-blue-700" /> CSS
              </div>
              <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-4xl text-yellow-400" /> JavaScript
              </div>
              <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-4xl" /> TypeScript
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl border-neutral-500 px-10 py-10">
          <div className="text-center text-2xl font-bold mb-10">Backend</div>
          <div
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ maxWidth: 500 }}
          >
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <FaPython className="text-4xl text-[#3776AB]" /> Python
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <FaJava className="text-4xl text-[#007396]" /> Java
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <SiCplusplus className="text-4xl text-[#00599C]" /> C++
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-4xl text-green-500" /> Node.js
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-4xl text-green-600" /> Express.js
            </div>
          </div>
        </div>
        <div className="border rounded-2xl border-neutral-500 px-10 py-10">
          <div className="text-center text-2xl font-bold mb-10">Database</div>
          <div
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ maxWidth: 500 }}
          >
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <SiMysql className="text-4xl text-blue-500" /> MySql
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <SiMongodb className="text-4xl text-green-500" /> MongoDB
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <BiLogoPostgresql className="text-4xl text-sky-700" /> PostgreSQL
            </div>
          </div>
        </div>
        <div className="border rounded-2xl border-neutral-500 px-10 py-10">
          <div className="text-center text-2xl font-bold mb-10">
            Other Tools
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ maxWidth: 500 }}
          >
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <FaFigma className="text-4xl text-[#F24E1E]" /> Figma
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <FaGit className="text-4xl text-[#F05032]" /> Git
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <FaGithub className="text-4xl" /> GitHub
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
              <SiVisualstudiocode className="text-4xl text-[#007ACC]" /> VS Code
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
