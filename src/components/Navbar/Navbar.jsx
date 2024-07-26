import logo from "../../assets/Logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <a href="">Portfolio</a>
      <div className={styles.menuContainer}>
        <ul className={styles.menuItems}>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
