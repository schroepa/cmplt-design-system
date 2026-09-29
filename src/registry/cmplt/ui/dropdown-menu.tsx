"use client";

import * as React from "react";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

const DropdownMenu = BaseMenu.Root;
const DropdownMenuTrigger = BaseMenu.Trigger;
const DropdownMenuGroup = BaseMenu.Group;
const DropdownMenuPortal = BaseMenu.Portal;
const DropdownMenuSub = BaseMenu.SubmenuRoot;
const DropdownMenuRadioGroup = BaseMenu.RadioGroup;

export interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof BaseMenu.Popup> {
  sideOffset?: number;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right" | "inline-start" | "inline-end";
}

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, sideOffset = 6, align = "start", side = "bottom", ...props }, ref) => (
  <BaseMenu.Portal>
    <BaseMenu.Positioner
      sideOffset={sideOffset}
      align={align}
      side={side}
      className="z-50 outline-none"
    >
      <BaseMenu.Popup
        ref={ref}
        className={cn(
          "cmplt-overlay-popup min-w-[8rem] overflow-hidden rounded-cmplt-md border border-border-subtle bg-elevated p-1 text-fg-primary shadow-cmplt-lg outline-none",
          className
        )}
        {...props}
      />
    </BaseMenu.Positioner>
  </BaseMenu.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof BaseMenu.Item> {
  inset?: boolean;
  variant?: "default" | "destructive";
}

const DropdownMenuItem = React.forwardRef<HTMLElement, DropdownMenuItemProps>(
  ({ className, inset, variant = "default", ...props }, ref) => (
    <BaseMenu.Item
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-cmplt-sm px-2.5 py-1.5 text-xs outline-none transition-colors ease-cmplt-out data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
        variant === "default" &&
          "text-fg-secondary data-[highlighted]:bg-subtle data-[highlighted]:text-fg-primary",
        variant === "destructive" &&
          "text-status-danger data-[highlighted]:bg-status-danger/10 data-[highlighted]:text-status-danger",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof BaseMenu.CheckboxItem> {}

const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLElement,
  DropdownMenuCheckboxItemProps
>(({ className, children, ...props }, ref) => (
  <BaseMenu.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-cmplt-sm py-1.5 pl-8 pr-2.5 text-xs text-fg-secondary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-45 data-[highlighted]:bg-subtle data-[highlighted]:text-fg-primary",
      className
    )}
    {...props}
  >
    <BaseMenu.CheckboxItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
    </BaseMenu.CheckboxItemIndicator>
    {children}
  </BaseMenu.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItem> {}

const DropdownMenuRadioItem = React.forwardRef<
  HTMLElement,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <BaseMenu.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-cmplt-sm py-1.5 pl-8 pr-2.5 text-xs text-fg-secondary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-45 data-[highlighted]:bg-subtle data-[highlighted]:text-fg-primary",
      className
    )}
    {...props}
  >
    <BaseMenu.RadioItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Circle className="h-2 w-2 fill-current" />
    </BaseMenu.RadioItemIndicator>
    {children}
  </BaseMenu.RadioItem>
));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.GroupLabel> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <BaseMenu.GroupLabel
    ref={ref}
    className={cn(
      "px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-fg-muted",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Separator>
>(({ className, ...props }, ref) => (
  <BaseMenu.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border-subtle", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-[10px] font-mono tracking-widest text-fg-muted",
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

const DropdownMenuSubTrigger = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.SubmenuTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <BaseMenu.SubmenuTrigger
    ref={ref}
    className={cn(
      "flex cursor-pointer select-none items-center rounded-cmplt-sm px-2.5 py-1.5 text-xs text-fg-secondary outline-none transition-colors data-[highlighted]:bg-subtle data-[highlighted]:text-fg-primary data-[state=open]:bg-subtle",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-3.5 w-3.5 text-fg-muted" />
  </BaseMenu.SubmenuTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

const DropdownMenuSubContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Popup> & {
    sideOffset?: number;
    alignOffset?: number;
  }
>(({ className, sideOffset = 4, ...props }, ref) => (
  <BaseMenu.Portal>
    <BaseMenu.Positioner sideOffset={sideOffset} className="z-50 outline-none">
      <BaseMenu.Popup
        ref={ref}
        className={cn(
          "cmplt-overlay-popup min-w-[8rem] overflow-hidden rounded-cmplt-md border border-border-subtle bg-elevated p-1 text-fg-primary shadow-cmplt-lg outline-none",
          className
        )}
        {...props}
      />
    </BaseMenu.Positioner>
  </BaseMenu.Portal>
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
