"use client";

import * as React from "react";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-45 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-fg-secondary hover:bg-subtle hover:text-fg-primary data-[pressed]:bg-subtle data-[pressed]:text-fg-primary data-[pressed]:shadow-xs",
        outline:
          "border border-border-default bg-surface text-fg-secondary hover:bg-subtle hover:text-fg-primary data-[pressed]:border-brand data-[pressed]:bg-brand-subtle/30 data-[pressed]:text-fg-brand",
        accent:
          "border border-border-default bg-surface text-fg-secondary hover:bg-subtle hover:text-fg-primary data-[pressed]:border-brand data-[pressed]:bg-brand data-[pressed]:text-fg-on-brand",
      },
      size: {
        sm: "h-8 px-2.5 text-xs rounded-sm min-w-8",
        md: "h-9 px-3 text-xs rounded-md min-w-9",
        lg: "h-10 px-3.5 text-sm rounded-md min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof BaseToggle>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <BaseToggle
        ref={ref}
        className={cn(toggleVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle, toggleVariants };
