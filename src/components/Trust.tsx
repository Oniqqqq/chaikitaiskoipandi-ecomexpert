export function Trust() {
  return (
    <section className="section" id="trust">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">07 / Откуда чай</p>
            <h2 className="display">Коротко и по делу</h2>
          </div>
        </div>
        <div className="trust">
          <article>
            <p className="kicker">отбор</p>
            <h3 className="display">Чай выбираем в Китае дважды в год</h3>
            <p style={{ color: "var(--ink-soft)" }}>
              Едем на фабрики и в горы сами. Берём то, что пьём в чайных, а не то, что удобно продавать пакетом.
            </p>
          </article>
          <article>
            <p className="kicker">происхождение</p>
            <h3 className="display">Год, гора, фабрика — на карточке</h3>
            <p style={{ color: "var(--ink-soft)" }}>
              Если есть год пресса и место сбора, мы их пишем. Если данных нет — не дорисовываем легенду.
            </p>
          </article>
          <article>
            <p className="kicker">доставка</p>
            <h3 className="display">СДЭК по России, оплата картой на сайте</h3>
            <p style={{ color: "var(--ink-soft)" }}>
              Заказ собираем с полки чайной. Самовывоз — в любой из пяти точек.
            </p>
            <a className="franchise-link" href="#footer">
              Подробности о доставке
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
