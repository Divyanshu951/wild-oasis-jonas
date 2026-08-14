"use client";
import { useState } from "react";

const Counter = ({ data }) => {
  const [count, setCount] = useState(0);
  console.log(data);

  return (
    <div className="flex gap-2">
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;
