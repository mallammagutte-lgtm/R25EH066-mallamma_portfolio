import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

function Navbar({ activeSection, theme, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={handleNavClick}>
          MALLAMMA GUTTE
        </a>

        <div className={`nav-panel ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
