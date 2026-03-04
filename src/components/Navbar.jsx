import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      {/* Left: desktop links */}
      <div className="nav-left">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="nav-right">
      {/* Hamburger (mobile only via CSS) */}
       <button
          className="hamburger"
         type="button"
         aria-label="Open menu"
          aria-expanded={menuOpen}
         aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
  >
         <span className="hamburger-lines" />
       </button>

  {/* Right-aligned actions */}
  <div className="nav-actions">
    {/* Keep time on desktop; hidden on mobile via CSS */}
    <span className="nav-time">{time}</span>

    <a
      className="nav-icon"
      href="https://github.com/astong2"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56C20.71 21.42 24 17.1 24 12 24 5.73 18.27.5 12 .5z"
        />
      </svg>
    </a>

    <button className="theme-btn" type="button" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  </div>
</div>


      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        {/* Time shown inside menu (optional) */}
        <div className="mobile-time">Local time: {time}</div>
      </div>
    </nav>
  );
}

export default Navbar;