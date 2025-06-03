import React from 'react';

// import aboutImage from '../../assets/about-us.jpg'; // Optional: if you have an image for this section
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            Hello! I'm Sukhpreet Singh, a dedicated and innovative web developer with x years of experience in crafting high-quality web solutions. My journey in development started with a fascination for how things work on the internet, and it has evolved into a passion for building intuitive and impactful user experiences.
          </p>
          <p>
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and am always eager to learn new technologies and frameworks. I thrive in collaborative environments and enjoy tackling complex challenges to deliver robust and scalable applications.
          </p>
          <p>
            Outside of coding, I enjoy [mention a hobby or two, e.g., hiking, reading, playing guitar], which helps me stay creative and balanced.
          </p>
          <a href="" download className={styles.resumeBtn}>Download Resume</a>
        </div>
        {/* Optional: Add an image here */}
        {/* <div className={styles.aboutImage}>
          <img src={aboutImage} alt="About Me" />
        </div> */}
      </div>
    </section>
  );
};

export default About;