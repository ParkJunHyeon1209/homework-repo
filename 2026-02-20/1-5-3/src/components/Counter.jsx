import React from "react";
import useCounterStore from "../stores/useCounterStore";

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
