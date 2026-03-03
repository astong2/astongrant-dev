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

      {/* Right: mobile hamburger + github + theme */}
      <div className="nav-right">
        {/* Hamburger only shows on mobile via CSS */}
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

        {/* Hide time on top bar for mobile; keep on desktop */}
        <span className="nav-time">{time}</span>

        <a
          className="nav-icon"
          href="https://github.com/astong2"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          {/* GitHub icon (SVG) */}
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.99 3.24 9.22 7.73 10.72.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.17-3.02-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.12 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.56.23 2.71.11 3 .73.79 1.17 1.79 1.17 3.02 0 4.33-2.64 5.29-5.15 5.57.41.35.77 1.04.77 2.1v3.11c0 .3.2.65.78.54 4.48-1.5 7.72-5.73 7.72-10.72C23.25 5.48 18.27.5 12 .5z"
            />
          </svg>
        </a>

        <button className="theme-btn" type="button" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
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