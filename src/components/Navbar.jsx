import React, { useEffect, useState, useCallback, useRef } from 'react';
import '../styles/Navbar.css';

const navItems = ['Home', 'About', 'Education', 'Skills', 'Work', 'Contact'];

const Navbar = React.memo(() => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      
      scrollTimeoutRef.current = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        let current = '';
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - 300 &&
            window.scrollY < sectionTop + sectionHeight - 300
          ) {
            current = section.id;
          }
        });
        setActiveSection(current);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const handleNavClick = useCallback((sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((label) => {
            const sectionId = label.toLowerCase();
            return (
              <li key={label}>
                <button
                  className={activeSection === sectionId ? 'active' : ''}
                  onClick={handleNavClick(sectionId)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
        
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="toggle-track">
            <span className="toggle-thumb">
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </span>
          </span>
          <span className="toggle-label">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
        </button>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
