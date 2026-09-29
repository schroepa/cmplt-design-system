"use client";

import * as React from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId, type LiquidViscosity } from "@/registry/cmplt/ui/liquid-filter";

const liquidAvatarVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden font-medium align-middle bg-surface text-fg-secondary border-2 border-surface transition-all duration-300 ease-cmplt-spring hover:z-20 hover:-translate-y-1 hover:scale-110",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-14 w-14 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface LiquidAvatarProps
  extends React.ComponentPropsWithoutRef<typeof BaseAvatar.Root>,
    VariantProps<typeof liquidAvatarVariants> {
  status?: "online" | "busy" | "away" | "offline";
}

export const LiquidAvatar = React.forwardRef<HTMLElement, LiquidAvatarProps>(
  ({ className, size, status, children, ...props }, ref) => {
    return (
      <div className="relative inline-flex">
        <BaseAvatar.Root
          ref={ref}
          className={cn(liquidAvatarVariants({ size }), "rounded-cmplt-full shadow-cmplt-xs", className)}
          {...props}
        >
          {children}
        </BaseAvatar.Root>

        {status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 z-10 block h-2.5 w-2.5 rounded-full ring-2 ring-surface",
              status === "online" && "bg-status-success",
              status === "busy" && "bg-status-danger",
              status === "away" && "bg-status-warning",
              status === "offline" && "bg-fg-muted"
            )}
          />
        )}
      </div>
    );
  }
);
LiquidAvatar.displayName = "LiquidAvatar";

export const LiquidAvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Image>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Image
    ref={ref}
    className={cn("h-full w-full object-cover", className)}
    {...props}
  />
));
LiquidAvatarImage.displayName = "LiquidAvatarImage";

export const LiquidAvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-subtle text-fg-secondary font-medium",
      className
    )}
    {...props}
  />
));
LiquidAvatarFallback.displayName = "LiquidAvatarFallback";

export interface LiquidAvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  viscosity?: LiquidViscosity;
  spacing?: "tight" | "normal" | "relaxed";
}

/**
 * cmplt LiquidAvatarGroup — Organic Team Cluster Fusion
 * Overlapping avatars merge into an organic visual cluster with subtle fluid
 * meniscus tension. Hovering an individual avatar detaches it elastically.
 */
export const LiquidAvatarGroup = React.forwardRef<HTMLDivElement, LiquidAvatarGroupProps>(
  (
    {
      className,
      max = 5,
      viscosity = "subtle",
      spacing = "tight",
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const filterId = `cmplt-liquid-avatars-${formatFilterId(generatedId)}`;

    const childrenArray = React.Children.toArray(children);
    const visibleChildren = childrenArray.slice(0, max);
    const excessCount = childrenArray.length - max;

    const spacingClasses = {
      tight: "-space-x-3",
      normal: "-space-x-2",
      relaxed: "-space-x-1",
    }[spacing];

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center isolate", className)}
        {...props}
      >
        <LiquidFilter id={filterId} viscosity={viscosity} />

        {/* Liquid Container */}
        <div
          className={cn("inline-flex items-center", spacingClasses)}
          style={{ filter: `url(#${filterId})` }}
        >
          {visibleChildren}

          {excessCount > 0 && (
            <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface bg-subtle text-xs font-semibold text-fg-secondary shadow-cmplt-xs">
              +{excessCount}
            </div>
          )}
        </div>
      </div>
    );
  }
);
LiquidAvatarGroup.displayName = "LiquidAvatarGroup";
