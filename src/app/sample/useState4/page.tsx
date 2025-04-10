"use client";

import { useState } from "react";

type Artist = {
  id: number;
  name: string;
};

const UseStateSample4 = () => {
  const [artists, setArtists] = useState<Artist[]>([
    { id: 1, name: "Hedy Lamarr" },
    { id: 2, name: "Grace Hopper" },
    { id: 3, name: "Alan Turing" },
  ]);

  return (
    <>
      <h1>artists</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                // artist.id と異なる id を持つ artists のみの配列を作成する
                // 配列は再作成して得られて結果で setArtists している
                // ※`reverse()` や `sort()` メソッドは元の配列を書き換えるため、直接使うことはできない
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseStateSample4;
