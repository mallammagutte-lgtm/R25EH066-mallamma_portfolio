import { FaBrain, FaChartBar, FaGlobe, FaLaptopCode, FaRobot } from 'react-icons/fa';

const interests = [
  {
    icon: <FaRobot />,
    title: 'Artificial Intelligence',
    description: 'Exploring intelligent systems and their real-world applications.',
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning',
    description: 'Building models that learn patterns and improve decision making.',
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analytics',
    description: 'Turning raw data into clear insights and actionable strategies.',
  },
  {
    icon: <FaGlobe />,
    title: 'IoT',
    description: 'Connecting devices and creating smarter, automated experiences.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Software Development',
    description: 'Creating thoughtful, user-friendly technology with clean logic.',
  },
];

function Interests() {
  return (
    <section className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Areas of Interest</p>
          <h2>Curious about the ideas and technologies shaping tomorrow.</h2>
        </div>

        <div className="interest-grid">
          {interests.map(({ icon, title, description }) => (
            <article key={title} className="interest-card">
              <div className="interest-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;
