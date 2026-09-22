export function Scenarios() {
  const items = [
    {
      title: "Купить чай",
      text: "Выбрать по вкусу, году и фасовке. Отправим СДЭК по России.",
      href: "#catalog",
      cta: "В каталог",
      image: "/images/products/nannuo.jpg",
    },
    {
      title: "Получать чай регулярно",
      text: "Соберём ритм поставок. Перед отправкой напомним и покажем состав.",
      href: "#subscription",
      cta: "О подписке",
      image: "/images/products/gift-set.jpg",
    },
    {
      title: "Прийти в чайную",
      text: "Пять своих точек в Волгограде и Москве. Можно просто сесть и заказать пролив.",
      href: "#tearooms",
      cta: "Адреса",
      image: "/images/rooms/loft-2.jpg",
    },
  ];

  return (
    <section className="section" id="scenarios">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">01 / Три входа</p>
            <h2 className="display">Как вам удобнее встретиться с чаем</h2>
          </div>
          <p>Магазин, регулярная доставка или живая чайная — один бренд, три спокойных сценария.</p>
        </div>
        <div className="scenarios-grid">
          {items.map((item) => (
            <a className="scenario" key={item.title} href={item.href}>
              <img src={item.image} alt="" />
              <div className="scenario-shade" />
              <div className="scenario-body">
                <p className="kicker">сценарий</p>
                <h3 className="display">{item.title}</h3>
                <p>{item.text}</p>
                <span className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
                  {item.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
