import { useEffect, useRef } from "react";
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
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let raf = 0;
    let last = 0;
    let reversing = false;

    const reverse = (now: number) => {
      if (!last) last = now;
      const next = video.currentTime - Math.min(0.05, (now - last) / 1000);
      last = now;
      if (next <= 0.02) {
        reversing = false;
        video.currentTime = 0;
        void video.play();
        return;
      }
      video.currentTime = next;
      raf = requestAnimationFrame(reverse);
    };

    const onEnded = () => {
      reversing = true;
      last = 0;
      video.pause();
      raf = requestAnimationFrame(reverse);
    };

    const play = () => {
      if (!reversing) void video.play().catch(() => undefined);
    };

    video.loop = false;
    video.addEventListener("ended", onEnded);
    video.addEventListener("canplay", play);
    play();

    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("canplay", play);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="sub-visual" aria-hidden>
      <video
        ref={ref}
        className="sub-video"
        src="/videos/panda-truck.mp4"
        poster="/videos/panda-truck.jpg"
        muted
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
