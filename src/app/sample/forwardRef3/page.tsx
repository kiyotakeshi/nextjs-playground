"use client";

import { forwardRef, useRef, useState } from "react";

const CustomInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>,
) => {
  return <input type="text" {...props} ref={ref} />;
};

const WrappedCustomInput = forwardRef(CustomInput);

const ForwardRef3 = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <>
    <WrappedCustomInput ref={ref} />
    <button onClick={handleClick}>Focus</button>
    </>
  );
};

export default ForwardRef3;
