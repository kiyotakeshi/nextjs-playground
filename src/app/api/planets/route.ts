import { NextResponse } from "next/server";

export type Planet = {
  id: string;
  name: string;
  description: string;
};

const planets: Planet[] = [
  { id: "1", name: "水星", description: "太陽に最も近い惑星" },
  { id: "2", name: "金星", description: "地球に似た大きさの惑星" },
  { id: "3", name: "地球", description: "生命が存在する唯一の惑星" },
  { id: "4", name: "火星", description: "赤い惑星" },
];

export async function GET() {
  return NextResponse.json(planets);
}
