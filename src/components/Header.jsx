import React, { useState } from 'react';
import styles from './Header.module.css'; // Adjust the path as necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For responsive menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">Sukhpreet Singh</a> {/* Or your logo image */}
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Add social media icons here if desired, possibly as a separate component */}
        </ul>
      </nav>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {/* You can use a hamburger icon here */}
        ☰
      </button>
    </header>
  );
};

export default Header;