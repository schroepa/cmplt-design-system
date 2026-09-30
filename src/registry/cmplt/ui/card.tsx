"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/cmplt/lib/utils";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Download,
  FileCode2,
  Heart,
  Key,
  Layers,
  MapPin,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";

/**
 * cmplt Card & Domain Presets — Style Guide v1.3:
 * - Soft, organic container border-radius (20px-24px via rounded-lg / xl)
 * - Optical Concentricity: Inner media & wells use R_inner = R_outer - padding
 *   (e.g., Card 20px - 8px p-2 = 12px rounded-lg-inner-sm)
 * - Level 1 Elevation: crisp 1px hairline border + ultra-subtle micro-shadow
 * - Includes composable primitives (CardMedia, CardEyebrow, CardMeta, CardPrice)
 *   and 7 domain presets (BlogCard, ProductCard, MetricCard, ProfileCard,
 *   FeatureCard, TestimonialCard, EventCard).
 */
const cardVariants = cva(
  "cmplt-card rounded-lg text-fg-primary transition-all duration-250 ease-out",
  {
    variants: {
      variant: {
        default: "bg-surface border border-border-subtle shadow-xs",
        elevated:
          "bg-elevated border border-border-default shadow-sm rounded-xl",
        subtle: "bg-subtle/55 border border-border-subtle shadow-none",
        interactive:
          "bg-surface border border-border-subtle shadow-xs hover:border-border-strong hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:duration-100 cursor-pointer",
        outline:
          "bg-transparent border border-border-default shadow-none",
        featured:
          "bg-elevated border border-border-brand/65 shadow-sm rounded-xl",
      },
      layout: {
        vertical: "flex flex-col",
        horizontal: "flex flex-col sm:flex-row sm:items-stretch",
        adaptive: "cmplt-card-adaptive",
      },
    },
    defaultVariants: {
      variant: "default",
      layout: "vertical",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, layout, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card"
      className={cn(cardVariants({ variant, layout, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

/* ==========================================================================
   Composable Card Sub-Primitives
   ========================================================================== */

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  aspect?: "video" | "square" | "portrait" | "wide" | "auto";
  inset?: boolean;
  src?: string;
  alt?: string;
  imageClassName?: string;
  overlay?: boolean;
  topLeftSlot?: React.ReactNode;
  topRightSlot?: React.ReactNode;
  bottomSlot?: React.ReactNode;
}

const aspectClasses: Record<NonNullable<CardMediaProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/7]",
  auto: "",
};

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  (
    {
      className,
      aspect = "video",
      inset = true,
      src,
      alt = "",
      imageClassName,
      overlay = false,
      topLeftSlot,
      topRightSlot,
      bottomSlot,
      children,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = React.useState(false);

    return (
      <div
        ref={ref}
        data-slot="card-media"
        className={cn(
          "relative overflow-hidden bg-subtle/80 bg-cmplt-dots",
          inset
            ? "m-2 rounded-lg-inner-sm border border-border-subtle"
            : "rounded-t-lg border-b border-border-subtle",
          aspectClasses[aspect],
          className
        )}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
              imageClassName
            )}
          />
        ) : null}
        {(!src || hasError) && children}
        {overlay && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        )}
        {(topLeftSlot || topRightSlot) && (
          <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-start justify-between gap-2">
            <div className="pointer-events-auto flex flex-wrap items-center gap-1.5">
              {topLeftSlot}
            </div>
            <div className="pointer-events-auto flex items-center gap-1.5">
              {topRightSlot}
            </div>
          </div>
        )}
        {bottomSlot && (
          <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex items-end justify-between">
            <div className="pointer-events-auto w-full">{bottomSlot}</div>
          </div>
        )}
      </div>
    );
  }
);
CardMedia.displayName = "CardMedia";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn("flex flex-col gap-1.5 p-5 sm:p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardEyebrow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-eyebrow"
    className={cn(
      "flex flex-wrap items-center justify-between gap-2 text-[11px] font-medium tracking-wide text-fg-muted",
      className
    )}
    {...props}
  />
));
CardEyebrow.displayName = "CardEyebrow";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn(
      "text-[15px] font-semibold leading-snug tracking-tight text-fg-primary",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn("text-[12.5px] text-fg-muted leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn("px-5 pb-5 sm:px-6 sm:pb-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardMeta = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-meta"
    className={cn(
      "rounded-md border border-border-subtle bg-subtle px-3.5 py-2.5 text-xs text-fg-secondary",
      className
    )}
    {...props}
  />
));
CardMeta.displayName = "CardMeta";

export interface CardPriceProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: string;
  compareAt?: string;
  period?: string;
  badge?: string;
}

const CardPrice = React.forwardRef<HTMLDivElement, CardPriceProps>(
  ({ className, amount, compareAt, period, badge, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-price"
      className={cn("flex flex-wrap items-baseline gap-2", className)}
      {...props}
    >
      <span className="cmplt-metric text-lg text-fg-primary">{amount}</span>
      {compareAt && (
        <span className="cmplt-tabular text-xs text-fg-muted line-through">
          {compareAt}
        </span>
      )}
      {period && <span className="text-xs text-fg-muted">{period}</span>}
      {badge && (
        <Badge variant="brand" size="sm" dot={false}>
          {badge}
        </Badge>
      )}
    </div>
  )
);
CardPrice.displayName = "CardPrice";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn(
      "flex items-center justify-between gap-3 px-5 pb-5 sm:px-6 sm:pb-6 pt-0",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/* ==========================================================================
   PRESET 1: BlogCard — Editorial Article, Changelog & Magazine Preset
   ========================================================================== */

export interface BlogCardAuthor {
  name: string;
  role?: string;
  avatarText?: string;
  avatarUrl?: string;
}

export interface BlogCardProps extends Omit<CardProps, "title"> {
  category: string;
  readTime?: string;
  date?: string;
  title: string;
  excerpt: string;
  author?: BlogCardAuthor;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  media?: React.ReactNode;
  featured?: boolean;
  ctaLabel?: string;
  onReadMore?: () => void;
}

const BlogCard = React.forwardRef<HTMLDivElement, BlogCardProps>(
  (
    {
      category,
      readTime = "5 min read",
      date = "Sep 28, 2026",
      title,
      excerpt,
      author,
      tags,
      image,
      imageAlt,
      media,
      featured = false,
      layout = "vertical",
      ctaLabel = "Read article",
      onReadMore,
      className,
      ...props
    },
    ref
  ) => {
    const isHorizontal = layout === "horizontal";

    return (
      <Card
        ref={ref}
        variant={featured ? "featured" : "interactive"}
        layout={layout}
        className={cn(
          "group overflow-hidden justify-between",
          isHorizontal && "sm:gap-2",
          className
        )}
        {...props}
      >
        {/* Concentric Media Stage */}
        <CardMedia
          aspect={isHorizontal ? "auto" : "video"}
          src={image}
          alt={imageAlt ?? title}
          className={cn(
            "flex items-center justify-center",
            isHorizontal
              ? "sm:w-2/5 sm:min-h-[220px] shrink-0"
              : "h-48 sm:h-52 w-[calc(100%-1rem)]"
          )}
          topLeftSlot={
            <Badge
              variant={featured ? "brand" : "default"}
              size="sm"
              className="backdrop-blur-md bg-surface/90"
            >
              {category}
            </Badge>
          }
          topRightSlot={
            featured ? (
              <Badge variant="mono" size="sm" dot={false} className="bg-surface/90">
                Featured
              </Badge>
            ) : undefined
          }
        >
          {media ?? (
            <div className="flex flex-col items-center justify-center gap-2 p-6 text-center transition-transform duration-300 group-hover:scale-[1.03]">
              <div className="flex h-10 w-10 items-center justify-center rounded-squircle border border-border-default bg-elevated shadow-xs">
                <Sparkles className="h-4 w-4 text-fg-brand" />
              </div>
              <span className="font-mono text-[10px] text-fg-muted">
                Editorial Surface · OKLCH
              </span>
            </div>
          )}
        </CardMedia>

        {/* Article Content Column */}
        <div className="flex flex-1 flex-col justify-between">
          <CardHeader className={cn(isHorizontal ? "pt-4 sm:pt-5" : "pt-3")}>
            <CardEyebrow>
              <span className="cmplt-tabular">{date}</span>
              <span className="inline-flex items-center gap-1 cmplt-tabular">
                <Clock className="h-3 w-3 text-fg-muted" />
                {readTime}
              </span>
            </CardEyebrow>

            <CardTitle
              className={cn(
                "group-hover:text-fg-brand transition-colors",
                featured || isHorizontal ? "text-base sm:text-lg" : "text-[15px]"
              )}
            >
              {title}
            </CardTitle>

            <CardDescription className="line-clamp-3">{excerpt}</CardDescription>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xs border border-border-subtle bg-subtle px-2 py-0.5 font-mono text-[10px] text-fg-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </CardHeader>

          <CardFooter className="border-t border-border-subtle/70 mx-5 sm:mx-6 px-0 pt-3.5 pb-4 mt-1">
            {author ? (
              <div className="flex items-center gap-2.5 min-w-0">
                {author.avatarUrl ? (
                  <img
                    src={author.avatarUrl}
                    alt={author.name}
                    className="h-7 w-7 shrink-0 rounded-full border border-border-default object-cover"
                  />
                ) : (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-default bg-subtle font-mono text-[10px] font-semibold text-fg-primary">
                    {author.avatarText ??
                      author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                  </span>
                )}
                <div className="min-w-0">
                  <div className="truncate text-xs font-medium text-fg-primary">
                    {author.name}
                  </div>
                  {author.role && (
                    <div className="truncate text-[10.5px] text-fg-muted">
                      {author.role}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <span />
            )}

            <button
              type="button"
              onClick={onReadMore}
              className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-fg-primary group-hover:text-fg-brand transition-colors cursor-pointer"
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </CardFooter>
        </div>
      </Card>
    );
  }
);
BlogCard.displayName = "BlogCard";

/* ==========================================================================
   PRESET 2: ProductCard — E-Commerce, Apparel, Tech & Digital Shop Preset
   ========================================================================== */

export type ShopCategory =
  | "fashion"
  | "apparel"
  | "tech"
  | "electronics"
  | "digital"
  | "interior"
  | "lifestyle"
  | "general";

export interface ProductSwatch {
  name: string;
  color: string;
  image?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductCardProps extends Omit<CardProps, "title"> {
  brand: string;
  title: string;
  subtitle?: string;
  price: string;
  compareAtPrice?: string;
  badge?: string;
  badgeVariant?: "brand" | "success" | "warning" | "mono" | "default";
  rating?: number;
  reviewCount?: number;
  image?: string;
  imageAlt?: string;
  category?: ShopCategory;

  // Fashion & Apparel (Bekleidung)
  sizes?: string[];
  defaultSize?: string;
  onSelectSize?: (size: string) => void;
  fitBadge?: string;
  material?: string;

  // Tech & Electronics (Technik)
  specs?: ProductSpec[];
  warranty?: string;

  // Digital Goods & Software (Digitale Güter)
  fileFormats?: string[];
  license?: string;
  version?: string;
  fileSize?: string;
  instantDownload?: boolean;

  // Interior & Lifestyle (Möbel & Wohnen)
  dimensions?: string;

  // Common
  swatches?: ProductSwatch[];
  inStock?: boolean;
  stockLabel?: string;
  media?: React.ReactNode;
  ctaLabel?: string;
  ctaType?: "cart" | "download" | "license";
  defaultWishlisted?: boolean;
  onAddToCart?: (selectedSwatch?: ProductSwatch, selectedSize?: string) => void;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      brand,
      title,
      subtitle,
      price,
      compareAtPrice,
      badge,
      badgeVariant = "brand",
      rating = 4.9,
      reviewCount = 128,
      image,
      imageAlt,
      category = "general",
      sizes,
      defaultSize,
      onSelectSize,
      fitBadge,
      material,
      specs,
      warranty,
      fileFormats,
      license,
      version,
      fileSize,
      instantDownload = false,
      dimensions,
      swatches,
      inStock = true,
      stockLabel,
      media,
      ctaLabel,
      ctaType,
      defaultWishlisted = false,
      onAddToCart,
      className,
      ...props
    },
    ref
  ) => {
    const [wishlisted, setWishlisted] = React.useState(defaultWishlisted);
    const [selectedSwatchIdx, setSelectedSwatchIdx] = React.useState(0);
    const [selectedSize, setSelectedSize] = React.useState<string | undefined>(
      defaultSize ?? sizes?.[0]
    );
    const [added, setAdded] = React.useState(false);

    const activeSwatch = swatches?.[selectedSwatchIdx];
    const activeImage = activeSwatch?.image ?? image;

    const isDigital =
      category === "digital" ||
      ctaType === "download" ||
      ctaType === "license";
    const effectiveCtaType =
      ctaType ??
      (isDigital ? (license ? "license" : "download") : "cart");

    const effectiveCtaLabel =
      ctaLabel ??
      (effectiveCtaType === "download"
        ? "Download"
        : effectiveCtaType === "license"
        ? "Buy License"
        : "Add to Bag");

    const addedLabel =
      effectiveCtaType === "download"
        ? "Downloaded"
        : effectiveCtaType === "license"
        ? "Purchased"
        : "Added";

    const handleAdd = () => {
      if (!inStock && !isDigital) return;
      setAdded(true);
      onAddToCart?.(activeSwatch, selectedSize);
      setTimeout(() => setAdded(false), 1600);
    };

    return (
      <Card
        ref={ref}
        variant="interactive"
        className={cn("group overflow-hidden justify-between", className)}
        {...props}
      >
        <div>
          {/* Concentric Product Stage */}
          <CardMedia
            aspect="square"
            src={activeImage}
            alt={imageAlt ?? title}
            className="h-52 sm:h-56 w-[calc(100%-1rem)] flex items-center justify-center bg-subtle/75"
            topLeftSlot={
              badge ? (
                <Badge
                  variant={badgeVariant}
                  size="sm"
                  className="backdrop-blur-md shadow-xs bg-surface/90"
                >
                  {badge}
                </Badge>
              ) : undefined
            }
            topRightSlot={
              <button
                type="button"
                aria-label={
                  wishlisted ? "Remove from wishlist" : "Save to wishlist"
                }
                onClick={() => setWishlisted((prev) => !prev)}
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border transition-all cursor-pointer",
                  wishlisted
                    ? "border-border-brand bg-brand/15 text-fg-brand"
                    : "border-border-default bg-surface/90 text-fg-muted hover:text-fg-primary"
                )}
              >
                <Heart
                  className={cn(
                    "h-3.5 w-3.5 transition-transform active:scale-90",
                    wishlisted && "fill-current"
                  )}
                />
              </button>
            }
            bottomSlot={
              swatches && swatches.length > 0 ? (
                <div className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface/90 px-2.5 py-1 backdrop-blur-md shadow-xs">
                  {swatches.map((swatch, idx) => (
                    <button
                      key={swatch.name}
                      type="button"
                      title={swatch.name}
                      aria-label={`Select finish ${swatch.name}`}
                      onClick={() => setSelectedSwatchIdx(idx)}
                      className={cn(
                        "h-3.5 w-3.5 rounded-full border border-border-default transition-transform cursor-pointer",
                        selectedSwatchIdx === idx &&
                          "scale-110 ring-2 ring-fg-brand ring-offset-1 ring-offset-surface"
                      )}
                      style={{ backgroundColor: swatch.color }}
                    />
                  ))}
                  <span className="ml-1 font-mono text-[10px] text-fg-secondary">
                    {activeSwatch?.name}
                  </span>
                </div>
              ) : isDigital && fileFormats && fileFormats.length > 0 ? (
                <div className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface/90 px-2.5 py-1 backdrop-blur-md shadow-xs font-mono text-[9.5px] text-fg-secondary">
                  <FileCode2 className="h-3 w-3 text-fg-brand shrink-0" />
                  <span>{fileFormats.slice(0, 3).join(" · ")}</span>
                </div>
              ) : undefined
            }
          >
            {media ?? (
              <div className="flex flex-col items-center justify-center gap-2 p-6 transition-transform duration-300 group-hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border-default bg-elevated shadow-sm">
                  {isDigital ? (
                    <FileCode2 className="h-6 w-6 text-fg-brand" />
                  ) : (
                    <ShoppingBag className="h-6 w-6 text-fg-brand" />
                  )}
                </div>
              </div>
            )}
          </CardMedia>

          <CardHeader className="pt-3 pb-3">
            <CardEyebrow>
              <span className="uppercase tracking-wider text-[10px] font-semibold text-fg-muted">
                {brand}
              </span>
              {rating !== undefined && (
                <span className="inline-flex items-center gap-1 text-fg-primary cmplt-tabular">
                  <Star className="h-3 w-3 fill-[var(--warning-500)] text-[var(--warning-500)]" />
                  <span className="font-semibold">{rating.toFixed(1)}</span>
                  {reviewCount !== undefined && (
                    <span className="text-fg-muted">({reviewCount})</span>
                  )}
                </span>
              )}
            </CardEyebrow>

            <CardTitle className="group-hover:text-fg-brand transition-colors">
              {title}
            </CardTitle>

            {subtitle && (
              <CardDescription className="line-clamp-2">
                {subtitle}
              </CardDescription>
            )}

            {/* Material & Fit Row (Apparel / Fashion) */}
            {(material || fitBadge) && (
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-fg-secondary">
                {material && (
                  <span className="font-medium text-fg-primary">{material}</span>
                )}
                {material && fitBadge && <span className="text-fg-muted">·</span>}
                {fitBadge && (
                  <span className="rounded-2xs border border-border-subtle bg-subtle px-1.5 py-0.5 text-[10px] text-fg-muted font-mono">
                    {fitBadge}
                  </span>
                )}
              </div>
            )}

            {/* Interactive Size Selector (Apparel / Fashion) */}
            {sizes && sizes.length > 0 && (
              <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-border-subtle/70 pt-2.5">
                <span className="text-[10.5px] font-medium text-fg-muted">Size:</span>
                <div className="flex flex-wrap gap-1">
                  {sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => {
                        setSelectedSize(sz);
                        onSelectSize?.(sz);
                      }}
                      className={cn(
                        "min-w-6 h-6 px-1.5 rounded-sm border text-[10.5px] font-mono font-medium transition-all cursor-pointer",
                        selectedSize === sz
                          ? "border-border-brand bg-brand/10 text-fg-brand font-semibold shadow-xs"
                          : "border-border-subtle bg-subtle text-fg-secondary hover:border-border-default hover:text-fg-primary"
                      )}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Hardware / Tech Spec Strip */}
            {specs && specs.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-1.5 rounded-md border border-border-subtle bg-subtle p-2">
                {specs.map((s) => (
                  <div key={s.label} className="px-1">
                    <div className="text-[10px] text-fg-muted">{s.label}</div>
                    <div className="font-mono text-[11px] font-medium text-fg-primary cmplt-tabular">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Hardware Warranty Badge */}
            {warranty && (
              <div className="mt-2 flex items-center gap-1.5 text-[10.5px] text-fg-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-status-success shrink-0" />
                <span>{warranty}</span>
              </div>
            )}

            {/* Digital Goods License, Version & Formats Strip */}
            {isDigital && (fileFormats || license || version || fileSize) && (
              <div className="mt-2.5 space-y-1.5 border-t border-border-subtle/70 pt-2.5">
                {fileFormats && fileFormats.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1">
                    {fileFormats.map((fmt) => (
                      <span
                        key={fmt}
                        className="rounded-2xs border border-border-subtle bg-subtle px-1.5 py-0.5 font-mono text-[9.5px] font-medium text-fg-secondary"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                )}
                {(license || version || fileSize) && (
                  <div className="flex flex-wrap items-center gap-1.5 text-[10.5px] text-fg-muted">
                    {version && (
                      <span className="font-mono text-fg-primary font-semibold">
                        {version}
                      </span>
                    )}
                    {version && license && <span>·</span>}
                    {license && <span>{license}</span>}
                    {fileSize && (
                      <>
                        <span>·</span>
                        <span className="font-mono">{fileSize}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Interior Dimensions */}
            {dimensions && (
              <div className="mt-2 flex items-center gap-1.5 rounded-md border border-border-subtle bg-subtle px-2.5 py-1.5 font-mono text-[10.5px] text-fg-secondary cmplt-tabular">
                <Layers className="h-3 w-3 text-fg-muted shrink-0" />
                <span>{dimensions}</span>
              </div>
            )}
          </CardHeader>
        </div>

        <CardFooter className="border-t border-border-subtle/70 mx-5 sm:mx-6 px-0 pt-3.5 pb-4">
          <div>
            <CardPrice amount={price} compareAt={compareAtPrice} />
            <div className="mt-0.5 flex items-center gap-1.5 text-[10.5px] text-fg-muted">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isDigital
                    ? "bg-status-success"
                    : inStock
                    ? "bg-status-success"
                    : "bg-status-danger"
                )}
              />
              <span>
                {stockLabel ??
                  (isDigital
                    ? instantDownload
                      ? "Instant ZIP & CLI Access"
                      : "Direct Digital Access"
                    : inStock
                    ? "In stock · Ready to ship"
                    : "Out of stock")}
              </span>
            </div>
          </div>

          <Button
            variant={added ? "secondary" : "primary"}
            size="sm"
            disabled={!inStock && !isDigital}
            onClick={handleAdd}
            className="shrink-0"
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5 text-status-success" />
                {addedLabel}
              </>
            ) : (
              <>
                {effectiveCtaType === "download" ? (
                  <Download className="h-3.5 w-3.5" />
                ) : effectiveCtaType === "license" ? (
                  <Key className="h-3.5 w-3.5" />
                ) : (
                  <ShoppingBag className="h-3.5 w-3.5" />
                )}
                {effectiveCtaLabel}
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    );
  }
);
ProductCard.displayName = "ProductCard";

const ApparelProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (props, ref) => <ProductCard ref={ref} category="apparel" {...props} />
);
ApparelProductCard.displayName = "ApparelProductCard";

const TechProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (props, ref) => <ProductCard ref={ref} category="tech" {...props} />
);
TechProductCard.displayName = "TechProductCard";

const DigitalProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (props, ref) => <ProductCard ref={ref} category="digital" {...props} />
);
DigitalProductCard.displayName = "DigitalProductCard";

/* ==========================================================================
   PRESET 3: MetricCard — KPI, Telemetry & Analytics Dashboard Preset
   ========================================================================== */

export interface MetricCardProps extends Omit<CardProps, "title"> {
  label: string;
  value: string;
  delta?: string;
  deltaTrend?: "up" | "down" | "neutral";
  period?: string;
  sparkline?: number[];
  targetLabel?: string;
  targetValue?: string;
  icon?: React.ReactNode;
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      label,
      value,
      delta,
      deltaTrend = "up",
      period = "vs. last 30 days",
      sparkline,
      targetLabel,
      targetValue,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const badgeVariant =
      deltaTrend === "up"
        ? "success"
        : deltaTrend === "down"
        ? "danger"
        : "mono";

    return (
      <Card
        ref={ref}
        variant="default"
        className={cn("justify-between p-5 sm:p-6 space-y-4", className)}
        {...props}
      >
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-fg-muted">{label}</span>
            {icon ? (
              <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-border-subtle bg-subtle text-fg-secondary">
                {icon}
              </span>
            ) : null}
          </div>

          <div className="flex items-baseline justify-between gap-3">
            <div className="cmplt-metric text-2xl sm:text-3xl text-fg-primary">
              {value}
            </div>
            {delta && (
              <Badge variant={badgeVariant} size="sm" dot={false} className="cmplt-tabular">
                {deltaTrend === "up" && <TrendingUp className="mr-1 h-3 w-3" />}
                {deltaTrend === "down" && <TrendingDown className="mr-1 h-3 w-3" />}
                {delta}
              </Badge>
            )}
          </div>

          {period && <div className="text-[11px] text-fg-muted">{period}</div>}
        </div>

        {sparkline && sparkline.length > 0 && (
          <div
            aria-hidden="true"
            className="flex h-10 items-end gap-1.5 pt-1"
          >
            {sparkline.map((pct, idx) => (
              <span
                key={idx}
                style={{ height: `${Math.max(12, Math.min(100, pct))}%` }}
                className={cn(
                  "flex-1 rounded-t-[3px] transition-all duration-200",
                  idx === sparkline.length - 1
                    ? "bg-brand"
                    : "bg-brand/35 hover:bg-brand/65"
                )}
              />
            ))}
          </div>
        )}

        {(targetLabel || targetValue) && (
          <CardMeta className="flex items-center justify-between py-2 px-3">
            <span className="text-[11px] text-fg-muted">{targetLabel}</span>
            <span className="font-mono text-[11px] font-medium text-fg-primary cmplt-tabular">
              {targetValue}
            </span>
          </CardMeta>
        )}
      </Card>
    );
  }
);
MetricCard.displayName = "MetricCard";

/* ==========================================================================
   PRESET 4: ProfileCard — Creator, Team Member & Marketplace Seller Preset
   ========================================================================== */

export interface ProfileStat {
  label: string;
  value: string;
}

export interface ProfileCardProps extends Omit<CardProps, "title"> {
  name: string;
  handle?: string;
  role: string;
  avatarText: string;
  verified?: boolean;
  status?: "online" | "busy" | "offline";
  statusText?: string;
  bio: string;
  skills?: string[];
  stats?: ProfileStat[];
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
}

const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    {
      name,
      handle,
      role,
      avatarText,
      verified = true,
      status = "online",
      statusText = "Available for projects",
      bio,
      skills,
      stats,
      primaryActionLabel = "View Profile",
      secondaryActionLabel = "Message",
      onPrimaryAction,
      className,
      ...props
    },
    ref
  ) => {
    const [following, setFollowing] = React.useState(false);

    return (
      <Card
        ref={ref}
        variant="default"
        className={cn("justify-between p-5 sm:p-6 space-y-4", className)}
        {...props}
      >
        <div className="space-y-4">
          {/* Top Identity Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-squircle border border-border-default bg-subtle font-mono text-sm font-semibold text-fg-primary shadow-xs">
                  {avatarText}
                </span>
                <span
                  title={`Status: ${status}`}
                  className={cn(
                    "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface",
                    status === "online"
                      ? "bg-status-success"
                      : status === "busy"
                      ? "bg-status-warning"
                      : "bg-fg-muted"
                  )}
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[15px] font-semibold text-fg-primary">
                    {name}
                  </h3>
                  {verified && (
                    <CheckCircle2
                      aria-label="Verified"
                      className="h-3.5 w-3.5 text-fg-brand"
                    />
                  )}
                </div>
                <p className="text-xs text-fg-secondary">{role}</p>
                {handle && (
                  <p className="font-mono text-[11px] text-fg-muted">{handle}</p>
                )}
              </div>
            </div>

            {statusText && (
              <Badge variant="outline" size="sm" className="hidden sm:inline-flex">
                {statusText}
              </Badge>
            )}
          </div>

          <p className="text-[12.5px] text-fg-muted leading-relaxed">{bio}</p>

          {/* Skill / Domain Pills */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Badge key={skill} variant="mono" size="sm" dot={false}>
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {/* Inset Grouped Key-Value Metrics */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 divide-x divide-border-subtle rounded-md border border-border-subtle bg-subtle py-2.5 text-center">
              {stats.map((st) => (
                <div key={st.label} className="px-2">
                  <div className="cmplt-metric text-sm text-fg-primary">
                    {st.value}
                  </div>
                  <div className="text-[10px] text-fg-muted mt-0.5">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <Button
            variant={following ? "secondary" : "primary"}
            size="sm"
            className="flex-1"
            onClick={() => {
              setFollowing((prev) => !prev);
              onPrimaryAction?.();
            }}
          >
            {following ? (
              <>
                <Check className="h-3.5 w-3.5 text-status-success" />
                Connected
              </>
            ) : (
              primaryActionLabel
            )}
          </Button>
          {secondaryActionLabel && (
            <Button variant="outline" size="sm" className="flex-1">
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      </Card>
    );
  }
);
ProfileCard.displayName = "ProfileCard";

/* ==========================================================================
   PRESET 5: FeatureCard — Bento Grid & Product Feature Highlight Preset
   ========================================================================== */

export interface FeatureCardProps extends Omit<CardProps, "title"> {
  eyebrow: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
  visual?: React.ReactNode;
  highlights?: string[];
  ctaLabel?: string;
  onAction?: () => void;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      eyebrow,
      title,
      description,
      icon,
      badge,
      visual,
      highlights,
      ctaLabel = "Explore architecture",
      onAction,
      className,
      ...props
    },
    ref
  ) => (
    <Card
      ref={ref}
      variant="interactive"
      className={cn("group overflow-hidden justify-between", className)}
      {...props}
    >
      <div>
        {visual && (
          <CardMedia aspect="auto" className="min-h-[140px] p-4 flex items-center justify-center">
            {visual}
          </CardMedia>
        )}

        <CardHeader className={cn(visual ? "pt-3" : "pt-5")}>
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2">
              {icon && (
                <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-border-default bg-subtle text-fg-brand">
                  {icon}
                </span>
              )}
              <span className="cmplt-eyebrow">{eyebrow}</span>
            </div>
            {badge && (
              <Badge variant="brand" size="sm">
                {badge}
              </Badge>
            )}
          </div>

          <CardTitle className="mt-1 group-hover:text-fg-brand transition-colors">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>

          {highlights && highlights.length > 0 && (
            <ul className="mt-2 space-y-1.5 border-t border-border-subtle pt-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-fg-secondary"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-status-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </CardHeader>
      </div>

      {ctaLabel && (
        <CardFooter className="pt-0">
          <button
            type="button"
            onClick={onAction}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-primary group-hover:text-fg-brand transition-colors cursor-pointer"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </CardFooter>
      )}
    </Card>
  )
);
FeatureCard.displayName = "FeatureCard";

/* ==========================================================================
   PRESET 6: TestimonialCard — Verified Review & Editorial Quote Preset
   ========================================================================== */

export interface TestimonialCardProps extends Omit<CardProps, "title"> {
  quote: string;
  authorName: string;
  authorRole: string;
  company?: string;
  avatarText: string;
  rating?: number;
  verifiedBadge?: string;
  metricHighlight?: { label: string; value: string };
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  (
    {
      quote,
      authorName,
      authorRole,
      company,
      avatarText,
      rating = 5,
      verifiedBadge = "Verified Customer",
      metricHighlight,
      className,
      ...props
    },
    ref
  ) => (
    <Card
      ref={ref}
      variant="default"
      className={cn("justify-between p-5 sm:p-6 space-y-4", className)}
      {...props}
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={cn(
                  "h-3.5 w-3.5",
                  idx < rating
                    ? "fill-[var(--warning-500)] text-[var(--warning-500)]"
                    : "text-border-default"
                )}
              />
            ))}
          </div>
          {verifiedBadge && (
            <Badge variant="success" size="sm">
              {verifiedBadge}
            </Badge>
          )}
        </div>

        <blockquote className="relative text-[13.5px] leading-relaxed text-fg-primary">
          <Quote className="mb-1.5 h-4 w-4 text-fg-muted/50" />
          “{quote}”
        </blockquote>

        {metricHighlight && (
          <CardMeta className="flex items-center justify-between">
            <span className="text-xs text-fg-muted">{metricHighlight.label}</span>
            <span className="cmplt-metric text-sm text-fg-brand">
              {metricHighlight.value}
            </span>
          </CardMeta>
        )}
      </div>

      <div className="flex items-center gap-3 border-t border-border-subtle pt-3.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-default bg-subtle font-mono text-xs font-semibold text-fg-primary">
          {avatarText}
        </span>
        <div className="min-w-0">
          <div className="truncate text-xs font-semibold text-fg-primary">
            {authorName}
          </div>
          <div className="truncate text-[11px] text-fg-muted">
            {authorRole}
            {company ? ` · ${company}` : ""}
          </div>
        </div>
      </div>
    </Card>
  )
);
TestimonialCard.displayName = "TestimonialCard";

/* ==========================================================================
   PRESET 7: EventCard — Workshop, Release Drop & Booking Preset
   ========================================================================== */

export interface EventCardProps extends Omit<CardProps, "title"> {
  month: string;
  day: string;
  time: string;
  category: string;
  title: string;
  description: string;
  location: string;
  spotsLeft?: string;
  price?: string;
  ctaLabel?: string;
  onReserve?: () => void;
}

const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  (
    {
      month,
      day,
      time,
      category,
      title,
      description,
      location,
      spotsLeft,
      price = "Free",
      ctaLabel = "Reserve Spot",
      onReserve,
      className,
      ...props
    },
    ref
  ) => {
    const [reserved, setReserved] = React.useState(false);

    return (
      <Card
        ref={ref}
        variant="interactive"
        className={cn("justify-between p-5 sm:p-6 space-y-4", className)}
        {...props}
      >
        <div className="space-y-3.5">
          <div className="flex items-start justify-between gap-3">
            {/* Concentric Date Tile */}
            <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-md border border-border-default bg-subtle text-center shadow-xs">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-fg-brand">
                {month}
              </span>
              <span className="cmplt-metric text-base text-fg-primary">
                {day}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge variant="brand" size="sm">
                  {category}
                </Badge>
                {spotsLeft && (
                  <Badge variant="warning" size="sm">
                    {spotsLeft}
                  </Badge>
                )}
              </div>
              <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-fg-primary">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-[12.5px] text-fg-muted leading-relaxed">
            {description}
          </p>

          <CardMeta className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-fg-secondary">
              <Calendar className="h-3.5 w-3.5 text-fg-muted shrink-0" />
              <span className="cmplt-tabular">{time}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-fg-secondary">
              <MapPin className="h-3.5 w-3.5 text-fg-muted shrink-0" />
              <span>{location}</span>
            </div>
          </CardMeta>
        </div>

        <div className="flex items-center justify-between border-t border-border-subtle pt-3.5">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-fg-muted block">
              Admission
            </span>
            <span className="cmplt-metric text-sm text-fg-primary">{price}</span>
          </div>

          <Button
            variant={reserved ? "secondary" : "primary"}
            size="sm"
            onClick={() => {
              setReserved((prev) => !prev);
              onReserve?.();
            }}
          >
            {reserved ? (
              <>
                <Check className="h-3.5 w-3.5 text-status-success" />
                Spot Reserved
              </>
            ) : (
              ctaLabel
            )}
          </Button>
        </div>
      </Card>
    );
  }
);
EventCard.displayName = "EventCard";

export {
  Card,
  CardMedia,
  CardHeader,
  CardEyebrow,
  CardTitle,
  CardDescription,
  CardContent,
  CardMeta,
  CardPrice,
  CardFooter,
  BlogCard,
  ProductCard,
  ApparelProductCard,
  TechProductCard,
  DigitalProductCard,
  MetricCard,
  ProfileCard,
  FeatureCard,
  TestimonialCard,
  EventCard,
  cardVariants,
};
