"use client";

import * as React from "react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * cmplt Tabs — Style Guide v1.1 (Sections 2 & 4):
 * Supports both core segmentation patterns:
 * 1. "segmented" (Default): Pill-shaped container (9999px) with pill-shaped active background
 * 2. "underline": Clean horizontal tab bar with simple bottom underline on active tab
 */
const TabsVariantContext = React.createContext<"segmented" | "underline">(
  "segmented"
);

const Tabs = BaseTabs.Root;

const tabsListVariants = cva("relative inline-flex items-center text-fg-muted", {
  variants: {
    variant: {
      segmented:
        "h-9 justify-center rounded-cmplt-full bg-subtle p-1 border border-border-subtle",
      underline:
        "h-10 w-full justify-start gap-6 border-b border-border-subtle bg-transparent p-0 rounded-none",
    },
  },
  defaultVariants: {
    variant: "segmented",
  },
});

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant = "segmented", ...props }, ref) => (
    <TabsVariantContext.Provider value={variant ?? "segmented"}>
      <BaseTabs.List
        ref={ref}
        className={cn(tabsListVariants({ variant, className }))}
        {...props}
      />
    </TabsVariantContext.Provider>
  )
);
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(TabsVariantContext);
  return (
    <BaseTabs.Tab
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-xs font-medium text-fg-muted transition-all cursor-pointer select-none hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
        variant === "segmented"
          ? "rounded-cmplt-full px-3.5 py-1 data-[active]:bg-surface data-[active]:text-fg-primary data-[active]:shadow-cmplt-xs"
          : "relative h-10 rounded-none border-b-2 border-transparent px-1 pb-2.5 pt-2 data-[active]:border-fg-primary data-[active]:text-fg-primary",
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
  <BaseTabs.Panel
    ref={ref}
    className={cn(
      "mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus rounded-cmplt-md",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
