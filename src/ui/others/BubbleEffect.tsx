'use client'
import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Circle } from "react-konva";

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
  const bubblesRef = useRef<Bubble[]>([]);

  useEffect(() => {
    const bubbles = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 1.3,
      opacity: 0.3,
      scale: 1.3,
      directionX: Math.random() * 0.5 - 0.25,
      directionY: Math.random() * 0.5 - 0.25,
    }));

    bubblesRef.current = bubbles;
  }, []);

  const [, setUpdateState] = useState({});

  useEffect(() => {
    const animateBubbles = () => {
      bubblesRef.current.forEach((bubble) => {
        bubble.x += bubble.directionX;
        bubble.y += bubble.directionY;

        if (bubble.x > window.innerWidth + bubble.radius || bubble.x < 0 - bubble.radius) {
          bubble.directionX *= -1;
        }

        if (bubble.y > window.innerHeight + bubble.radius || bubble.y < 0 - bubble.radius) {
          bubble.directionY *= -1;
        }
      });

      setUpdateState({});

      requestAnimationFrame(animateBubbles);
    };

    animateBubbles();
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} className="absolute">
      <Layer>
        {bubblesRef.current.map((bubble, index) => (
          <Circle
            key={index}
            x={bubble.x}
            y={bubble.y}
            radius={bubble.radius}
            fill={`rgba(255, 255, 255, ${bubble.opacity})`}
            opacity={bubble.opacity}
            scale={{ x: bubble.scale, y: bubble.scale }}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default BubbleBackground;
