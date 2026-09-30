import * as React from "react";
import { cn } from "@/registry/cmplt/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shimmer?: boolean;
}

function Skeleton({ className, shimmer = true, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-sm bg-subtle/85",
        shimmer && "animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export interface SkeletonTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  gap?: "sm" | "md" | "lg";
}

function SkeletonText({
  lines = 3,
  gap = "md",
  className,
  ...props
}: SkeletonTextProps) {
  const gapClass = {
    sm: "space-y-1.5",
    md: "space-y-2.5",
    lg: "space-y-3.5",
  }[gap];

  return (
    <div className={cn(gapClass, className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-3.5 w-full",
            i === lines - 1 && lines > 1 ? "w-3/5" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

export interface SkeletonAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  shape?: "circle" | "square";
}

function SkeletonAvatar({
  size = "md",
  shape = "circle",
  className,
  ...props
}: SkeletonAvatarProps) {
  const sizeClass = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-14 w-14",
    "2xl": "h-18 w-18",
  }[size];

  const shapeClass =
    shape === "circle" ? "rounded-full" : "rounded-md";

  return (
    <Skeleton
      className={cn(sizeClass, shapeClass, "shrink-0", className)}
      {...props}
    />
  );
}

export { Skeleton, SkeletonText, SkeletonAvatar };
