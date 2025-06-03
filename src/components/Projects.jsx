import React from 'react';
import ProjectCard from './ProjectCard'; // Sub-component
import styles from './Projects.module.css'; // Adjust the path as necessary


const projectsData = [
  {
    title: 'Find your pro',
    description: 'A full-stack e-commerce application with user authentication, product catalog, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    imageUrl: 'https://via.placeholder.com/600x400/007bff/ffffff?text=Project+1', // Replace with your project image
    liveUrl: 'https://www.example.com/project1',
    githubUrl: 'https://github.com/sukhpreetsvirdi/Find-Your-Pro',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A responsive social media dashboard for managing posts, analytics, and user interactions.',
    technologies: ['React', 'Firebase', 'Redux', 'Chart.js'],
    imageUrl: 'https://via.placeholder.com/600x400/007bff/ffffff?text=Project+2',
    liveUrl: 'https://www.example.com/project2',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Task Management App',
    description: 'A simple yet powerful task management application with drag-and-drop functionality and real-time updates.',
    technologies: ['Vue.js', 'Node.js', 'Socket.IO'],
    imageUrl: 'https://via.placeholder.com/600x400/007bff/ffffff?text=Project+3',
    liveUrl: 'https://www.example.com/project3',
    githubUrl: 'https://github.com/yourusername/project3',
  },
  // Add more projects
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;