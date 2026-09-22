import { useMemo, useState } from "react";
import { rooms } from "../data/site";
import { IconArrowShort } from "./Icons";

const cities = ["Волгоград", "Москва"] as const;

function mapSrc(activeId: string, city: string) {
  const cityRooms = rooms.filter((r) => r.city === city);
  const current = cityRooms.find((r) => r.id === activeId) ?? cityRooms[0];
  const pts = cityRooms
    .map((r) => `${r.lon},${r.lat},${r.id === current.id ? "pm2rdm" : "pm2grm"}`)
    .join("~");
  return `https://yandex.ru/map-widget/v1/?ll=${current.lon},${current.lat}&z=14&l=map&lang=ru_RU&pt=${pts}`;
}

export function Tearooms() {
  const [active, setActive] = useState(rooms[0].id);
  const current = rooms.find((r) => r.id === active) ?? rooms[0];
  const src = useMemo(() => mapSrc(current.id, current.city), [current.id, current.city]);
  const cityRooms = rooms.filter((r) => r.city === current.city);

  return (
    <section className="section" id="tearooms">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">Пять своих точек. Можно просто прийти.</h2>
        </div>
        <div className="rooms-grid">
          <div className="map">
            <iframe title={`Чайные: ${current.city}`} src={src} loading="lazy" />
          </div>
          <div className="rooms-side">
            <div className="city-tabs" role="tablist">
              {cities.map((city) => (
                <button
                  key={city}
                  className={`city-tab${current.city === city ? " is-on" : ""}`}
                  onClick={() => setActive(rooms.find((r) => r.city === city)?.id ?? active)}
                >
                  {city}
                </button>
              ))}
            </div>
            <div className="rooms-list">
              {cityRooms.map((room) => (
                <button
                  key={room.id}
                  className={`room${room.id === current.id ? " is-on" : ""}`}
                  onClick={() => setActive(room.id)}
                >
                  <img src={room.photo} alt="" />
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
            <a className="rooms-open" href="#franchise">
              <span>
                <small>Франшиза</small>
                <strong>Открыть свою чайную</strong>
              </span>
              <i>
                <IconArrowShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
