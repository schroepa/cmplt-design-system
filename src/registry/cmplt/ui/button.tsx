"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * cmplt Button — Style Guide v1.1:
 * - Primary & Subtle action buttons default to Pill shape (9999px)
 * - Secondary / Outline / Ghost buttons use structured 8px radius (or explicit shape="pill")
 * - Proportionally wider horizontal padding for ergonomic click targets
 * - Level 0/1 flat elevation (no heavy drop shadows on buttons)
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-cmplt-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[disabled]:pointer-events-none data-[disabled]:opacity-45 active:scale-[0.975] active:duration-100 [&_svg]:stroke-[1.75]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-fg-on-accent hover:bg-accent-hover hover:shadow-cmplt-xs border border-transparent rounded-cmplt-full",
        secondary:
          "bg-surface text-fg-primary border border-border-default hover:bg-subtle hover:border-border-strong hover:shadow-cmplt-xs rounded-cmplt-md",
        outline:
          "bg-transparent text-fg-primary border border-border-default hover:bg-subtle hover:border-border-strong rounded-cmplt-md",
        subtle:
          "bg-accent-subtle text-fg-accent border border-transparent hover:brightness-95 rounded-cmplt-full",
        ghost:
          "bg-transparent text-fg-secondary border border-transparent hover:bg-subtle hover:text-fg-primary rounded-cmplt-md",
        danger:
          "bg-status-danger text-white hover:opacity-90 border border-transparent rounded-cmplt-full",
      },
      size: {
        xs: "h-7 px-3.5 text-xs",
        sm: "h-8 px-4 text-xs",
        md: "h-9 px-5 text-[13px]",
        lg: "h-10 px-6 text-sm",
        xl: "h-12 px-7 text-sm",
        icon: "h-9 w-9 p-0 rounded-cmplt-full",
      },
      shape: {
        auto: "",
        pill: "!rounded-cmplt-full",
        rounded: "!rounded-cmplt-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "auto",
    },
  }
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof BaseButton>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant, size, shape, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={cn(buttonVariants({ variant, size, shape, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
