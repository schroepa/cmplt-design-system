"use client";

import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId, type LiquidViscosity } from "@/registry/cmplt/ui/liquid-filter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export interface LiquidDockProps extends React.HTMLAttributes<HTMLDivElement> {
  viscosity?: LiquidViscosity;
  magnification?: boolean;
}

/**
 * cmplt LiquidDock — Fluid Floating Tool Ribbon & Navigation Dock
 * Features a cursor-following fluid beam that organically connects and flows
 * across dock items with smooth surface tension and gentle proximity elevation.
 */
export const LiquidDock = React.forwardRef<HTMLDivElement, LiquidDockProps>(
  (
    {
      className,
      viscosity = "medium",
      magnification = true,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const dockRef = React.useRef<HTMLDivElement | null>(null);
    const beamRef = React.useRef<HTMLSpanElement | null>(null);

    const generatedId = React.useId();
    const filterId = `cmplt-liquid-dock-${formatFilterId(generatedId)}`;

    const setMergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        dockRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [forwardedRef]
    );

    useGSAP(
      () => {
        if (!dockRef.current || !beamRef.current) return;

        const xTo = gsap.quickTo(beamRef.current, "x", { duration: 0.32, ease: "power2.out" });
        const widthTo = gsap.quickTo(beamRef.current, "width", { duration: 0.32, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
          if (!dockRef.current || !beamRef.current) return;
          const dockRect = dockRef.current.getBoundingClientRect();
          const target = (e.target as HTMLElement).closest("[data-dock-item]") as HTMLElement | null;

          if (target) {
            const itemRect = target.getBoundingClientRect();
            const relX = itemRect.left - dockRect.left;
            xTo(relX);
            widthTo(itemRect.width);
            gsap.to(beamRef.current, { opacity: 1, duration: 0.2 });
          }
        };

        const handleMouseLeave = () => {
          if (!beamRef.current) return;
          gsap.to(beamRef.current, { opacity: 0, duration: 0.25 });
        };

        const dockEl = dockRef.current;
        dockEl.addEventListener("mousemove", handleMouseMove);
        dockEl.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          dockEl.removeEventListener("mousemove", handleMouseMove);
          dockEl.removeEventListener("mouseleave", handleMouseLeave);
        };
      },
      { scope: dockRef }
    );

    return (
      <div className="relative inline-flex items-center">
        <LiquidFilter id={filterId} viscosity={viscosity} />

        <div
          ref={setMergedRef}
          className={cn(
            "relative inline-flex h-12 items-center gap-1.5 rounded-full border border-border-default bg-surface/90 px-2.5 shadow-md backdrop-blur-md select-none",
            className
          )}
          {...props}
        >
          {/* Gooey Liquid Beam Layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
            style={{ filter: `url(#${filterId})` }}
          >
            <span
              ref={beamRef}
              className="absolute top-1.5 h-9 rounded-full bg-subtle opacity-0"
            />
          </div>

          {/* Foreground Dock Items */}
          <div className="relative z-10 flex items-center gap-1.5">{children}</div>
        </div>
      </div>
    );
  }
);
LiquidDock.displayName = "LiquidDock";

export interface LiquidDockItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label?: string;
}

export const LiquidDockItem = React.forwardRef<HTMLButtonElement, LiquidDockItemProps>(
  ({ className, active, label, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        data-dock-item
        title={label}
        className={cn(
          "group relative inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-fg-muted transition-all duration-200 ease-out cursor-pointer hover:text-fg-primary hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus [&_svg]:h-4 [&_svg]:w-4",
          active && "text-fg-primary font-semibold",
          className
        )}
        {...props}
      >
        {children}
        {label && (
          <span className="pointer-events-none absolute -top-8 rounded-xs border border-border-subtle bg-elevated px-2 py-0.5 text-[10px] font-medium text-fg-primary opacity-0 shadow-sm transition-opacity group-hover:opacity-100 whitespace-nowrap">
            {label}
          </span>
        )}
      </button>
    );
  }
);
LiquidDockItem.displayName = "LiquidDockItem";

export const LiquidDockSeparator = () => (
  <span className="h-5 w-px bg-border-subtle mx-0.5" />
);
