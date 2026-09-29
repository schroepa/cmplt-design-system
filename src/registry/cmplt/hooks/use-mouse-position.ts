"use client";

import * as React from "react";

export interface MousePosition {
  /** X coordinate relative to viewport */
  x: number;
  /** Y coordinate relative to viewport */
  y: number;
  /** Normalized X between 0 and 1 */
  normalizedX: number;
  /** Normalized Y between 0 and 1 */
  normalizedY: number;
}

/**
 * cmplt React Hook to smoothly track mouse position across viewport or element.
 * Perfect for shader uniforms, liquid filter coordinates, and dynamic cursor highlights.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = React.useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      setPosition({
        x: clientX,
        y: clientY,
        normalizedX: innerWidth > 0 ? clientX / innerWidth : 0.5,
        normalizedY: innerHeight > 0 ? clientY / innerHeight : 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
