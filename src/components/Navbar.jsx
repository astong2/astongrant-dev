import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [time, setTime] = useState("");

  // Load saved theme (or default to light)
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // Update time every second
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setTime(formatted);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <span className="nav-time">{time}</span>

        <a
          className="nav-icon"
          href="https://github.com/astong2"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          {/* simple GitHub icon (SVG) */}
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .5C5.73.5.75 5.64.75 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.26.79-.57v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.52-1.35-1.27-1.7-1.27-1.7-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.2 1.75 1.2 1.02 1.78 2.68 1.27 3.33.97.1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.3-5.23-5.8 0-1.28.45-2.33 1.19-3.15-.12-.3-.52-1.5.11-3.13 0 0 .97-.32 3.18 1.2.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.52 3.18-1.2 3.18-1.2.63 1.63.23 2.83.11 3.13.74.82 1.19 1.87 1.19 3.15 0 4.51-2.69 5.5-5.25 5.79.41.37.78 1.1.78 2.22v3.29c0 .31.21.67.8.57 4.56-1.52 7.85-5.82 7.85-10.9C23.25 5.64 18.27.5 12 .5z"
            />
          </svg>
        </a>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
