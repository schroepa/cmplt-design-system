"use client";

import * as React from "react";

export type ThemeMode = "dark" | "light";
export type ThemePreset = "precision" | "editorial" | "emerald";
export type RadiusPreset = "none" | "sm" | "md" | "lg" | "xl";

interface ThemeContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  preset: ThemePreset;
  setPreset: (preset: ThemePreset) => void;
  radius: RadiusPreset;
  setRadius: (radius: RadiusPreset) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<ThemeMode>("dark");
  const [preset, setPresetState] = React.useState<ThemePreset>("precision");
  const [radius, setRadiusState] = React.useState<RadiusPreset>("md");

  React.useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme-preset", preset);
  }, [preset]);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-radius", radius);
  }, [radius]);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      mode,
      setMode: setModeState,
      toggleMode: () =>
        setModeState((prev) => (prev === "dark" ? "light" : "dark")),
      preset,
      setPreset: setPresetState,
      radius,
      setRadius: setRadiusState,
    }),
    [mode, preset, radius]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
