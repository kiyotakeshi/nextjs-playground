import React, { useEffect } from "react";

const UseEffectSample = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return <div>UseEffectSample</div>;
};

export default UseEffectSample;
