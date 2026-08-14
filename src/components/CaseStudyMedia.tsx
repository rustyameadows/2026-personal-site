import Image from "next/image";
import type { ReactNode } from "react";

const placeholderAssets = {
  bannerDark: {
    height: 500,
    src: "/placeholders/gray-banner-dark.png",
    width: 1800
  },
  bannerLight: {
    height: 500,
    src: "/placeholders/gray-banner-light.png",
    width: 1800
  },
  bannerMid: {
    height: 500,
    src: "/placeholders/gray-banner-mid.png",
    width: 1800
  },
  landscapeLight: {
    height: 1000,
    src: "/placeholders/gray-landscape-light.png",
    width: 1600
  },
  landscapeMid: {
    height: 1000,
    src: "/placeholders/gray-landscape-mid.png",
    width: 1600
  },
  panoramaDark: {
    height: 600,
    src: "/placeholders/gray-panorama-dark.png",
    width: 1800
  },
  panoramaLight: {
    height: 600,
    src: "/placeholders/gray-panorama-light.png",
    width: 1800
  },
  panoramaMid: {
    height: 600,
    src: "/placeholders/gray-panorama-mid.png",
    width: 1800
  },
  portraitDark: {
    height: 1250,
    src: "/placeholders/gray-portrait-dark.png",
    width: 1000
  },
  portraitLight: {
    height: 1250,
    src: "/placeholders/gray-portrait-light.png",
    width: 1000
  },
  portraitMid: {
    height: 1250,
    src: "/placeholders/gray-portrait-mid.png",
    width: 1000
  },
  squareDark: {
    height: 1200,
    src: "/placeholders/gray-square-dark.png",
    width: 1200
  },
  squareLight: {
    height: 1200,
    src: "/placeholders/gray-square-light.png",
    width: 1200
  },
  squareMid: {
    height: 1200,
    src: "/placeholders/gray-square-mid.png",
    width: 1200
  },
  wideDark: {
    height: 700,
    src: "/placeholders/gray-wide-dark.png",
    width: 1600
  },
  wideLight: {
    height: 700,
    src: "/placeholders/gray-wide-light.png",
    width: 1600
  },
  wideMid: {
    height: 700,
    src: "/placeholders/gray-wide-mid.png",
    width: 1600
  }
} as const;

export type PlaceholderVariant = keyof typeof placeholderAssets;

export type CaseStudyMediaItem = {
  caption?: ReactNode;
  placeholder: PlaceholderVariant;
};

type CaseStudyFigureProps = CaseStudyMediaItem & {
  className?: string;
};

type CaseStudyFigureGridProps = {
  columns?: 2 | 3;
  items: CaseStudyMediaItem[];
};

type CaseStudyFactsProps = {
  items: Array<{
    label: string;
    value: ReactNode;
  }>;
};

export function CaseStudyFigure({
  caption,
  className,
  placeholder
}: CaseStudyFigureProps) {
  const asset = placeholderAssets[placeholder];

  return (
    <figure
      className={["case-study-figure", className].filter(Boolean).join(" ")}
    >
      <Image
        alt=""
        aria-hidden="true"
        className="case-study-figure__image"
        height={asset.height}
        sizes="100vw"
        src={asset.src}
        width={asset.width}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function CaseStudyFigureGrid({
  columns = 2,
  items
}: CaseStudyFigureGridProps) {
  return (
    <div
      className={`case-study-figure-grid case-study-figure-grid--${columns}`}
    >
      {items.map((item, index) => (
        <CaseStudyFigure
          caption={item.caption}
          key={`${item.placeholder}-${index}`}
          placeholder={item.placeholder}
        />
      ))}
    </div>
  );
}

export function CaseStudyFacts({ items }: CaseStudyFactsProps) {
  return (
    <dl className="case-study-facts">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
