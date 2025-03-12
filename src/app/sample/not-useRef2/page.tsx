"use client";

import React, { useEffect, useRef, useState } from "react";

const NotUseRef2Sample = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>my name is</div>
      <div>i render {renderCount.current} times</div>
    </>
  );
};

export default NotUseRef2Sample;
