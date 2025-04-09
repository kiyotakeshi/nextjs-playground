"use client";

// https://ja.react.dev/learn/responding-to-events
type AlertButtonProps = {
  message: string;
  children: React.ReactNode;
};

const AlertButton = (props: AlertButtonProps) => {
  const handleClick = () => {
    alert("clicked " + props.message);
  };

  // event handler が component の中に宣言されているため props にアクセスできる
  return <button onClick={handleClick}>{props.children}</button>;
};

const EventHandlerSample = () => {
  return (
    <>
      <AlertButton message="playing">play movie</AlertButton>
      <br />
      <AlertButton message="uploading">upload image</AlertButton>
    </>
  );
};

export default EventHandlerSample;
