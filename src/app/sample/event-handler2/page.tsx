"use client";

type ButtonProps = {
  // event handler を props として渡す(振る舞いは外側から渡す)
  // event handler は副作用のための最適な場所だが、情報の変更を格納するには state や component のメモリを使用する
  // 慣習的に event handler の prop は on~ という名前にする
  onClick: () => void;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

const PlayButton = (props: { movieName: string }) => {
  return (
    <Button
      onClick={() => {
        alert("Playing " + props.movieName);
      }}
    >
      Play "{props.movieName}"
    </Button>
  );
};

const UploadButton = () => {
  return (
    <Button
      onClick={() => {
        alert("Uploading...");
      }}
    >
      Upload
    </Button>
  );
};

const EventHandler2Sample = () => {
  return (
    <>
      <PlayButton movieName="The Matrix" />
      <br />
      <UploadButton />
    </>
  );
};

export default EventHandler2Sample;
