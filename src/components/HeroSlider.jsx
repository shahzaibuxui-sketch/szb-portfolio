import { useEffect, useState } from "react";
import heroImages from "../data/hero.js";

// Crossfading background slider with slow zoom.
export default function HeroSlider({ interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className="hero__bg" aria-hidden="true">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`hero__slide ${i === index ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero__overlay" />
    </div>
  );
}