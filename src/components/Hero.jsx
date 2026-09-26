import { FaArrowRight } from 'react-icons/fa';

function Hero() {
  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none';
    const placeholder = event.currentTarget.parentElement?.querySelector('.profile-placeholder');
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Hi, I&apos;m Mallamma 👋</p>
          <h1>B.Tech AI &amp; Data Science Student</h1>
          <p className="lead">
            Passionate about Artificial Intelligence, Machine Learning, Data Analytics,
            and building innovative technology solutions.
          </p>

          <div className="cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mini-stats">
            <div>
              <strong>2nd</strong>
              <span>Year</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>Focused</span>
            </div>
            <div>
              <strong>ML</strong>
              <span>Projects</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-orb orb-one" aria-hidden="true" />
          <div className="profile-orb orb-two" aria-hidden="true" />
          <div className="profile-frame">
            <img
              src="/profile.jpg"
              alt="Mallamma Gutte portrait"
              onError={handleImageError}
            />
            <div className="profile-placeholder" aria-label="Mallamma Gutte placeholder">
              MG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
