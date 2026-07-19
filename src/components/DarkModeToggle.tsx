import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    


    const userTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (userTheme === "dark" || (!userTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleDarkModeToggle = () => {
    setIsDark((prev) => {
      const next = !prev;

      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");

      return next;
    });
  };

  return (
    <i
      onClick={handleDarkModeToggle}
      className={`pl-3 text-glow text-2xl bi bi-${isDark ? "moon" : "sun"}`}
    ></i>
  );
}
