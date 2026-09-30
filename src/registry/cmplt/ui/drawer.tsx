"use client";

import * as React from "react";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

const Drawer = BaseDrawer.Root;
const DrawerTrigger = BaseDrawer.Trigger;
const DrawerClose = BaseDrawer.Close;
const DrawerPortal = BaseDrawer.Portal;

const drawerVariants = cva(
  "cmplt-overlay-popup fixed z-50 flex flex-col bg-elevated text-fg-primary shadow-xl transition-transform ease-out focus:outline-none",
  {
    variants: {
      side: {
        right:
          "inset-y-0 right-0 h-full w-full max-w-md border-l border-border-subtle p-6",
        left:
          "inset-y-0 left-0 h-full w-full max-w-md border-r border-border-subtle p-6",
        bottom:
          "inset-x-0 bottom-0 max-h-[85vh] rounded-t-xl border-t border-border-subtle p-6",
        top:
          "inset-x-0 top-0 max-h-[85vh] rounded-b-xl border-b border-border-subtle p-6",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof BaseDrawer.Popup>,
    VariantProps<typeof drawerVariants> {
  showClose?: boolean;
}

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className, side = "right", showClose = true, children, ...props }, ref) => (
    <BaseDrawer.Portal>
      <BaseDrawer.Backdrop className="cmplt-overlay-backdrop fixed inset-0 z-50 bg-black/45 backdrop-blur-[3px]" />
      <BaseDrawer.Popup
        ref={ref}
        className={cn(drawerVariants({ side }), className)}
        {...props}
      >
        {children}
        {showClose && (
          <BaseDrawer.Close
            aria-label="Close drawer"
            className="absolute right-5 top-5 inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-fg-muted transition-all duration-200 ease-out hover:bg-subtle hover:text-fg-primary hover:rotate-90 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus"
          >
            <X className="h-4 w-4 stroke-[1.75]" />
          </BaseDrawer.Close>
        )}
      </BaseDrawer.Popup>
    </BaseDrawer.Portal>
  )
);
DrawerContent.displayName = "DrawerContent";

const DrawerHandle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    aria-hidden="true"
    className={cn(
      "mx-auto mb-4 h-1.5 w-12 shrink-0 rounded-full bg-border-default",
      className
    )}
    {...props}
  />
));
DrawerHandle.displayName = "DrawerHandle";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-left mb-4", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-auto flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end pt-4 border-t border-border-subtle",
      className
    )}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Title>
>(({ className, ...props }, ref) => (
  <BaseDrawer.Title
    ref={ref}
    className={cn(
      "text-base font-semibold leading-none tracking-tight text-fg-primary",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Description>
>(({ className, ...props }, ref) => (
  <BaseDrawer.Description
    ref={ref}
    className={cn("text-[12.5px] text-fg-muted leading-relaxed", className)}
    {...props}
  />
));
DrawerDescription.displayName = "DrawerDescription";

// Sheet Aliases for convenience
const Sheet = Drawer;
const SheetTrigger = DrawerTrigger;
const SheetClose = DrawerClose;
const SheetPortal = DrawerPortal;
const SheetContent = DrawerContent;
const SheetHeader = DrawerHeader;
const SheetFooter = DrawerFooter;
const SheetTitle = DrawerTitle;
const SheetDescription = DrawerDescription;

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerPortal,
  DrawerContent,
  DrawerHandle,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
