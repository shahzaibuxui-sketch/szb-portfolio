import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import HeroSlider from "../components/HeroSlider.jsx";
import Reveal from "../components/Reveal.jsx";
import RippleButton from "../components/RippleButton.jsx";
import about from "../data/about.js";
import whatIDo from "../data/whatIDo.js";
import photo from "../assets/about/shahzaib.jpg";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <HeroSlider />
        <div className="hero__content container">
          <p className="eyebrow">SZB Labs — Portfolio</p>
          <h1 className="hero__title">
            Shahzaib
            <span className="hero__titleline">
              Frontend Developer building AI-powered full stack apps.
            </span>
          </h1>
          <p className="hero__intro">
            I design and build interfaces that feel quiet, deliberate and fast
            — then wire them to real backends.
          </p>
          <div className="hero__cta">
            <RippleButton as={Link} to="/work" className="btn--outline">
              View My Work <ArrowRight size={16} className="btn__arrow" />
            </RippleButton>
            <RippleButton as={Link} to="/contact" className="btn--outline">
              Contact Me
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
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--about">
        <div className="container about">
          <Reveal className="about__media">
            <img
              src={photo}
              alt="Shahzaib"
              width={800}
              height={800}
              loading="lazy"
              className="about__photo"
            />
          </Reveal>
          <Reveal className="about__text">
            <p className="eyebrow">About</p>
            <h2 className="h2">About Me</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="body">
                {p}
              </p>
            ))}
            <RippleButton as={Link} to="/contact" className="btn--outline">
              Get In Touch
              <ArrowUpRight size={16} className="btn__arrow" />
            </RippleButton>
          </Reveal>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="section section--whatido">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Capabilities</p>
            <h2 className="h2">What I Do</h2>
          </Reveal>

          <div className="whatido">
            {whatIDo.map((item) => (
              <div
                key={item.id || item.title}
                className={`whatido__row whatido__row--${item.side}`}
              >
                <Reveal className="whatido__media">
                  <img
                    src={item.image || item.img}
                    alt={item.alt || item.title}
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </Reveal>

                <div className="whatido__text">
                  <Reveal>
                    <h3 className="h3 whatido__title">{item.title}</h3>
                  </Reveal>
                  <Reveal>
                    <p className="body whatido__desc">
                      {item.text || item.description}
                    </p>
                  </Reveal>

                  <Reveal className="whatido__how">
                    <h4 className="whatido__howtitle">How I work</h4>
                    <ol className="whatido__steps">
                      {item.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLKIT TEASER */}
      <section className="section">
        <div className="container teaser">
          <Reveal className="teaser__left">
            <p className="eyebrow">Toolkit</p>
            <h2 className="h2">Built with the boring stuff, on purpose.</h2>
          </Reveal>
          <Reveal className="teaser__right">
            <p className="body">
              React, Vite, Python, Flask, REST APIs, Figma. No
              frameworks-of-the-week — just tools that ship.
            </p>
            <Link to="/skills" className="link-underline">
              See all skills <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section section--cta">
        <div className="container cta">
          <Reveal>
            <p className="eyebrow">Let's build</p>
            <h2 className="h2 cta__title">Have something in mind?</h2>
            <RippleButton
              as={Link}
              to="/contact"
              className="btn--outline btn--lg"
            >
              Start a conversation
              <ArrowRight size={16} className="btn__arrow" />
            </RippleButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}