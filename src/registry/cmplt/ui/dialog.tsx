"use client";

import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * cmplt Dialog — Style Guide v1.1 (Sections 2 & 5):
 * - Container Radius: pronounced 24px soft radius (rounded-cmplt-xl)
 * - Level 2 Elevation: diffuse ambient drop shadow (shadow-cmplt-lg) + 1px hairline border
 */
const Dialog = BaseDialog.Root;
const DialogTrigger = BaseDialog.Trigger;
const DialogClose = BaseDialog.Close;

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Popup> & {
    showClose?: boolean;
  }
>(({ className, children, showClose = true, ...props }, ref) => (
  <BaseDialog.Portal>
    <BaseDialog.Backdrop className="cmplt-overlay-backdrop fixed inset-0 z-50 bg-black/45 backdrop-blur-[3px]" />
    <BaseDialog.Popup
      ref={ref}
      className={cn(
        "cmplt-overlay-popup fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-cmplt-xl border border-border-subtle bg-elevated p-6 sm:p-7 text-fg-primary shadow-cmplt-lg focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
      {showClose && (
        <BaseDialog.Close
          aria-label="Close dialog"
          className="absolute right-5 top-5 inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-cmplt-full text-fg-muted transition-colors hover:bg-subtle hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus"
        >
          <X className="h-4 w-4 stroke-[1.75]" />
        </BaseDialog.Close>
      )}
    </BaseDialog.Popup>
  </BaseDialog.Portal>
));
DialogContent.displayName = "DialogContent";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end pt-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
  <BaseDialog.Title
    ref={ref}
    className={cn(
      "text-base font-semibold leading-none tracking-tight text-fg-primary",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
  <BaseDialog.Description
    ref={ref}
    className={cn("text-[12.5px] text-fg-muted leading-relaxed", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
