import React, { useState } from 'react';
import styles from './Contact.module.css'; // Adjust the path as necessary

// **IMPORTANT:** Adjust these import paths based on your actual file structure
// Assuming images are in src/assets/images
import linkedinLogo from '../../src/components/images/download (1).png'; // Rename download (1).png for clarity
import githubLogo from '../../src/components/images/scalable-vector-graphics-github-computer-icons-logo-computer-file-png-favpng-GRYRADbE9437SkThu9hB2QtbQ.jpg'; // Rename the long github image filename for clarity

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // To show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p className={styles.subtitle}>
        Have a question or want to work together? Feel free to reach out!
      </p>
      <div className={styles.contactContent}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>

        <div className={styles.contactInfo}>
          <h3>Contact Details</h3>
          <p><i className="fas fa-envelope"></i> Sukhpreetsvirdi@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91-7064615300</p>
          <p><i className="fas fa-map-marker-alt"></i> Rourkela, Odisha, India</p>
          <div className={styles.socialLinks}>
            {/* Removed the <i> tag wrapper and just used the <img> */}
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/sukhpreetsvirdi" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" className={styles.socialIcon} />
            </a>
            {/* If you also want Font Awesome icons for other social links, add them like:
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;