"use client";

import * as React from "react";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";
import { Toggle, toggleVariants } from "@/registry/cmplt/ui/toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  variant: "default",
  size: "md",
});

export interface ToggleGroupProps<Value extends string = string>
  extends React.ComponentPropsWithoutRef<typeof BaseToggleGroup<Value>>,
    VariantProps<typeof toggleVariants> {}

const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  ToggleGroupProps<string>
>(({ className, variant = "default", size = "md", children, ...props }, ref) => {
  return (
    <BaseToggleGroup
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1 rounded-cmplt-md p-1",
        variant === "default" && "bg-subtle/70 border border-border-subtle",
        variant === "outline" && "border border-border-default bg-surface",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </BaseToggleGroup>
  );
});
ToggleGroup.displayName = "ToggleGroup";

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof Toggle> {}

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <Toggle
      ref={ref}
      variant={variant ?? context.variant ?? "default"}
      size={size ?? context.size ?? "md"}
      className={cn("data-[pressed]:shadow-cmplt-xs", className)}
      {...props}
    />
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
