"use client";

import * as React from "react";
import { Input as BaseInput } from "@base-ui/react/input";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/registry/cmplt/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export interface HighlightInputProps
  extends React.ComponentPropsWithoutRef<typeof BaseInput> {
  /**
   * Geometric contour of the highlighted input:
   * - "rounded": Structured 10px radius for form fields & AI prompts
   * - "pill": Full 9999px pill radius for primary search & command bars
   */
  shape?: "rounded" | "pill";
  /**
   * Hierarchy highlight mode:
   * - "focus-only": Subtle resting border that awakens with a GSAP halo sweep on hover/focus (default)
   * - "ambient": Continuous, whisper-soft orbital border light that intensifies on hover/focus
   */
  highlightMode?: "ambient" | "focus-only";
  /**
   * Optional leading icon rendered inside the left side of the input
   */
  leadingIcon?: React.ReactNode;
  /**
   * Optional trailing element (e.g., Kbd shortcut, badge, or action button)
   */
  trailingSlot?: React.ReactNode;
  /**
   * Optional className applied to the outer animated frame wrapper
   */
  wrapperClassName?: string;
}

/**
 * cmplt HighlightInput — GSAP Hierarchy-Elevating Input Frame
 * Visually lifts high-priority inputs (command bars, primary search, AI prompts, key fields)
 * in the interface hierarchy via a soft, natural GSAP border light and inertial pointer spotlight.
 */
const HighlightInput = React.forwardRef<HTMLInputElement, HighlightInputProps>(
  (
    {
      className,
      wrapperClassName,
      shape = "rounded",
      highlightMode = "focus-only",
      leadingIcon,
      trailingSlot,
      onFocus,
      onBlur,
      ...props
    },
    forwardedRef
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    const orbitRef = React.useRef<HTMLSpanElement | null>(null);
    const spotlightRef = React.useRef<HTMLSpanElement | null>(null);
    const auraRef = React.useRef<HTMLSpanElement | null>(null);
    const isFocusedRef = React.useRef(false);

    useGSAP(
      () => {
        const wrapper = wrapperRef.current;
        const orbit = orbitRef.current;
        const spotlight = spotlightRef.current;
        const aura = auraRef.current;
        if (!wrapper || !orbit || !spotlight || !aura) return;

        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        gsap.set(orbit, {
          "--input-angle": "0deg",
          opacity: highlightMode === "ambient" ? 0.72 : 0.15,
        });
        gsap.set(aura, {
          opacity: highlightMode === "ambient" ? 0.22 : 0,
        });

        // 1. Continuous, calm orbital border highlight
        const orbitTween = gsap.to(orbit, {
          "--input-angle": "360deg",
          duration: 7.5,
          ease: "none",
          repeat: -1,
        });

        // 2. Gentle breathing pulse on the outer soft aura
        const auraBreath = gsap.to(aura, {
          opacity: highlightMode === "ambient" ? 0.36 : 0.08,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // In focus-only mode, pause tweens at rest — resume on pointer/focus
        if (highlightMode === "focus-only") {
          orbitTween.pause();
          auraBreath.pause();
        }

        // 3. Inertial cursor spotlight along the frame border
        const spotXTo = gsap.quickTo(spotlight, "x", {
          duration: 0.45,
          ease: "power3.out",
        });
        const spotYTo = gsap.quickTo(spotlight, "y", {
          duration: 0.45,
          ease: "power3.out",
        });

        const handlePointerEnter = () => {
          if (highlightMode === "focus-only") {
            orbitTween.resume();
            auraBreath.resume();
          }
          gsap.to(orbitTween, { timeScale: 1.35, duration: 0.6, ease: "sine.out" });
          gsap.to(orbit, {
            opacity: 0.95,
            duration: 0.45,
            ease: "power2.out",
          });
          gsap.to(spotlight, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        const handlePointerMove = (e: PointerEvent) => {
          const rect = wrapper.getBoundingClientRect();
          spotXTo(e.clientX - rect.left - rect.width / 2);
          spotYTo(e.clientY - rect.top - rect.height / 2);
        };

        const handlePointerLeave = () => {
          gsap.to(spotlight, {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
          });
          if (!isFocusedRef.current) {
            gsap.to(orbitTween, {
              timeScale: 1,
              duration: 0.8,
              ease: "sine.inOut",
            });
            gsap.to(orbit, {
              opacity: highlightMode === "ambient" ? 0.72 : 0.15,
              duration: 0.6,
              ease: "power2.out",
            });
            if (highlightMode === "focus-only") {
              // Pause after fade-out settles so animation doesn't continue at 0.15 opacity
              gsap.delayedCall(0.65, () => {
                if (!isFocusedRef.current) {
                  orbitTween.pause();
                  auraBreath.pause();
                }
              });
            }
          }
        };

        wrapper.addEventListener("pointerenter", handlePointerEnter);
        wrapper.addEventListener("pointermove", handlePointerMove);
        wrapper.addEventListener("pointerleave", handlePointerLeave);

        return () => {
          orbitTween.kill();
          auraBreath.kill();
          wrapper.removeEventListener("pointerenter", handlePointerEnter);
          wrapper.removeEventListener("pointermove", handlePointerMove);
          wrapper.removeEventListener("pointerleave", handlePointerLeave);
        };
      },
      { scope: wrapperRef, dependencies: [highlightMode] }
    );

    const handleFocus = (
      e: Parameters<NonNullable<HighlightInputProps["onFocus"]>>[0]
    ) => {
      isFocusedRef.current = true;
      if (wrapperRef.current && orbitRef.current && auraRef.current) {
        gsap.to(wrapperRef.current, {
          scale: 1.006,
          y: -1,
          duration: 0.5,
          ease: "expo.out",
        });
        gsap.to(orbitRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(auraRef.current, {
          opacity: 0.65,
          scale: 1.01,
          duration: 0.5,
          ease: "expo.out",
        });
      }
      onFocus?.(e);
    };

    const handleBlur = (
      e: Parameters<NonNullable<HighlightInputProps["onBlur"]>>[0]
    ) => {
      isFocusedRef.current = false;
      if (wrapperRef.current && orbitRef.current && auraRef.current) {
        gsap.to(wrapperRef.current, {
          scale: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        });
        gsap.to(orbitRef.current, {
          opacity: highlightMode === "ambient" ? 0.72 : 0.15,
          duration: 0.55,
          ease: "power2.out",
        });
        gsap.to(auraRef.current, {
          opacity: highlightMode === "ambient" ? 0.25 : 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
      onBlur?.(e);
    };

    // Concentric radius chain: Aura (+3px) -> Outer Frame (10px) -> Inner Surface (8.5px) -> Trailing Slot (4.5px or Pill)
    const auraRadiusClass =
      shape === "pill"
        ? "rounded-full"
        : "rounded-[calc(var(--radius-md)+3px)]";
    const radiusClass =
      shape === "pill" ? "rounded-full" : "rounded-md";
    const innerRadiusClass =
      shape === "pill"
        ? "rounded-full"
        : "rounded-[calc(var(--radius-md)-1.5px)]";

    return (
      <div
        ref={wrapperRef}
        className={cn(
          "group/hl relative flex w-full items-center p-[1.5px] transition-shadow",
          radiusClass,
          wrapperClassName
        )}
      >
        {/* Soft Ambient Outer Halo */}
        <span
          ref={auraRef}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -inset-[3px] blur-[8px]",
            auraRadiusClass
          )}
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--bg-brand) 42%, transparent) 0%, transparent 72%)",
          }}
        />

        {/* Base Subtle Border Hairline */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 border border-border-default",
            radiusClass
          )}
        />

        {/* GSAP Orbiting Conic Border Highlight */}
        <span
          ref={orbitRef}
          aria-hidden="true"
          style={
            {
              "--input-angle": "0deg",
              background:
                "conic-gradient(from var(--input-angle), transparent 0%, transparent 58%, color-mix(in oklab, var(--bg-brand) 45%, var(--border-default)) 76%, var(--bg-brand) 88%, color-mix(in oklab, var(--bg-brand) 65%, white 35%) 94%, transparent 100%)",
            } as React.CSSProperties
          }
          className={cn("pointer-events-none absolute inset-0", radiusClass)}
        />

        {/* Pointer-Proximity Border Spotlight */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 overflow-hidden",
            radiusClass
          )}
        >
          <span
            ref={spotlightRef}
            className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
            style={{
              background:
                "radial-gradient(circle, var(--bg-brand) 0%, transparent 70%)",
            }}
          />
        </span>

        {/* Inner Calibrated Surface & Base UI Input */}
        <div
          className={cn(
            "relative z-10 flex h-9 w-full items-center bg-surface text-fg-primary",
            shape === "pill"
              ? trailingSlot
                ? "pl-3.5 pr-1.5"
                : "px-3.5"
              : trailingSlot
              ? "pl-3 pr-1.5"
              : "px-3",
            innerRadiusClass
          )}
        >
          {leadingIcon && (
            <span className="mr-2.5 flex shrink-0 items-center text-fg-brand transition-transform duration-300 group-focus-within/hl:scale-105 [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:stroke-[1.85]">
              {leadingIcon}
            </span>
          )}

          <BaseInput
            ref={forwardedRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={cn(
              "h-full w-full bg-transparent text-[13px] text-fg-primary placeholder:text-fg-muted focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
              className
            )}
            {...props}
          />

          {trailingSlot && (
            <span
              className={cn(
                "ml-2 flex shrink-0 items-center",
                shape === "pill"
                  ? "[&_kbd]:rounded-full [&_kbd]:px-2"
                  : "[&_kbd]:rounded-2xs"
              )}
            >
              {trailingSlot}
            </span>
          )}
        </div>
      </div>
    );
  }
);
HighlightInput.displayName = "HighlightInput";

export { HighlightInput };
