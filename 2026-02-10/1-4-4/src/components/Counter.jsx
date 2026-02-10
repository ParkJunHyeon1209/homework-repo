import React from "react";
import useCounter from "../hooks/useCounter";

export default function Counter() {
  const counter = useCounter({ init: 0, options: { min: 0, max: 10 } });

  return (
    <div className="container">
      <p className="count">{counter.count}</p>
      <div className="btn-wrap">
        <button className="increase" onClick={counter.increaes}>
          +
        </button>
        <button className="decrease" onClick={counter.decrease}>
          -
        </button>
        <button className="reset" onClick={counter.reset}>
          reset
        </button>
      </div>
    </div>
  );
}
