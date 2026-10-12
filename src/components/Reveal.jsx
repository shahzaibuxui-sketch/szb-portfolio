import useReveal from "../hooks/useReveal.js";

/**
 * Wraps children in a fade + slide-up reveal.
 *
 * Fail-safe behaviour:
 *  - If JS never runs, or the IntersectionObserver never fires (tall
 *    blocks, browser quirks), the CSS falls back to visible via
 *    @media (scripting: none) and prefers-reduced-motion.
 *  - Also exposes an `immediate` prop for cases where you want the
 *    content visible without waiting on the observer.
 *
 * The important guarantee for the What I Do section: the text inside
 * a revealed row is never forced to opacity 0 by this component on
 * its own — the row animates, the row's text becomes visible.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  immediate = false,
  ...rest
}) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${immediate ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}