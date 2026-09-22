import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, heroSlides } from "../data/site";
import { IconArrow, IconArrowShort } from "./Icons";
import { WaterField } from "./WaterField";

const orbit = {
  enter: (dir: number) => ({
    x: dir > 0 ? 340 : -340,
    y: 150,
    scale: 0.46,
    opacity: 0,
    rotate: dir > 0 ? 12 : -12,
  }),
  center: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -340 : 340,
    y: 170,
    scale: 0.42,
    opacity: 0,
    rotate: dir > 0 ? -14 : 14,
  }),
};

function Cake({ src }: { src: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, lift: 0 });

  return (
    <div
      className="cake is-active"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        setTilt({ x: (0.5 - py) * 6, y: (px - 0.5) * 7, lift: 5 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0, lift: 0 })}
    >
      <div
        className="cake-visual"
        style={{
          transform: `translateY(${-tilt.lift}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img src={src} alt="" />
        <i className="cake-glare" />
      </div>
    </div>
  );
}

function Caption({ slide }: { slide: (typeof heroSlides)[number] }) {
  return (
    <a className="hero-product" href={slide.href}>
      <div className="cat">{slide.category}</div>
      <h2>{slide.product}</h2>
      <p>
        {slide.taste}. {slide.note}
      </p>
      <span className="price">
        от {formatPrice(slide.priceFrom)}
        <IconArrowShort />
      </span>
    </a>
  );
}

export function Hero() {
  const [[active, direction], setSlide] = useState([2, 1]);
  const [pulse, setPulse] = useState(0);
  const slide = heroSlides[active];

  const go = (dir: 1 | -1) => {
    setSlide([ (active + dir + heroSlides.length) % heroSlides.length, dir ]);
    setPulse((n) => n + 1);
  };

  return (
    <section className="hero" id="top" style={{ ["--tint" as string]: slide.tint }}>
      <div className="hero-tint" />
      <WaterField pulse={pulse} tint={slide.tint} />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Магазин и чайные</p>
          <h1 className="display">
            Китайский чай,
            <br />
            который легко
            <br />
            выбрать
          </h1>
          <p className="hero-lead">
            Поможем найти свой вкус, привезём домой или заварим в одной из наших чайных.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#quiz">
              Подобрать чай за минуту <IconArrowShort />
            </a>
            <a className="btn btn-ghost" href="#catalog">
              Смотреть каталог
            </a>
          </div>
          <AnimatePresence mode="wait">
            <motion.aside
              key={`${slide.id}-flow`}
              className="hero-caption hero-caption-flow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <Caption slide={slide} />
            </motion.aside>
          </AnimatePresence>
        </div>

        <div className="hero-stage">
          <i className="hero-ring" aria-hidden />
          <div className="hero-orbit">
            <AnimatePresence custom={direction}>
              <motion.div
                key={slide.id}
                className="hero-orbit-item"
                custom={direction}
                variants={orbit}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 52, damping: 18, mass: 1.05 }}
              >
                <Cake src={slide.image} />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.aside
              key={slide.id}
              className="hero-caption"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <Caption slide={slide} />
            </motion.aside>
          </AnimatePresence>

          <div className="hero-nav">
            <button className="arrow" aria-label="Предыдущий" onClick={() => go(-1)}>
              <IconArrow dir="left" />
            </button>
            <button className="arrow" aria-label="Следующий" onClick={() => go(1)}>
              <IconArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
