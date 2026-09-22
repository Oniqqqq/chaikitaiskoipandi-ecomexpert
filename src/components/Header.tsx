import { useEffect, useState } from "react";
import { CATALOG_MENU, PHONE, PHONE_HREF, VK, products, formatPrice } from "../data/site";
import { useCart } from "../context/CartContext";
import { IconBag, IconClose, IconMenuMark, IconSearch, IconUser, IconVk } from "./Icons";

type Panel = "catalog" | "search" | "account" | "cart" | null;

export function Header() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"in" | "up">("in");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = panel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [panel]);

  const hits = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  const toggle = (next: Panel) => setPanel((cur) => (cur === next ? null : next));

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}${panel === "catalog" || panel === "search" ? " is-open" : ""}`}>
        <div className="wrap header-inner">
          <a className="brand" href="#top" onClick={() => setPanel(null)}>
            <img src="/images/logo.png" alt="Чай Китайской Панды" />
          </a>

          <div className="header-left">
            <button className={`chip chip-dark${panel === "catalog" ? " is-on" : ""}`} onClick={() => toggle("catalog")}>
              <IconMenuMark />
              <span>Меню</span>
            </button>
            <button className={`chip${panel === "search" ? " is-on" : ""}`} onClick={() => toggle("search")}>
              <IconSearch />
              <span>Поиск</span>
            </button>
          </div>

          <div className="header-right">
            <a className="chip chip-ghost" href={PHONE_HREF}>
              {PHONE}
            </a>
            <a className="vk-link" href={VK} target="_blank" rel="noreferrer" aria-label="ВКонтакте">
              <IconVk />
            </a>
            <button className={`chip${panel === "account" ? " is-on" : ""}`} onClick={() => toggle("account")}>
              <IconUser />
              <span>Войти</span>
            </button>
            <button className={`chip${panel === "cart" ? " is-on" : ""}`} onClick={() => toggle("cart")}>
              <IconBag />
              <span>Корзина</span>
              {count > 0 && <i className="chip-count">{count}</i>}
            </button>
          </div>
        </div>

        {panel === "catalog" && (
          <div className="mega">
            <div className="wrap mega-grid">
              {CATALOG_MENU.map((col) => (
                <div key={col.title}>
                  <p>{col.title}</p>
                  <nav>
                    {col.items.map((item) => (
                      <a key={item.href} href={item.href} onClick={() => setPanel(null)}>
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        )}

        {panel === "search" && (
          <div className="mega mega-search">
            <div className="wrap">
              <input
                className="search-input"
                autoFocus
                placeholder="Найти чай, блин или посуду"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="search-hits">
                {hits.map((p) => (
                  <a className="search-hit" key={p.id} href={p.href} onClick={() => setPanel(null)}>
                    <img src={p.image} alt="" />
                    <span>
                      <b>{p.name}</b>
                      <br />
                      <small>{p.category}</small>
                    </span>
                    <span>{formatPrice(p.kind === "tea" ? p.packs[0].price : p.price)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {(panel === "catalog" || panel === "search") && (
        <button className="mega-shade" aria-label="Закрыть" onClick={() => setPanel(null)} />
      )}

      {panel === "account" && (
        <div className="sheet-layer" onClick={() => setPanel(null)}>
          <div className="sheet-card" onClick={(e) => e.stopPropagation()}>
            <button className="sheet-close" onClick={() => setPanel(null)} aria-label="Закрыть">
              <IconClose />
            </button>
            <h2>{mode === "in" ? "Войти" : "Регистрация"}</h2>
            <p>Личный кабинет: заказы, адреса и подписка. Сейчас макет — после Битрикс вход станет настоящим.</p>
            <form
              className="auth-form"
              onSubmit={(e) => {
                e.preventDefault();
                setPanel(null);
              }}
            >
              <input type="email" placeholder="Эл. почта" required />
              <input type="password" placeholder="Пароль" required />
              {mode === "up" && <input type="text" placeholder="Имя" required />}
              <button className="btn btn-dark" type="submit">
                {mode === "in" ? "Войти" : "Создать кабинет"}
              </button>
            </form>
            <button className="text-link" onClick={() => setMode(mode === "in" ? "up" : "in")}>
              {mode === "in" ? "Зарегистрироваться" : "У меня уже есть кабинет"}
            </button>
          </div>
        </div>
      )}

      {panel === "cart" && (
        <div className="sheet-layer" onClick={() => setPanel(null)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-head">
              <h2>Корзина</h2>
              <button onClick={() => setPanel(null)} aria-label="Закрыть">
                <IconClose />
              </button>
            </div>
            {count === 0 ? (
              <p className="cart-empty">Пока пусто. Положите чай с витрины.</p>
            ) : (
              <>
                <p className="cart-empty">
                  В корзине {count} {count === 1 ? "позиция" : "позиций"}. Оформление подключится с Битрикс.
                </p>
                <button className="btn btn-dark" onClick={() => setPanel(null)}>
                  К оформлению
                </button>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
