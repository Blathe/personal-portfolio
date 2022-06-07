import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import { useThemeContext } from '../context/theme';

const ThemeToggleButton = (props) => {
  const [theme, setTheme] = useThemeContext();

  return (
    <div className="dark:text-white">
      <button aria-label="tiggle theme button" onClick={() => { 
        let currentTheme = theme;
        if (currentTheme === "dark"){
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}>
        <FontAwesomeIcon
          className="hover:rotate-45 transition duration-500 border border-2 rounded-full p-1 opacity-50 hover:opacity-100"
          icon={theme === "dark" ? faSun : faMoon}
          size="lg"
        />
      </button>
    </div>
  );
};

export default ThemeToggleButton;
