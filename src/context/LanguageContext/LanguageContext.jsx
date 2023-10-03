import { createContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = () => {
    setCurrentLanguage(currentLanguage === "en" ? "fr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
