import { FaBookOpen, FaGraduationCap, FaLightbulb, FaSchool } from 'react-icons/fa';

const infoCards = [
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    value: 'B.Tech AI & Data Science',
  },
  {
    icon: <FaSchool />,
    title: 'University',
    value: 'REVA University',
  },
  {
    icon: <FaBookOpen />,
    title: 'Year',
    value: '2nd Year',
  },
  {
    icon: <FaLightbulb />,
    title: 'Focus',
    value: 'AI & Data Science',
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container overview-grid">
        <div className="about-visual">
          <div className="portrait-card">
            <img src="/profile.jpg" alt="Mallamma Gutte profile" onError={(event) => {
              event.currentTarget.style.display = 'none';
              event.currentTarget.parentElement?.querySelector('.placeholder-card')?.classList.add('show');
            }} />
            <div className="placeholder-card" aria-label="Mallamma Gutte placeholder">
              MG
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="section-tag">About Me</p>
          <h2>I am a motivated learner with a passion for technology and impact.</h2>
          <p>
            I am a motivated B.Tech Artificial Intelligence and Data Science student at REVA
            University with a strong interest in programming, AI, machine learning, data
            analytics, and IoT. I enjoy learning new technologies and applying my skills to
            practical and innovative projects.
          </p>

          <div className="info-grid">
            {infoCards.map(({ icon, title, value }) => (
              <div key={title} className="info-card">
                <span className="icon-wrap">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
