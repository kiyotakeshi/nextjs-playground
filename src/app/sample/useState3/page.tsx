"use client";

import { useState } from "react";

const UseStateSample3 = () => {
  // 数値、文字列、真偽値は JavaScript では immutable
  // state 内におく object は技術的には mutable だが immutable に扱うべき
  // 新しい object を作ってそれを state のセット関数に渡すべし
  // 既存のデータは使いつつ一部だけ書き換えたい時は spread operator と組み合わせるべし
  const [person, setPerson] = useState(
    // object が入れ子になっている場合は Immer などを使って書くと簡潔に immutable にかけるらしい
    {
      firstName: "kendrick",
      lastName: "lamar",
      email: "test@example.com",
    },
  );

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <br />
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default UseStateSample3;
