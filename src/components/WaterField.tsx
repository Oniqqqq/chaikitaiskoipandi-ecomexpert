import { useEffect, useRef } from "react";

type Props = {
  pulse: number;
  tint: string;
};

export function WaterField({ pulse, tint }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.64, y: 0.52, vx: 0, vy: 0 });
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
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    let last = { x: 0.64, y: 0.52 };
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouse.current = {
        x,
        y,
        vx: x - last.x,
        vy: y - last.y,
      };
      last = { x, y };
    };
    parent.addEventListener("mousemove", onMove);

    let raf = 0;
    const draw = (t: number) => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const time = t * 0.00018;
      pulseRef.current *= 0.96;
      mouse.current.vx *= 0.92;
      mouse.current.vy *= 0.92;

      const mx = mouse.current.x * w;
      const my = mouse.current.y * h;
      const [hue, sat, light] = tint.split(" ");
      const bands = 7;

      for (let i = 0; i < bands; i++) {
        ctx.beginPath();
        const base = h * (0.18 + i * 0.11);
        for (let x = 0; x <= w; x += 8) {
          const nx = x / w;
          const dist = Math.hypot(x - mx, base - my) / 280;
          const mouseBend = Math.exp(-dist * dist * 1.8) * (18 + Math.abs(mouse.current.vx) * 120);
          const pulseBend = pulseRef.current * Math.sin(dist * 8 - (1 - pulseRef.current) * 9) * 16;
          const y =
            base +
            Math.sin(nx * 7.2 + time * 1.6 + i * 0.7) * 4.5 +
            Math.sin(nx * 2.4 - time + i) * 3 +
            mouseBend * Math.sin(nx * 9 + time) * 0.55 +
            pulseBend;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsla(${hue}, ${sat}, ${light}, ${0.045 + i * 0.006})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      const glow = 0.035 + pulseRef.current * 0.04;
      const g = ctx.createRadialGradient(mx, my, 8, mx, my, 220);
      g.addColorStop(0, `hsla(${hue}, ${sat}, 78%, ${glow})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

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
