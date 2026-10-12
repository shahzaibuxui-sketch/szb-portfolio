import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import RippleButton from "../components/RippleButton.jsx";
import WorkRow from "../components/WorkRow.jsx";
import work from "../data/work.js";

const MORE_URL = "https://github.com/shahzaibuxui-sketch";

export default function MyWork() {
  return (
    <div className="page page--work">
      <header className="pagehead container">
        <Reveal>
          <p className="eyebrow">My Work</p>
          <h1 className="h1">Things I've built</h1>
          <p className="body pagehead__intro">
            A short list, on purpose. Each one shipped end to end — UI,
            backend, the whole thing.
          </p>
        </Reveal>
      </header>

      <div className="container worklist">
        {work.map((item) => (
          <Reveal key={item.title} className="worklist__item">
            <h2 className="h3 worklist__title">{item.title}</h2>
            <WorkRow item={item} />
          </Reveal>
        ))}

        <Reveal className="worklist__more">
          <RippleButton
            as="a"
            href={MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--lg"
          >
            Click To See More Work
            <ArrowUpRight size={16} className="btn__arrow" />
          </RippleButton>
        </Reveal>
      </div>
    </div>
  );
}