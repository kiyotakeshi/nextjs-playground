"use client";

import React, { useRef } from "react";

const UseRefSample = () => {
  const firstName = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstName); // {current: input}
    console.log(lastName); // {current: input}
    console.log(
      `Submitted: ${firstName.current?.value} ${lastName.current?.value}`,
    );
  };

  console.count("render UseRefSample");

  return (
    <>
      <div className="app">
        {/* 最終的な element には ref はない */}
        {/* <form>姓:<input type="text">名:<input type="text"><button type="submit">送信</button></form> */}
        <form onSubmit={handleSumbit}>
          姓:
          <input type="text" ref={firstName} />
          名:
          <input type="text" ref={lastName} />
          <button type="submit">送信</button>
        </form>
      </div>
    </>
  );
};

export default UseRefSample;
