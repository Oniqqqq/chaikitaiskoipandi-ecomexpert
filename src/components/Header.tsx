import { useEffect, useState } from "react";
import { NAV, PHONE, PHONE_HREF, TELEGRAM, products, formatPrice } from "../data/site";
import { useCart } from "../context/CartContext";
import { IconBag, IconClose, IconMenu, IconSearch, IconUser } from "./Icons";

export function Header() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hits = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5);

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap header-inner">
          <a className="brand" href="#top">
            <img src="/images/logo.png" alt="Чай Китайской Панды" />
            <span className="brand-name">
              <span>Чай Китайской Панды</span>
              <span>чай · чайные · доставка</span>
            </span>
          </a>
          <nav className="nav">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <button className="icon-btn burger" aria-label="Меню" onClick={() => setMenuOpen(true)}>
              <IconMenu />
            </button>
            <a className="phone-link" href={PHONE_HREF}>
              {PHONE}
            </a>
            <a className="tg-link" href={TELEGRAM} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <button className="icon-btn" aria-label="Поиск" onClick={() => setSearchOpen(true)}>
              <IconSearch />
            </button>
            <button className="icon-btn" aria-label="Личный кабинет" onClick={() => setAccountOpen(true)}>
              <IconUser />
            </button>
            <a className="icon-btn" href="#cart" aria-label="Корзина">
              <IconBag />
              {count > 0 && <span className="cart-count">{count}</span>}
            </a>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="overlay" onClick={() => setSearchOpen(false)}>
          <div className="overlay-panel" onClick={(e) => e.stopPropagation()}>
            <input
              className="search-input"
              autoFocus
              placeholder="Найти чай, блин или посуду"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="search-hits">
              {hits.map((p) => (
                <a className="search-hit" key={p.id} href={p.href} onClick={() => setSearchOpen(false)}>
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

      {accountOpen && (
        <div className="overlay" onClick={() => setAccountOpen(false)}>
          <div className="overlay-panel" onClick={(e) => e.stopPropagation()}>
            <p className="kicker">Личный кабинет</p>
            <h2 className="display" style={{ fontSize: 36, margin: "12px 0 8px" }}>
              Войти, чтобы видеть заказы
            </h2>
            <p style={{ color: "var(--ink-soft)" }}>История, избранное и адреса доставки появятся после подключения Битрикс.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <button className="btn btn-primary" onClick={() => setAccountOpen(false)}>
                Понятно
              </button>
              <button className="btn btn-ghost" onClick={() => setAccountOpen(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)} />
          <aside className="drawer">
            <button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Закрыть">
              <IconClose />
            </button>
            <nav>
              {NAV.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a href={PHONE_HREF}>{PHONE}</a>
            <a href={TELEGRAM}>Telegram</a>
          </aside>
        </>
      )}
    </>
  );
}
