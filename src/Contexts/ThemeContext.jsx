import { useState, createContext, useEffect } from "react";
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState(() =>
    localStorage.getItem("theme")
  );

  useEffect(() => {
    if (colorTheme === "light") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }, [colorTheme]);
  console.log("Ola");

  const setMode = () => {
    setColorTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const values = { setMode, colorTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
