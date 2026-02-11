import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Main from "./components/Main";

export default function App() {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
}
