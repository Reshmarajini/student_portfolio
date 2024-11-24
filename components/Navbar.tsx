
"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="" className={styles.logo}>
          Student Portfolio Site
        </Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        <div
          className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
        >
          <Link href=""  className={styles.navLink}>
           Home
          </Link>
        
          <Link href="" className={styles.navLink}>
            About
          </Link>
          <Link href="" className={styles.navLink}>
            Projects
          </Link>
          <Link href="" className={styles.navLink}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
