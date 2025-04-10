"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  count: number;
};

const UseStateSample5 = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "お茶", count: 5 },
    { id: 2, name: "コーヒー", count: 3 },
    { id: 3, name: "ミルク", count: 1 },
  ]);

  return (
    <>
      <h1>products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {"(" + product.count + ")"}{" "}
            <button
              onClick={() => {
                setProducts(
                  // .map で新しい配列を作っているので set 関数に渡してよし
                  products.map((p) =>
                    // 以下のように書くと全ての product の count が 1 ずつ増える
                    // product.id === product.id ? { ...p, count: p.count + 1 } : p,
                    p.id === product.id ? { ...p, count: p.count + 1 } : p,
                  ),
                );
              }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseStateSample5;
