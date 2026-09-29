import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TooltipProvider } from "@/registry/cmplt/ui/tooltip";

export const metadata: Metadata = {
  title: "cmplt design system — Base UI Primitives, W3C OKLCH Tokens & shadcn Registry",
  description:
    "The complete design system for modern engineering and design teams. Invented and owned by Patrick Schrödter (ptrckschrdtr). Headless Base UI accessibility, 3-tier W3C OKLCH tokens, native shadcn registry distribution, and 1:1 Figma parity.",
  authors: [
    {
      name: "Patrick Schrödter (ptrckschrdtr)",
      url: "https://ptrckschrdtr.de",
    },
  ],
  creator: "Patrick Schrödter (ptrckschrdtr)",
  publisher: "Patrick Schrödter (ptrckschrdtr)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
      data-theme-preset="precision"
      data-radius="md"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased flex min-h-screen flex-col bg-canvas text-fg-primary">
        <ThemeProvider>
          <TooltipProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
