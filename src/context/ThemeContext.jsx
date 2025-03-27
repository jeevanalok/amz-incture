import React, { createContext, useState, useContext, useEffect } from "react";
const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {

  // Get the theme from local storage if it exists
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Set the theme to the body element
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
