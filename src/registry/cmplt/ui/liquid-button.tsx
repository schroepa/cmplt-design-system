"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId } from "@/registry/cmplt/ui/liquid-filter";
import { useReducedMotion } from "@/registry/cmplt/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform duration-200 ease-cmplt-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[disabled]:pointer-events-none data-[disabled]:opacity-45 active:scale-[0.97] rounded-cmplt-full overflow-hidden [&_svg]:stroke-[1.75]",
  {
    variants: {
      variant: {
        primary: "text-fg-on-accent",
        subtle: "text-fg-accent",
        surface: "text-fg-primary border border-border-default",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-9 px-5 text-[13px]",
        lg: "h-11 px-7 text-sm",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface LiquidButtonProps
  extends React.ComponentPropsWithoutRef<typeof BaseButton>,
    VariantProps<typeof liquidButtonVariants> {
  /**
   * Viscosity preset for the organic liquid droplets:
   * - "subtle": Gentle surface tension
   * - "medium": Balanced fluid cohesion (default)
   * - "fluid": Viscous mercury droplet reaction
   */
  viscosity?: "subtle" | "medium" | "fluid";
  /**
   * Enables interactive liquid blobs that track the cursor on hover (default: true)
   */
  interactiveBlobs?: boolean;
}

/**
 * cmplt LiquidButton — Organic Fluid Action Component
 * Features internal fluid droplets that organically merge, deform, and react to
 * cursor proximity and press dynamics via a self-contained SVG gooey filter.
 * Foreground typography and icons remain razor-sharp on an isolated layer.
 */
export const LiquidButton = React.forwardRef<HTMLElement, LiquidButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      viscosity = "medium",
      interactiveBlobs = true,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const rootRef = React.useRef<HTMLElement | null>(null);
    const blob1Ref = React.useRef<HTMLSpanElement | null>(null);
    const blob2Ref = React.useRef<HTMLSpanElement | null>(null);
    const rippleRef = React.useRef<HTMLSpanElement | null>(null);
    const prefersReduced = useReducedMotion();

    const generatedId = React.useId();
    const filterId = `cmplt-liquid-btn-${formatFilterId(generatedId)}`;

    const setMergedRef = React.useCallback(
      (node: HTMLElement | null) => {
        rootRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      },
      [forwardedRef]
    );

    // Interactive cursor blob physics via GSAP quickTo
    useGSAP(
      () => {
        if (prefersReduced || !interactiveBlobs || !rootRef.current || !blob1Ref.current || !blob2Ref.current) return;

        const xTo1 = gsap.quickTo(blob1Ref.current, "x", { duration: 0.45, ease: "power2.out" });
        const yTo1 = gsap.quickTo(blob1Ref.current, "y", { duration: 0.45, ease: "power2.out" });
        const xTo2 = gsap.quickTo(blob2Ref.current, "x", { duration: 0.65, ease: "power2.out" });
        const yTo2 = gsap.quickTo(blob2Ref.current, "y", { duration: 0.65, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
          if (!rootRef.current) return;
          const rect = rootRef.current.getBoundingClientRect();
          const relX = e.clientX - rect.left - rect.width / 2;
          const relY = e.clientY - rect.top - rect.height / 2;

          xTo1(relX * 0.4);
          yTo1(relY * 0.4);
          xTo2(-relX * 0.25);
          yTo2(-relY * 0.25);
        };

        const handleMouseLeave = () => {
          xTo1(0);
          yTo1(0);
          xTo2(0);
          yTo2(0);
        };

        const handlePointerDown = (e: MouseEvent) => {
          if (!rootRef.current || !rippleRef.current) return;
          const rect = rootRef.current.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const clickY = e.clientY - rect.top;

          gsap.killTweensOf(rippleRef.current);
          gsap.fromTo(
            rippleRef.current,
            {
              left: clickX,
              top: clickY,
              xPercent: -50,
              yPercent: -50,
              scale: 0.2,
              opacity: 0.85,
            },
            {
              scale: 2.8,
              opacity: 0,
              duration: 0.55,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            }
          );
        };

        const rootEl = rootRef.current;
        rootEl.addEventListener("mousemove", handleMouseMove);
        rootEl.addEventListener("mouseleave", handleMouseLeave);
        rootEl.addEventListener("mousedown", handlePointerDown);

        return () => {
          rootEl.removeEventListener("mousemove", handleMouseMove);
          rootEl.removeEventListener("mouseleave", handleMouseLeave);
          rootEl.removeEventListener("mousedown", handlePointerDown);
        };
      },
      { scope: rootRef, dependencies: [interactiveBlobs] }
    );

    // Dynamic background styling according to variant
    const bgClasses = {
      primary: "bg-accent",
      subtle: "bg-accent-subtle",
      surface: "bg-surface",
    }[variant || "primary"];

    const blobColorClass = {
      primary: "bg-accent-hover",
      subtle: "bg-accent/20",
      surface: "bg-subtle",
    }[variant || "primary"];

    return (
      <div className="relative inline-flex items-center">
        {/* Self-contained SVG Gooey Filter */}
        <LiquidFilter id={filterId} viscosity={viscosity} />

        <BaseButton
          ref={setMergedRef}
          className={cn(liquidButtonVariants({ variant, size }), className)}
          {...props}
        >
          {/* Gooey Fluid Background Layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-cmplt-full overflow-hidden"
            style={{
              filter: `url(#${filterId})`,
            }}
          >
            {/* Primary Base Fluid Layer */}
            <span className={cn("absolute inset-0 rounded-cmplt-full", bgClasses)} />

            {/* Orbiting / Merging Fluid Droplet 1 */}
            <span
              ref={blob1Ref}
              className={cn(
                "absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-cmplt-full blur-[1px]",
                blobColorClass
              )}
            />

            {/* Orbiting / Merging Fluid Droplet 2 */}
            <span
              ref={blob2Ref}
              className={cn(
                "absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-cmplt-full blur-[1px]",
                blobColorClass
              )}
            />

            {/* Click Liquid Ripple */}
            <span
              ref={rippleRef}
              className={cn(
                "absolute h-10 w-10 rounded-cmplt-full opacity-0 pointer-events-none",
                blobColorClass
              )}
            />
          </div>

          {/* Crisp Foreground Typography & Content */}
          <span className="relative z-10 inline-flex items-center gap-2">
            {children}
          </span>
        </BaseButton>
      </div>
    );
  }
);

LiquidButton.displayName = "LiquidButton";
