"use client";

import { useState } from "react";

// 表示が切り替わる実装ができている
// https://ja.react.dev/learn/sharing-state-between-components
const Accordion = () => {
  // どのパネルがアクティブなのかを管理する
  // Accordion component がアクティブなパネルに関する source of truth となる
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      <h1>favorite and todo things</h1>
      <Panel
        title="favorite"
        isActive={activeIndex === 0}
        // props として event handler を下の component に渡し、
        // そこで state を更新する
        // 子から親に state をリフトアップ(lifting state up)する
        onShow={() => setActiveIndex(0)}
      >
        Here are some of my favorite things.
      </Panel>
      <Panel
        title="todo"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Here are some of my todo things.
      </Panel>
    </div>
  );
};

type PanelProps = {
  title: string;
  children: React.ReactNode;
  // 制御が親 component にあり、Panel は props で受け取るだけ
  isActive: boolean;
  onShow: () => void;
};

// 重要な情報がローカル state ではなく、props として駆動される component は
// controlled component(制御されたコンポーネント) と呼ばれる
// component を書く時はどの情報を props で制御し、どの情報を state を使うことで制御しないのかを考える
const Panel = ({ title, children, isActive, onShow }: PanelProps) => {
  return (
    <section
      className="panel"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
      {isActive ? (
        <p style={{ margin: "0" }}>{children}</p>
      ) : (
        <button
          // 親の state を更新
          onClick={onShow}
          style={{
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Show
        </button>
      )}
    </section>
  );
};

export default Accordion;
