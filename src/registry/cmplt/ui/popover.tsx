"use client";

import * as React from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * cmplt Popover — Style Guide v1.1 (Sections 2 & 5):
 * - Container Radius: soft organic 20px radius (rounded-cmplt-lg)
 * - Level 2 Elevation: diffuse ambient drop shadow (shadow-cmplt-lg) + 1px hairline border
 */
const Popover = BasePopover.Root;
const PopoverTrigger = BasePopover.Trigger;
const PopoverClose = BasePopover.Close;

const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Popup> & {
    sideOffset?: number;
    align?: "start" | "center" | "end";
    side?: "top" | "bottom" | "left" | "right";
  }
>(
  (
    {
      className,
      sideOffset = 8,
      align = "center",
      side = "bottom",
      children,
      ...props
    },
    ref
  ) => (
    <BasePopover.Portal>
      <BasePopover.Positioner
        sideOffset={sideOffset}
        align={align}
        side={side}
        className="z-50 outline-none"
      >
        <BasePopover.Popup
          ref={ref}
          className={cn(
            "cmplt-overlay-popup w-72 max-w-[calc(100vw-1.5rem)] rounded-cmplt-lg border border-border-subtle bg-elevated p-5 text-fg-primary shadow-cmplt-lg outline-none",
            className
          )}
          {...props}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  )
);
PopoverContent.displayName = "PopoverContent";

const PopoverTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Title>
>(({ className, ...props }, ref) => (
  <BasePopover.Title
    ref={ref}
    className={cn("text-sm font-semibold text-fg-primary", className)}
    {...props}
  />
));
PopoverTitle.displayName = "PopoverTitle";

const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Description>
>(({ className, ...props }, ref) => (
  <BasePopover.Description
    ref={ref}
    className={cn("mt-1 text-[12.5px] text-fg-muted leading-relaxed", className)}
    {...props}
  />
));
PopoverDescription.displayName = "PopoverDescription";

export {
  Popover,
  PopoverTrigger,
  PopoverClose,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
};
