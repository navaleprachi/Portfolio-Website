import { CONTACT } from "../../constants";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="mt-10 text-center text-4xl">Contact</h1>
      <h2 className="mt-5 mb-10 text-center text-neutral-400">
        Feel free to reach out to me!
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
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
  );
};

export default Contact;
