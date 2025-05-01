"use client";

import { useEffect, useRef, useState } from "react";

const createConnection = (serverUrl: string, roomId: string) => {
  return {
    connect: () => {
      console.log(`Connecting to ${roomId} room on ${serverUrl}...`);
    },
    disconnect: () => {
      console.log(`Disconnecting from ${roomId} room on ${serverUrl}...`);
    },
  };
};

const ChatRoom = ({ roomId }: { roomId: string }) => {
  const serverUrl = "https://localhost:3000";
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "4px",
        marginTop: "1rem",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.2rem" }}>
        welcome to the {roomId} room!
      </h1>
    </div>
  );
};

const UseEffectSample2 = () => {
  const [roomId, setRoomId] = useState<string>("general");
  const [show, setShow] = useState<boolean>(false);

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <label>
          choose the chat room:{" "}
          <select
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            style={{ padding: "0.3rem", marginLeft: "0.5rem" }}
          >
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        <button
          onClick={() => setShow(!show)}
          style={{
            padding: "0.3rem 0.8rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {show ? "hide chat" : "show chat"}
        </button>
      </div>
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
};

export default UseEffectSample2;
