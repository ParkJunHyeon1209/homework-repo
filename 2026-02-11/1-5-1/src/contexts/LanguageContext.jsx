import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({ lang: "ko", setLang: () => {} });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ko");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useLang = () => {
  const lang = useContext(LanguageContext);
  return lang;
};
