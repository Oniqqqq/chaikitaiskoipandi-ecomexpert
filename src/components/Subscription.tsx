export function Subscription() {
  const cakes = [
    "/images/cakes/puer.jpg",
    "/images/cakes/white.jpg",
    "/images/cakes/red.jpg",
    "/images/cakes/gaba-sheng.jpg",
    "/images/products/nannuo.jpg",
    "/images/products/gift-set.jpg",
  ];

  return (
    <section className="section" id="subscription">
      <div className="wrap sub-grid">
        <div className="sub-visual" aria-hidden>
          <div className="flow">
            {[...cakes, ...cakes].map((src, i) => (
              <img key={`${src}-${i}`} src={src} alt="" />
            ))}
          </div>
        </div>
        <div>
          <p className="kicker">05 / Подписка</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "10px 0 0" }}>
            Чай, который приезжает сам
          </h2>
          <div className="steps">
            <div className="step">
              <b>1</b>
              <div>
                <strong>Выбрали чай и как часто</strong>
                <p style={{ margin: "4px 0 0", color: "var(--ink-soft)" }}>Один сорт или небольшая связка. Ритм — ваш.</p>
              </div>
            </div>
            <div className="step">
              <b>2</b>
              <div>
                <strong>Перед отправкой напомним и покажем состав</strong>
                <p style={{ margin: "4px 0 0", color: "var(--ink-soft)" }}>Письмо с тем, что едет в этой партии.</p>
              </div>
            </div>
            <div className="step">
              <b>3</b>
              <div>
                <strong>Чай приезжает по графику</strong>
                <p style={{ margin: "4px 0 0", color: "var(--ink-soft)" }}>СДЭК по России, как обычный заказ из магазина.</p>
              </div>
            </div>
          </div>
          <p className="sub-note">Пауза или пропуск партии — в один клик, без объяснений.</p>
          <a className="btn btn-primary" href="#franchise">
            Узнать о подписке
          </a>
        </div>
      </div>
    </section>
  );
}
