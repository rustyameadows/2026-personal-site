import type { MouseEvent } from "react";

export type RouteTransitionKind =
  | "home-to-project"
  | "project-to-home"
  | "project-to-project";

export type RouteTransitionIntent = {
  direction?: 1 | -1;
  from?: string;
  id: string;
  kind: RouteTransitionKind;
  to?: string;
};

const intentKey = "project-route-transition-intent";
const rootClasses = [
  "route-transitioning--home-to-project",
  "route-transitioning--project-to-home",
  "route-transitioning--project-to-project"
];

export const routeTransitionExitMs = 150;

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

export function getRouteTransitionDelay() {
  return prefersReducedMotion() ? 0 : routeTransitionExitMs;
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

  if (intent.direction) {
    root.style.setProperty(
      "--route-project-entry-shift",
      `${intent.direction * 18}px`
    );
    root.style.setProperty(
      "--route-project-exit-shift",
      `${intent.direction * -18}px`
    );
  } else {
    root.style.removeProperty("--route-project-entry-shift");
    root.style.removeProperty("--route-project-exit-shift");
  }

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
