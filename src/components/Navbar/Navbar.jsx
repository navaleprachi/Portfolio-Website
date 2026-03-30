import { useState, useEffect } from "react";
import logo from "../../assets/PNLogo.svg";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-64}
                  activeClass="!text-purple-400"
                  className="relative text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-200 cursor-pointer group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop GitHub button */}
            <div className="hidden md:block">
              <a
                href="https://github.com/navaleprachi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm hover:bg-purple-500/10 transition-colors duration-200"
                >
                  <FaGithub size={14} />
                  GitHub
                </motion.button>
              </a>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-neutral-300 hover:text-white transition-colors p-1"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-down panel */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-white/5 md:hidden"
            >
              <div className="px-6 py-5 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-64}
                      spy={true}
                      activeClass="text-purple-400"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b border-white/5 text-neutral-300 hover:text-purple-400 transition-colors duration-200 text-sm cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <span className="text-neutral-600">→</span>
                    </Link>
                  </motion.div>
                ))}

                {/* GitHub in mobile menu */}
                <a
                  href="https://github.com/navaleprachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-purple-500/40 text-purple-400 text-sm hover:bg-purple-500/10 transition-colors duration-200">
                    <FaGithub size={15} />
                    GitHub Profile
                  </button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
