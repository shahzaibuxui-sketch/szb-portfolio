import { ArrowUpRight } from "lucide-react";

// Work card with image, hover overlay revealing title + arrow.
export default function WorkCard({ item, size = "small" }) {
  return (
    <article className={`workcard workcard--${size}`}>
      <div className="workcard__media">
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          width={size === "lead" ? 1280 : 800}
          height={size === "lead" ? 800 : 600}
        />
        <a
          className="workcard__overlay"
          href={item.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${item.title}`}
        >
          <span className="workcard__overlaytitle">{item.title}</span>
          <span className="workcard__overlayarrow">
            <ArrowUpRight size={22} />
          </span>
        </a>
      </div>
      <div className="workcard__body">
        <h3 className="workcard__title">{item.title}</h3>
        <p className="workcard__desc">{item.description}</p>
        <ul className="workcard__tech">
          {item.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="workcard__links">
          <a href={item.liveUrl} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
            Live
          </a>
          <a href={item.repoUrl} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
            Repo
          </a>
        </div>
      </div>
    </article>
  );
}