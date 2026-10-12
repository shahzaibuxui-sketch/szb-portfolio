import Reveal from "../components/Reveal.jsx";
import SkillBar from "../components/SkillBar.jsx";
import skills from "../data/skills.js";

export default function Skills() {
  return (
    <div className="page page--skills">
      <header className="pagehead container">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h1 className="h1">What I work with</h1>
          <p className="body pagehead__intro">
            A snapshot of the tools and fundamentals I use day to day. Bars are honest self-assessments, not marketing.
          </p>
        </Reveal>
      </header>

      <div className="container">
        {skills.map((group, gi) => (
          <section className="skillgroup" key={group.group}>
            <Reveal className="skillgroup__head">
              <h2 className="h3">{group.group}</h2>
            </Reveal>
            <div className="skillgroup__list">
              {group.items.map((s) => (
                <SkillBar key={s.name} name={s.name} value={s.value} level={s.level} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}