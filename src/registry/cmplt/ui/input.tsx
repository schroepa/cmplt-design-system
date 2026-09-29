"use client";

import * as React from "react";
import { Input as BaseInput } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * cmplt Input — Style Guide v1.1 (Sections 2, 4, 5, 6):
 * - Level 0 (Base): Flat, zero shadow, physically integrated into layout via 1px solid border
 * - Standard inputs use moderate 6px-8px radius (rounded-cmplt-md)
 * - Search inputs use full pill shape (9999px / variant="search")
 * - Proportionally wider horizontal padding (px-3.5 / px-4)
 */
const inputVariants = cva(
  "flex h-9 w-full border border-border-default bg-surface py-1.5 text-[13px] text-fg-primary shadow-cmplt-none transition-colors placeholder:text-fg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:border-border-accent data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[invalid]:border-status-danger data-[invalid]:focus-visible:ring-status-danger",
  {
    variants: {
      variant: {
        default: "rounded-cmplt-md px-3.5",
        search: "rounded-cmplt-full px-4 bg-subtle/60 hover:bg-surface",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof BaseInput>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <BaseInput
        ref={ref}
        className={cn(inputVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
