export type ProjectMotionEase = [number, number, number, number];

export type ProjectMotionTransition = {
  type: "easing";
  duration: number;
  ease: ProjectMotionEase;
};

export type ProjectMotionTuningValues = {
  fullLoad: {
    chromeTray: ProjectMotionTransition;
    stageStartDelay: number;
    stage: ProjectMotionTransition;
    titleStartDelay: number;
    title: ProjectMotionTransition;
  };
  projectSwitch: {
    exit: ProjectMotionTransition;
    stageIn: ProjectMotionTransition;
    titleInDelay: number;
    titleIn: ProjectMotionTransition;
  };
};

export const projectMotionTuningStorageKey = "project-motion-tuning-values-v5";
export const projectMotionTuningEnabledStorageKey =
  "project-motion-tuning-enabled";

const standardEase: ProjectMotionEase = [0.4, 0, 0.2, 1];
const titleEase: ProjectMotionEase = [0.26, 0.22, 0.31, 1.24];

export const projectMotionTuningDefaults: ProjectMotionTuningValues = {
  fullLoad: {
    chromeTray: {
      type: "easing",
      duration: 0.9,
      ease: standardEase
    },
    stageStartDelay: 60,
    stage: {
      type: "easing",
      duration: 0.65,
      ease: standardEase
    },
    titleStartDelay: 180,
    title: {
      type: "easing",
      duration: 0.36,
      ease: titleEase
    }
  },
  projectSwitch: {
    exit: {
      type: "easing",
      duration: 0.15,
      ease: standardEase
    },
    stageIn: {
      type: "easing",
      duration: 0.5,
      ease: standardEase
    },
    titleInDelay: 110,
    titleIn: {
      type: "easing",
      duration: 0.35,
      ease: titleEase
    }
  }
};

export const projectMotionCssVariables = [
  {
    cssVariable: "--motion-project-load-chrome-duration",
    field: "duration",
    group: "fullLoad",
    key: "chromeTray"
  },
  {
    cssVariable: "--motion-project-load-chrome-ease",
    field: "ease",
    group: "fullLoad",
    key: "chromeTray"
  },
  {
    cssVariable: "--motion-project-load-stage-delay",
    field: "milliseconds",
    group: "fullLoad",
    key: "stageStartDelay"
  },
  {
    cssVariable: "--motion-project-load-stage-duration",
    field: "duration",
    group: "fullLoad",
    key: "stage"
  },
  {
    cssVariable: "--motion-project-load-stage-ease",
    field: "ease",
    group: "fullLoad",
    key: "stage"
  },
  {
    cssVariable: "--motion-project-load-title-delay",
    field: "milliseconds",
    group: "fullLoad",
    key: "titleStartDelay"
  },
  {
    cssVariable: "--motion-project-load-title-duration",
    field: "duration",
    group: "fullLoad",
    key: "title"
  },
  {
    cssVariable: "--motion-project-load-title-ease",
    field: "ease",
    group: "fullLoad",
    key: "title"
  },
  {
    cssVariable: "--motion-project-switch-exit-duration",
    field: "duration",
    group: "projectSwitch",
    key: "exit"
  },
  {
    cssVariable: "--motion-project-switch-exit-ease",
    field: "ease",
    group: "projectSwitch",
    key: "exit"
  },
  {
    cssVariable: "--motion-project-switch-stage-duration",
    field: "duration",
    group: "projectSwitch",
    key: "stageIn"
  },
  {
    cssVariable: "--motion-project-switch-stage-ease",
    field: "ease",
    group: "projectSwitch",
    key: "stageIn"
  },
  {
    cssVariable: "--motion-project-switch-title-delay",
    field: "milliseconds",
    group: "projectSwitch",
    key: "titleInDelay"
  },
  {
    cssVariable: "--motion-project-switch-title-duration",
    field: "duration",
    group: "projectSwitch",
    key: "titleIn"
  },
  {
    cssVariable: "--motion-project-switch-title-ease",
    field: "ease",
    group: "projectSwitch",
    key: "titleIn"
  }
] as const;

function readNumber(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function readEase(value: unknown, fallback: ProjectMotionEase) {
  if (!Array.isArray(value) || value.length !== 4) {
    return fallback;
  }

  const ease = value.map((item, index) =>
    readNumber(item, fallback[index])
  ) as ProjectMotionEase;

  return ease;
}

function readTransition(
  value: unknown,
  fallback: ProjectMotionTransition,
  legacyDurationMs?: unknown
): ProjectMotionTransition {
  const source =
    typeof value === "object" && value !== null
      ? (value as Partial<ProjectMotionTransition>)
      : {};
  const legacyDuration =
    typeof legacyDurationMs === "number" && Number.isFinite(legacyDurationMs)
      ? legacyDurationMs / 1000
      : fallback.duration;

  return {
    type: "easing",
    duration: readNumber(source.duration, legacyDuration),
    ease: readEase(source.ease, fallback.ease)
  };
}

export function cubicBezierValue(ease: ProjectMotionEase) {
  return `cubic-bezier(${ease.join(", ")})`;
}

export function normalizeProjectMotionTuningValues(
  value: unknown
): ProjectMotionTuningValues {
  const source =
    typeof value === "object" && value !== null
      ? (value as Partial<
          ProjectMotionTuningValues & {
            fullLoad: Partial<
              ProjectMotionTuningValues["fullLoad"] & {
                chromeTrayDuration: number;
                stageDuration: number;
                titleDuration: number;
              }
            >;
            projectSwitch: Partial<
              ProjectMotionTuningValues["projectSwitch"] & {
                exitDuration: number;
                stageInDuration: number;
                titleInDuration: number;
              }
            >;
          }
        >)
      : {};

  return {
    fullLoad: {
      chromeTray: readTransition(
        source.fullLoad?.chromeTray,
        projectMotionTuningDefaults.fullLoad.chromeTray,
        source.fullLoad?.chromeTrayDuration
      ),
      stageStartDelay: readNumber(
        source.fullLoad?.stageStartDelay,
        projectMotionTuningDefaults.fullLoad.stageStartDelay
      ),
      stage: readTransition(
        source.fullLoad?.stage,
        projectMotionTuningDefaults.fullLoad.stage,
        source.fullLoad?.stageDuration
      ),
      titleStartDelay: readNumber(
        source.fullLoad?.titleStartDelay,
        projectMotionTuningDefaults.fullLoad.titleStartDelay
      ),
      title: readTransition(
        source.fullLoad?.title,
        projectMotionTuningDefaults.fullLoad.title,
        source.fullLoad?.titleDuration
      )
    },
    projectSwitch: {
      exit: readTransition(
        source.projectSwitch?.exit,
        projectMotionTuningDefaults.projectSwitch.exit,
        source.projectSwitch?.exitDuration
      ),
      stageIn: readTransition(
        source.projectSwitch?.stageIn,
        projectMotionTuningDefaults.projectSwitch.stageIn,
        source.projectSwitch?.stageInDuration
      ),
      titleInDelay: readNumber(
        source.projectSwitch?.titleInDelay,
        projectMotionTuningDefaults.projectSwitch.titleInDelay
      ),
      titleIn: readTransition(
        source.projectSwitch?.titleIn,
        projectMotionTuningDefaults.projectSwitch.titleIn,
        source.projectSwitch?.titleInDuration
      )
    }
  };
}

export function getProjectMotionTuningInitScript() {
  return `(function(){try{var storage=null;try{storage=window.localStorage||window.sessionStorage;}catch(storageError){try{storage=window.sessionStorage;}catch(sessionError){storage=null;}}if(!storage){return;}var stored=storage.getItem(${JSON.stringify(
    projectMotionTuningEnabledStorageKey
  )});if(stored==="false"){var existingStyle=document.getElementById("project-motion-tuning-vars");if(existingStyle){existingStyle.remove();}return;}stored=storage.getItem(${JSON.stringify(
    projectMotionTuningStorageKey
  )});if(!stored){return;}var values=JSON.parse(stored);var pairs=${JSON.stringify(
    projectMotionCssVariables
  )};function bezier(ease){return "cubic-bezier("+ease.join(", ")+")";}var declarations=[];for(var i=0;i<pairs.length;i++){var pair=pairs[i];var group=values&&values[pair.group];var value=group&&group[pair.key];if(pair.field==="milliseconds"&&typeof value==="number"&&Number.isFinite(value)){declarations.push(pair.cssVariable+":"+Math.round(value)+"ms");}else if(pair.field==="duration"&&value&&typeof value.duration==="number"&&Number.isFinite(value.duration)){declarations.push(pair.cssVariable+":"+Math.round(value.duration*1000)+"ms");}else if(pair.field==="ease"&&value&&Array.isArray(value.ease)&&value.ease.length===4){declarations.push(pair.cssVariable+":"+bezier(value.ease));}}if(!declarations.length){return;}var style=document.getElementById("project-motion-tuning-vars");if(!style){style=document.createElement("style");style.id="project-motion-tuning-vars";style.setAttribute("data-project-motion-tuning","true");document.head.appendChild(style);}style.textContent=":root{"+declarations.join(";")+";}";}catch(error){}})();`;
}
