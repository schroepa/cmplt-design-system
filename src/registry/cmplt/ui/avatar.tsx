"use client";

import * as React from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden font-medium align-middle bg-subtle text-fg-secondary",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-14 w-14 text-lg",
        "2xl": "h-18 w-18 text-xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof BaseAvatar.Root>,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
  ({ className, size, shape, ...props }, ref) => {
    return (
      <BaseAvatar.Root
        ref={ref}
        className={cn(avatarVariants({ size, shape }), className)}
        {...props}
      />
    );
  }
);
Avatar.displayName = "Avatar";

export type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof BaseAvatar.Image
>;

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseAvatar.Image
        ref={ref}
        className={cn("h-full w-full object-cover", className)}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

export type AvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof BaseAvatar.Fallback
>;

const AvatarFallback = React.forwardRef<HTMLElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseAvatar.Fallback
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center font-mono font-medium tracking-tight uppercase bg-subtle/80 text-fg-secondary",
          className
        )}
        {...props}
      />
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";

export interface AvatarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "offline" | "busy" | "away";
  position?: "bottom-right" | "top-right";
}

const statusColors = {
  online: "bg-status-success ring-surface",
  offline: "bg-fg-muted ring-surface",
  busy: "bg-status-danger ring-surface",
  away: "bg-status-warning ring-surface",
};

const positionClasses = {
  "bottom-right": "bottom-0 right-0",
  "top-right": "top-0 right-0",
};

function AvatarBadge({
  className,
  status = "online",
  position = "bottom-right",
  ...props
}: AvatarBadgeProps) {
  return (
    <span
      className={cn(
        "absolute block h-2.5 w-2.5 rounded-full ring-2",
        statusColors[status],
        positionClasses[position],
        className
      )}
      {...props}
    />
  );
}
AvatarBadge.displayName = "AvatarBadge";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  spacing?: "sm" | "md" | "lg";
}

function AvatarGroup({
  className,
  children,
  max,
  spacing = "md",
  ...props
}: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children);
  const total = childrenArray.length;
  const visible = max ? childrenArray.slice(0, max) : childrenArray;
  const overflow = max && total > max ? total - max : 0;

  const spacingClass = {
    sm: "-space-x-1.5",
    md: "-space-x-2.5",
    lg: "-space-x-3.5",
  }[spacing];

  return (
    <div
      className={cn("flex items-center", spacingClass, className)}
      {...props}
    >
      {visible.map((child, index) => (
        <div key={index} className="ring-2 ring-surface rounded-full">
          {child}
        </div>
      ))}
      {overflow > 0 && (
        <div className="ring-2 ring-surface rounded-full">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-subtle text-xs font-mono font-medium text-fg-secondary">
            +{overflow}
          </div>
        </div>
      )}
    </div>
  );
}
AvatarGroup.displayName = "AvatarGroup";

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  avatarVariants,
};
