import React from "react";
import { useLang } from "../contexts/LanguageContext";

export default function Main() {
  const { lang, setLang } = useLang();
  function handleLang() {
    lang === "ko" ? setLang("en") : setLang("ko");
  }

  return (
    <div>
      {lang === "ko" ? <h2>안녕하세요</h2> : <h2>Hello</h2>}
      {lang === "ko" ? <p>환영합니다</p> : <p>Welcome</p>}
      <button onClick={handleLang} type="button">
        {lang === "ko" ? "현재 언어 : " : "Current Lang : "} {lang}
      </button>
    </div>
  );
}
