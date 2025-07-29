import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

import linkedinLogo from '../../src/components/images/download (1).png';
import githubLogo from '../../src/components/images/scalable-vector-graphics-github-computer-icons-logo-computer-file-png-favpng-GRYRADbE9437SkThu9hB2QtbQ.jpg';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_2gicl4i',
      'template_6gtn83c',
      formRef.current,
      'qPsCatCCEjHfW6iu1'
    )
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          company: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p className={styles.subtitle}>Have a question or want to work together? Feel free to reach out!</p>
      <div className={styles.contactContent}>
        <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company (Optional)</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
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
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/sukhpreetsvirdi" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
