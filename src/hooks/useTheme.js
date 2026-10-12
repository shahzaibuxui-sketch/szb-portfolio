import { useEffect } from "react";

// Default theme is always dark on first visit.
// We deliberately ignore the OS color-scheme setting.
export default function useTheme() {
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem("szb-theme");
    } catch {
      saved = null;
    }
    const theme = saved === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
}