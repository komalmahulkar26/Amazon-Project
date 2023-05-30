import React from "react";
import { useState, useEffect } from "react";

function Life() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(2);

  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("unmount");
    };
  }, [count]);
  console.log("hello ");

  return (
    <div>
      <h1>Life Component</h1>
      <div>{count}</div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>{doubleCount}</div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setDoubleCount(doubleCount - 2)}>-</button>
        <button onClick={() => setDoubleCount(doubleCount + 2)}>+</button>
      </div>
    </div>
  );
}

export default Life;
