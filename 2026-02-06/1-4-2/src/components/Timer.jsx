import { useState } from "react";
import { useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState("");
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    if (!isStart) return;
    const timer = setInterval(() => {
      const currentTime = `
        ${new Date().toLocaleTimeString("ko-KR")}
      `;

      setTime(currentTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  function btnTodo() {
    setIsStart(!isStart);
  }

  return (
    <div className="container">
      <p>CURRENT TIME</p>
      <p className="time">{time}</p>
      <button
        onClick={btnTodo}
        className="btn"
        style={{ color: isStart ? "red" : "green" }}
      >
        {isStart ? "Stop" : "Start"}
      </button>
    </div>
  );
}
