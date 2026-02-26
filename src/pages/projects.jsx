import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <p>A few projects that I’ve built with some still under construction.</p>

      <div className="projects-grid">
        {projects.map((project) => {
          const linksArray = [];

          if (project.links.live && project.links.live !== "#") {
            linksArray.push({ label: "Live Demo", href: project.links.live });
          }

          if (project.links.github && project.links.github !== "#") {
            linksArray.push({ label: "GitHub", href: project.links.github });
          }

          return (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.shortDescription}
              tags={project.techStack}
              links={linksArray}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
