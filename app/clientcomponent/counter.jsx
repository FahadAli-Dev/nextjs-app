import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
      App - {count}
    </button>
  );
};
export default Counter;
