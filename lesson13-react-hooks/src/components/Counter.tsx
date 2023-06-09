import React, { useState } from "react";
import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const btnStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  fontSize: "12px",
};

const Counter = ({ setCount, children }: CounterProps) => {
  const [mySelfCount, setMySelfCount] = useState<number>(0);
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h2>My Self Count is {mySelfCount}</h2>
        <button style={btnStyle} onClick={() => setMySelfCount((prev) => prev + 1)}>
          MySelf +1
        </button>
        <button style={btnStyle} onClick={() => setMySelfCount((prev) => prev - 1)}>
          MySelf -1
        </button>
      </div>
      <div>
        <h2>{children}</h2>
        <button style={btnStyle} onClick={() => setCount((prev) => prev + 1)}>
          Parent +1
        </button>
        <button style={btnStyle} onClick={() => setCount((prev) => prev - 1)}>
          Parent -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
