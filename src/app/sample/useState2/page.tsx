"use client";

import { useState } from "react";

// https://ja.react.dev/learn/queueing-a-series-of-state-updates
const UseStateSample2 = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <>
      <div>
        <p>Count: {number}</p>
        <button
          onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
          }}
        >
          Increment +2
        </button>
      </div>
      <br />
      <div>
        <p>Count: {number2}</p>
        <button
          // event handler 内のすべてのコードが実行されるまで、React は state の更新処理を待機する
          // > ウェイターは最初の料理の注文を聞いた瞬間にキッチンにかけこむわけではありません！
          onClick={() => {
            // 複数の state 変数の更新をバッチ処理する(複数のクリックのような event をまたがってバッチ処理はできない)
            // 次の state の値を渡すのではなく、 state に対して更新用関数を渡す
            setNumber2(
              // 更新用関数 = updater function
              // state の setter に updater function を渡すと React は関数をキューに入れて
              // event handler 内のコードが全て実行された後に処理する
              (n) => n + 1,
            );
            setNumber2((n) => n + 1);
          }}
        >
          Increment +2
        </button>
      </div>
    </>
  );
};

export default UseStateSample2;
