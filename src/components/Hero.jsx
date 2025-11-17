import React, { useCallback, useState } from 'react';
import '../styles/Hero.css';

const Hero = React.memo(() => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    try {
      const response = await fetch('/Binoj B Chandran.pdf');
      if (!response.ok) throw new Error('Resume not found');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Binoj_B_Chandran_Resume.pdf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);
    } catch (error) {
      console.error('Download error:', error);
      window.open('/Binoj_B_Chandran_Resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src="/images/my.png"
            alt="Portrait of Binoj B Chandran"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm <span>Binoj B Chandran</span></h1>
          <p className="hero-badge">Full Stack Web Developer</p>
          <p className="hero-subtitle">Building scalable, modern websites & apps</p>
          <div className="hero-buttons">
            <a 
              href="#contact" 
              className="cta-button contact-button"
              aria-label="Get in Touch"
            >
              Get In Touch
            </a>
            <button 
              onClick={handleDownload}
              className="cta-button resume-button"
              aria-label="Download Resume"
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;