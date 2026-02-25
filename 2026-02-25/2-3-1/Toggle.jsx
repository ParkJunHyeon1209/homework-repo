import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      style={{ backgroundColor: isOn ? "green" : "gray" }}
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
