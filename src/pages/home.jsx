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
    </section>
  );
}

export default Home;
