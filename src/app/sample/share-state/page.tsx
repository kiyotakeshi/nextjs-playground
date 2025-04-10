"use client";

import { useState } from "react";

type PanelProps = {
  title: string;
  children: React.ReactNode;
};

// https://ja.react.dev/learn/sharing-state-between-components
const Panel = ({ title, children }: PanelProps) => {
  // ここで state を管理すると 片方だけ開くという動作が実現できない
  const [isActive, setIsActive] = useState(false);
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
          onClick={() => setIsActive(true)}
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

const Accordion = () => {
  return (
    <div className="accordion">
      <h1>favorite and todo things</h1>
      <Panel title="favorite">Here are some of my favorite things.</Panel>
      <Panel title="todo">Here are some of my todo things.</Panel>
    </div>
  );
};

export default Accordion;
