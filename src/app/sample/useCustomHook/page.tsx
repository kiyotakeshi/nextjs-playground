"use client";
import React from "react";
import { useOnlineStatus } from "./useOnlineStatus";

const SaveButton = () => {
  // custom hook を定義することで、component 内のコードが onlineStatus を使用するという、
  // (どのようにして実現するのかではなく)何をしたいのかの記述になる！
  const isOnline = useOnlineStatus();
  //   const isOnline = useOnlineStatus2();

  return (
    <button
      disabled={!isOnline}
      onClick={() => console.log("✅ progress save")}
      className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      {isOnline ? "save" : "reconnecting..."}
    </button>
  );
};

const StatusBar = () => {
  const isOnline = useOnlineStatus();
  //   const isOnline = useOnlineStatus2();

  return (
    <div className="mt-4 text-lg font-medium">
      {isOnline ? "✅ online" : "❌ offline"}
    </div>
  );
};

const UseCustomHookSample = () => {
  return (
    <div className="mx-auto max-w-md p-8">
      <SaveButton />
      <StatusBar />
    </div>
  );
};

export default UseCustomHookSample;
