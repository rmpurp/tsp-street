import { useEffect, useLayoutEffect, useRef } from "react";
import { World } from "./Simulation/World.ts";

type Props = {
  width: number;
  height: number;
};

export default function CanvasAnimation({ width, height }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const worldRef = useRef<World>(new World());

  const renderCallback = (timestamp: DOMHighResTimeStamp) => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, width, height);

    ctx.save();

    worldRef.current.draw(ctx);
    worldRef.current.tick(timestamp);

    ctx.restore();
    requestAnimationFrame(renderCallback);
  };

  // Obtain the canvas rendering context
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      ctxRef.current = canvas.getContext("2d");
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(renderCallback);
  }, []);

  // Ensure correct DPI on higher-resolution displays
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    if (canvas && ctx) {
      const dpr = window.devicePixelRatio;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Animated canvas"
      style={{ display: "block" }}
    />
  );
}
