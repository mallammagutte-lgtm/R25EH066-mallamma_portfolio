import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    title: 'FireGuard AI',
    subtitle: 'Automated Smart Table Lamp using NodeMCU',
    description:
      'IoT-based smart table lamp designed using NodeMCU to provide automated lighting functionality. The project demonstrates microcontroller programming, sensors, and IoT-based automation.',
    tags: ['IoT', 'Sensors', 'NodeMCU', 'Embedded programming'],
    accent: 'project-one',
  },
  {
    title: '2D Graphics Editor',
    subtitle: '',
    description:
      'C-based graphics application developed for creating and manipulating basic graphical objects.',
    tags: ['C', '2D Graphics', 'Data Structures'],
    accent: 'project-two',
  },
  {
    title: 'AI-Based Bus Ticketing Chatbot',
    subtitle: '',
    description:
      'An AI chatbot designed for bus ticket booking using natural language processing (NLP) and a database. The project focuses on conversational interaction and automated assistance for bus ticket booking.',
    tags: ['Python', 'Database', 'UI/UX'],
    accent: 'project-three',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Featured Projects</p>
          <h2>Hands-on work that blends technology, creativity, and problem solving.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className={`project-card ${project.accent}`}>
              <div className="project-visual" aria-hidden="true">
                <span>{project.title}</span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                  <a href="#" className="btn btn-secondary btn-small">
                    <FaLink /> View Project
                  </a>
                  <a href="#" className="btn btn-primary btn-small">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
