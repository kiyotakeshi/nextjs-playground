"use client";

// event propagation
// event handler は component のどの子がクリックされても event を catch する
// event は発生した場所から始まり、ツリーを上に向かって進んでいく
const EventHandler3Sample = () => {
  return (
    <div
      className="toolbar"
      onClick={() => {
        alert("you clicked on the toolbar!");
      }}
    >
      <button
        onClick={() => {
          alert("playing...");
        }}
      >
        play movie
      </button>
      <br />
      <button
        onClick={() => {
          alert("uploading...");
        }}
      >
        upload movie
      </button>
    </div>
  );
};

export default EventHandler3Sample;
