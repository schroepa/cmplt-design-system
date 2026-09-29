"use client";

import * as React from "react";
import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * cmplt Select — Style Guide v1.1 (Sections 2, 4, 5, 6):
 * - Trigger: Level 0 flat input appearance (no shadow, 1px border, 8px radius, stretched horizontal padding)
 * - Popup: Level 2 floating overlay with soft container radius and diffuse ambient shadow
 * - Items: 6px radius (rounded-cmplt-sm) with subtle hover highlight
 */
const Select = BaseSelect.Root;
const SelectValue = BaseSelect.Value;
const SelectGroup = BaseSelect.Group;
const SelectGroupLabel = BaseSelect.GroupLabel;

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseSelect.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full cursor-pointer items-center justify-between gap-2 rounded-cmplt-md border border-border-default bg-surface px-3.5 py-1.5 text-[13px] text-fg-primary shadow-cmplt-none transition-colors hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <BaseSelect.Icon className="flex items-center text-fg-muted">
      <ChevronDown className="h-4 w-4 stroke-[1.75] opacity-75" />
    </BaseSelect.Icon>
  </BaseSelect.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Popup> & {
    sideOffset?: number;
  }
>(({ className, children, sideOffset = 6, ...props }, ref) => (
  <BaseSelect.Portal>
    <BaseSelect.Positioner
      sideOffset={sideOffset}
      alignItemWithTrigger={false}
      className="z-50 outline-none"
    >
      <BaseSelect.Popup
        ref={ref}
        className={cn(
          "cmplt-overlay-popup min-w-[var(--anchor-width)] max-h-72 overflow-y-auto rounded-cmplt-panel border border-border-subtle bg-elevated p-1.5 text-fg-primary shadow-cmplt-lg outline-none",
          className
        )}
        {...props}
      >
        <BaseSelect.List>{children}</BaseSelect.List>
      </BaseSelect.Popup>
    </BaseSelect.Positioner>
  </BaseSelect.Portal>
));
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(({ className, children, ...props }, ref) => (
  <BaseSelect.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center justify-between rounded-cmplt-sm py-1.5 pl-3 pr-8 text-[13px] text-fg-secondary outline-none transition-colors data-[highlighted]:bg-subtle data-[highlighted]:text-fg-primary data-[selected]:font-medium data-[selected]:text-fg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
      className
    )}
    {...props}
  >
    <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
    <BaseSelect.ItemIndicator className="absolute right-2.5 flex h-3.5 w-3.5 items-center justify-center text-fg-accent">
      <Check className="h-3.5 w-3.5 stroke-[2]" />
    </BaseSelect.ItemIndicator>
  </BaseSelect.Item>
));
SelectItem.displayName = "SelectItem";

export {
  Select,
  SelectValue,
  SelectGroup,
  SelectGroupLabel,
  SelectTrigger,
  SelectContent,
  SelectItem,
};
