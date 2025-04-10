"use client";

import { useState } from "react";

const ScoreBoard = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      {isPlayerA ? (
        // key の指定がないと2つの Counter component は同じ位置で render されるため、
        // person props が変更されただけの同一の Counter とみなされる
        // そのため、プレイヤーを切り替えても state がリセットされない
        // 親要素内の順序ではなく、 key 自体を位置に関する情報として React に使用させることができる
        // これにより、JSX で同じ位置に render しても異なる component として扱われるため state が共有されない
        <Counter person="mike" />
      ) : (
        // <Counter key="playerA" person="mike" />
        <Counter person="john" />
        // <Counter key="playerB" person="john" />
      )}
      <button
        onClick={() => setIsPlayerA(!isPlayerA)}
        style={{
          padding: "5px 10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        次のプレイヤー
      </button>
    </div>
  );
};

type CounterProps = {
  person: string;
};

const Counter = ({ person }: CounterProps) => {
  const [score, setScore] = useState(0);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <h1 style={{ margin: "0 0 10px 0" }}>
        {person}のスコア: {score}
      </h1>
      <button
        onClick={() => setScore(score + 1)}
        style={{
          padding: "5px 10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        1点追加
      </button>
    </div>
  );
};

export default ScoreBoard;
