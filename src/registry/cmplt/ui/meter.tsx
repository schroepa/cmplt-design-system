"use client";

import * as React from "react";
import { Meter as BaseMeter } from "@base-ui/react/meter";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

const meterIndicatorVariants = cva(
  "h-full rounded-full transition-all duration-500 ease-out",
  {
    variants: {
      variant: {
        default: "bg-brand",
        success: "bg-status-success",
        warning: "bg-status-warning",
        danger: "bg-status-danger",
        info: "bg-status-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface MeterProps
  extends React.ComponentPropsWithoutRef<typeof BaseMeter.Root>,
    VariantProps<typeof meterIndicatorVariants> {
  label?: string;
  showValue?: boolean;
}

const MeterRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Root>
>(({ className, ...props }, ref) => (
  <BaseMeter.Root
    ref={ref}
    className={cn("flex w-full flex-col gap-1.5", className)}
    {...props}
  />
));
MeterRoot.displayName = "MeterRoot";

const MeterLabel = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Label>
>(({ className, ...props }, ref) => (
  <BaseMeter.Label
    ref={ref}
    className={cn("text-xs font-medium text-fg-secondary", className)}
    {...props}
  />
));
MeterLabel.displayName = "MeterLabel";

const MeterValue = React.forwardRef<
  HTMLOutputElement,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Value>
>(({ className, ...props }, ref) => (
  <BaseMeter.Value
    ref={ref}
    className={cn("font-mono text-xs text-fg-muted", className)}
    {...props}
  />
));
MeterValue.displayName = "MeterValue";

const MeterTrack = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Track>
>(({ className, ...props }, ref) => (
  <BaseMeter.Track
    ref={ref}
    className={cn(
      "h-2 w-full overflow-hidden rounded-full bg-subtle border border-border-subtle",
      className
    )}
    {...props}
  />
));
MeterTrack.displayName = "MeterTrack";

export interface MeterIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof BaseMeter.Indicator>,
    VariantProps<typeof meterIndicatorVariants> {}

const MeterIndicator = React.forwardRef<HTMLDivElement, MeterIndicatorProps>(
  ({ className, variant, ...props }, ref) => (
    <BaseMeter.Indicator
      ref={ref}
      className={cn(meterIndicatorVariants({ variant, className }))}
      {...props}
    />
  )
);
MeterIndicator.displayName = "MeterIndicator";

/**
 * High-level ready-to-use Meter component with semantic color variants and formatting.
 */
const Meter = React.forwardRef<HTMLDivElement, MeterProps>(
  ({ className, label, showValue = false, variant = "default", ...props }, ref) => {
    return (
      <MeterRoot ref={ref} className={className} {...props}>
        {(label || showValue) && (
          <div className="flex items-center justify-between text-xs">
            {label && <MeterLabel>{label}</MeterLabel>}
            {showValue && <MeterValue />}
          </div>
        )}
        <MeterTrack>
          <MeterIndicator variant={variant} />
        </MeterTrack>
      </MeterRoot>
    );
  }
);
Meter.displayName = "Meter";

export {
  Meter,
  MeterRoot,
  MeterLabel,
  MeterValue,
  MeterTrack,
  MeterIndicator,
  meterIndicatorVariants,
};
