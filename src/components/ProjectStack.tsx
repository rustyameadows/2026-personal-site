const layers = [0, 1, 2, 3, 4];

type ProjectStackProps = {
  className?: string;
};

export function ProjectStack({ className }: ProjectStackProps) {
  const classes = ["project-stack", className].filter(Boolean).join(" ");

  return (
    <span className={classes} aria-hidden="true">
      {layers.map((layer) => (
        <span className="project-stack__layer" data-layer={layer} key={layer} />
      ))}
    </span>
  );
}
