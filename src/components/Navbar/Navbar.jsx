import { useState } from "react";
import logo from "../../assets/PNLogo.svg";
import styles from "./navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navBar}>
      <Link to="home" smooth={true} duration={500}>
        <img className="cursor-pointer" src={logo} alt="Logo" />
      </Link>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`${styles.menuContainer} ${
          isMenuOpen ? styles.showMenu : ""
        }`}
      >
        <ul className={styles.menuItems}>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-purple-400"
          >
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-purple-400"
          >
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-purple-400"
          >
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-purple-400"
          >
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-purple-400"
          >
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-purple-400"
          >
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li onClick={closeMenu} className="cursor-pointer mr-5">
            <a
              href="https://github.com/navaleprachi"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 lg:px-5 lg:border-2 lg:border-purple-400 lg:rounded-xl lg:text-purple-400 hover:text-white hover:bg-purple-400"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
