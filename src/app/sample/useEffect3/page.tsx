"use client";

import { useEffect, useState } from "react";
import type { Planet } from "@/app/api/planets/route";
import type { Place } from "@/app/api/planets/[planetId]/places/route";

const UseEffectSample3 = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<string>("");
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch("/api/planets");
      const data = await response.json();
      setPlanets(data);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const fetchPlaces = async () => {
      if (!selectedPlanet) {
        setPlaces([]);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(`/api/planets/${selectedPlanet}/places`);
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching places:", error);
        setPlaces([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaces();
  }, [selectedPlanet]);

  return (
    <div style={{ margin: "1rem" }}>
      <h1>useEffect サンプル3：データフェッチ</h1>

      <div style={{ marginTop: "1rem" }}>
        <select
          value={selectedPlanet}
          onChange={(e) => setSelectedPlanet(e.target.value)}
        >
          <option value="">惑星を選択</option>
          {planets.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name} - {planet.description}
            </option>
          ))}
        </select>
      </div>

      {selectedPlanet && (
        <div style={{ marginTop: "1rem" }}>
          <h2>名所一覧</h2>
          {loading ? (
            <p>読み込み中...</p>
          ) : (
            <ul>
              {places.map((place) => (
                <li key={place.id} style={{ marginBottom: "0.5rem" }}>
                  <strong>{place.name}</strong>
                  <div>{place.description}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UseEffectSample3;
