import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle.jsx";

// transparent PNGs (monogram only) — no mix-blend-mode needed
import markWhite from "../assets/logo/szb-mark-white.png";
import markBlack from "../assets/logo/szb-mark-black.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/work", label: "My Work" },
  { to: "/now", label: "Now" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // On Home the nav starts transparent and turns solid on scroll.
  // On every other page it is solid from the start.
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // reset on route change
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 40);
    }
    setOpen(false);
  }, [isHome, location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // While transparent over the dark hero → always show the white mark.
  // When solid → white mark in dark theme, black mark in light theme.
  // The actual swap is done in CSS via [data-theme] + .nav--solid / .nav--transparent.
  return (
    <header
      className={[
        "nav",
        isTransparent ? "nav--transparent" : "nav--solid",
        open ? "nav--open" : "",
      ].join(" ")}
    >
      <div className="nav__inner container">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo nav__logo--white">
            <img src={markWhite} alt="SZB Labs" />
          </span>
          <span className="nav__logo nav__logo--black">
            <img src={markBlack} alt="SZB Labs" />
          </span>
          <span className="nav__brandtext">SZB&nbsp;Labs</span>
        </NavLink>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="icon-btn"
            href="https://github.com/shahzaibuxui-sketch"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/shahzaibwaheed/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <ThemeToggle />
          <button
            className="icon-btn nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`nav__mobile ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}