import { createContext, useContext, useState, useLayoutEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode((d) => !d) }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
