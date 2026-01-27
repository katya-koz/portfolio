import { useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
    // the state change wont update till the next render, so we must change the dark mode based on negating the previous state
    if (isDark)
      document.getElementsByTagName("html")[0].classList.remove("dark");
    else document.getElementsByTagName("html")[0].classList.add("dark");
  };

  return (
    <i
      onClick={handleDarkModeToggle}
      className={`pl-3 text-glow text-2xl bi bi-${isDark ? "moon" : "sun"}`}
    ></i>
  );
}
