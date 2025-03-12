"use client";

import { forwardRef, useRef } from "react";

const ForwardRef = () => {
  const ref = useRef<HTMLInputElement>(null);

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

const MyInput = forwardRef<HTMLInputElement, { label: string }>(
  (props, ref) => {
    const { label } = props;
    return (
      <label>
        {label}
        <input ref={ref} />
      </label>
    );
  },
);

export default ForwardRef;
