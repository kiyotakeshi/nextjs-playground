"use client";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

// event を propagate しない
const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        props.onClick();
      }}
    >
      {props.children}
    </button>
  );
};

const EventHandler4Sample = () => {
  return (
    <div
      className="toolbar"
      // これは呼ばれない！
      onClick={() => {
        alert("you clicked on the toolbar!");
      }}
    >
      <Button
        onClick={() => {
          alert("playing...");
        }}
      >
        play movie
      </Button>
      <br />
      <Button
        onClick={() => {
          alert("uploading...");
        }}
      >
        upload movie
      </Button>
    </div>
  );
};

export default EventHandler4Sample;
