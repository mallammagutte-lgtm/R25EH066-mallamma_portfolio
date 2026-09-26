import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const socialLinks = {
  github: '#',
  linkedin: '#',
  instagram: '#',
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required';
    if (!formData.message.trim()) nextErrors.message = 'Message is required';

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <div className="contact-panel">
          <div className="section-heading left-align">
            <p className="section-tag">Let&apos;s Connect</p>
            <h2>Open to opportunities, collaboration, and learning.</h2>
          </div>

          <div className="contact-list">
            <p><FaEnvelope /> <a href="mailto:mallammagutte@gmail.com">mallammagutte@gmail.com</a></p>
            <p><FaPhone /> <a href="tel:+919110676840">9110676840</a></p>
            <p><FaMapMarkerAlt /> REVA University, Bengaluru</p>
          </div>

          <div className="social-row" aria-label="Social media links">
            <a href={socialLinks.github} aria-label="GitHub profile" target="_blank" rel="noreferrer">GitHub</a>
            <a href={socialLinks.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={socialLinks.instagram} aria-label="Instagram profile" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name ? <span className="error-text">{errors.name}</span> : null}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email ? <span className="error-text">{errors.email}</span> : null}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject ? <span className="error-text">{errors.subject}</span> : null}
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message ? <span className="error-text">{errors.message}</span> : null}
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
          {sent ? <p className="success-text">Message sent successfully!</p> : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
