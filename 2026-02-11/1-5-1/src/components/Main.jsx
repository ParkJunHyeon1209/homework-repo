import React from "react";
import { useLang } from "../contexts/LanguageContext";

export default function Main() {
  const { lang, setLang } = useLang();
  function handleLang() {
    lang === "ko" ? setLang("en") : setLang("ko");
  }

  return (
    <div>
      {lang === "ko" ? <p>안녕하세요</p> : <p>Hello</p>}
      <button onClick={handleLang} type="button">
        {lang === "ko" ? "현재 언어 : " : "Current Lang : "} {lang}
      </button>
    </div>
  );
}
