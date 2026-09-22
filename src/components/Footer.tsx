import { legal, NAV, PHONE, PHONE_HREF, rooms, TELEGRAM, VK } from "../data/site";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img src="/images/logo.png" alt="" width={56} height={56} />
            <p style={{ maxWidth: 260, color: "rgba(236,230,220,0.72)" }}>
              Чай Китайской Панды — магазин и свои чайные. Волгоград и Москва.
            </p>
          </div>
          <div>
            <h4>Меню</h4>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#delivery">Доставка и оплата</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Чайные</h4>
            <ul>
              {rooms.map((room) => (
                <li key={room.id}>
                  {room.city}, {room.address}
                </li>
              ))}
            </ul>
          </div>
          <div id="contacts">
            <h4>Связь</h4>
            <ul>
              <li>
                <a href={PHONE_HREF}>{PHONE}</a>
              </li>
              <li>
                <a href={TELEGRAM} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a href={VK} target="_blank" rel="noreferrer">
                  ВКонтакте
                </a>
              </li>
              <li id="franchise">
                <a href="#franchise">Франшиза</a>
              </li>
              <li>
                <a href="#footer">Оферта</a>
              </li>
              <li>
                <a href="#footer">Политика конфиденциальности</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            {legal.ip} · ИНН {legal.inn} · ОГРН {legal.ogrn}
          </span>
          <span>© {new Date().getFullYear()} Чай Китайской Панды</span>
        </div>
      </div>
    </footer>
  );
}
