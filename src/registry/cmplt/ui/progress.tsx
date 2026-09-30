"use client";

import * as React from "react";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import { cn } from "@/registry/cmplt/lib/utils";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof BaseProgress.Root> {
  label?: string;
  showValue?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  // Pin locale so SSR and client format percent the same (avoids "68%" vs "68 %").
  ({ className, label, showValue = false, value, locale = "en-US", ...props }, ref) => (
    <BaseProgress.Root
      ref={ref}
      value={value}
      locale={locale}
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    >
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs">
          {label && (
            <BaseProgress.Label className="font-medium text-fg-secondary">
              {label}
            </BaseProgress.Label>
          )}
          {showValue && (
            <BaseProgress.Value className="font-mono text-fg-muted" />
          )}
        </div>
      )}
      <BaseProgress.Track className="h-2 w-full overflow-hidden rounded-full bg-subtle border border-border-subtle">
        <BaseProgress.Indicator className="h-full bg-brand transition-all duration-500 ease-out rounded-full" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  )
);
Progress.displayName = "Progress";

export { Progress };
