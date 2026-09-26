import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaLightbulb,
  FaNetworkWired,
  FaPuzzlePiece,
  FaRocket,
} from 'react-icons/fa';

const skillGroups = [
  {
    icon: <FaCode />,
    title: 'Programming',
    skills: ['Python', 'C', 'Advanced C'],
  },
  {
    icon: <FaDatabase />,
    title: 'Database',
    skills: ['SQL', 'MySQL'],
  },
  {
    icon: <FaBrain />,
    title: 'Core Areas',
    skills: ['Data Structures', 'Artificial Intelligence', 'Machine Learning', 'Data Analytics'],
  },
  {
    icon: <FaNetworkWired />,
    title: 'Technologies',
    skills: ['IoT', 'Web Development'],
  },
  {
    icon: <FaRocket />,
    title: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Problem Solving'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Technical Skills</p>
          <h2>Building a solid foundation for modern problem solving.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map(({ icon, title, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon">{icon}</div>
              <h3>{title}</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
