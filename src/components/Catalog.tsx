import { useState } from "react";
import { categories, products } from "../data/site";
import { ProductCard } from "./ProductCard";

export function Categories() {
  const [hot, setHot] = useState<string | null>(null);

  return (
    <section className="section" id="catalog">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">Категории</h2>
        </div>
        <div
          className={`cat-grid${hot ? ` is-${hot}` : ""}`}
          onMouseLeave={() => setHot(null)}
        >
          {categories.map((cat) => (
            <a
              className={`cat-tile tile-${cat.id}`}
              key={cat.id}
              href={cat.href}
              id={cat.id === "ware" ? "ware" : cat.id === "gifts" ? "gifts" : undefined}
              onMouseEnter={() => setHot(cat.id)}
            >
              <img src={cat.image} alt="" />
              <div className="parchment parchment-tile">
                <strong>{cat.title}</strong>
                <span>{cat.count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section className="section" id="catalog">
      <span id="hits" hidden />
      <span id="ware" hidden />
      <span id="gifts" hidden />
      <div className="wrap">
        <div className="showcase-sheet">
          <div className="section-head">
            <h2 className="display">Сейчас на полке</h2>
          </div>
          <div className="cards">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
