"use client";

import { useEffect, useRef } from "react";

interface BlobBackgroundProps {
  colors?: string[];
  blur?: number;
  opacity?: number;
}

export default function BlobBackground({
  colors = ["#f97316", "#a855f7", "#3b82f6", "#06b6d4"],
  blur = 120,
  opacity = 0.4,
}: BlobBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const blobs: Blob[] = [];
    const blobCount = colors.length;

    interface Blob {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBlobs = () => {
      blobs.length = 0;
      for (let i = 0; i < blobCount; i++) {
        blobs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.min(canvas.width, canvas.height) * (0.25 + Math.random() * 0.3),
          color: colors[i],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const blob of blobs) {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.globalAlpha = opacity;
        ctx.filter = `blur(${blur}px)`;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = "none";
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createBlobs();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createBlobs();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [colors, blur, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
