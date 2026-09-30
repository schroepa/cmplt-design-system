"use client";

import * as React from "react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId } from "@/registry/cmplt/ui/liquid-filter";

export interface LiquidSwitchProps
  extends React.ComponentPropsWithoutRef<typeof BaseSwitch.Root> {
  /**
   * Viscosity preset for the organic mercury toggle:
   * - "subtle": Snappy, refined micro-bridge
   * - "medium": Balanced fluid tension (default)
   * - "fluid": Viscous gel stretching effect
   */
  viscosity?: "subtle" | "medium" | "fluid";
}

/**
 * cmplt LiquidSwitch — Organic Liquid Gel Toggle
 * Extends Base UI Switch with a self-contained SVG gooey filter, elastic stretching
 * thumb dynamics, and fluid trail absorption.
 */
export const LiquidSwitch = React.forwardRef<HTMLElement, LiquidSwitchProps>(
  ({ className, viscosity = "medium", checked, defaultChecked, onCheckedChange, ...props }, ref) => {
    const generatedId = React.useId();
    const filterId = `cmplt-liquid-switch-${formatFilterId(generatedId)}`;

    return (
      <div className="relative inline-flex items-center">
        {/* Self-contained SVG Gooey Filter */}
        <LiquidFilter id={filterId} viscosity={viscosity} />

        <BaseSwitch.Root
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          className={cn(
            "group peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border-default bg-muted p-0.5 transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[checked]:bg-brand data-[checked]:border-brand data-[disabled]:cursor-not-allowed data-[disabled]:opacity-45 select-none",
            className
          )}
          {...props}
        >
          {/* Gooey Filtered Layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
            style={{
              filter: `url(#${filterId})`,
            }}
          >
            {/* Trailing Fluid Bridge Droplet (lags and stretches organically across the track) */}
            <span
              className={cn(
                "absolute top-0.5 block h-5 w-5 rounded-full bg-surface transition-all duration-380 ease-out",
                "left-0.5 group-data-[checked]:left-5.5 group-data-[checked]:bg-fg-on-brand",
                "group-active:scale-x-140 group-active:scale-y-75"
              )}
            />

            {/* Leading Fluid Droplet (snaps into destination with spring) */}
            <span
              className={cn(
                "absolute top-0.5 block h-5 w-5 rounded-full bg-surface shadow-xs transition-all duration-280 ease-spring",
                "left-0.5 group-data-[checked]:left-5.5 group-data-[checked]:bg-fg-on-brand",
                "group-active:w-6 group-active:scale-95"
              )}
            />
          </div>

          {/* Accessible Base UI Thumb (transparent hit/render box) */}
          <BaseSwitch.Thumb
            className={cn(
              "pointer-events-none block h-4 w-4 rounded-full opacity-0 translate-x-0 transition-transform duration-300 ease-spring data-[checked]:translate-x-5"
            )}
          />
        </BaseSwitch.Root>
      </div>
    );
  }
);

LiquidSwitch.displayName = "LiquidSwitch";
