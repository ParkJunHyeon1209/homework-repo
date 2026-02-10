import { useState } from "react";

function useCounter({ init, options }) {
  const [count, setCount] = useState(init);
  const { min, max } = options;
  function increaes() {
    if (count < max) setCount((p) => p + 1);
  }

  function decrease() {
    if (count > min) setCount((p) => p - 1);
  }

  function reset() {
    setCount(init);
  }

  return { count, increaes, decrease, reset };
}

export default useCounter;
