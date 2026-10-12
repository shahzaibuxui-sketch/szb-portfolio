import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import RippleButton from "../components/RippleButton.jsx";
import caseStudies from "../data/caseStudies.js";

/**
 * Case study page — reads caseStudies[slug] from src/data/caseStudies.js.
 * Slugs: zaibhunt, zaibchat, strikegear (title lowercased).
 * If the slug is unknown, redirect back to /work.
 */
export default function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : null;

  // Scroll to top when the page opens.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  // Everything else on the page is optional — only render when non-empty.
  const hasChallenge =
    Array.isArray(study.challenge) && study.challenge.length > 0;
  const hasNext = Array.isArray(study.next) && study.next.length > 0;
  const extraLinks = Array.isArray(study.extraLinks) ? study.extraLinks : [];

  // The other two studies, for the bottom navigation.
  const otherStudies = Object.entries(caseStudies)
    .filter(([key]) => key !== slug)
    .map(([key, value]) => ({ slug: key, ...value }));

  return (
    <article className="page page--case">
      <div className="container case">
        {/* Back link */}
        <Reveal className="case__back">
          <Link to="/work" className="case__backlink">
            <ArrowLeft size={16} />
            <span>Back to My Work</span>
          </Link>
        </Reveal>

        {/* Header: title, tagline, stack, meta */}
        <header className="case__head">
          <Reveal>
            <p className="eyebrow">Case Study</p>
            <h1 className="h1 case__title">{study.title}</h1>
            {study.tagline && (
              <p className="case__tagline">{study.tagline}</p>
            )}
          </Reveal>

          {Array.isArray(study.stack) && study.stack.length > 0 && (
            <Reveal className="case__stack">
              <ul className="case__tags">
                {study.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal className="case__meta">
            {study.role && (
              <div className="case__metaitem">
                <span className="case__metakey">Role</span>
                <span className="case__metaval">{study.role}</span>
              </div>
            )}

            <div className="case__metabuttons">
              {study.liveUrl ? (
                <RippleButton
                  as="a"
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn--outline btn--sm"
                >
                  <ExternalLink size={16} aria-hidden="true" /> Live
                </RippleButton>
              ) : (
                <button
                  type="button"
                  className="btn btn--outline btn--sm is-disabled"
                  aria-disabled="true"
                  title="Link coming soon"
                >
                  <span className="btn__content">
                    <ExternalLink size={16} aria-hidden="true" /> Live
                  </span>
                </button>
              )}

              {study.repoUrl ? (
                <RippleButton
                  as="a"
                  href={study.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn--outline btn--sm"
                >
                  <Code2 size={16} aria-hidden="true" /> Code
                </RippleButton>
              ) : (
                <button
                  type="button"
                  className="btn btn--outline btn--sm is-disabled"
                  aria-disabled="true"
                  title="Link coming soon"
                >
                  <span className="btn__content">
                    <Code2 size={16} aria-hidden="true" /> Code
                  </span>
                </button>
              )}

              {extraLinks.map((link) => (
                <RippleButton
                  key={link.url}
                  as="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn--outline btn--sm"
                >
                  <ArrowUpRight size={16} className="btn__arrow" />
                  {link.label}
                </RippleButton>
              ))}
            </div>
          </Reveal>
        </header>

        {/* Overview */}
        {study.overview && (
          <Reveal as="section" className="case__section">
            <h2 className="h2 case__sectiontitle">Overview</h2>
            {Array.isArray(study.overview) ? (
              study.overview.map((p, i) => (
                <p key={i} className="body case__p">
                  {p}
                </p>
              ))
            ) : (
              <p className="body case__p">{study.overview}</p>
            )}
          </Reveal>
        )}

        {/* What I built */}
        {Array.isArray(study.built) && study.built.length > 0 && (
          <Reveal as="section" className="case__section">
            <h2 className="h2 case__sectiontitle">What I built</h2>
            <ul className="case__list">
              {study.built.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Challenge — only if non-empty */}
        {hasChallenge && (
          <Reveal as="section" className="case__section">
            <h2 className="h2 case__sectiontitle">Challenge</h2>
            {study.challenge.map((p, i) => (
              <p key={i} className="body case__p">
                {p}
              </p>
            ))}
          </Reveal>
        )}

        {/* What's next — only if non-empty */}
        {hasNext && (
          <Reveal as="section" className="case__section">
            <h2 className="h2 case__sectiontitle">What's next</h2>
            {study.next.map((p, i) => (
              <p key={i} className="body case__p">
                {p}
              </p>
            ))}
          </Reveal>
        )}

        {/* Bottom: other case studies */}
        {otherStudies.length > 0 && (
          <Reveal as="nav" className="case__more" aria-label="Other case studies">
            <p className="eyebrow">More case studies</p>
            <ul className="case__morelist">
              {otherStudies.map((other) => (
                <li key={other.slug}>
                  <Link to={`/work/${other.slug}`} className="case__morelink">
                    <span className="case__moretitle">{other.title}</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </article>
  );
}