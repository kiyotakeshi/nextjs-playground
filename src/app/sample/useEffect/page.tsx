"use client";

import { useEffect, useRef, useState } from "react";

// https://ja.react.dev/learn/synchronizing-with-effects

type VideoPlayerProps = {
  src: string;
  isPlaying: boolean;
};

const VideoPlayer = ({ src, isPlaying }: VideoPlayerProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  // effect は特定の event によってではなく、
  // render 自体によって引き起こされる side effect(副作用)を指定するためのもの

  // メッセージ送信はユーザーがボタンをクリックすることによって直接引き起こされるため event

  // サーバー接続のセットアップは component が表示される原因となる interaction に関係なく行われる
  // render 自体によって引き起こされるため effect

  // なるべく Effect は使わずに実現できるかを考えるべし
  useEffect(() => {
    if (isPlaying) {
      console.log("calling video.play()");
      ref.current?.play();
    } else {
      console.log("calling video.pause()");
      ref.current?.pause();
    }
    // 依存配列(dependency array)に指定がない場合は、 component が render されるたびに実行される
    // 必要に応じて effect を実行するために依存配列は指定した方が良い
    // > React は、個々の依存値を Object.is を用いて比較します
  }, [isPlaying]);
  // }, []); // mount 時(component が初めて表示される時)のみに実行される
  // }); // 依存配列の指定がない場合は、毎回の render 時に実行される

  return <video ref={ref} src={src} loop playsInline />;
};

const UseEffectSample = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        // setIsPlaying((prev) => {
        //   console.log("prev", prev);
        //   return !prev;
        // })
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default UseEffectSample;
