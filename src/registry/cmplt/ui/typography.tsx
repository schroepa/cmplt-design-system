import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";

const headingVariants = cva("font-sans tracking-tight", {
  variants: {
    size: {
      "display-xl": "cmplt-display-xl",
      "display-lg": "cmplt-display-lg",
      h1: "cmplt-h1",
      h2: "cmplt-h2",
      h3: "cmplt-h3",
      h4: "cmplt-h4",
    },
    tone: {
      primary: "text-fg-primary",
      secondary: "text-fg-secondary",
      muted: "text-fg-muted",
      accent: "text-fg-brand",
    },
    measure: {
      auto: "",
      display: "max-w-measure-display",
      heading: "max-w-measure-heading",
      compact: "max-w-measure-compact",
      lead: "max-w-measure-lead",
      body: "max-w-measure-body",
      none: "max-w-none",
    },
  },
  defaultVariants: {
    size: "h2",
    tone: "primary",
    measure: "auto",
  },
});

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingElement;
}

const DEFAULT_HEADING_TAG: Record<
  NonNullable<HeadingProps["size"]>,
  HeadingElement
> = {
  "display-xl": "h1",
  "display-lg": "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

export function Heading({
  as,
  size = "h2",
  tone = "primary",
  measure = "auto",
  className,
  ...props
}: HeadingProps) {
  const Component = as ?? DEFAULT_HEADING_TAG[size ?? "h2"];
  return (
    <Component
      data-slot="heading"
      data-size={size}
      className={cn(headingVariants({ size, tone, measure }), className)}
      {...props}
    />
  );
}

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      lead: "cmplt-lead",
      body: "cmplt-body",
      "body-sm": "cmplt-body-sm",
      eyebrow: "cmplt-eyebrow",
      "ui-lg": "text-ui-lg leading-snug",
      "ui-md": "text-ui-md leading-normal",
      "ui-sm": "text-ui-sm leading-normal",
      "ui-xs": "text-ui-xs leading-normal",
    },
    tone: {
      default: "",
      primary: "text-fg-primary",
      secondary: "text-fg-secondary",
      muted: "text-fg-muted",
      accent: "text-fg-brand",
    },
    measure: {
      auto: "",
      body: "max-w-measure-body",
      lead: "max-w-measure-lead",
      compact: "max-w-measure-compact",
      heading: "max-w-measure-heading",
      none: "max-w-none",
    },
    tabular: {
      true: "cmplt-tabular",
      false: "",
    },
  },
  defaultVariants: {
    variant: "body",
    tone: "default",
    measure: "auto",
    tabular: false,
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label" | "small";
}

export function Text({
  as: Component = "p",
  variant = "body",
  tone = "default",
  measure = "auto",
  tabular = false,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      data-slot="text"
      data-variant={variant}
      className={cn(
        textVariants({ variant, tone, measure, tabular }),
        className
      )}
      {...props}
    />
  );
}

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "inline" | "block" | "metric";
}

export function Code({
  variant = "inline",
  className,
  children,
  ...props
}: CodeProps) {
  if (variant === "block") {
    return (
      <pre
        data-slot="code-block"
        className={cn(
          "overflow-x-auto rounded-md border border-border-subtle bg-subtle p-4 font-mono text-ui-xs leading-[1.6] text-fg-primary shadow-xs",
          className
        )}
        {...props}
      >
        <code>{children}</code>
      </pre>
    );
  }

  if (variant === "metric") {
    return (
      <span
        data-slot="code-metric"
        className={cn("font-mono cmplt-metric text-fg-primary", className)}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <code
      data-slot="code-inline"
      className={cn("cmplt-code", className)}
      {...props}
    >
      {children}
    </code>
  );
}

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  measure?: "body" | "lead" | "compact" | "none";
}

export function Prose({
  measure = "body",
  className,
  ...props
}: ProseProps) {
  return (
    <div
      data-slot="prose"
      className={cn(
        "cmplt-prose",
        measure === "lead" && "max-w-measure-lead",
        measure === "compact" && "max-w-measure-compact",
        measure === "none" && "max-w-none",
        className
      )}
      {...props}
    />
  );
}

export { headingVariants, textVariants };
