import { IconArrowShort } from "./Icons";

export function Scenarios() {
  const items = [
    {
      title: "Купить чай",
      text: "Выбрать по вкусу, году и фасовке. Отправим СДЭК по России.",
      href: "#catalog",
      cta: "В каталог",
      image: "/images/scenes/interior-3.jpg",
    },
    {
      title: "Получать регулярно",
      text: "Соберём ритм поставок. Перед отправкой напомним и покажем состав.",
      href: "#subscription",
      cta: "О подписке",
      image: "/images/rooms/loft-1.jpg",
    },
    {
      title: "Прийти в чайную",
      text: "Пять своих точек в Волгограде и Москве. Можно просто сесть и заказать пролив.",
      href: "#tearooms",
      cta: "Адреса",
      image: "/images/rooms/table-panda.jpg",
    },
  ];

  return (
    <section className="section" id="scenarios">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">Как вам удобнее встретиться с чаем</h2>
        </div>
        <div className="scenarios-grid">
          {items.map((item) => (
            <a className="scenario" key={item.title} href={item.href}>
              <img src={item.image} alt="" />
              <div className="scenario-shade" />
              <div className="parchment">
                <h3 className="display">{item.title}</h3>
                <p>{item.text}</p>
                <span className="text-link">
                  {item.cta} <IconArrowShort />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
