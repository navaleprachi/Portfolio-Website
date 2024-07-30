import { useState } from "react";
import logo from "../../assets/Logo.png";
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
      <a href="#" className={styles.logo}>
        Portfolio
      </a>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`${styles.menuContainer} ${
          isMenuOpen ? styles.showMenu : ""
        }`}
      >
        <ul className={styles.menuItems}>
          <li onClick={closeMenu} className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li onClick={closeMenu} className="cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li onClick={closeMenu} className="cursor-pointer">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li onClick={closeMenu} className="cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li onClick={closeMenu} className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li onClick={closeMenu} className="cursor-pointer">
            <a
              href="https://github.com/navaleprachi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 lg:ml-20 lg:border lg:border-gray-400 lg:rounded-xl lg:text-purple-400"
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
