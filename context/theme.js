import React, { useState, createContext, useContext, useEffect } from "react";

const Context = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (
      localStorage.currentTheme === "dark" ||
      (!("currentTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
};

const useThemeContext = () => {
  return useContext(Context);
};

export { Theme, useThemeContext };
