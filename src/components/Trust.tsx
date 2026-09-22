import { IconParcel, IconPay, IconPeak, IconShop, IconStamp, IconWrap } from "./Icons";

const pick = [
  { icon: <IconPeak />, text: "Май, Китай — выставка и фабрики своими ногами" },
  { icon: <IconStamp />, text: "Год, гора, фабрика: есть данные — пишем, нет — не выдумываем" },
];

const ship = [
  { icon: <IconParcel />, title: "СДЭК по России", text: "До пункта и до двери. Срок виден до оплаты." },
  { icon: <IconPay />, title: "Карта на сайте", text: "Эквайринг Сбера. Чек сразу, без наложенного." },
  { icon: <IconShop />, title: "Самовывоз", text: "С полки любой из пяти своих чайных." },
  { icon: <IconWrap />, title: "Упаковка 150 ₽", text: "Входит в расчёт доставки, не сюрпризом на кассе." },
];

export function Trust() {
  return (
    <section className="section" id="trust">
      <div className="wrap trust-board">
        <article className="trust-pick">
          <img src="/images/rooms/table-panda.jpg" alt="" />
          <div>
            <p className="eyebrow">Как отбираем чай</p>
            <h2 className="display">Сами едем. Сами пьём.</h2>
            <p>
              Два раза в год — на горы и фабрики. В каталог попадает то, что стоит в чайных, а не то, что удобно
              фасовать пакетом.
            </p>
            <ul>
              {pick.map((item) => (
                <li key={item.text}>
                  <i>{item.icon}</i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article className="trust-ship" id="delivery">
          <p className="eyebrow">Доставка и оплата</p>
          <h2 className="display">С полки чайной — в СДЭК.</h2>
          <ul>
            {ship.map((item) => (
              <li key={item.title}>
                <i>{item.icon}</i>
                <div>
                  <b>{item.title}</b>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
