import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Reads current theme from <html data-theme>. Default is dark.
export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("szb-theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}