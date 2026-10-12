import { NavLink } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__brand">SZB&nbsp;Labs</p>
          <p className="footer__tag">Frontend Developer building AI-powered full stack apps.</p>
        </div>
        <div className="footer__right">
          <nav className="footer__nav" aria-label="Footer">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/work">My Work</NavLink>
            <NavLink to="/now">Now</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="footer__socials">
            <a href="mailto:shahzaibux.ui@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a href="https://github.com/shahzaibuxui-sketch" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
            <a href="https://www.linkedin.com/in/shahzaibwaheed/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
          </div>
        </div>
      </div>
      <div className="footer__base container">
        <span>© {new Date().getFullYear()} Shahzaib — SZB Labs</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </footer>
  );
}