"use client";

import * as React from "react";
import { Toast as BaseToast } from "@base-ui/react/toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

// Global toast manager for imperative calls
const globalToastManager = BaseToast.createToastManager();

const toastVariants = cva(
  "cmplt-overlay-popup group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-cmplt-panel border p-4 shadow-cmplt-lg transition-all duration-200 ease-cmplt-out data-[swiping]:transition-none",
  {
    variants: {
      variant: {
        default: "border-border-default bg-elevated text-fg-primary",
        success:
          "border-status-success/25 bg-elevated text-fg-primary [&>svg]:text-status-success",
        warning:
          "border-status-warning/25 bg-elevated text-fg-primary [&>svg]:text-status-warning",
        danger:
          "border-status-danger/25 bg-elevated text-fg-primary [&>svg]:text-status-danger",
        info: "border-status-info/25 bg-elevated text-fg-primary [&>svg]:text-status-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TOAST_ICONS = {
  default: null,
  info: <Info className="h-4 w-4 shrink-0 mt-0.5 text-status-info" />,
  success: <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-status-success" />,
  warning: <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-status-warning" />,
  danger: <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-status-danger" />,
};

export interface ToastOptions {
  title: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  timeout?: number;
}

export function toast(options: ToastOptions | string) {
  const opts = typeof options === "string" ? { title: options } : options;
  return globalToastManager.add({
    title: opts.title,
    description: opts.description,
    type: opts.variant ?? "default",
    timeout: opts.timeout ?? 5000,
  });
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseToast.Provider toastManager={globalToastManager}>
      {children}
    </BaseToast.Provider>
  );
}

export function Toaster({
  position = "bottom-right",
  className,
}: {
  position?: "bottom-right" | "top-right" | "bottom-left" | "top-left";
  className?: string;
}) {
  const { toasts } = BaseToast.useToastManager();

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-left": "top-4 left-4",
  }[position];

  return (
    <BaseToast.Portal>
      <BaseToast.Viewport
        className={cn(
          "fixed z-[100] flex max-h-screen w-full flex-col-reverse gap-2.5 p-4 sm:max-w-sm pointer-events-none outline-none",
          positionClasses,
          className
        )}
      >
        {toasts.map((t) => {
          const variant = (t.type as "default" | "success" | "warning" | "danger" | "info") || "default";
          const icon = TOAST_ICONS[variant];

          return (
            <BaseToast.Root
              key={t.id}
              toast={t}
              className={cn(toastVariants({ variant }))}
            >
              {icon}
              <div className="flex-1 grid gap-1">
                {t.title && (
                  <BaseToast.Title className="text-xs font-semibold leading-tight text-fg-primary">
                    {t.title}
                  </BaseToast.Title>
                )}
                {t.description && (
                  <BaseToast.Description className="text-[11px] text-fg-secondary leading-relaxed">
                    {t.description}
                  </BaseToast.Description>
                )}
              </div>
              <BaseToast.Close
                aria-label="Dismiss toast"
                className="inline-flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-cmplt-sm text-fg-muted transition-colors hover:bg-subtle hover:text-fg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-focus"
              >
                <X className="h-3 w-3" />
              </BaseToast.Close>
            </BaseToast.Root>
          );
        })}
      </BaseToast.Viewport>
    </BaseToast.Portal>
  );
}

const Toast = BaseToast.Root;
const ToastTitle = BaseToast.Title;
const ToastDescription = BaseToast.Description;
const ToastAction = BaseToast.Action;
const ToastClose = BaseToast.Close;
const ToastViewport = BaseToast.Viewport;

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastViewport,
  globalToastManager,
};
