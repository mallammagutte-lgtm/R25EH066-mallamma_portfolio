import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialLinks = {
  github: '#',
  linkedin: '#',
  instagram: '#',
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>Mallamma Gutte</h3>
          <p>B.Tech AI &amp; Data Science Student</p>
        </div>

        <div className="footer-socials" aria-label="Social media icons">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Mallamma. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
