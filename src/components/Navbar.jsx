import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
// Brand icons live in react-icons/fa — never in lucide-react.
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle.jsx";

// Logo imports kept exactly as before.
import markWhite from "../assets/logo/szb-mark-white.png";
import markBlack from "../assets/logo/szb-mark-black.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/work", label: "My Work" },
  { to: "/now", label: "Now" },
  { to: "/contact", label: "Contact" },
];

const EMAIL = "shahzaibux.ui@gmail.com";
const GITHUB = "https://github.com/shahzaibuxui-sketch";
const LINKEDIN = "https://www.linkedin.com/in/shahzaibwaheed/";

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

  // Close on route change; recompute solid/transparent state.
  useEffect(() => {
    setOpen(false);
    if (!isHome) {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 40);
    }
  }, [isHome, location.pathname]);

  // Lock body scroll while the menu is open; restore on close/unmount.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
          {/* GitHub / LinkedIn live in the mobile menu below 768px. */}
          <a
            className="icon-btn nav__social"
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} aria-hidden="true" />
          </a>
          <a
            className="icon-btn nav__social"
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} aria-hidden="true" />
          </a>

          <ThemeToggle />

          {/* Single burger / close control. The two icons are stacked
              and cross-fade + rotate between states. It is always a
              real <button> with a 44x44 tap target, sitting at the
              same spot in the header. */}
          <button
            type="button"
            className={`nav__toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__toggleicon nav__toggleicon--menu">
              <Menu size={24} aria-hidden="true" />
            </span>
            <span className="nav__toggleicon nav__toggleicon--close">
              <X size={24} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`nav__mobile ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="nav__mobileinner" aria-label="Mobile">
          <ul className="nav__mobilelinks">
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

          <div className="nav__mobilesocials">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              onClick={() => setOpen(false)}
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              onClick={() => setOpen(false)}
            >
              <FaLinkedinIn size={20} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              onClick={() => setOpen(false)}
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}