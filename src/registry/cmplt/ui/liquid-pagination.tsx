"use client";

import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";
import { LiquidFilter, formatFilterId, type LiquidViscosity } from "@/registry/cmplt/ui/liquid-filter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface LiquidPaginationContextValue {
  currentPage: number;
  onPageChange?: (page: number) => void;
  registerPageItem: (page: number, el: HTMLElement | null) => void;
}

const LiquidPaginationContext = React.createContext<LiquidPaginationContextValue | null>(null);

export interface LiquidPaginationProps extends React.ComponentProps<"nav"> {
  currentPage: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  viscosity?: LiquidViscosity;
}

/**
 * cmplt LiquidPagination — Flowing Fluid Page Navigation
 * An accessible pagination bar where the active page pill indicator flows
 * seamlessly across page numbers with organic liquid stretch & snap physics.
 */
export const LiquidPagination = React.forwardRef<HTMLElement, LiquidPaginationProps>(
  (
    {
      className,
      currentPage,
      onPageChange,
      viscosity = "medium",
      children,
      ...props
    },
    ref
  ) => {
    const pagesMapRef = React.useRef<Map<number, HTMLElement>>(new Map());
    const containerRef = React.useRef<HTMLUListElement | null>(null);
    const mainPillRef = React.useRef<HTMLSpanElement | null>(null);
    const trailPillRef = React.useRef<HTMLSpanElement | null>(null);
    const prevRectRef = React.useRef<{ left: number; width: number; height: number } | null>(null);

    const generatedId = React.useId();
    const filterId = `cmplt-liquid-pagination-${formatFilterId(generatedId)}`;

    const registerPageItem = React.useCallback((page: number, el: HTMLElement | null) => {
      if (el) {
        pagesMapRef.current.set(page, el);
      } else {
        pagesMapRef.current.delete(page);
      }
    }, []);

    // GSAP Liquid Page Pill Animation
    React.useEffect(() => {
      if (!containerRef.current || currentPage === undefined) return;

      const activeEl = containerRef.current.querySelector(
        `[data-page-index="${currentPage}"]`
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
            scaleX: 1.16,
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
    }, [currentPage]);

    return (
      <LiquidPaginationContext.Provider
        value={{
          currentPage,
          onPageChange,
          registerPageItem,
        }}
      >
        <nav
          ref={ref}
          role="navigation"
          aria-label="pagination"
          className={cn("relative mx-auto inline-flex items-center justify-center", className)}
          {...props}
        >
          <LiquidFilter id={filterId} viscosity={viscosity} />

          <ul
            ref={containerRef}
            className="relative flex flex-row items-center gap-1 rounded-cmplt-full bg-subtle p-1 border border-border-subtle"
          >
            {/* Gooey Layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-cmplt-full overflow-hidden"
              style={{ filter: `url(#${filterId})` }}
            >
              <span
                ref={mainPillRef}
                className="absolute left-0 top-0 rounded-cmplt-full bg-surface shadow-cmplt-xs opacity-0"
              />
              <span
                ref={trailPillRef}
                className="absolute left-0 top-0 rounded-cmplt-full bg-surface opacity-0"
              />
            </div>

            {/* Foreground pagination items */}
            <div className="relative z-10 flex items-center gap-1">{children}</div>
          </ul>
        </nav>
      </LiquidPaginationContext.Provider>
    );
  }
);
LiquidPagination.displayName = "LiquidPagination";

export const LiquidPaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("inline-flex items-center", className)} {...props} />
));
LiquidPaginationItem.displayName = "LiquidPaginationItem";

export interface LiquidPaginationLinkProps
  extends React.ComponentProps<"button"> {
  page: number;
}

export const LiquidPaginationLink = React.forwardRef<
  HTMLButtonElement,
  LiquidPaginationLinkProps
>(({ className, page, children, onClick, ...props }, forwardedRef) => {
  const context = React.useContext(LiquidPaginationContext);
  const linkRef = React.useRef<HTMLButtonElement | null>(null);

  const isActive = context?.currentPage === page;

  const setMergedRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      linkRef.current = node;
      if (context) {
        context.registerPageItem(page, node);
      }
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
    },
    [context, forwardedRef, page]
  );

  return (
    <button
      ref={setMergedRef}
      type="button"
      data-page-index={page}
      aria-current={isActive ? "page" : undefined}
      onClick={(e) => {
        onClick?.(e);
        context?.onPageChange?.(page);
      }}
      className={cn(
        "relative inline-flex h-8 min-w-8 items-center justify-center rounded-cmplt-full px-2.5 text-xs font-medium transition-colors duration-200 ease-cmplt-out cursor-pointer select-none active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus",
        isActive ? "text-fg-primary" : "text-fg-muted hover:text-fg-primary",
        className
      )}
      {...props}
    >
      {children ?? page}
    </button>
  );
});
LiquidPaginationLink.displayName = "LiquidPaginationLink";

export const LiquidPaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to previous page"
    className={cn(
      "inline-flex h-8 items-center gap-1 rounded-cmplt-full px-2.5 text-xs font-medium text-fg-muted hover:text-fg-primary transition-colors cursor-pointer select-none active:scale-95",
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-3.5 w-3.5" />
    <span className="hidden sm:inline">Previous</span>
  </button>
));
LiquidPaginationPrevious.displayName = "LiquidPaginationPrevious";

export const LiquidPaginationNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to next page"
    className={cn(
      "inline-flex h-8 items-center gap-1 rounded-cmplt-full px-2.5 text-xs font-medium text-fg-muted hover:text-fg-primary transition-colors cursor-pointer select-none active:scale-95",
      className
    )}
    {...props}
  >
    <span className="hidden sm:inline">Next</span>
    <ChevronRight className="h-3.5 w-3.5" />
  </button>
));
LiquidPaginationNext.displayName = "LiquidPaginationNext";

export const LiquidPaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-8 w-8 items-center justify-center text-fg-muted", className)}
    {...props}
  >
    <MoreHorizontal className="h-3.5 w-3.5" />
    <span className="sr-only">More pages</span>
  </span>
);
LiquidPaginationEllipsis.displayName = "LiquidPaginationEllipsis";
