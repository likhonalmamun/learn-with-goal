import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext(true);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const themeContextValue = { theme, setTheme };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
