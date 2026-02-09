import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const timerRef = useRef(null);
  const msecond = String(time % 100).padStart(2, "0");
  const second = String(Math.trunc((time / 100) % 60)).padStart(2, "0");
  const minute = String(Math.trunc(time / 100 / 60)).padStart(2, "0");

  useEffect(() => {
    if (!isStart) return;
    timerRef.current = setInterval(() => {
      setTime((p) => p + 1);
    }, 10);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isStart]);

  return (
    <div className="container">
      <h1>{`${minute}:${second}:${msecond}`}</h1>
      <div className="btn-wrap">
        <button
          className="start"
          onClick={() => setIsStart(true)}
          disabled={isStart}
        >
          Start
        </button>
        <button
          className="stop"
          onClick={() => setIsStart(false)}
          disabled={!isStart}
        >
          Stop
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          setTime(0);
          setIsStart(false);
        }}
      >
        Reset Timer
      </button>
    </div>
  );
}
