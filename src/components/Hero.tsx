import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, heroSlides } from "../data/site";
import { useMedia } from "../hooks/useMedia";
import { IconArrow } from "./Icons";
import { WaterField } from "./WaterField";

function pose(index: number, active: number, compact: boolean) {
  const n = heroSlides.length;
  const rel = ((index - active) % n + n) % n;
  const angles = compact ? [-88, -132, -44, 10] : [-70, -112, -36, 10];
  const scales = [1, 0.78, 0.6, 0.76];
  const zs = [5, 2, 1, 3];
  const rad = (angles[rel] * Math.PI) / 180;
  return {
    left: `${(compact ? 50 : 54) + Math.cos(rad) * (compact ? 32 : 40)}%`,
    top: `${(compact ? 42 : 76) + Math.sin(rad) * (compact ? 24 : 34)}%`,
    scale: scales[rel],
    zIndex: zs[rel],
    opacity: rel === 2 ? 0.78 : 1,
  };
}

function Cake({
  src,
  active,
  onSelect,
}: {
  src: string;
  active: boolean;
  onSelect: () => void;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, lift: 0 });

  return (
    <button
      className={`cake${active ? " is-active" : ""}`}
      onClick={onSelect}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        setTilt({ x: (0.5 - py) * 7, y: (px - 0.5) * 8, lift: 6 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0, lift: 0 })}
      aria-label="Выбрать чай"
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
    </button>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [pulse, setPulse] = useState(0);
  const slide = heroSlides[active];
  const compact = useMedia("(max-width: 1100px)");

  const go = (dir: 1 | -1) => {
    setActive((i) => (i + dir + heroSlides.length) % heroSlides.length);
    setPulse((n) => n + 1);
  };

  const poses = useMemo(
    () => heroSlides.map((_, i) => pose(i, active, compact)),
    [active, compact],
  );

  return (
    <section
      className="hero"
      id="top"
      style={{ ["--tint" as string]: slide.tint }}
    >
      <div className="hero-tint" />
      <WaterField pulse={pulse} tint={slide.tint} />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">Магазин и чайные</p>
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
              Подобрать чай за минуту
            </a>
            <a className="btn btn-ghost" href="#catalog">
              Смотреть каталог
            </a>
          </div>
          <AnimatePresence mode="wait">
            <motion.aside
              key={`${slide.id}-mobile`}
              className="hero-caption hero-caption-flow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <div className="cat">{slide.category}</div>
              <h2 className="display">{slide.product}</h2>
              <p>{slide.taste}. {slide.note}</p>
              <div className="price">от {formatPrice(slide.priceFrom)}</div>
            </motion.aside>
          </AnimatePresence>
        </div>

        <div className="hero-stage">
          {heroSlides.map((item, i) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={poses[i]}
              transition={{ type: "spring", stiffness: 70, damping: 18, mass: 0.95 }}
              style={{ position: "absolute" }}
            >
              <Cake
                src={item.image}
                active={i === active}
                onSelect={() => {
                  setActive(i);
                  setPulse((n) => n + 1);
                }}
              />
            </motion.div>
          ))}

          <AnimatePresence mode="wait">
            <motion.aside
              key={slide.id}
              className="hero-caption"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <div className="cat">{slide.category}</div>
              <h2 className="display">{slide.product}</h2>
              <p>{slide.taste}. {slide.note}</p>
              <div className="price">от {formatPrice(slide.priceFrom)}</div>
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
