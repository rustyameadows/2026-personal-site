import type { MouseEvent } from "react";

export type RouteTransitionKind =
  | "home-to-project"
  | "project-to-home"
  | "project-to-project";

export type RouteTransitionIntent = {
  from?: string;
  id: string;
  kind: RouteTransitionKind;
  to?: string;
};

const intentKey = "project-route-transition-intent";
const homeScrollKey = "project-home-scroll-position";
const rootClasses = [
  "route-transitioning--home-to-project",
  "route-transitioning--project-to-home",
  "route-transitioning--project-to-project"
];

export const routeTransitionExitMs = 150;

function parseDurationMs(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  if (trimmedValue.endsWith("ms")) {
    return Number.parseFloat(trimmedValue);
  }

  if (trimmedValue.endsWith("s")) {
    return Number.parseFloat(trimmedValue) * 1000;
  }

  return Number.parseFloat(trimmedValue);
}

function readCssDurationMs(variableName: string, fallback: number) {
  if (typeof window === "undefined") {
    return fallback;
  }

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
  const parsedValue = parseDurationMs(value);

  return Number.isFinite(parsedValue) && parsedValue !== null
    ? parsedValue
    : fallback;
}

export function shouldHandleRouteTransitionClick(
  event: MouseEvent<HTMLAnchorElement>
) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getRouteTransitionDelay(kind?: RouteTransitionKind) {
  if (prefersReducedMotion()) {
    return 0;
  }

  if (kind === "project-to-project") {
    return readCssDurationMs(
      "--motion-project-switch-exit-duration",
      routeTransitionExitMs
    );
  }

  return readCssDurationMs("--motion-route-exit", routeTransitionExitMs);
}

export function startRouteTransition(
  intent: Omit<RouteTransitionIntent, "id">
) {
  const nextIntent: RouteTransitionIntent = {
    ...intent,
    id: `${intent.kind}-${Date.now()}-${Math.random().toString(36).slice(2)}`
  };
  const root = document.documentElement;

  clearRouteTransitionClasses();
  window.sessionStorage.setItem(intentKey, JSON.stringify(nextIntent));
  root.classList.add(`route-transitioning--${intent.kind}`);

  return nextIntent;
}

export function readRouteTransitionIntent(): RouteTransitionIntent | null {
  const stored = window.sessionStorage.getItem(intentKey);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as RouteTransitionIntent;
  } catch {
    window.sessionStorage.removeItem(intentKey);
    return null;
  }
}

export function consumeRouteTransitionIntent() {
  const intent = readRouteTransitionIntent();

  window.sessionStorage.removeItem(intentKey);

  return intent;
}

export function clearRouteTransitionClasses() {
  document.documentElement.classList.remove(...rootClasses);
}

export function saveHomeScrollPosition() {
  window.sessionStorage.setItem(
    homeScrollKey,
    JSON.stringify({
      x: window.scrollX,
      y: window.scrollY
    })
  );
}

export function restoreHomeScrollPosition() {
  const stored = window.sessionStorage.getItem(homeScrollKey);

  if (!stored) {
    return false;
  }

  try {
    const position = JSON.parse(stored) as { x?: unknown; y?: unknown };
    const x = typeof position.x === "number" ? position.x : 0;
    const y = typeof position.y === "number" ? position.y : 0;

    window.scrollTo(x, y);
    return true;
  } catch {
    window.sessionStorage.removeItem(homeScrollKey);
    return false;
  }
}
