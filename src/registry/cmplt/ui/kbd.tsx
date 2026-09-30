import * as React from "react";
import { cn } from "@/registry/cmplt/lib/utils";

export type KbdProps = React.HTMLAttributes<HTMLElement>;

function Kbd({ className, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-xs border border-border-default bg-subtle px-1.5 font-mono text-[11px] font-medium text-fg-muted shadow-[0_1px_0_0_var(--border-default)]",
        className
      )}
      {...props}
    />
  );
}

export { Kbd };
