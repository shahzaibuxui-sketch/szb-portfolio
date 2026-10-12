import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Download } from "lucide-react";
// Brand icons come from react-icons/fa — lucide has no brand icons.
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Reveal from "../components/Reveal.jsx";
import RippleButton from "../components/RippleButton.jsx";

const EMAIL = "shahzaibux.ui@gmail.com";
const GITHUB = "https://github.com/shahzaibuxui-sketch";
const LINKEDIN = "https://www.linkedin.com/in/shahzaibwaheed/";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="page page--contact">
      <header className="pagehead container">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="h1">Say hello</h1>
          <p className="body pagehead__intro">
            No forms. Just email me — I read everything.
          </p>
        </Reveal>
      </header>

      <div className="container contact">
        <Reveal className="contact__email">
          <a href={`mailto:${EMAIL}`} className="contact__emaillink">
            <span>{EMAIL}</span>
            <ArrowUpRight size={22} />
          </a>
          <RippleButton
            className="btn btn--outline btn--sm contact__copy"
            onClick={copy}
            aria-live="polite"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </RippleButton>

          <RippleButton
            as="a"
            href="/Shahzaib_Resume.pdf"
            download
            className="btn--outline"
            aria-label="Download Resume"
          >
            Download Resume <Download size={16} />
          </RippleButton>
        </Reveal>

        <Reveal className="contact__socials">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="contact__social"
          >
            <FaGithub size={20} aria-hidden="true" />
            <span>GitHub</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="contact__social"
          >
            <FaLinkedinIn size={20} aria-hidden="true" />
            <span>LinkedIn</span>
            <ArrowUpRight size={16} />
          </a>
          <a href={`mailto:${EMAIL}`} className="contact__social">
            <Mail size={20} aria-hidden="true" />
            <span>Email</span>
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </div>
  );
}