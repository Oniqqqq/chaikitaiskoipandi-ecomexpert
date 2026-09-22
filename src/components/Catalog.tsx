import { categories, products } from "../data/site";
import { ProductCard } from "./ProductCard";

export function Categories() {
  return (
    <section className="section" id="catalog">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">03 / Ассортимент</p>
            <h2 className="display">Сначала материал, потом полка</h2>
          </div>
          <p>Крупные входы в категории — продолжение hero: реальный лист, блины, посуда. Без декоративного шума.</p>
        </div>
        <div className="cat-grid">
          {categories.map((cat) => (
            <a className="cat-tile" key={cat.id} href={cat.href} id={cat.id === "ware" ? "ware" : cat.id === "gifts" ? "gifts" : undefined}>
              <img src={cat.image} alt="" />
              <strong>{cat.title}</strong>
              <span>{cat.count}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section className="section" id="hits" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sheet showcase-sheet">
          <div className="section-head">
            <div>
              <p className="kicker">04 / Витрина</p>
              <h2 className="display">Хиты и состояния карточек</h2>
            </div>
            <p>Здесь интерфейс спокойнее hero. Цена — за минимальную фасовку, переключатель меняет её сразу.</p>
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
