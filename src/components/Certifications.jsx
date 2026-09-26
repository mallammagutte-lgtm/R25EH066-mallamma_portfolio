import { FaCertificate } from 'react-icons/fa';

const certificateLinks = {
  ibm: '#',
  wadhwani: '#',
  instagram: '#',
};

const certifications = [
  {
    name: 'IBM Online Course Certification',
    organization: 'IBM',
    key: 'ibm',
  },
  {
    name: 'Wadhwani Foundation Certification',
    organization: 'Wadhwani Foundation',
    key: 'wadhwani',
  },
  {
    name: 'Instagram Design System Certification',
    organization: 'Instagram',
    key: 'instagram',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Certifications</p>
          <h2>Learning milestones that reflect a consistent growth mindset.</h2>
        </div>

        <div className="cert-grid">
          {certifications.map(({ name, organization, key }) => (
            <article key={name} className="cert-card">
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <h3>{name}</h3>
              <p>Organization: {organization}</p>
              <a href={certificateLinks[key]} className="btn btn-primary btn-small">
                View Certificate
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
