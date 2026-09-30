"use client";

import * as React from "react";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId, type LiquidViscosity } from "@/registry/cmplt/ui/liquid-filter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface LiquidToggleContextValue {
  value: string | undefined;
  setValue: (val: string | undefined) => void;
  registerItem: (val: string, el: HTMLElement | null) => void;
}

const LiquidToggleContext = React.createContext<LiquidToggleContextValue | null>(null);

export interface LiquidToggleGroupProps
  extends Omit<React.ComponentPropsWithoutRef<typeof BaseToggleGroup<string>>, "value" | "defaultValue" | "onValueChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string | undefined) => void;
  viscosity?: LiquidViscosity;
  size?: "sm" | "md" | "lg";
}

/**
 * cmplt LiquidToggleGroup — Segmented Toggle Group with Liquid Mercury Physics
 * Extends Base UI ToggleGroup with a self-contained SVG gooey filter and
 * organic GSAP stretch & bridge detachment dynamics.
 */
export const LiquidToggleGroup = React.forwardRef<HTMLDivElement, LiquidToggleGroupProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      onValueChange,
      viscosity = "medium",
      size = "md",
      children,
      ...props
    },
    forwardedRef
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<string | undefined>(
      defaultValue
    );

    const isControlled = controlledValue !== undefined;
    const activeValue = isControlled ? controlledValue : uncontrolledValue;

    const itemsMapRef = React.useRef<Map<string, HTMLElement>>(new Map());
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const mainPillRef = React.useRef<HTMLSpanElement | null>(null);
    const trailPillRef = React.useRef<HTMLSpanElement | null>(null);
    const prevRectRef = React.useRef<{ left: number; width: number; height: number } | null>(null);

    const generatedId = React.useId();
    const filterId = `cmplt-liquid-toggle-${formatFilterId(generatedId)}`;

    const registerItem = React.useCallback((val: string, el: HTMLElement | null) => {
      if (el) {
        itemsMapRef.current.set(val, el);
      } else {
        itemsMapRef.current.delete(val);
      }
    }, []);

    const setValue = React.useCallback(
      (val: string | undefined) => {
        if (!isControlled) {
          setUncontrolledValue(val);
        }
        onValueChange?.(val);
      },
      [isControlled, onValueChange]
    );

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

    // Dynamic GSAP Liquid Pill stretch & detach animation
    React.useEffect(() => {
      if (!containerRef.current || !activeValue) {
        if (mainPillRef.current) gsap.set(mainPillRef.current, { opacity: 0 });
        if (trailPillRef.current) gsap.set(trailPillRef.current, { opacity: 0 });
        prevRectRef.current = null;
        return;
      }

      const activeEl = containerRef.current.querySelector(
        `[data-toggle-value="${activeValue}"]`
      ) as HTMLElement | null;

      if (!activeEl) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();

      const targetX = itemRect.left - containerRect.left;
      const targetW = itemRect.width;
      const targetH = itemRect.height;
      const targetY = itemRect.top - containerRect.top;

      const prev = prevRectRef.current;

      if (!prev) {
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

      const movingRight = targetX > prev.left;
      const distance = Math.abs(targetX - prev.left);

      if (mainPillRef.current && trailPillRef.current && distance > 2) {
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
            duration: 0.38,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          }
        );

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
    }, [activeValue]);

    const sizeClasses = {
      sm: "h-8 p-0.5",
      md: "h-9 p-1",
      lg: "h-11 p-1",
    }[size];

    return (
      <LiquidToggleContext.Provider value={{ value: activeValue, setValue, registerItem }}>
        <div className="relative inline-flex items-center">
          <LiquidFilter id={filterId} viscosity={viscosity} />

          <BaseToggleGroup
            ref={setMergedRef}
            // @ts-expect-error Base UI variance
            value={activeValue}
            // @ts-expect-error Base UI variance
            onValueChange={setValue}
            className={cn(
              "relative inline-flex items-center justify-center rounded-full bg-subtle border border-border-subtle select-none",
              sizeClasses,
              className
            )}
            {...props}
          >
            {/* Gooey Layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
              style={{ filter: `url(#${filterId})` }}
            >
              <span
                ref={mainPillRef}
                className="absolute left-0 top-0 rounded-full bg-surface shadow-xs opacity-0"
              />
              <span
                ref={trailPillRef}
                className="absolute left-0 top-0 rounded-full bg-surface opacity-0"
              />
            </div>

            {/* Foreground Items */}
            <div className="relative z-10 flex items-center gap-0.5">{children}</div>
          </BaseToggleGroup>
        </div>
      </LiquidToggleContext.Provider>
    );
  }
);
LiquidToggleGroup.displayName = "LiquidToggleGroup";

import { Toggle as BaseToggle } from "@base-ui/react/toggle";

export interface LiquidToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof BaseToggle> {
  value: string;
}

export const LiquidToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  LiquidToggleGroupItemProps
>(({ className, value, children, ...props }, forwardedRef) => {
  const context = React.useContext(LiquidToggleContext);
  const itemRef = React.useRef<HTMLButtonElement | null>(null);

  const isPressed = context?.value === value;

  const setMergedRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      itemRef.current = node;
      if (context && value) {
        context.registerItem(value, node);
      }
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
    },
    [context, forwardedRef, value]
  );

  return (
    <BaseToggle
      ref={setMergedRef}
      value={value}
      data-toggle-value={value}
      pressed={isPressed}
      onPressedChange={(pressed) => {
        if (pressed) {
          context?.setValue(value);
        } else {
          context?.setValue(undefined);
        }
      }}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium text-fg-muted transition-colors duration-200 ease-out cursor-pointer select-none active:scale-[0.97] hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus data-[pressed]:text-fg-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-45 [&_svg]:h-3.5 [&_svg]:w-3.5",
        className
      )}
      {...props}
    >
      {children}
    </BaseToggle>
  );
});
LiquidToggleGroupItem.displayName = "LiquidToggleGroupItem";
