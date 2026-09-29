"use client";

import * as React from "react";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { cn } from "@/registry/cmplt/lib/utils";

export type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof BaseRadioGroup
>;

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseRadioGroup
        ref={ref}
        className={cn("grid gap-2.5", className)}
        {...props}
      />
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export type RadioProps = React.ComponentPropsWithoutRef<typeof BaseRadio.Root>;

const Radio = React.forwardRef<HTMLElement, RadioProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseRadio.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-default bg-surface text-fg-on-accent shadow-cmplt-xs transition-all duration-200 ease-cmplt-out hover:border-border-strong active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[checked]:border-accent data-[disabled]:cursor-not-allowed data-[disabled]:opacity-45",
          className
        )}
        {...props}
      >
        <BaseRadio.Indicator
          keepMounted
          className="flex items-center justify-center transition-all duration-200 ease-cmplt-spring scale-100 opacity-100 data-[unchecked]:scale-0 data-[unchecked]:opacity-0"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
        </BaseRadio.Indicator>
      </BaseRadio.Root>
    );
  }
);
Radio.displayName = "Radio";

export interface RadioItemProps extends React.HTMLAttributes<HTMLLabelElement> {
  value: string;
  disabled?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
}

const RadioItem = React.forwardRef<HTMLLabelElement, RadioItemProps>(
  ({ className, value, disabled, label, description, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "flex items-start gap-2.5 text-xs select-none cursor-pointer transition-colors text-fg-secondary hover:text-fg-primary",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        {...props}
      >
        <Radio value={value} disabled={disabled} className="mt-0.5" />
        <div className="grid gap-0.5">
          {label && <span className="font-medium text-fg-primary">{label}</span>}
          {description && (
            <span className="text-[11px] text-fg-muted leading-relaxed">
              {description}
            </span>
          )}
          {children}
        </div>
      </label>
    );
  }
);
RadioItem.displayName = "RadioItem";

export interface RadioCardProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, "title"> {
  value: string;
  disabled?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  price?: React.ReactNode;
}

const RadioCard = React.forwardRef<HTMLLabelElement, RadioCardProps>(
  (
    {
      className,
      value,
      disabled,
      title,
      description,
      badge,
      price,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={cn(
          "group relative flex items-start justify-between gap-4 rounded-cmplt-panel border border-border-default bg-surface p-4 text-xs transition-all duration-200 ease-cmplt-out hover:border-border-strong cursor-pointer select-none has-[[data-checked]]:border-accent has-[[data-checked]]:bg-accent-subtle/15",
          disabled && "cursor-not-allowed opacity-50 hover:border-border-default",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <Radio value={value} disabled={disabled} className="mt-0.5" />
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-fg-primary">{title}</span>
              {badge}
            </div>
            {description && (
              <span className="text-[11px] text-fg-secondary leading-relaxed">
                {description}
              </span>
            )}
            {children}
          </div>
        </div>
        {price && (
          <div className="text-right shrink-0">
            <span className="text-sm font-semibold text-fg-primary font-mono cmplt-tabular">
              {price}
            </span>
          </div>
        )}
      </label>
    );
  }
);
RadioCard.displayName = "RadioCard";

export { RadioGroup, Radio, RadioItem, RadioCard };
