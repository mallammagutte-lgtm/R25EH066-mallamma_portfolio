import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    title: 'NER SmartRoute',
    subtitle: 'AI-Based Smart Logistics and Accessibility Intelligence Platform',
    description:
      'A smart logistics platform for the North Eastern Region that helps users identify safer routes by considering factors such as weather, terrain, rainfall, and road risk.',
    tags: ['React', 'FastAPI', 'AI', 'GIS', 'Routing'],
    accent: 'project-one',
    projectLink: 'https://ner-smart-route.vercel.app/',
    githubLink: 'https://github.com/hnranjitha07-creator/NER-Logistics-Intelligence',
  },
  {
    title: 'ThinkByte Health App',
    subtitle: 'Health Assistance Web Application',
    description:
      'A health-focused web application designed to provide users with an accessible and interactive digital experience for health-related assistance.',
    tags: ['Web Development', 'UI/UX', 'Health Tech'],
    accent: 'project-two',
    projectLink: 'https://thynkbyte-health-app-t6fk.bolt.host',
    githubLink: '',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Featured Projects</p>
          <h2>
            Hands-on work that blends technology, creativity, and problem
            solving.
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card ${project.accent}`}
            >
              <div className="project-visual" aria-hidden="true">
                <span>{project.title}</span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>

                {project.subtitle ? (
                  <p className="project-subtitle">{project.subtitle}</p>
                ) : null}

                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                  <a
                    href={project.projectLink}
                    className="btn btn-secondary btn-small"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> View Project
                  </a>

                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      className="btn btn-primary btn-small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : null}
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
