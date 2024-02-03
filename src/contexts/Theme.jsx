"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Tạo context
const ThemeContext = createContext();

// Tạo provider
const ThemeProvider = ({ children }) => {
  const initialTheme = ""

  const [theme, setTheme] = useState(initialTheme);
  
  useEffect(() => {
    const htmlElemet = document.querySelector("html")
    if(!htmlElemet) return
    
    htmlElemet.setAttribute("data-theme", theme)
  }, [theme])

  const handleChangeTheme = useCallback((newTheme) => {
      setTheme(newTheme);
    },
    [theme]
  );

  const resetTheme = useCallback(() => {
    setTheme(initialTheme)
  }, [])

  const themeValue = {
    theme,
    handleChangeTheme,
    resetTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

// Tạo custom hook để sử dụng context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider
