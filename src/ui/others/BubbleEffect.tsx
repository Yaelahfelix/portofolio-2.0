"use client";
import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

type Bubble = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  scale: number;
  directionX: number;
  directionY: number;
};

const BubbleBackground: React.FC = () => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);

  useEffect(() => {
    const canvas = new fabric.Canvas("bubble-canvas", {
      width: window.innerWidth,
      height: window.innerHeight,
      selection: false,
      containerClass: "!absolute",
    });
    canvasRef.current = canvas;

    const bubbles = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 1.3,
      opacity: 0.3,
      scale: 1.3,
      directionX: Math.random() * 0.5 - 0.25,
      directionY: Math.random() * 0.5 - 0.25,
    }));

    bubbles.forEach((bubble) => {
      const circle = new fabric.Circle({
        left: bubble.x,
        top: bubble.y,
        radius: bubble.radius,
        fill: `rgba(255, 255, 255, ${bubble.opacity})`,
        originX: "center",
        originY: "center",
        selectable: false,
      });

      circle.set({ scaleX: bubble.scale, scaleY: bubble.scale });
      canvas.add(circle);
    });

    bubblesRef.current = bubbles;

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    const animateBubbles = () => {
      bubblesRef.current.forEach((bubble, index) => {
        bubble.x += bubble.directionX;
        bubble.y += bubble.directionY;

        // Adjust position if the bubble goes off the edges
        if (
          bubble.x > window.innerWidth + bubble.radius ||
          bubble.x < -bubble.radius
        ) {
          bubble.directionX *= -1;
        }

        if (
          bubble.y > window.innerHeight + bubble.radius ||
          bubble.y < -bubble.radius
        ) {
          bubble.directionY *= -1;
        }
        // Move the circles on canvas
        const circle = canvasRef.current?.item(index);
        if (circle instanceof fabric.Circle) {
          circle.set({ left: bubble.x, top: bubble.y });
        }
      });

      canvasRef.current?.renderAll();

      requestAnimationFrame(animateBubbles);
    };

    animateBubbles();
  }, []);

  return <canvas id="bubble-canvas" className="absolute w-full" />;
};

export default BubbleBackground;
