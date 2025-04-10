import { useState } from "react";

import { Contact } from "./page";

type ChatProps = {
  contact: Contact;
};

export const Chat = ({ contact }: ChatProps) => {
  const [text, setText] = useState("");
  return (
    <section className="chat" style={{ flex: 1 }}>
      <textarea
        value={text}
        placeholder={"chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "100px",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        send to {contact.email}
      </button>
    </section>
  );
};
