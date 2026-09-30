import * as React from "react";
import { cn } from "@/registry/cmplt/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  dashed?: boolean;
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, dashed = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[240px] flex-col items-center justify-center rounded-panel p-8 text-center animate-fade-in",
        dashed
          ? "border-2 border-dashed border-border-default bg-subtle/25"
          : "border border-border-default bg-surface",
        className
      )}
      {...props}
    />
  )
);
EmptyState.displayName = "EmptyState";

const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-subtle text-fg-muted border border-border-subtle [&>svg]:size-6",
      className
    )}
    {...props}
  />
));
EmptyStateIcon.displayName = "EmptyStateIcon";

const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "text-sm font-semibold text-fg-primary tracking-tight",
      className
    )}
    {...props}
  />
));
EmptyStateTitle.displayName = "EmptyStateTitle";

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "mt-1 text-xs text-fg-muted max-w-sm leading-relaxed",
      className
    )}
    {...props}
  />
));
EmptyStateDescription.displayName = "EmptyStateDescription";

const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-5 flex items-center justify-center gap-2.5", className)}
    {...props}
  />
));
EmptyStateActions.displayName = "EmptyStateActions";

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
};
