"use client";

import * as React from "react";
import * as THREE from "three";
import gsap from "gsap";
import { cn } from "@/registry/cmplt/lib/utils";

export interface InteractiveDotFieldProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Grid spacing between dots in CSS pixels (default: 24)
   */
  spacing?: number;
  /**
   * Radius of the natural pointer interaction field in CSS pixels (default: 195)
   */
  interactionRadius?: number;
  /**
   * Maximum elastic displacement of dots in CSS pixels (default: 7.5 — soft & natural)
   */
  maxDisplacement?: number;
  /**
   * Base dot diameter in CSS pixels (default: 2.4)
   */
  dotSize?: number;
}

const VERTEX_SHADER = /* glsl */ `
  attribute vec2 aSeed;

  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec2 uWake;
  uniform float uHover;
  uniform float uRadius;
  uniform float uMaxDisp;
  uniform float uDotSize;

  varying float vHighlight;
  varying float vVignette;
  varying float vBreath;

  void main() {
    vec2 origin = position.xy;

    // 1. Ultra-soft ambient organic breathing wave
    float wave = sin(origin.x * 0.0075 + uTime * 0.65 + aSeed.x)
               * cos(origin.y * 0.0075 + uTime * 0.52 + aSeed.y);
    vBreath = wave * 0.5 + 0.5;

    vec2 pos = origin + vec2(
      sin(uTime * 0.55 + aSeed.x * 6.2831) * 0.85,
      cos(uTime * 0.48 + aSeed.y * 6.2831) * 0.85
    );

    // 2. Primary cursor Gaussian field + secondary trailing wake field
    vec2 toMouse = origin - uMouse;
    float distMouse = length(toMouse);
    float sigma1 = uRadius * 0.46;
    float infMouse = exp(-(distMouse * distMouse) / (2.0 * sigma1 * sigma1)) * uHover;

    vec2 toWake = origin - uWake;
    float distWake = length(toWake);
    float sigma2 = uRadius * 0.62;
    float infWake = exp(-(distWake * distWake) / (2.0 * sigma2 * sigma2)) * uHover * 0.55;

    float totalInf = clamp(infMouse + infWake * 0.65, 0.0, 1.0);

    // Gentle radial silk-like parting + subtle harmonic ripple
    if (distMouse > 0.001) {
      vec2 dir = toMouse / distMouse;
      float ripple = sin(distMouse * 0.045 - uTime * 2.2) * 0.25 + 0.75;
      pos += dir * infMouse * uMaxDisp * ripple;
    }
    if (distWake > 0.001) {
      vec2 dirWake = toWake / distWake;
      pos += dirWake * infWake * (uMaxDisp * 0.45);
    }

    vHighlight = smoothstep(0.0, 1.0, totalInf);

    // 3. Soft radial edge vignette so the dot matrix blends naturally into the canvas
    vec2 normUv = origin / max(uResolution * 0.5, vec2(1.0));
    float edgeDist = length(normUv * vec2(0.82, 0.95));
    vVignette = 1.0 - smoothstep(0.58, 1.18, edgeDist);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 0.0, 1.0);

    // Scale dot size gently inside the highlight zone
    float dynamicSize = uDotSize * (1.0 + vHighlight * 0.82 + wave * 0.08);
    gl_PointSize = dynamicSize * uPixelRatio;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uBaseColor;
  uniform vec3 uAccentColor;
  uniform float uBaseOpacity;

  varying float vHighlight;
  varying float vVignette;
  varying float vBreath;

  void main() {
    // Anti-aliased soft circular SDF
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;

    float circleAlpha = 1.0 - smoothstep(0.32, 1.0, r);

    // Blend between warm neutral dot color and active brand accent
    vec3 color = mix(uBaseColor, uAccentColor, pow(vHighlight, 0.85));

    // Subtle opacity lift on highlighted dots
    float alpha = mix(
      uBaseOpacity * (0.78 + vBreath * 0.22),
      0.88,
      vHighlight
    ) * circleAlpha * vVignette;

    gl_FragColor = vec4(color, alpha);
  }
`;

/**
 * Helper to resolve any CSS color string (including oklch(...) or hex) into THREE.Color RGB [0..1]
 * using a tiny 1x1 2D canvas context so browser-native OKLCH gamut mapping is used.
 */
function resolveCssColorToThree(
  cssValue: string,
  fallbackHex: string
): THREE.Color {
  if (typeof document === "undefined") {
    return new THREE.Color(fallbackHex);
  }
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return new THREE.Color(fallbackHex);
    ctx.fillStyle = fallbackHex;
    ctx.fillStyle = cssValue.trim() || fallbackHex;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    return new THREE.Color(r / 255, g / 255, b / 255);
  } catch {
    return new THREE.Color(fallbackHex);
  }
}

/**
 * cmplt InteractiveDotField — Three.js + GSAP Natural Interactive Background
 * Renders a hardware-accelerated WebGL dot matrix that gently parts, breathes,
 * and illuminates in response to cursor movement using GSAP inertial quickTo physics.
 */
export const InteractiveDotField = React.forwardRef<
  HTMLDivElement,
  InteractiveDotFieldProps
>(
  (
    {
      className,
      spacing = 24,
      interactionRadius = 195,
      maxDisplacement = 7.5,
      dotSize = 2.6,
      ...props
    },
    forwardedRef
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    const setMergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (
            forwardedRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node;
        }
      },
      [forwardedRef]
    );

    React.useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      let width = Math.max(container.clientWidth, 1);
      let height = Math.max(container.clientHeight, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // 1. Setup Three.js Scene, Orthographic Camera & Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(
        -width / 2,
        width / 2,
        height / 2,
        -height / 2,
        0.1,
        100
      );
      camera.position.z = 10;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
      } catch {
        return;
      }

      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      renderer.domElement.style.pointerEvents = "none";
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // 2. Read initial calibrated theme colors from CSS variables
      const readThemeColors = () => {
        const styles = getComputedStyle(document.documentElement);
        const isDark = document.documentElement.classList.contains("dark");
        const rawMuted = styles.getPropertyValue("--fg-muted");
        const rawAccent = styles.getPropertyValue("--bg-accent");

        const baseColor = resolveCssColorToThree(
          rawMuted,
          isDark ? "#858582" : "#8B8B88"
        );
        const accentColor = resolveCssColorToThree(
          rawAccent,
          isDark ? "#007A5A" : "#EA623F"
        );
        const baseOpacity = isDark ? 0.34 : 0.36;
        return { baseColor, accentColor, baseOpacity };
      };

      const initialColors = readThemeColors();

      // 3. Create ShaderMaterial with GSAP-driven uniforms
      const uniforms = {
        uTime: { value: 0 },
        uPixelRatio: { value: dpr },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uWake: { value: new THREE.Vector2(0, 0) },
        uHover: { value: 0 },
        uRadius: { value: interactionRadius },
        uMaxDisp: { value: prefersReduced ? 0 : maxDisplacement },
        uDotSize: { value: dotSize },
        uBaseColor: { value: initialColors.baseColor },
        uAccentColor: { value: initialColors.accentColor },
        uBaseOpacity: { value: initialColors.baseOpacity },
      };

      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        uniforms,
        transparent: true,
        depthWrite: false,
      });

      // 4. Build Grid BufferGeometry
      let pointsMesh: THREE.Points | null = null;

      const buildGridGeometry = (w: number, h: number) => {
        if (pointsMesh) {
          scene.remove(pointsMesh);
          pointsMesh.geometry.dispose();
        }

        const cols = Math.ceil(w / spacing) + 2;
        const rows = Math.ceil(h / spacing) + 2;
        const count = cols * rows;

        const positions = new Float32Array(count * 3);
        const seeds = new Float32Array(count * 2);

        const startX = -((cols - 1) * spacing) / 2;
        const startY = -((rows - 1) * spacing) / 2;

        let idx = 0;
        let seedIdx = 0;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            positions[idx++] = startX + c * spacing;
            positions[idx++] = startY + r * spacing;
            positions[idx++] = 0;

            seeds[seedIdx++] = Math.sin(c * 12.9898 + r * 78.233) * 0.5 + 0.5;
            seeds[seedIdx++] = Math.cos(c * 45.164 + r * 94.673) * 0.5 + 0.5;
          }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 2));

        pointsMesh = new THREE.Points(geometry, material);
        scene.add(pointsMesh);
      };

      buildGridGeometry(width, height);

      // 5. GSAP quickTo controllers for silky, inertial pointer & wake tracking
      const mouseProxy = { x: 0, y: 0, wakeX: 0, wakeY: 0, hover: 0 };

      const xTo = gsap.quickTo(mouseProxy, "x", {
        duration: 0.65,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(mouseProxy, "y", {
        duration: 0.65,
        ease: "power3.out",
      });
      const wakeXTo = gsap.quickTo(mouseProxy, "wakeX", {
        duration: 1.35,
        ease: "power2.out",
      });
      const wakeYTo = gsap.quickTo(mouseProxy, "wakeY", {
        duration: 1.35,
        ease: "power2.out",
      });
      const hoverTo = gsap.quickTo(mouseProxy, "hover", {
        duration: 0.75,
        ease: "power2.out",
      });

      const handleWindowPointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left - 40 &&
          e.clientX <= rect.right + 40 &&
          e.clientY >= rect.top - 40 &&
          e.clientY <= rect.bottom + 40;

        if (!inside) {
          hoverTo(0);
          return;
        }

        const localX = e.clientX - rect.left - rect.width / 2;
        const localY = -(e.clientY - rect.top - rect.height / 2);

        xTo(localX);
        yTo(localY);
        wakeXTo(localX);
        wakeYTo(localY);
        hoverTo(1);
      };

      const handleWindowPointerLeave = () => {
        hoverTo(0);
      };

      window.addEventListener("pointermove", handleWindowPointerMove, {
        passive: true,
      });
      window.addEventListener("pointerleave", handleWindowPointerLeave);

      // 6. Observe Light/Dark Mode & Theme Preset changes on <html>
      const observer = new MutationObserver(() => {
        const next = readThemeColors();
        gsap.to(uniforms.uBaseColor.value, {
          r: next.baseColor.r,
          g: next.baseColor.g,
          b: next.baseColor.b,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(uniforms.uAccentColor.value, {
          r: next.accentColor.r,
          g: next.accentColor.g,
          b: next.accentColor.b,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(uniforms.uBaseOpacity, {
          value: next.baseOpacity,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "data-theme-preset"],
      });

      // 7. ResizeObserver for responsive container sizing
      const resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        const nextW = Math.max(entry.contentRect.width, 1);
        const nextH = Math.max(entry.contentRect.height, 1);
        if (Math.abs(nextW - width) < 2 && Math.abs(nextH - height) < 2) return;

        width = nextW;
        height = nextH;
        camera.left = -width / 2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = -height / 2;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        uniforms.uResolution.value.set(width, height);
        buildGridGeometry(width, height);
      });
      resizeObserver.observe(container);

      // 8. Sync render loop with GSAP ticker for unified frame timing
      const startTime = performance.now();
      const tick = () => {
        const elapsed = (performance.now() - startTime) * 0.001;
        uniforms.uTime.value = prefersReduced ? 0 : elapsed;
        uniforms.uMouse.value.set(mouseProxy.x, mouseProxy.y);
        uniforms.uWake.value.set(mouseProxy.wakeX, mouseProxy.wakeY);
        uniforms.uHover.value = mouseProxy.hover;
        renderer.render(scene, camera);
      };

      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
        observer.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("pointermove", handleWindowPointerMove);
        window.removeEventListener("pointerleave", handleWindowPointerLeave);
        if (pointsMesh) {
          pointsMesh.geometry.dispose();
        }
        material.dispose();
        renderer.dispose();
      };
    }, [spacing, interactionRadius, maxDisplacement, dotSize]);

    return (
      <div
        ref={setMergedRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden select-none",
          className
        )}
        {...props}
      />
    );
  }
);
InteractiveDotField.displayName = "InteractiveDotField";
