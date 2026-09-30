import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

const timelineDotVariants = cva(
  "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border shadow-xs text-xs transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-border-default bg-surface text-fg-primary",
        accent:
          "border-border-brand/30 bg-brand text-fg-on-brand shadow-sm",
        success:
          "border-status-success/20 bg-status-success-bg text-status-success",
        warning:
          "border-status-warning/20 bg-status-warning-bg text-status-warning",
        danger:
          "border-status-danger/20 bg-status-danger-bg text-status-danger",
        neutral:
          "border-border-subtle bg-subtle text-fg-muted",
      },
      size: {
        sm: "size-6 text-[10px]",
        md: "size-8 text-xs",
        lg: "size-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {}

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn("relative flex flex-col space-y-6", className)}
      {...props}
    />
  )
);
Timeline.displayName = "Timeline";

export interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isLast?: boolean;
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, isLast = false, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("relative flex gap-4 group", className)}
      {...props}
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-4 top-8 -bottom-6 w-px -translate-x-1/2 bg-border-subtle group-last:hidden"
        />
      )}
      {children}
    </li>
  )
);
TimelineItem.displayName = "TimelineItem";

export interface TimelineDotProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineDotVariants> {}

const TimelineDot = React.forwardRef<HTMLDivElement, TimelineDotProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(timelineDotVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </div>
  )
);
TimelineDot.displayName = "TimelineDot";

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-1 flex-col pt-1", className)}
    {...props}
  />
));
TimelineContent.displayName = "TimelineContent";

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1",
      className
    )}
    {...props}
  />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-sm font-medium text-fg", className)}
    {...props}
  />
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineTime = React.forwardRef<
  HTMLTimeElement,
  React.TimeHTMLAttributes<HTMLTimeElement>
>(({ className, ...props }, ref) => (
  <time
    ref={ref}
    className={cn("font-mono text-xs text-fg-muted", className)}
    {...props}
  />
));
TimelineTime.displayName = "TimelineTime";

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-1 text-xs text-fg-secondary leading-relaxed", className)}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";

export {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineTime,
  TimelineDescription,
  timelineDotVariants,
};
