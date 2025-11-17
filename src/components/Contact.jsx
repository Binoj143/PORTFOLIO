import React from 'react';
import '../styles/Contact.css';

const socialLinks = [
  { href: 'mailto:binojbc3315@gmail.com', alt: 'Email', icon: 'envelope' },
  { href: 'https://www.linkedin.com/in/binoj-b-chandran-a663b9248', alt: 'LinkedIn', icon: 'linkedin-in' }
];

const Contact = React.memo(() => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">Reach out to collaborate or chat about tech!</p>
      <ul className="contact-links">
        {socialLinks.map(({ href, alt, icon }) => (
          <li key={alt}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <i className={`fa${icon === 'envelope' ? 's' : 'b'} fa-${icon}`} aria-hidden="true"></i>
              <span>{alt}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
