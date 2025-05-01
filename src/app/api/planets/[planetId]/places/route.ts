import { NextResponse } from "next/server";

export type Place = {
  id: string;
  name: string;
  description: string;
};

const placesData: Record<string, Place[]> = {
  "1": [
    { id: "1", name: "カロリス盆地", description: "最大のクレーター" },
    {
      id: "2",
      name: "ベートーヴェン盆地",
      description: "大きな衝突クレーター",
    },
  ],
  "2": [
    { id: "1", name: "イシュタル大陸", description: "金星最大の高地" },
    { id: "2", name: "マクスウェル山脈", description: "金星で最も高い山脈" },
  ],
  "3": [
    { id: "1", name: "エベレスト", description: "地球上で最も高い山" },
    { id: "2", name: "マリアナ海溝", description: "地球上で最も深い場所" },
  ],
  "4": [
    { id: "1", name: "オリンポス山", description: "太陽系最大の火山" },
    { id: "2", name: "バレス・マリネリス", description: "巨大な渓谷システム" },
  ],
};

export async function GET(
  request: Request,
  { params }: { params: { planetId: string } },
) {
  const { planetId } = params;
  const places = placesData[planetId as keyof typeof placesData] || [];

  return NextResponse.json(places);
}
