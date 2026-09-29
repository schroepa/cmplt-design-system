"use client";

import * as React from "react";
import { Slider as BaseSlider } from "@base-ui/react/slider";
import { cn } from "@/registry/cmplt/lib/utils";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof BaseSlider.Root> {
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number) => string;
}

const SliderRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Root>
>(({ className, ...props }, ref) => (
  <BaseSlider.Root
    ref={ref}
    className={cn(
      "flex w-full flex-col gap-2 data-[disabled]:opacity-50 select-none",
      className
    )}
    {...props}
  />
));
SliderRoot.displayName = "SliderRoot";

const SliderControl = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Control>
>(({ className, ...props }, ref) => (
  <BaseSlider.Control
    ref={ref}
    className={cn(
      "relative flex h-5 w-full touch-none items-center cursor-pointer data-[disabled]:cursor-not-allowed",
      className
    )}
    {...props}
  />
));
SliderControl.displayName = "SliderControl";

const SliderTrack = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Track>
>(({ className, ...props }, ref) => (
  <BaseSlider.Track
    ref={ref}
    className={cn(
      "relative h-1.5 w-full grow overflow-hidden rounded-cmplt-full bg-subtle border border-border-subtle",
      className
    )}
    {...props}
  />
));
SliderTrack.displayName = "SliderTrack";

const SliderIndicator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Indicator>
>(({ className, ...props }, ref) => (
  <BaseSlider.Indicator
    ref={ref}
    className={cn(
      "h-full rounded-cmplt-full bg-accent transition-colors",
      className
    )}
    {...props}
  />
));
SliderIndicator.displayName = "SliderIndicator";

const SliderThumb = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Thumb>
>(({ className, ...props }, ref) => (
  <BaseSlider.Thumb
    ref={ref}
    className={cn(
      "block size-4.5 rounded-full border border-border bg-surface shadow-cmplt-xs ring-offset-background transition-transform",
      "hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-1",
      "data-[disabled]:pointer-events-none",
      className
    )}
    {...props}
  />
));
SliderThumb.displayName = "SliderThumb";

const SliderValue = React.forwardRef<
  HTMLOutputElement,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Value>
>(({ className, ...props }, ref) => (
  <BaseSlider.Value
    ref={ref}
    className={cn("font-mono text-xs text-fg-muted", className)}
    {...props}
  />
));
SliderValue.displayName = "SliderValue";

const SliderLabel = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Label>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Label>
>(({ className, ...props }, ref) => (
  <BaseSlider.Label
    ref={ref}
    className={cn("text-xs font-medium text-fg-secondary", className)}
    {...props}
  />
));
SliderLabel.displayName = "SliderLabel";

/**
 * Convenient all-in-one Slider component supporting single or dual range values.
 */
const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      label,
      showValue = false,
      value,
      defaultValue,
      children,
      ...props
    },
    ref
  ) => {
    const isRange =
      Array.isArray(value) || Array.isArray(defaultValue);

    return (
      <SliderRoot
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        className={className}
        {...props}
      >
        {(label || showValue) && (
          <div className="flex items-center justify-between text-xs">
            {label && <SliderLabel>{label}</SliderLabel>}
            {showValue && <SliderValue />}
          </div>
        )}
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          {isRange ? (
            <>
              <SliderThumb aria-label="Minimum" />
              <SliderThumb aria-label="Maximum" />
            </>
          ) : (
            <SliderThumb aria-label={label || "Slider"} />
          )}
        </SliderControl>
        {children}
      </SliderRoot>
    );
  }
);
Slider.displayName = "Slider";

export {
  Slider,
  SliderRoot,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
  SliderValue,
  SliderLabel,
};
