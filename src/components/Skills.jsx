import React from 'react';
import styles from './Skills.module.css'; // Adjust the path as necessary

const skillsData = [
  { name: 'HTML5', icon: 'fab fa-html5' }, // Use Font Awesome or similar for icons
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'React.js', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Express.js', icon: 'fas fa-server' }, // Example for backend
  { name: 'MongoDB', icon: 'fas fa-database' }, // Example for database
  { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
  { name: 'Figma', icon: 'fab fa-figma' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.sectionTitle}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div className={styles.skillItem} key={index}>
            <i className={skill.icon}></i> {/* Replace with actual icons or SVGs */}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;