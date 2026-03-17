import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h1>Welcome to my portfolio!</h1>
      <h2>Hi, I’m Aston Grant.</h2>

      <p>
        I’m a self-taught full-stack developer focused on building clean, practical web applications using Python, Flask, SQLite & React. I enjoy solving backend problems just as much as refining frontend experience.
      </p>

      <div className="home-buttons">
        <Link to="/Projects">View Projects</Link>
        <Link to="/Contact">Contact Me</Link>
      </div>
      <section className="featured-project">
  <h2>Featured Project</h2>

  <div className="featured-card">
    <h3>NatureSpots</h3>

    <p>
      A full-stack web app for discovering and sharing peaceful nature locations.
      Built with Flask, PostgreSQL and responsive design for real-world use.
    </p>

    <div className="featured-links">
      <a href="/projects/naturespots">View Project</a>
      <a href="https://naturespots.onrender.com" target="_blank" rel="noreferrer">
        Live Demo
      </a>
    </div>
  </div>
</section>
    </section>
    
  );
}

export default Home;
