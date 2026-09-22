import { useState } from "react";
import { formatPrice, type Product } from "../data/site";
import { useCart } from "../context/CartContext";
import { IconBag } from "./Icons";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [pack, setPack] = useState(0);
  const [color, setColor] = useState(0);
  const [note, setNote] = useState("");
  const price = product.kind === "tea" ? product.packs[pack].price : product.price;
  const stockLabel = product.stock === "in" ? "В наличии" : product.stock === "low" ? "Мало" : "Нет в наличии";

  return (
    <article className="card">
      <a className="card-photo" href={product.href}>
        <img src={product.image} alt={product.name} />
        {product.stock !== "in" && <span className={`stock ${product.stock}`}>{stockLabel}</span>}
      </a>
      <div className="card-body">
        <small className="card-cat">{product.category}</small>
        <h3>
          <a href={product.href}>{product.name}</a>
        </h3>
        {product.kind === "tea" ? (
          <div className="packs">
            {product.packs.map((item, i) => (
              <button key={item.label} className={`pack${pack === i ? " is-on" : ""}`} onClick={() => setPack(i)}>
                {item.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="swatches">
            {product.colors.map((item, i) => (
              <button
                key={item.id}
                className={`swatch${color === i ? " is-on" : ""}`}
                style={{ background: item.hex }}
                aria-label={item.name}
                title={item.name}
                onClick={() => setColor(i)}
              />
            ))}
          </div>
        )}
        <div className="card-buy">
          <strong>{formatPrice(price)}</strong>
          {product.stock === "out" ? (
            <button className="text-link" onClick={() => setNote("Сообщим, когда чай вернётся на полку.")}>
              Сообщить
            </button>
          ) : (
            <button className="card-add" onClick={() => add(1)} aria-label="В корзину">
              <IconBag />
            </button>
          )}
        </div>
        {note && <p className="card-note">{note}</p>}
      </div>
    </article>
  );
}
