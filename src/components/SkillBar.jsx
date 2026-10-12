import { useEffect, useRef, useState } from "react";

// Thin animated bar that fills when scrolled into view.
export default function SkillBar({ name, value, level }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill" ref={ref}>
      <div className="skill__head">
        <span className="skill__name">{name}</span>
        <span className="skill__level">
          {level} · {value}%
        </span>
      </div>
      <div className="skill__track">
        <span
          className="skill__fill"
          style={{ width: shown ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}