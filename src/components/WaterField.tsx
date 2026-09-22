import { useEffect, useRef } from "react";

type Props = {
  pulse: number;
  tint: string;
};

export function WaterField({ pulse, tint }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.62, y: 0.55 });
  const pulseRef = useRef(0);

  useEffect(() => {
    pulseRef.current = 1;
  }, [pulse]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouse.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    parent.addEventListener("mousemove", onMove);

    let raf = 0;
    const draw = (t: number) => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const time = t * 0.00028;
      pulseRef.current *= 0.965;

      const mx = mouse.current.x * w;
      const my = mouse.current.y * h;
      const step = 22;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const dx = (x - mx) / 240;
          const dy = (y - my) / 240;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ripple = Math.sin(dist * 7 - time * 6) * Math.exp(-dist * 1.6);
          const wave =
            Math.sin(x * 0.012 + time * 2.1) * Math.cos(y * 0.016 - time * 1.4) +
            Math.sin((x + y) * 0.009 + time) * 0.45;
          const pulseWave = Math.sin(dist * 9 - (1 - pulseRef.current) * 10) * pulseRef.current * 0.9;
          const light = (wave * 0.45 + ripple * 0.55 + pulseWave) * 0.5 + 0.5;
          const alpha = 0.018 + light * 0.055;
          const [hue, sat, lightCh] = tint.split(" ");
          ctx.fillStyle = `hsla(${hue}, ${sat}, ${lightCh}, ${alpha})`;
          ctx.beginPath();
          ctx.ellipse(x, y, 10 + light * 7, 4 + light * 3, 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMove);
    };
  }, [tint]);

  return <canvas ref={ref} className="water" aria-hidden />;
}
