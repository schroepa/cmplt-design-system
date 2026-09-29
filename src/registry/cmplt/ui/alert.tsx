import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-cmplt-lg border p-4 text-xs transition-all duration-200 ease-cmplt-out flex items-start gap-3.5",
  {
    variants: {
      variant: {
        default:
          "bg-subtle/60 border-border-subtle text-fg-primary [&>svg]:text-fg-secondary",
        info:
          "bg-status-info/8 border-status-info/25 text-fg-primary [&>svg]:text-status-info",
        success:
          "bg-status-success/8 border-status-success/25 text-fg-primary [&>svg]:text-status-success",
        warning:
          "bg-status-warning/8 border-status-warning/25 text-fg-primary [&>svg]:text-status-warning",
        danger:
          "bg-status-danger/8 border-status-danger/25 text-fg-primary [&>svg]:text-status-danger",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const DEFAULT_ICONS = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  hideIcon?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, variant = "default", icon, hideIcon = false, children, ...props },
    ref
  ) => {
    const IconComponent = DEFAULT_ICONS[variant ?? "default"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {!hideIcon && (
          <span className="shrink-0 mt-0.5">
            {icon ?? <IconComponent className="h-4 w-4" />}
          </span>
        )}
        <div className="flex-1 grid gap-1">{children}</div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "font-semibold text-fg-primary leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-[12px] text-fg-secondary leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
