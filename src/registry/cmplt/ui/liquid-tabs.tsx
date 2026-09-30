"use client";

import * as React from "react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId } from "@/registry/cmplt/ui/liquid-filter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface LiquidTabsContextValue {
  activeValue: string | number | undefined;
  setActiveValue: (val: string | number | undefined) => void;
  registerTab: (val: string | number, el: HTMLElement | null) => void;
}

const LiquidTabsContext = React.createContext<LiquidTabsContextValue | null>(null);

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface LiquidTabsProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.Root> {
  children?: React.ReactNode;
}

export const LiquidTabs = React.forwardRef<HTMLDivElement, LiquidTabsProps>(
  ({ value: controlledValue, defaultValue, onValueChange, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | number | undefined
    >(defaultValue);

    const isControlled = controlledValue !== undefined;
    const activeValue = isControlled ? controlledValue : uncontrolledValue;

    const tabsMapRef = React.useRef<Map<string | number, HTMLElement>>(new Map());

    const registerTab = React.useCallback(
      (val: string | number, el: HTMLElement | null) => {
        if (el) {
          tabsMapRef.current.set(val, el);
        } else {
          tabsMapRef.current.delete(val);
        }
      },
      []
    );

    const setActiveValue = React.useCallback(
      (val: string | number | undefined) => {
        if (!isControlled) {
          setUncontrolledValue(val);
        }
        if (val !== undefined) {
          // Base UI onValueChange callback signature
          // @ts-expect-error Base UI type variance
          onValueChange?.(val);
        }
      },
      [isControlled, onValueChange]
    );

    return (
      <LiquidTabsContext.Provider
        value={{
          activeValue,
          setActiveValue,
          registerTab,
        }}
      >
        <BaseTabs.Root
          ref={ref}
          value={activeValue}
          onValueChange={setActiveValue}
          {...props}
        >
          {children}
        </BaseTabs.Root>
      </LiquidTabsContext.Provider>
    );
  }
);
LiquidTabs.displayName = "LiquidTabs";

/* -------------------------------------------------------------------------- */
/* List                                                                       */
/* -------------------------------------------------------------------------- */

export interface LiquidTabsListProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.List> {
  /**
   * Viscosity preset for the organic liquid bridge:
   * - "subtle": Low-amplitude fluid bridge, brisk snap
   * - "medium": Perfectly balanced surface tension (default)
   * - "fluid": Elongated mercury droplet separation
   */
  viscosity?: "subtle" | "medium" | "fluid";
}

export const LiquidTabsList = React.forwardRef<HTMLDivElement, LiquidTabsListProps>(
  ({ className, viscosity = "medium", children, ...props }, forwardedRef) => {
    const context = React.useContext(LiquidTabsContext);
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const mainPillRef = React.useRef<HTMLSpanElement | null>(null);
    const trailPillRef = React.useRef<HTMLSpanElement | null>(null);
    const prevRectRef = React.useRef<{ left: number; width: number; height: number } | null>(null);

    const generatedId = React.useId();
    const filterId = `cmplt-liquid-tabs-${formatFilterId(generatedId)}`;

    // Merged ref
    const setMergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [forwardedRef]
    );

    // Compute and animate fluid pill transition
    React.useEffect(() => {
      if (!containerRef.current || !context?.activeValue) return;

      const activeEl = containerRef.current.querySelector(
        `[data-tab-value="${context.activeValue}"]`
      ) as HTMLElement | null;

      if (!activeEl) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const tabRect = activeEl.getBoundingClientRect();

      const targetX = tabRect.left - containerRect.left;
      const targetW = tabRect.width;
      const targetH = tabRect.height;
      const targetY = tabRect.top - containerRect.top;

      const prev = prevRectRef.current;

      if (!prev) {
        // Initial placement without animation
        if (mainPillRef.current) {
          gsap.set(mainPillRef.current, {
            x: targetX,
            y: targetY,
            width: targetW,
            height: targetH,
            opacity: 1,
            scale: 1,
          });
        }
        prevRectRef.current = { left: targetX, width: targetW, height: targetH };
        return;
      }

      // Moving from prev to target with organic liquid stretch
      const movingRight = targetX > prev.left;
      const distance = Math.abs(targetX - prev.left);

      if (mainPillRef.current && trailPillRef.current && distance > 2) {
        // Reset and prepare trailing droplet at previous location
        gsap.killTweensOf([mainPillRef.current, trailPillRef.current]);

        gsap.set(trailPillRef.current, {
          x: prev.left,
          y: targetY,
          width: prev.width,
          height: targetH,
          opacity: 1,
          scale: 1,
          transformOrigin: movingRight ? "right center" : "left center",
        });

        // Main droplet springs quickly toward target, stretching slightly along movement direction
        gsap.fromTo(
          mainPillRef.current,
          {
            x: prev.left,
            y: targetY,
            width: prev.width,
            height: targetH,
            scaleX: 1.15,
            scaleY: 0.88,
          },
          {
            x: targetX,
            y: targetY,
            width: targetW,
            height: targetH,
            scaleX: 1,
            scaleY: 1,
            duration: 0.4,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          }
        );

        // Trailing droplet pulls towards destination, creating a stretched liquid neck before detaching
        gsap.to(trailPillRef.current, {
          x: movingRight ? prev.left + distance * 0.48 : prev.left - distance * 0.48,
          scaleX: 0.62,
          scaleY: 0.72,
          opacity: 0,
          duration: 0.32,
          ease: "power2.out",
          onComplete: () => {
            if (trailPillRef.current) {
              gsap.set(trailPillRef.current, { opacity: 0 });
            }
          },
        });
      }

      prevRectRef.current = { left: targetX, width: targetW, height: targetH };
    }, [context?.activeValue]);

    return (
      <div className="relative inline-flex items-center">
        {/* Self-contained SVG Gooey Filter */}
        <LiquidFilter id={filterId} viscosity={viscosity} />

        <BaseTabs.List
          ref={setMergedRef}
          className={cn(
            "relative inline-flex h-10 items-center justify-center rounded-cmplt-full bg-subtle p-1 border border-border-subtle select-none",
            className
          )}
          {...props}
        >
          {/* Gooey Layer: strictly underneath tab trigger text & icons */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-cmplt-full overflow-hidden"
            style={{
              filter: `url(#${filterId})`,
            }}
          >
            {/* Primary Fluid Pill */}
            <span
              ref={mainPillRef}
              className="absolute left-0 top-0 rounded-cmplt-full bg-surface shadow-cmplt-xs opacity-0"
            />
            {/* Auxiliary Liquid Droplet for Bridge Detachment */}
            <span
              ref={trailPillRef}
              className="absolute left-0 top-0 rounded-cmplt-full bg-surface opacity-0"
            />
          </div>

          {/* Foreground Tab Triggers */}
          <div className="relative z-10 flex items-center">{children}</div>
        </BaseTabs.List>
      </div>
    );
  }
);
LiquidTabsList.displayName = "LiquidTabsList";

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

export interface LiquidTabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.Tab> {
  value: string | number;
}

export const LiquidTabsTrigger = React.forwardRef<
  HTMLElement,
  LiquidTabsTriggerProps
>(({ className, value, children, ...props }, forwardedRef) => {
  const context = React.useContext(LiquidTabsContext);
  const tabRef = React.useRef<HTMLElement | null>(null);

  const setMergedRef = React.useCallback(
    (node: HTMLElement | null) => {
      tabRef.current = node;
      if (context && value !== undefined) {
        context.registerTab(value, node);
      }
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    },
    [context, forwardedRef, value]
  );

  return (
    <BaseTabs.Tab
      ref={setMergedRef}
      value={value}
      data-tab-value={value}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-cmplt-full px-4 py-1.5 text-xs font-medium text-fg-muted transition-colors duration-200 ease-cmplt-out cursor-pointer select-none active:scale-[0.98] hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus data-[active]:text-fg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
        className
      )}
      {...props}
    >
      {children}
    </BaseTabs.Tab>
  );
});
LiquidTabsTrigger.displayName = "LiquidTabsTrigger";

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export const LiquidTabsContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
  <BaseTabs.Panel
    ref={ref}
    className={cn(
      "mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus rounded-cmplt-md transition-opacity duration-240 ease-cmplt-out",
      className
    )}
    {...props}
  />
));
LiquidTabsContent.displayName = "LiquidTabsContent";
