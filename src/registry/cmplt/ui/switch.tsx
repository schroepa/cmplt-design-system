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
          "group peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-border-default bg-muted p-0.5 transition-all duration-240 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:scale-[0.96] data-[checked]:bg-brand data-[checked]:border-brand data-[disabled]:cursor-not-allowed data-[disabled]:opacity-45",
          className
        )}
        {...props}
      >
        <BaseSwitch.Thumb
          className={cn(
            "pointer-events-none block h-3.5 w-3.5 rounded-full bg-surface shadow-xs transition-all duration-240 ease-spring translate-x-0 group-active:w-[1.125rem] data-[checked]:translate-x-4 data-[checked]:bg-fg-on-brand"
          )}
        />
      </BaseSwitch.Root>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
