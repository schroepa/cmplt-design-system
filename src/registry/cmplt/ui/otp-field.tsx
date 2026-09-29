"use client";

import * as React from "react";
import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";
import { cn } from "@/registry/cmplt/lib/utils";

export interface OTPFieldProps
  extends React.ComponentPropsWithoutRef<typeof BaseOTPField.Root> {
  separatorIndex?: number;
}

const OTPFieldRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseOTPField.Root>
>(({ className, ...props }, ref) => (
  <BaseOTPField.Root
    ref={ref}
    className={cn("flex items-center gap-2 select-none", className)}
    {...props}
  />
));
OTPFieldRoot.displayName = "OTPFieldRoot";

const OTPFieldInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof BaseOTPField.Input>
>(({ className, ...props }, ref) => (
  <BaseOTPField.Input
    ref={ref}
    className={cn(
      "relative flex size-10 sm:size-11 items-center justify-center rounded-cmplt-md border border-border bg-surface text-center font-mono text-base font-semibold text-fg shadow-cmplt-xs transition-all",
      "hover:border-border-strong focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 focus:scale-[1.03]",
      "data-[filled]:border-border-strong data-[filled]:bg-subtle/30",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
OTPFieldInput.displayName = "OTPFieldInput";

const OTPFieldSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={cn("text-fg-muted font-bold select-none px-1", className)}
    {...props}
  >
    {children || "–"}
  </div>
));
OTPFieldSeparator.displayName = "OTPFieldSeparator";

/**
 * High-level ready-to-use OTP Field with configurable length and optional split separator.
 */
const OTPField = React.forwardRef<HTMLDivElement, OTPFieldProps>(
  ({ className, length = 6, separatorIndex = 3, children, ...props }, ref) => {
    return (
      <OTPFieldRoot ref={ref} length={length} className={className} {...props}>
        {children || (
          <>
            {Array.from({ length }).map((_, i) => (
              <React.Fragment key={i}>
                {separatorIndex && i === separatorIndex && (
                  <OTPFieldSeparator />
                )}
                <OTPFieldInput />
              </React.Fragment>
            ))}
          </>
        )}
      </OTPFieldRoot>
    );
  }
);
OTPField.displayName = "OTPField";

export {
  OTPField,
  OTPFieldRoot,
  OTPFieldInput,
  OTPFieldSeparator,
};
