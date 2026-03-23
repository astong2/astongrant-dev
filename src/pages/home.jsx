import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h1>Welcome to my portfolio!</h1>
      <h2>Hi, I’m Aston Grant.</h2>

      <p>
        I build clean, high-converting websites for local businesses. Helping you turn visitors into real enquiries and customers.
      </p>

      <p>Focussed on fast, modern websites using react & python.</p>

      <p>Portfolio built and deployed by me using modern web technologies.</p>

      <div className="home-buttons">
        <Link to="/Projects">View Projects</Link>
        <Link to="/Contact">Start a project</Link>
      </div>
      <section className="featured-project">
  <h2>Featured Project</h2>

  <div className="featured-card">
    <h3>Trades Business Website Demo</h3>

    <p>
      A modern, conversion-focused website designed for local trades businesses to generate more enquiries and win more customers.
    </p>
    <p>
      Built to show how a simple website can generate more enquiries and conversions for trades businesses.
    </p>

    <div className="featured-links">
      <Link to="/projects/tradesmen-demo">View Project</Link>
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
