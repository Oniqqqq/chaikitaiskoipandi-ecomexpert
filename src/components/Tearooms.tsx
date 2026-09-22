import { useState } from "react";
import { rooms } from "../data/site";

export function Tearooms() {
  const [active, setActive] = useState(rooms[0].id);
  const current = rooms.find((r) => r.id === active) ?? rooms[0];
  const cities = ["Волгоград", "Москва"];

  return (
    <section className="section" id="tearooms">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">06 / Чайные</p>
            <h2 className="display">Пять своих точек. Можно просто прийти.</h2>
          </div>
          <p>Не театральная церемония — городская чайная: стол, пролив, разговор, полка с блинами.</p>
        </div>
        <div className="rooms-grid">
          <div className="map">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M8 70 C18 52, 28 48, 40 58 C46 64, 38 80, 24 84 C14 86, 6 78, 8 70Z"
                fill="rgba(176,122,69,0.09)"
                stroke="rgba(43,39,35,0.08)"
              />
              <path
                d="M58 22 C72 16, 88 24, 90 40 C92 54, 78 62, 66 56 C54 50, 50 30, 58 22Z"
                fill="rgba(106,107,74,0.1)"
                stroke="rgba(43,39,35,0.08)"
              />
              <text x="18" y="90" fontSize="3.2" fill="#7a736a">
                Волгоград
              </text>
              <text x="70" y="18" fontSize="3.2" fill="#7a736a">
                Москва
              </text>
            </svg>
            {rooms.map((room) => (
              <button
                key={room.id}
                className={`pin${room.id === active ? " is-on" : ""}`}
                style={{ left: `${room.x}%`, top: `${room.y}%` }}
                onClick={() => setActive(room.id)}
                aria-label={room.name}
              />
            ))}
          </div>
          <div>
            <div className="rooms-photo">
              <img src="/images/rooms/loft-2.jpg" alt="Зал чайной: заваривание за стойкой" />
            </div>
            <div className="rooms-list" style={{ marginTop: 12 }}>
              {cities.map((city) => (
                <div key={city}>
                  <p className="kicker" style={{ margin: "10px 0 8px" }}>
                    {city}
                  </p>
                  {rooms
                    .filter((r) => r.city === city)
                    .map((room) => (
                      <button
                        key={room.id}
                        className={`room${room.id === current.id ? " is-on" : ""}`}
                        onClick={() => setActive(room.id)}
                      >
                        <div>
                          <small>{room.name}</small>
                          <b>{room.address}</b>
                          <span>
                            {room.hours} · {room.phone}
                          </span>
                        </div>
                      </button>
                    ))}
                </div>
              ))}
            </div>
            <a className="franchise-link" href="#franchise">
              Открыть свою чайную
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
