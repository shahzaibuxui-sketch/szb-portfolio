import { useCallback, useRef } from "react";

/**
 * Wraps any element (button, anchor, or Link) and:
 *  - adds a ripple on click
 *  - wraps children in <span className="btn__content"> so the label
 *    and icon always sit ABOVE the ::before fill sweep
 *
 * Ripple is skipped for reduced motion and disabled elements.
 */
export default function RippleButton({
  as: Tag = "button",
  className = "",
  children,
  onClick,
  disabled,
  ...rest
}) {
  const ref = useRef(null);

  const handleClick = useCallback(
    (e) => {
      const el = ref.current;
      if (el) {
        const isDisabled =
          disabled ||
          el.getAttribute("aria-disabled") === "true" ||
          el.disabled === true;

        if (
          !isDisabled &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          const rect = el.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height) * 1.4;
          const span = document.createElement("span");
          span.className = "ripple";
          span.style.width = `${size}px`;
          span.style.height = `${size}px`;
          span.style.left = `${e.clientX - rect.left - size / 2}px`;
          span.style.top = `${e.clientY - rect.top - size / 2}px`;
          el.appendChild(span);
          window.setTimeout(() => span.remove(), 600);
        }
      }

      if (onClick) onClick(e);
    },
    [disabled, onClick]
  );

  return (
    <Tag
      ref={ref}
      className={`btn ripple-host ${className}`}
      onClick={handleClick}
      disabled={Tag === "button" ? disabled : undefined}
      {...rest}
    >
      <span className="btn__content">{children}</span>
    </Tag>
  );
}