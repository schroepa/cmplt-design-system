"use client";

import * as React from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { cn } from "@/registry/cmplt/lib/utils";

const TooltipProvider = BaseTooltip.Provider;
const Tooltip = BaseTooltip.Root;
const TooltipTrigger = BaseTooltip.Trigger;

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup> & {
    sideOffset?: number;
    side?: "top" | "bottom" | "left" | "right";
  }
>(({ className, sideOffset = 6, side = "top", children, ...props }, ref) => (
  <BaseTooltip.Portal>
    <BaseTooltip.Positioner
      sideOffset={sideOffset}
      side={side}
      className="z-50 outline-none"
    >
      <BaseTooltip.Popup
        ref={ref}
        className={cn(
          "cmplt-overlay-popup rounded-cmplt-sm border border-border-default bg-elevated px-2.5 py-1 text-xs font-medium text-fg-primary shadow-cmplt-md",
          className
        )}
        {...props}
      >
        {children}
      </BaseTooltip.Popup>
    </BaseTooltip.Positioner>
  </BaseTooltip.Portal>
));
TooltipContent.displayName = "TooltipContent";

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
