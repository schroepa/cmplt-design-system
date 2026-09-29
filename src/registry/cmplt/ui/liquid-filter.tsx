"use client";

import * as React from "react";
import { cn } from "@/registry/cmplt/lib/utils";

export type LiquidViscosity = "subtle" | "medium" | "fluid";

export interface LiquidFilterProps extends React.SVGProps<SVGSVGElement> {
  id?: string;
  viscosity?: LiquidViscosity;
}

/**
 * Filter parameter presets tuned for soft, natural fluid physics ("sanft und weich").
 * Uses sRGB color interpolation to prevent edge-darkening or grayish artifacts in WebKit/Blink.
 */
const VISCOSITY_CONFIGS: Record<
  LiquidViscosity,
  { stdDeviation: number; matrixValues: string }
> = {
  subtle: {
    stdDeviation: 4,
    matrixValues: `1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 16 -6`,
  },
  medium: {
    stdDeviation: 6,
    matrixValues: `1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 19 -8`,
  },
  fluid: {
    stdDeviation: 8,
    matrixValues: `1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 22 -9`,
  },
};

/**
 * Normalizes a React useId() string to a safe XML/CSS ID (removes colons).
 */
export function formatFilterId(rawId: string): string {
  return rawId.replace(/[^a-zA-Z0-9-_]/g, "");
}

/**
 * cmplt LiquidFilter — Self-Contained SVG Gooey Filter Primitive
 * Embeds an accessible, zero-cost hidden SVG filter with calibrated Gaussian blur & alpha cutoff.
 */
export const LiquidFilter = React.memo(function LiquidFilter({
  id,
  viscosity = "medium",
  className,
  ...props
}: LiquidFilterProps) {
  const generatedId = React.useId();
  const filterId = id || `cmplt-liquid-${formatFilterId(generatedId)}`;
  const config = VISCOSITY_CONFIGS[viscosity];

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -inset-0 h-0 w-0 opacity-0 overflow-hidden",
        className
      )}
      {...props}
    >
      <defs>
        <filter
          id={filterId}
          colorInterpolationFilters="sRGB"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={config.stdDeviation}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values={config.matrixValues}
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
});

LiquidFilter.displayName = "LiquidFilter";

export interface GooeyContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  viscosity?: LiquidViscosity;
  filterId?: string;
}

/**
 * cmplt GooeyContainer — High-level wrapper that applies the liquid filter
 * to all nested children elements.
 */
export const GooeyContainer = React.forwardRef<HTMLDivElement, GooeyContainerProps>(
  ({ className, viscosity = "medium", filterId: customFilterId, style, children, ...props }, ref) => {
    const generatedId = React.useId();
    const filterId = customFilterId || `cmplt-gooey-${formatFilterId(generatedId)}`;

    return (
      <div
        ref={ref}
        className={cn("relative isolate", className)}
        style={{
          filter: `url(#${filterId})`,
          ...style,
        }}
        {...props}
      >
        <LiquidFilter id={filterId} viscosity={viscosity} />
        {children}
      </div>
    );
  }
);

GooeyContainer.displayName = "GooeyContainer";
