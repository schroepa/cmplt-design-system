"use client";

import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/registry/cmplt/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export interface MotionSurfaceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Enables a whisper-soft radial cursor spotlight and -2px float on hover (default: true)
   */
  hoverHighlight?: boolean;
  /**
   * Enables a gentle GSAP entrance animation on mount (default: true)
   */
  animateEntrance?: boolean;
  /**
   * Optional entrance delay in seconds (default: 0)
   */
  delay?: number;
}

/**
 * cmplt MotionSurface — GSAP Interactive Surface & Card Wrapper
 * Adds a natural, low-amplitude radial spotlight and gentle elevation lift
 * without breaking the calm, matte OKLCH surface hierarchy.
 */
const MotionSurface = React.forwardRef<HTMLDivElement, MotionSurfaceProps>(
  (
    {
      className,
      hoverHighlight = true,
      animateEntrance = true,
      delay = 0,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const glowRef = React.useRef<HTMLSpanElement | null>(null);

    const setMergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (
            forwardedRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node;
        }
      },
      [forwardedRef]
    );

    useGSAP(
      () => {
        const el = containerRef.current;
        const glow = glowRef.current;
        if (!el) return;

        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        if (animateEntrance) {
          gsap.fromTo(
            el,
            { y: 12, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay,
              ease: "power3.out",
              clearProps: "transform",
            }
          );
        }

        if (!hoverHighlight || !glow) return;

        const glowXTo = gsap.quickTo(glow, "x", {
          duration: 0.55,
          ease: "power3.out",
        });
        const glowYTo = gsap.quickTo(glow, "y", {
          duration: 0.55,
          ease: "power3.out",
        });

        const handleEnter = () => {
          gsap.to(el, {
            y: -2,
            duration: 0.45,
            ease: "power3.out",
          });
          gsap.to(glow, {
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
          });
        };

        const handleMove = (e: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          glowXTo(e.clientX - rect.left - rect.width / 2);
          glowYTo(e.clientY - rect.top - rect.height / 2);
        };

        const handleLeave = () => {
          gsap.to(el, {
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          });
          gsap.to(glow, {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
          });
        };

        el.addEventListener("pointerenter", handleEnter);
        el.addEventListener("pointermove", handleMove);
        el.addEventListener("pointerleave", handleLeave);

        return () => {
          el.removeEventListener("pointerenter", handleEnter);
          el.removeEventListener("pointermove", handleMove);
          el.removeEventListener("pointerleave", handleLeave);
        };
      },
      { scope: containerRef, dependencies: [hoverHighlight, animateEntrance, delay] }
    );

    return (
      <div
        ref={setMergedRef}
        className={cn(
          "relative overflow-hidden rounded-cmplt-lg",
          className
        )}
        {...props}
      >
        {hoverHighlight && (
          <span
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--bg-accent) 11%, transparent) 0%, transparent 70%)",
            }}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  }
);
MotionSurface.displayName = "MotionSurface";

export interface MotionStaggerGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  stagger?: number;
  duration?: number;
  yOffset?: number;
}

/**
 * cmplt MotionStaggerGroup — Cascades child items in with soft GSAP power3.out physics.
 */
const MotionStaggerGroup = React.forwardRef<
  HTMLDivElement,
  MotionStaggerGroupProps
>(
  (
    {
      className,
      stagger = 0.065,
      duration = 0.65,
      yOffset = 12,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const groupRef = React.useRef<HTMLDivElement | null>(null);

    const setMergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        groupRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (
            forwardedRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node;
        }
      },
      [forwardedRef]
    );

    useGSAP(
      () => {
        const group = groupRef.current;
        if (!group) return;

        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const targets = group.querySelectorAll("[data-motion-item]");
        const elements =
          targets.length > 0 ? Array.from(targets) : Array.from(group.children);

        if (elements.length === 0) return;

        gsap.fromTo(
          elements,
          { y: yOffset, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            stagger,
            ease: "power3.out",
            clearProps: "transform",
          }
        );
      },
      { scope: groupRef, dependencies: [stagger, duration, yOffset] }
    );

    return (
      <div ref={setMergedRef} className={className} {...props}>
        {children}
      </div>
    );
  }
);
MotionStaggerGroup.displayName = "MotionStaggerGroup";

export { MotionSurface, MotionStaggerGroup };
