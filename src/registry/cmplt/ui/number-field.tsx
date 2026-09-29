"use client";

import * as React from "react";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

export interface NumberFieldProps
  extends React.ComponentPropsWithoutRef<typeof BaseNumberField.Root> {
  label?: string;
  description?: string;
  stepperStyle?: "stacked" | "inline";
}

const NumberFieldRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Root>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Root
    ref={ref}
    className={cn("flex flex-col gap-1.5", className)}
    {...props}
  />
));
NumberFieldRoot.displayName = "NumberFieldRoot";

const NumberFieldGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Group>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Group
    ref={ref}
    className={cn(
      "relative flex items-center rounded-cmplt-md border border-border bg-surface text-fg shadow-cmplt-xs transition-colors",
      "focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      className
    )}
    {...props}
  />
));
NumberFieldGroup.displayName = "NumberFieldGroup";

const NumberFieldInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Input>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Input
    ref={ref}
    className={cn(
      "w-full bg-transparent px-3 py-1.5 font-mono text-sm text-fg outline-none placeholder:text-fg-muted",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
NumberFieldInput.displayName = "NumberFieldInput";

const NumberFieldIncrement = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Increment>
>(({ className, children, ...props }, ref) => (
  <BaseNumberField.Increment
    ref={ref}
    className={cn(
      "flex items-center justify-center text-fg-muted hover:text-fg hover:bg-subtle active:scale-95",
      "disabled:pointer-events-none disabled:opacity-30 transition-colors",
      className
    )}
    {...props}
  >
    {children || <ChevronUp className="size-3.5" />}
  </BaseNumberField.Increment>
));
NumberFieldIncrement.displayName = "NumberFieldIncrement";

const NumberFieldDecrement = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Decrement>
>(({ className, children, ...props }, ref) => (
  <BaseNumberField.Decrement
    ref={ref}
    className={cn(
      "flex items-center justify-center text-fg-muted hover:text-fg hover:bg-subtle active:scale-95",
      "disabled:pointer-events-none disabled:opacity-30 transition-colors",
      className
    )}
    {...props}
  >
    {children || <ChevronDown className="size-3.5" />}
  </BaseNumberField.Decrement>
));
NumberFieldDecrement.displayName = "NumberFieldDecrement";

const NumberFieldScrubArea = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubArea>
>(({ className, ...props }, ref) => (
  <BaseNumberField.ScrubArea
    ref={ref}
    className={cn("cursor-ew-resize select-none", className)}
    {...props}
  />
));
NumberFieldScrubArea.displayName = "NumberFieldScrubArea";

/**
 * High-level ready-to-use NumberField with label, stacked or inline steppers.
 */
const NumberField = React.forwardRef<HTMLDivElement, NumberFieldProps>(
  (
    {
      className,
      label,
      description,
      stepperStyle = "stacked",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <NumberFieldRoot ref={ref} className={className} {...props}>
        {label && (
          <label className="text-xs font-medium text-fg-secondary">
            {label}
          </label>
        )}
        <NumberFieldGroup>
          {stepperStyle === "inline" && (
            <NumberFieldDecrement className="h-8 w-8 rounded-l-cmplt-md border-r border-border">
              <Minus className="size-3.5" />
            </NumberFieldDecrement>
          )}

          <NumberFieldInput />

          {stepperStyle === "inline" ? (
            <NumberFieldIncrement className="h-8 w-8 rounded-r-cmplt-md border-l border-border">
              <Plus className="size-3.5" />
            </NumberFieldIncrement>
          ) : (
            <div className="flex flex-col border-l border-border">
              <NumberFieldIncrement className="h-4 w-7 border-b border-border-subtle" />
              <NumberFieldDecrement className="h-4 w-7" />
            </div>
          )}
        </NumberFieldGroup>
        {description && (
          <p className="text-xs text-fg-muted">{description}</p>
        )}
        {children}
      </NumberFieldRoot>
    );
  }
);
NumberField.displayName = "NumberField";

export {
  NumberField,
  NumberFieldRoot,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
  NumberFieldScrubArea,
};
