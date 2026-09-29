"use client";

import * as React from "react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cn } from "@/registry/cmplt/lib/utils";

export type SwitchProps = React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>;

const Switch = React.forwardRef<HTMLElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseSwitch.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-cmplt-full border border-border-default bg-muted p-0.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[checked]:bg-accent data-[checked]:border-accent data-[disabled]:cursor-not-allowed data-[disabled]:opacity-45",
          className
        )}
        {...props}
      >
        <BaseSwitch.Thumb
          className={cn(
            "pointer-events-none block h-3.5 w-3.5 rounded-cmplt-full bg-surface shadow-cmplt-xs transition-transform duration-150 translate-x-0 data-[checked]:translate-x-4 data-[checked]:bg-fg-on-accent"
          )}
        />
      </BaseSwitch.Root>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
