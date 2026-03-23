import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import homeImg from "../assets/naturespots/naturespots-home.png";
import cardImg from "../assets/naturespots/naturespots-card.png";
import addspotsImg from "../assets/naturespots/naturespots-AddSpots.png";
import inspImg from "../assets/naturespots/naturespots-inspiration.png";
import profileImg from "../assets/naturespots/naturespots-profile.png";
import registerImg from "../assets/naturespots/naturespots-register.png";
import heroImg from "../assets/tradesmen-demo/tradesmen-hero.png";
import servicesImg from "../assets/tradesmen-demo/tradesmen-services.png";
import reviewImg from "../assets/tradesmen-demo/tradesmen-review.png";
import contactImg from "../assets/tradesmen-demo/tradesmen-contact.png";
import galleryImg from "../assets/tradesmen-demo/tradesmen-gallery.png";

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

      {title === "NatureSpots" && (
        <section className="project-screenshots">
          <h2>Screenshots</h2>
          <div className="screenshots-grid">
            <img src={homeImg} alt="Home page" />
            <img src={cardImg} alt="Spot card" />
            <img src={addspotsImg} alt="Add spot form" />
            <img src={inspImg} alt="Inspiration page" />
            <img src={profileImg} alt="Profile page" />
            <img src={registerImg} alt="Register page" />
          </div>
        </section>
      )}

      {title === "Tradesmen Website Demo" && (
        <section className="project-screenshots">
          <h2>Screenshots</h2>
          <div className="screenshots-grid">
            <img src={heroImg} alt="Hero section" />
            <img src={servicesImg} alt="Services section" />
            <img src={reviewImg} alt="Testimonials section" />
            <img src={contactImg} alt="Contact section" />
            <img src={galleryImg} alt="Gallery section" />
          </div>
        </section>
      )}


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