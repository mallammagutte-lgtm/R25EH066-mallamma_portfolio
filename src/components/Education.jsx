import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Education</p>
          <h2>Academic journey and continuous learning.</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <span className="timeline-badge">Currently Pursuing</span>
              <h3>B.Tech – Artificial Intelligence &amp; Data Science</h3>
              <p>REVA University, Bengaluru</p>
              <p className="timeline-note">Currently Pursuing – 2nd Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
