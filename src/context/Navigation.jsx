// NavigationContext.js
import React, { createContext, useState, useEffect } from "react";
import { getGenre } from "../fetch";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    getGenre(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      setNavData
    );
  }, []);

  return (
    <NavigationContext.Provider value={{ navData }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
