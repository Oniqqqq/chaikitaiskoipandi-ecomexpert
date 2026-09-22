import { useState } from "react";
import { formatPrice, type Product } from "../data/site";
import { useCart } from "../context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [pack, setPack] = useState(0);
  const [color, setColor] = useState(0);
  const [note, setNote] = useState("");
  const price = product.kind === "tea" ? product.packs[pack].price : product.price;
  const stockLabel = product.stock === "in" ? "В наличии" : product.stock === "low" ? "Мало осталось" : "Нет в наличии";

  return (
    <article className="card">
      <div className="card-photo">
        <img src={product.image} alt={product.name} />
        <span className={`stock ${product.stock}`}>{stockLabel}</span>
      </div>
      <div className="card-body">
        <div className="card-cat">{product.category}</div>
        <h3>{product.name}</h3>
        <div className="tags">
          {product.tags.map((tag) => (
            <i key={tag}>{tag}</i>
          ))}
        </div>
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
            <button
              className="btn-line"
              onClick={() => setNote("Сообщим, когда чай вернётся на полку.")}
            >
              Сообщить о поступлении
            </button>
          ) : (
            <button className="btn btn-dark" onClick={() => add(1)}>
              В корзину
            </button>
          )}
        </div>
        {note && <p style={{ margin: 0, color: "var(--mute)", fontSize: 13 }}>{note}</p>}
      </div>
    </article>
  );
}
