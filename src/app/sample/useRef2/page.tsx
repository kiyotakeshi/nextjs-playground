"use client";

import React, { useEffect, useRef, useState } from "react";

const UseRef2Sample = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    console.log(inputRef.current); // <input value="bbb">
    if (inputRef.current === null) return;
    inputRef.current.focus(); // input に focus が当たる
    inputRef.current.style.backgroundColor = "yellow";
    inputRef.current.value = "update with inputRef";
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>my name is {name}</div>
      <button onClick={handleFocus}>focus</button>
    </>
  );
};

export default UseRef2Sample;
