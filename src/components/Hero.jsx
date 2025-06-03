import React from 'react';
import styles from './Hero.module.css'; // Adjust the path as necessary
// You'll need to import your profile image
import profilePic from '../../src/components/images/IMG_20250213_213124.jpg';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1>Hi, I'm <span>Sukhpreet Singh</span></h1>
        <p className={styles.tagline}>A passionate Web Developer specializing in creating dynamic and responsive web applications.</p>
        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.primaryBtn}>View My Work</a>
          <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
        </div>
      </div>
      <div className={styles.heroImage}>
        {/* Replace with your actual profile image */}
       <img src={profilePic} alt="My Profile" />
      </div>
    </section>
  );
};

export default Hero;