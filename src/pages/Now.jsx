import Reveal from "../components/Reveal.jsx";
import now from "../data/now.js";
import { BookOpen, Wrench } from "lucide-react";

export default function Now() {
  return (
    <div className="page page--now">
      <header className="pagehead container">
        <Reveal>
          <p className="eyebrow">Now</p>
          <h1 className="h1">What I'm up to</h1>
          <p className="body pagehead__intro">
            A living snapshot. Updated when things actually change.
          </p>
        </Reveal>
      </header>

      <div className="container nowgrid">
        <Reveal className="nowcol">
          <div className="nowcol__head">
            <BookOpen size={18} />
            <h2 className="h3">Learning</h2>
          </div>
          <ul className="nowlist">
            {now.learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="nowcol">
          <div className="nowcol__head">
            <Wrench size={18} />
            <h2 className="h3">Working On</h2>
          </div>
          <ul className="nowlist">
            {now.workingOn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}