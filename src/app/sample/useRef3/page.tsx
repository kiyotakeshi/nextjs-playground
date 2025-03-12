"use client";

import React, { useEffect, useRef, useState } from "react";

const UseRef3Sample = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        my name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
};

export default UseRef3Sample;
