"use client";

import { forwardRef, useRef } from "react";

const RefAsProps = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (ref.current === null) return;
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
};

type MyInputProps = {
  label: string;
  // forwardRef が不要になって props として ref を渡せるように
  ref: React.RefObject<HTMLInputElement | null>;
};
// const MyInput = ({
//   label,
//   ref,
// }: {
//   label: string;
//   ref: React.RefObject<HTMLInputElement | null>;
// }) => {
const MyInput = ({ label, ref }: MyInputProps) => {
  return (
    <label>
      {label}
      <input ref={ref} />
    </label>
  );
};

export default RefAsProps;
