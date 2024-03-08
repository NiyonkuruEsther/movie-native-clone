// DarkModeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colors, setColors] = useState({
    text: isDarkMode ? "white" : "black",
    backgroundDark: isDarkMode ? "bgDarkSecondary" : "white",
    backgroundLight: isDarkMode ? "bgDarkPrimary" : "gray-200"
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </DarkModeContext.Provider>
  );
};
