import React from "react";
import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const MemoHook = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);


  // This is heavy operation=> Here i use "useMemo hook" to avoid this heavy operation on every re-render

  // const primeNumber = () => findPrime(text);     =>    This is without useMemo    
  const primeNumber = useMemo(() => findPrime(text), [text]);      // => until text mein kuch change nhi hota tab tak result ko caache krega

  console.log("Re-Redering...");

  return (
    <div className={"memo_input w-96 " + (isDarkTheme && "bg-gray-900 text-white")}>
      <button
        className="theme_toggle"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Theme Change
      </button>
      <input
        type="number"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Nth Prime Number is: {primeNumber}</p>
    </div>
  );
};

export default MemoHook;
