"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/registry/cmplt/lib/utils";
import { useReducedMotion } from "@/registry/cmplt/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export interface AnimatedCtaButtonProps
  extends React.ComponentPropsWithoutRef<typeof BaseButton> {
  /**
   * Visual hierarchy style:
   * - "accent-beam": Solid brand accent pill with a soft, natural champagne/accent luminous border orbit & sheen
   * - "surface-halo": Elevated surface pill with a traveling accent border light that lifts the button in the visual hierarchy
   */
  variant?: "accent-beam" | "surface-halo";
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Enables a subtle, natural magnetic pull toward the cursor (default: true)
   */
  magnetic?: boolean;
  /**
   * Intensity of the magnetic pull in pixels (default: 3.5 — very soft & natural)
   */
  magneticStrength?: number;
}

/**
 * cmplt AnimatedCtaButton — GSAP Natural Motion Primitive
 * Designed for primary Call-to-Action hierarchy highlights:
 * - Continuous, whisper-soft GSAP border light orbit (sine-modulated speed)
 * - Inertial cursor-following radial sheen via gsap.quickTo()
 * - Gentle magnetic proximity pull and organic press/release physics
 */
const AnimatedCtaButton = React.forwardRef<HTMLElement, AnimatedCtaButtonProps>(
  (
    {
      className,
      variant = "accent-beam",
      size = "lg",
      magnetic = true,
      magneticStrength = 3.5,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const rootRef = React.useRef<HTMLElement | null>(null);
    const contentRef = React.useRef<HTMLSpanElement | null>(null);
    const sheenRef = React.useRef<HTMLSpanElement | null>(null);
    const beamRef = React.useRef<HTMLSpanElement | null>(null);
    const auraRef = React.useRef<HTMLSpanElement | null>(null);
    const prefersReduced = useReducedMotion();

    const setMergedRef = React.useCallback(
      (node: HTMLElement | null) => {
        rootRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLElement | null>).current =
            node;
        }
      },
      [forwardedRef]
    );

    useGSAP(
      () => {
        const el = rootRef.current;
        const content = contentRef.current;
        const sheen = sheenRef.current;
        const beam = beamRef.current;
        const aura = auraRef.current;
        if (!el || !content || !sheen || !beam || !aura) return;

        if (prefersReduced) return;

        // 1. Continuous, super-natural orbital border light + gentle breathing aura
        gsap.set(beam, { "--beam-angle": "0deg" });
        const orbitTween = gsap.to(beam, {
          "--beam-angle": "360deg",
          duration: 6.5,
          ease: "none",
          repeat: -1,
        });

        const breathTween = gsap.to(aura, {
          opacity: 0.72,
          scale: 1.015,
          duration: 2.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // 2. Inertial quickTo controllers for natural cursor tracking
        const xTo = gsap.quickTo(el, "x", {
          duration: 0.55,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(el, "y", {
          duration: 0.55,
          ease: "power3.out",
        });
        const contentXTo = gsap.quickTo(content, "x", {
          duration: 0.45,
          ease: "power3.out",
        });
        const contentYTo = gsap.quickTo(content, "y", {
          duration: 0.45,
          ease: "power3.out",
        });
        const sheenXTo = gsap.quickTo(sheen, "x", {
          duration: 0.5,
          ease: "power3.out",
        });
        const sheenYTo = gsap.quickTo(sheen, "y", {
          duration: 0.5,
          ease: "power3.out",
        });

        const handlePointerEnter = () => {
          gsap.to(orbitTween, { timeScale: 1.45, duration: 0.6, ease: "sine.out" });
          gsap.to(sheen, {
            opacity: 1,
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
          });
          gsap.to(beam, {
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
          });
          gsap.to(el, {
            scale: 1.012,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        const handlePointerMove = (e: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;
          const normX = (relX / rect.width - 0.5) * 2; // -1 to 1
          const normY = (relY / rect.height - 0.5) * 2; // -1 to 1

          sheenXTo(relX - rect.width / 2);
          sheenYTo(relY - rect.height / 2);

          if (magnetic) {
            xTo(normX * magneticStrength);
            yTo(normY * magneticStrength);
            contentXTo(normX * (magneticStrength * 0.45));
            contentYTo(normY * (magneticStrength * 0.45));
          }
        };

        const handlePointerLeave = () => {
          gsap.to(orbitTween, { timeScale: 1, duration: 0.8, ease: "sine.inOut" });
          gsap.to(sheen, {
            opacity: 0,
            scale: 0.85,
            duration: 0.65,
            ease: "power3.out",
          });
          gsap.to(beam, {
            opacity: 0.78,
            duration: 0.6,
            ease: "power2.out",
          });
          gsap.to(el, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
          xTo(0);
          yTo(0);
          contentXTo(0);
          contentYTo(0);
        };

        const handlePointerDown = () => {
          gsap.to(el, {
            scale: 0.982,
            duration: 0.18,
            ease: "power2.out",
          });
        };

        const handlePointerUp = () => {
          gsap.to(el, {
            scale: 1.01,
            duration: 0.4,
            ease: "back.out(2)",
          });
        };

        el.addEventListener("pointerenter", handlePointerEnter);
        el.addEventListener("pointermove", handlePointerMove);
        el.addEventListener("pointerleave", handlePointerLeave);
        el.addEventListener("pointerdown", handlePointerDown);
        el.addEventListener("pointerup", handlePointerUp);

        return () => {
          orbitTween.kill();
          breathTween.kill();
          el.removeEventListener("pointerenter", handlePointerEnter);
          el.removeEventListener("pointermove", handlePointerMove);
          el.removeEventListener("pointerleave", handlePointerLeave);
          el.removeEventListener("pointerdown", handlePointerDown);
          el.removeEventListener("pointerup", handlePointerUp);
        };
      },
      { scope: rootRef, dependencies: [magnetic, magneticStrength] }
    );

    const sizeClasses = {
      sm: "h-8 px-4 text-xs",
      md: "h-9 px-5 text-[13px]",
      lg: "h-10 px-6 text-sm",
      xl: "h-12 px-7 text-sm",
    }[size];

    const isAccent = variant === "accent-beam";

    return (
      <BaseButton
        ref={setMergedRef}
        className={cn(
          "group relative inline-flex items-center justify-center rounded-full p-[1.5px] font-medium select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
          className
        )}
        {...props}
      >
        {/* Soft breathing ambient aura */}
        <span
          ref={auraRef}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -inset-[2px] rounded-full opacity-40 blur-[6px] transition-opacity",
            isAccent
              ? "bg-[radial-gradient(circle_at_50%_50%,var(--bg-brand)_0%,transparent_75%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,var(--border-brand)_0%,transparent_75%)]"
          )}
        />

        {/* GSAP Rotating Conic Border Highlight Frame */}
        <span
          ref={beamRef}
          aria-hidden="true"
          style={
            {
              "--beam-angle": "0deg",
              background: isAccent
                ? "conic-gradient(from var(--beam-angle), color-mix(in oklab, var(--bg-brand) 75%, transparent) 0%, color-mix(in oklab, var(--bg-brand) 85%, white 15%) 68%, rgba(255,255,255,0.92) 84%, color-mix(in oklab, var(--bg-brand) 85%, white 15%) 94%, color-mix(in oklab, var(--bg-brand) 75%, transparent) 100%)"
                : "conic-gradient(from var(--beam-angle), var(--border-default) 0%, var(--border-default) 62%, var(--bg-brand) 84%, color-mix(in oklab, var(--bg-brand) 65%, white 35%) 92%, var(--border-default) 100%)",
            } as React.CSSProperties
          }
          className="pointer-events-none absolute inset-0 rounded-full opacity-80"
        />

        {/* Inner Pill Surface */}
        <span
          className={cn(
            "relative inline-flex h-full w-full items-center justify-center overflow-hidden rounded-full transition-colors",
            sizeClasses,
            isAccent
              ? "bg-brand text-fg-on-brand"
              : "bg-elevated text-fg-primary"
          )}
        >
          {/* Inertial GSAP Cursor-Following Radial Sheen */}
          <span
            ref={sheenRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
            style={{
              background: isAccent
                ? "radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 70%)"
                : "radial-gradient(circle, color-mix(in oklab, var(--bg-brand) 22%, transparent) 0%, transparent 70%)",
            }}
          />

          {/* Content with subtle secondary magnetic offset */}
          <span
            ref={contentRef}
            className="relative z-10 inline-flex items-center justify-center gap-2 [&_svg]:stroke-[1.75] [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg:last-child]:translate-x-0.5"
          >
            {children}
          </span>
        </span>
      </BaseButton>
    );
  }
);
AnimatedCtaButton.displayName = "AnimatedCtaButton";

export { AnimatedCtaButton };
