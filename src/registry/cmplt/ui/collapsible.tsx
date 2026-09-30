"use client";

import * as React from "react";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { cn } from "@/registry/cmplt/lib/utils";

const Collapsible = BaseCollapsible.Root;
const CollapsibleTrigger = BaseCollapsible.Trigger;

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Panel>
>(({ className, ...props }, ref) => (
  <BaseCollapsible.Panel
    ref={ref}
    className={cn(
      "overflow-hidden transition-all duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
      className
    )}
    {...props}
  />
));
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
