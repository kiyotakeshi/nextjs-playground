"use client";

import { useState } from "react";

const UseStateSample = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>Count: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 5);
          // https://ja.react.dev/learn/state-as-a-snapshot#state-over-time
          // event handler のコードが非同期でも render 内の state 変数の値は変わらない
          // React が component を呼び出して UI の snapshot をとった時に固定されている
          setTimeout(() => {
            // alert に渡された state は snapshot なので、最新の state ではない
            // 3秒後に 0 が表示される
            alert(number);
          }, 3000);
        }}
      >
        Increment +5
      </button>
    </div>
  );
};

export default UseStateSample;
