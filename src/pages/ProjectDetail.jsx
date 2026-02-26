import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  // If someone types a bad URL like /projects/whatever
  if (!project) {
    return (
      <section className="page">
        <h1>Project not found</h1>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </section>
    );
  }

  const {
    title,
    longDescription,
    techStack,
    features,
    learnings,
    challenges,
    links,
  } = project;

  return (
    <section className="page">
      <Link to="/projects" className="back-link">← Back to Projects</Link>

      <header className="project-header">
        <h1 className="project-title">{title}</h1>
        <p className="project-summary">{longDescription}</p>

        <div className="project-actions">
          {links?.live && (
            <a href={links.live} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {links?.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </header>

      <section className="project-meta">
        <div className="meta-block">
          <h3>Tech Stack</h3>
          <ul className="chip-list">
            {techStack.map((item) => (
              <li className="chip" key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-sections">
        <div className="detail-section">
          <h2>Features</h2>
          <ul>
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>What I Learned</h2>
          <ul>
            {learnings.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Challenges</h2>
          <ul>
            {challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default ProjectDetail;