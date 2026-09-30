"use client";

import * as React from "react";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId, type LiquidViscosity } from "@/registry/cmplt/ui/liquid-filter";

export interface LiquidRadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof BaseRadioGroup> {
  viscosity?: LiquidViscosity;
}

/**
 * cmplt LiquidRadioGroup — Fluid Surface-Tension Radio Selection
 * Accessible Radio Group built on Base UI featuring an organic liquid droplet
 * that swells into place with natural surface tension and fluid edge damping.
 */
export const LiquidRadioGroup = React.forwardRef<HTMLDivElement, LiquidRadioGroupProps>(
  ({ className, viscosity = "medium", ...props }, ref) => {
    return (
      <BaseRadioGroup
        ref={ref}
        className={cn("grid gap-2.5", className)}
        {...props}
      />
    );
  }
);
LiquidRadioGroup.displayName = "LiquidRadioGroup";

export interface LiquidRadioProps
  extends React.ComponentPropsWithoutRef<typeof BaseRadio.Root> {
  viscosity?: LiquidViscosity;
}

export const LiquidRadio = React.forwardRef<HTMLElement, LiquidRadioProps>(
  ({ className, viscosity = "medium", ...props }, ref) => {
    const generatedId = React.useId();
    const filterId = `cmplt-liquid-radio-${formatFilterId(generatedId)}`;

    return (
      <div className="relative inline-flex items-center">
        <LiquidFilter id={filterId} viscosity={viscosity} />

        <BaseRadio.Root
          ref={ref}
          className={cn(
            "group peer relative inline-flex h-4.5 w-4.5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-default bg-surface shadow-xs transition-colors duration-200 ease-out hover:border-border-strong active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[checked]:border-brand data-[disabled]:cursor-not-allowed data-[disabled]:opacity-45 select-none",
            className
          )}
          {...props}
        >
          {/* Gooey Layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
            style={{ filter: `url(#${filterId})` }}
          >
            {/* Droplet swell halo on hover */}
            <span className="absolute h-3 w-3 rounded-full bg-brand/20 scale-0 group-hover:scale-100 transition-transform duration-240 ease-out" />

            {/* Organic Fluid Droplet Center */}
            <BaseRadio.Indicator
              keepMounted
              className="flex items-center justify-center transition-all duration-300 ease-spring scale-100 opacity-100 data-[unchecked]:scale-0 data-[unchecked]:opacity-0"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-xs group-active:scale-125 transition-transform duration-150" />
            </BaseRadio.Indicator>
          </div>
        </BaseRadio.Root>
      </div>
    );
  }
);
LiquidRadio.displayName = "LiquidRadio";

export interface LiquidRadioItemProps extends React.HTMLAttributes<HTMLLabelElement> {
  value: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}

export const LiquidRadioItem = React.forwardRef<HTMLLabelElement, LiquidRadioItemProps>(
  ({ className, value, label, description, disabled, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "flex items-start gap-3 cursor-pointer select-none rounded-md p-2 transition-colors hover:bg-subtle/50",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        {...props}
      >
        <LiquidRadio value={value} disabled={disabled} className="mt-0.5" />
        <div className="grid gap-0.5 text-xs">
          <span className="font-medium text-fg-primary leading-none">{label}</span>
          {description && (
            <span className="text-[11px] text-fg-secondary leading-relaxed">
              {description}
            </span>
          )}
        </div>
      </label>
    );
  }
);
LiquidRadioItem.displayName = "LiquidRadioItem";
