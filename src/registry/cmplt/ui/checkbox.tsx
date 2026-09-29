"use client";

import * as React from "react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Check } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>;

const Checkbox = React.forwardRef<HTMLElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseCheckbox.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-cmplt-xs border border-border-default bg-surface text-fg-on-accent shadow-cmplt-xs transition-all duration-200 ease-cmplt-out hover:border-border-strong active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[checked]:bg-accent data-[checked]:border-accent data-[disabled]:cursor-not-allowed data-[disabled]:opacity-45",
          className
        )}
        {...props}
      >
        <BaseCheckbox.Indicator
          keepMounted
          className="flex items-center justify-center text-current transition-all duration-200 ease-cmplt-spring scale-100 opacity-100 data-[unchecked]:scale-0 data-[unchecked]:opacity-0"
        >
          <Check className="h-3 w-3 stroke-[2.75]" />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
