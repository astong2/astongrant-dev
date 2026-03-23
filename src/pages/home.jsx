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
    <h3>Tradesmen demo</h3>

    <p>
      A modern, conversion-focused website designed for local trades businesses to generate more enquiries and win more customers.
    </p>

    <div className="featured-links">
      <a href="/projects/tradesmen-demo">View Project</a>
      <a href="https://tradesmen-demo.vercel.app" target="_blank" rel="noreferrer">
        Live Demo
      </a>
    </div>
  </div>
</section>
    </section>
    
  );
}

export default Home;
