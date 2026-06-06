"use client";

import { useEffect, useMemo } from "react";

import { DialRoot, useDialKit } from "dialkit";

import {
  cubicBezierValue,
  normalizeProjectMotionTuningValues,
  projectMotionTuningDefaults,
  projectMotionTuningStorageKey,
  type ProjectMotionTransition,
  type ProjectMotionTuningValues
} from "@/lib/projectMotionTuning";

import "dialkit/styles.css";

function millisecondsDeclaration(name: string, value: number) {
  return `${name}:${Math.round(value)}ms`;
}

function transitionDeclarations(
  durationName: string,
  easeName: string,
  value: ProjectMotionTransition
) {
  return [
    millisecondsDeclaration(durationName, value.duration * 1000),
    `${easeName}:${cubicBezierValue(value.ease)}`
  ];
}

function writeTuningStyle(declarations: string[]) {
  let style = document.getElementById(
    "project-motion-tuning-vars"
  ) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = "project-motion-tuning-vars";
    style.setAttribute("data-project-motion-tuning", "true");
    document.head.appendChild(style);
  }

  style.textContent = `:root{${declarations.join(";")};}`;
}

function getMotionStorage() {
  try {
    return window.localStorage || window.sessionStorage;
  } catch {
    try {
      return window.sessionStorage;
    } catch {
      return null;
    }
  }
}

function readStoredValues() {
  if (typeof window === "undefined") {
    return projectMotionTuningDefaults;
  }

  try {
    const storedValues = getMotionStorage()?.getItem(
      projectMotionTuningStorageKey
    );

    return normalizeProjectMotionTuningValues(
      storedValues ? JSON.parse(storedValues) : null
    );
  } catch {
    return projectMotionTuningDefaults;
  }
}

function persistValues(values: ProjectMotionTuningValues) {
  getMotionStorage()?.setItem(
    projectMotionTuningStorageKey,
    JSON.stringify(values)
  );
}

function applyValues(values: ProjectMotionTuningValues) {
  writeTuningStyle([
    ...transitionDeclarations(
      "--motion-project-load-chrome-duration",
      "--motion-project-load-chrome-ease",
      values.fullLoad.chromeTray
    ),
    millisecondsDeclaration(
      "--motion-project-load-stage-delay",
      values.fullLoad.stageStartDelay
    ),
    ...transitionDeclarations(
      "--motion-project-load-stage-duration",
      "--motion-project-load-stage-ease",
      values.fullLoad.stage
    ),
    millisecondsDeclaration(
      "--motion-project-load-title-delay",
      values.fullLoad.titleStartDelay
    ),
    ...transitionDeclarations(
      "--motion-project-load-title-duration",
      "--motion-project-load-title-ease",
      values.fullLoad.title
    ),
    ...transitionDeclarations(
      "--motion-project-switch-exit-duration",
      "--motion-project-switch-exit-ease",
      values.projectSwitch.exit
    ),
    ...transitionDeclarations(
      "--motion-project-switch-stage-duration",
      "--motion-project-switch-stage-ease",
      values.projectSwitch.stageIn
    ),
    millisecondsDeclaration(
      "--motion-project-switch-title-delay",
      values.projectSwitch.titleInDelay
    ),
    ...transitionDeclarations(
      "--motion-project-switch-title-duration",
      "--motion-project-switch-title-ease",
      values.projectSwitch.titleIn
    )
  ]);
}

export function ProjectMotionTuner() {
  const initialValues = useMemo(readStoredValues, []);
  const values = useDialKit("Project Motion Curves", {
    fullLoad: {
      chromeTray: initialValues.fullLoad.chromeTray,
      stageStartDelay: [initialValues.fullLoad.stageStartDelay, 0, 2500, 10],
      stage: initialValues.fullLoad.stage,
      titleStartDelay: [initialValues.fullLoad.titleStartDelay, 0, 3000, 10],
      title: initialValues.fullLoad.title
    },
    projectSwitch: {
      exit: initialValues.projectSwitch.exit,
      stageIn: initialValues.projectSwitch.stageIn,
      titleInDelay: [initialValues.projectSwitch.titleInDelay, 0, 500, 10],
      titleIn: initialValues.projectSwitch.titleIn
    }
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const nextValues = normalizeProjectMotionTuningValues(values);

    applyValues(nextValues);
    persistValues(nextValues);
  }, [values]);

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return <DialRoot position="top-right" defaultOpen theme="light" />;
}
