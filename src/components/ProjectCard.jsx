import { Link } from "react-router-dom";

function ProjectCard({ slug, title, description, tags, links }) {
  return (
    <article className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <ul className="project-tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-links">
        <Link className="learn-more" to={`/projects/${slug}`}>
          Learn more →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
