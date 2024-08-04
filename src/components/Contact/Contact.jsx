import { CONTACT } from "../../constants";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center text-4xl"
        >
          Contact
        </motion.h1>
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="mt-5 mb-10 text-center text-neutral-400"
        >
          Feel free to reach out to me!
        </motion.h2>
        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 2 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 2 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a
            href={`mailto:${CONTACT.email}?subject=Let's Discuss a Potential Opportunity&body=Hello, I would like to get in touch.`}
            className="border-b hover:text-purple-400"
          >
            {CONTACT.email}
          </a>
        </div>
        <div className="my-10 flex items-center justify-center">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/prachi.navale.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/prachi_navale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/prachi-navale-2a1971170/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
