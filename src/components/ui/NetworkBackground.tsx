"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

interface Packet {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      nodes = Array.from({ length: 18 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 3 + 2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      }));

      packets = Array.from({ length: 8 }, () => ({
        from: Math.floor(Math.random() * nodes.length),
        to: Math.floor(Math.random() * nodes.length),
        progress: Math.random(),
        speed: Math.random() * 0.005 + 0.003,
      }));
    };

    const drawWorldMap = (w: number, h: number) => {
      ctx.strokeStyle = "rgba(37, 99, 235, 0.08)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < 8; i++) {
        const y = (h / 8) * i + h * 0.1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < w; x += 20) {
          ctx.lineTo(x, y + Math.sin(x * 0.01 + i) * 15);
        }
        ctx.stroke();
      }

      for (let i = 0; i < 12; i++) {
        const x = (w / 12) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);
      drawWorldMap(w, h);

      nodes.forEach((node, i) => {
        node.pulse += node.pulseSpeed;
        const glow = Math.sin(node.pulse) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.1 * glow})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${0.6 + glow * 0.4})`;
        ctx.fill();

        nodes.slice(i + 1).forEach((other) => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.2 * (1 - dist / 200)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.from = packet.to;
          packet.to = Math.floor(Math.random() * nodes.length);
          packet.progress = 0;
        }

        const from = nodes[packet.from];
        const to = nodes[packet.to];
        if (!from || !to) return;

        const x = from.x + (to.x - from.x) * packet.progress;
        const y = from.y + (to.y - from.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.9)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.2)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const handleResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
