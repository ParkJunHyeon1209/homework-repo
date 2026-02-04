import { useState } from "react";

export default function Profile() {
  const divStyle = {
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    boxSizing: "borderBox",
  };

  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [isModify, setIsModify] = useState(false);
  const [hidden, setHidden] = useState(true);

  function changeTheme() {
    setIsDark(!isDark);
  }

  const InputedName = (e) => {
    setName(e.target.value.trim());
  };

  const InputedStatus = (e) => {
    setStatus(e.target.value.trim());
    if (e.target.value.length > 20) setHidden(false);
    else setHidden(true);
  };

  const editMode = () => {
    setIsModify(!isModify);
  };

  return (
    <div style={divStyle} className={isDark ? "Dark" : "Light"}>
      <button onClick={changeTheme}>{isDark ? "Light" : "Dark"}</button>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={InputedName}
        disabled={isModify}
        style={{ border: "1px solid" }}
      />

      <input
        type="text"
        id="status"
        name="status"
        value={status}
        onChange={InputedStatus}
        disabled={isModify}
        maxLength={21}
        style={{ border: "1px solid" }}
      />
      <p className={hidden ? "hidden" : null} style={{ color: "red" }}>
        최대 20글자만 작성해주세요.
      </p>
      <button onClick={editMode} disabled={!hidden}>
        {isModify ? "편집" : "저장"}
      </button>
    </div>
  );
}
