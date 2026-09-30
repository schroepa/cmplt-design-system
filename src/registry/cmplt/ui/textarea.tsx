"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

const textareaVariants = cva(
  "flex min-h-[80px] w-full border border-border-default bg-surface px-3.5 py-2.5 text-[13px] text-fg-primary shadow-none transition-all duration-200 ease-out hover:border-border-strong placeholder:text-fg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:border-border-brand disabled:cursor-not-allowed disabled:opacity-50 resize-y",
  {
    variants: {
      variant: {
        default: "rounded-md",
        subtle: "rounded-md bg-subtle/50 hover:bg-surface",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  /**
   * If true, the textarea will automatically adjust its height to fit the content.
   */
  autoResize?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, autoResize, onChange, ...props }, ref) => {
    const internalRef = React.useRef<HTMLTextAreaElement | null>(null);

    const adjustHeight = React.useCallback(() => {
      const textarea = internalRef.current;
      if (autoResize && textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [autoResize]);

    React.useEffect(() => {
      if (autoResize) {
        adjustHeight();
      }
    }, [autoResize, adjustHeight, props.value]);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        adjustHeight();
      }
      onChange?.(e);
    };

    return (
      <textarea
        ref={(element) => {
          internalRef.current = element;
          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        }}
        onChange={handleInput}
        className={cn(
          textareaVariants({ variant }),
          autoResize && "resize-none overflow-hidden",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
