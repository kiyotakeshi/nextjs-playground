"use client";

import { useState } from "react";

const EventHandler5Sample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <p>カウンター: {count}</p>
        <button onClick={() => setCount(count + 1)}>カウントを増やす</button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("submitted!");
        }}
      >
        <input />
        <button>send</button>
      </form>

      <p style={{ marginTop: "20px", color: "gray" }}>
        ※フォームを送信するとページ全体がリロードされ、カウンターの値がリセットされます
      </p>
    </div>
  );
};

export default EventHandler5Sample;
