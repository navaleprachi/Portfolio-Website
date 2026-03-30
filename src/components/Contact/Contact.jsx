import { CONTACT } from "../../constants";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    handle: "prachi-navale",
    href: "https://www.linkedin.com/in/prachi-navale/",
    color: "hover:border-blue-500/50 hover:text-blue-400",
  },
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    handle: "navaleprachi",
    href: "https://github.com/navaleprachi",
    color: "hover:border-neutral-400/50 hover:text-neutral-200",
  },
  {
    icon: <FaInstagram size={22} />,
    label: "Instagram",
    handle: "prachi_navale",
    href: "https://www.instagram.com/prachi_navale/",
    color: "hover:border-pink-500/50 hover:text-pink-400",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="pb-20">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Contact
        </motion.h2>

        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 sm:gap-10">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col gap-3"
          >
            <h3 className="text-3xl lg:text-4xl font-semibold text-neutral-100 leading-tight">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                great together
              </span>
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md mx-auto">
              Whether it's a new project, a freelance opportunity, or just a
              hello — my inbox is always open.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${CONTACT.email}?subject=Let's Work Together&body=Hello Prachi,`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-0.5">Email me at</p>
                <p className="text-neutral-200 text-sm font-medium">
                  {CONTACT.email}
                </p>
              </div>
            </div>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-purple-400 text-lg"
            >
              →
            </motion.span>
          </motion.a>

          {/* Social cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SOCIAL_LINKS.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 text-neutral-400 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
                <div className="text-center">
                  <p className="text-sm font-medium text-neutral-300">
                    {social.label}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    @{social.handle}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location + availability */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 text-xs text-neutral-500"
          >
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt size={11} className="text-purple-500" />
              {CONTACT.address}
            </span>
            <span className="w-px h-3 bg-neutral-700" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
