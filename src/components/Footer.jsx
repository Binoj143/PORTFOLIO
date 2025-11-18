import React, { useEffect, useState, useCallback } from 'react';
import '../styles/Footer.css';

const Footer = React.memo(() => {
  const [visitCount, setVisitCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchVisitCount = useCallback(async () => {
    try {
      const response = await fetch('https://api.countapi.xyz/unique/binojbc/portfolio');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setVisitCount(data.value);
    } catch (err) {
      console.error('Visit count error:', err);
      setVisitCount(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVisitCount();
  }, [fetchVisitCount]);

  return (
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Binoj B Chandran. All rights reserved.</p>

        <p className="visit-count" aria-label={`${visitCount || 0} profile visits`}>
          <span aria-hidden="true">👁️‍🗨️</span> {isLoading ? 'Loading...' : (visitCount || 0).toLocaleString()} Profile Visits
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
