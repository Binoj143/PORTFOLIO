import React, { useEffect, useState, useCallback } from 'react';
import '../styles/Footer.css';

const Footer = React.memo(() => {
  const [visitCount, setVisitCount] = useState(0);

  const fetchVisitCount = useCallback(async () => {
    try {
      // Try CountAPI first
      const response = await fetch('https://api.countapi.xyz/hit/binojbc/portfolio', {
        method: 'GET',
      });
      
      if (response.ok) {
        const data = await response.json();
        const count = data.value || 0;
        setVisitCount(count);
        // Store in localStorage as backup
        localStorage.setItem('portfolioVisits', count.toString());
      } else {
        // Fallback to localStorage
        const savedCount = localStorage.getItem('portfolioVisits');
        const newCount = savedCount ? parseInt(savedCount) + 1 : 1;
        setVisitCount(newCount);
        localStorage.setItem('portfolioVisits', newCount.toString());
      }
    } catch (err) {
      console.error('Visit count error:', err);
      // Fallback to localStorage on error
      try {
        const savedCount = localStorage.getItem('portfolioVisits');
        const newCount = savedCount ? parseInt(savedCount) + 1 : 1;
        setVisitCount(newCount);
        localStorage.setItem('portfolioVisits', newCount.toString());
      } catch (e) {
        setVisitCount(1);
      }
    }
  }, []);

  useEffect(() => {
    fetchVisitCount();
  }, [fetchVisitCount]);

  return (
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Binoj B Chandran. All rights reserved.</p>

        <p className="visit-count" aria-label={`${visitCount} profile visits`}>
          <span aria-hidden="true">👁️‍🗨️</span> {visitCount.toLocaleString()}
        </p>

        <div className="social-links">
          <a href="mailto:binojbc3315@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/binoj-b-chandran-a663b9248"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/binoj3211"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/in_ce_pt_ion"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
