import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * cmplt Badge — Style Guide v1.1 (Section 7):
 * Minimalist status indication using a small, solid color dot next to crisp text
 * instead of encapsulating text in heavy, fully-saturated colored blocks.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-all duration-200 ease-cmplt-out select-none whitespace-nowrap cmplt-tabular",
  {
    variants: {
      variant: {
        default:
          "bg-subtle text-fg-secondary border border-border-subtle",
        brand:
          "bg-surface text-fg-primary border border-border-default",
        outline:
          "bg-transparent text-fg-secondary border border-border-default",
        success:
          "bg-surface text-fg-primary border border-border-subtle",
        warning:
          "bg-surface text-fg-primary border border-border-subtle",
        danger:
          "bg-surface text-fg-primary border border-border-subtle",
        info:
          "bg-surface text-fg-primary border border-border-subtle",
        mono:
          "bg-subtle/70 text-fg-secondary border border-border-subtle font-mono tracking-tight",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px] leading-4 rounded-cmplt-full",
        md: "px-3 py-1 text-xs leading-4 rounded-cmplt-full",
        lg: "px-3.5 py-1 text-xs leading-4 rounded-cmplt-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const DOT_COLOR_MAP: Partial<Record<NonNullable<BadgeProps["variant"]>, string>> = {
  success: "bg-status-success",
  warning: "bg-status-warning",
  danger: "bg-status-danger",
  info: "bg-status-info",
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Controls whether the minimalist status dot is rendered.
   * Defaults to true automatically for status & brand variants.
   */
  dot?: boolean;
}

function Badge({
  className,
  variant = "default",
  size,
  dot,
  children,
  ...props
}: BadgeProps) {
  const dotColor = variant ? DOT_COLOR_MAP[variant] : undefined;
  const shouldShowDot = dot ?? Boolean(dotColor);

  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {shouldShowDot && (
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            dotColor ?? "bg-fg-muted"
          )}
        />
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
