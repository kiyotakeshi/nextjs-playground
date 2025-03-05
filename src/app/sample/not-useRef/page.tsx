"use client";

import React, { useState } from "react";

const NotUseRefSample = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitted: ${firstName} ${lastName}`);
  };

  // form の値を変更するたびに render されてしまう...
  console.count("render NotUseRefSample");

  return (
    <>
      <div className="app">
        <form onSubmit={handleSumbit}>
          姓:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          名:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">送信</button>
        </form>
      </div>
    </>
  );
};

export default NotUseRefSample;
