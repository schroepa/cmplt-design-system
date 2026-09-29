"use client";

import * as React from "react";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

const Combobox = BaseCombobox.Root;
const ComboboxPortal = BaseCombobox.Portal;
const ComboboxGroup = BaseCombobox.Group;
const ComboboxGroupLabel = BaseCombobox.GroupLabel;
const ComboboxChips = BaseCombobox.Chips;

const ComboboxInputGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.InputGroup>
>(({ className, ...props }, ref) => (
  <BaseCombobox.InputGroup
    ref={ref}
    className={cn(
      "group relative flex min-h-9 w-full items-center gap-1.5 rounded-cmplt-md border border-border bg-surface px-3 py-1 text-sm text-fg shadow-cmplt-none transition-colors",
      "focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      className
    )}
    {...props}
  />
));
ComboboxInputGroup.displayName = "ComboboxInputGroup";

const ComboboxInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Input>
>(({ className, ...props }, ref) => (
  <BaseCombobox.Input
    ref={ref}
    className={cn(
      "w-full bg-transparent text-sm text-fg placeholder:text-fg-muted outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
ComboboxInput.displayName = "ComboboxInput";

const ComboboxTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseCombobox.Trigger
    ref={ref}
    className={cn(
      "flex shrink-0 items-center justify-center text-fg-muted hover:text-fg transition-colors",
      className
    )}
    {...props}
  >
    {children || <ChevronsUpDown className="size-4 opacity-70" />}
  </BaseCombobox.Trigger>
));
ComboboxTrigger.displayName = "ComboboxTrigger";

const ComboboxClear = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Clear>
>(({ className, children, ...props }, ref) => (
  <BaseCombobox.Clear
    ref={ref}
    className={cn(
      "flex shrink-0 items-center justify-center text-fg-muted hover:text-fg transition-colors",
      className
    )}
    {...props}
  >
    {children || <X className="size-3.5" />}
  </BaseCombobox.Clear>
));
ComboboxClear.displayName = "ComboboxClear";

const ComboboxContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Popup> & {
    sideOffset?: number;
  }
>(({ className, children, sideOffset = 6, ...props }, ref) => (
  <BaseCombobox.Portal>
    <BaseCombobox.Positioner
      sideOffset={sideOffset}
      className="z-50 outline-none"
    >
      <BaseCombobox.Popup
        ref={ref}
        className={cn(
          "cmplt-overlay-popup min-w-[var(--anchor-width)] max-h-72 overflow-y-auto rounded-cmplt-panel border border-border-subtle bg-elevated p-1 text-fg shadow-cmplt-lg outline-none",
          className
        )}
        {...props}
      >
        <BaseCombobox.List>{children}</BaseCombobox.List>
      </BaseCombobox.Popup>
    </BaseCombobox.Positioner>
  </BaseCombobox.Portal>
));
ComboboxContent.displayName = "ComboboxContent";

const ComboboxItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Item>
>(({ className, children, ...props }, ref) => (
  <BaseCombobox.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center justify-between rounded-cmplt-sm py-1.5 pl-3 pr-8 text-sm text-fg-secondary outline-none transition-colors duration-150",
      "data-[highlighted]:bg-subtle data-[highlighted]:text-fg",
      "data-[selected]:font-medium data-[selected]:text-fg",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      className
    )}
    {...props}
  >
    <span className="truncate">{children}</span>
    <BaseCombobox.ItemIndicator className="absolute right-2.5 flex size-3.5 items-center justify-center text-accent">
      <Check className="size-3.5 stroke-[2]" />
    </BaseCombobox.ItemIndicator>
  </BaseCombobox.Item>
));
ComboboxItem.displayName = "ComboboxItem";

const ComboboxEmpty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Empty>
>(({ className, children, ...props }, ref) => (
  <BaseCombobox.Empty
    ref={ref}
    className={cn("py-6 text-center text-xs text-fg-muted", className)}
    {...props}
  >
    {children || "No results found."}
  </BaseCombobox.Empty>
));
ComboboxEmpty.displayName = "ComboboxEmpty";

const ComboboxChip = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.Chip>
>(({ className, children, ...props }, ref) => (
  <BaseCombobox.Chip
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1 rounded-cmplt-sm bg-subtle px-2 py-0.5 text-xs font-medium text-fg",
      className
    )}
    {...props}
  >
    {children}
  </BaseCombobox.Chip>
));
ComboboxChip.displayName = "ComboboxChip";

const ComboboxChipRemove = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseCombobox.ChipRemove>
>(({ className, children, ...props }, ref) => (
  <BaseCombobox.ChipRemove
    ref={ref}
    className={cn(
      "rounded-full p-0.5 text-fg-muted hover:bg-surface hover:text-fg transition-colors",
      className
    )}
    {...props}
  >
    {children || <X className="size-3" />}
  </BaseCombobox.ChipRemove>
));
ComboboxChipRemove.displayName = "ComboboxChipRemove";

export {
  Combobox,
  ComboboxInputGroup,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxPortal,
};
