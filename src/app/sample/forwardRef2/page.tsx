"use client";

import { forwardRef, useRef, useState } from "react";

const ForwardRef2 = () => {
  const ref = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (ref.current === null) return;
    ref.current.focus();
  }

  console.log("render ForwardRef2");

  return (
    <form>
      <FormField label="Enter your name:" ref={ref} isRequired={true} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
};

const FormField = forwardRef<
  HTMLInputElement,
  { label: string; isRequired: boolean }
>((props, ref) => {
  const { label, isRequired } = props;
  const [value, setValue] = useState("");

  console.log("render FormField");

  return (
    <>
      <MyInput
        ref={ref}
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isRequired && value === "" && <i>required</i>}
    </>
  );
});

const MyInput = forwardRef<
  HTMLInputElement,
  {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
>((props, ref) => {
  const { label, ...rest } = props;
  // console.log("rest: ", rest); // { value: "", onChange: ƒ }

  console.log("render MyInput");

  return (
    <label>
      {label}
      <input ref={ref} {...rest} />
    </label>
  );
});

export default ForwardRef2;
