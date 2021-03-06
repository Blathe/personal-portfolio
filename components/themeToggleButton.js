import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { useThemeContext } from "../context/theme";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useThemeContext();

  return (
    <div className="dark:text-white text-black">
      <button
        aria-label="toggle theme button"
        onClick={() => {
          let currentTheme = theme;
          if (currentTheme === "dark") {
            setTheme("light");
            localStorage.setItem("currentTheme", "light");
          } else {
            setTheme("dark");
            localStorage.setItem("currentTheme", "dark");
          }
        }}
      >
        <FontAwesomeIcon
          className="hover:rotate-45 transition duration-500 border border-2 dark:border-white border-black rounded-full p-1 opacity-50 hover:opacity-100"
          icon={theme === "dark" ? faSun : faMoon}
          size="lg"
        />
      </button>
    </div>
  );
};

export default ThemeToggleButton;
