import { Code2, ExternalLink, ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import RippleButton from "./RippleButton.jsx";

/**
 * Horizontal work row.
 * Code / Live / Case Study buttons go through RippleButton so they share
 * the same fixed hover-fill structure as every other button.
 * If a URL is empty the button is rendered disabled — never "#".
 */
export default function WorkRow({ item, slug }) {
  const hasRepo = Boolean(item.repoUrl);
  const hasLive = Boolean(item.liveUrl);
  // Slug defaults to the title lowercased — matches caseStudies keys.
  const caseSlug = slug || (item.title ? item.title.toLowerCase() : "");

  return (
    <article className="workrow">
      <a
        className="workrow__media"
        href={hasLive ? item.liveUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${item.title}`}
        onClick={(e) => {
          if (!hasLive) e.preventDefault();
        }}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          width={800}
          height={600}
        />
        <span className="workrow__media-hover" aria-hidden="true">
          <ArrowUpRight size={22} />
        </span>
      </a>

      <div className="workrow__body">
        <p className="workrow__desc">{item.description}</p>
        <ul className="workrow__tech">
          {item.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="workrow__actions">
        {hasRepo ? (
          <RippleButton
            as="a"
            href={item.repoUrl}
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

        {hasLive ? (
          <RippleButton
            as="a"
            href={item.liveUrl}
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

        {caseSlug && (
          <RippleButton
            as={Link}
            to={`/work/${caseSlug}`}
            className="btn--outline btn--sm"
          >
            <FileText size={16} aria-hidden="true" /> Case Study
          </RippleButton>
        )}
      </div>
    </article>
  );
}