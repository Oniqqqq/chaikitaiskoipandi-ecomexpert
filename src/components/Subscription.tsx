import { IconArrowShort } from "./Icons";

const STEPS = [
  {
    n: "01",
    title: "Выбрали чай и как часто",
    text: "Один сорт или небольшая связка. Ритм — ваш.",
  },
  {
    n: "02",
    title: "Перед отправкой напомним и покажем состав",
    text: "Письмо с тем, что едет в этой партии.",
  },
  {
    n: "03",
    title: "Чай приезжает по графику",
    text: "СДЭК по России, как обычный заказ из магазина.",
  },
];

function PandaRoad() {
  return (
    <div className="sub-visual" aria-hidden>
      <video
        className="sub-video"
        src="/videos/panda-truck.mp4?v=pong"
        poster="/videos/panda-truck.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
      />
    </div>
  );
}

export function Subscription() {
  return (
    <section className="section" id="subscription">
      <div className="wrap sub-grid">
        <PandaRoad />
        <div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "0" }}>
            Чай, который приезжает сам
          </h2>
          <div className="steps">
            {STEPS.map((step) => (
              <div className="step" key={step.n}>
                <b>{step.n}</b>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="btn btn-primary" href="#franchise">
            Узнать о подписке <IconArrowShort />
          </a>
        </div>
      </div>
    </section>
  );
}
