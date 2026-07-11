import type { ReactNode } from "react";
import ProjectImage from "./ProjectImage";

type ProjectPanelProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  reasoning?: string;
  linkHref: string;
  linkLabel: string;
  background: string;
  imageOnLeft?: boolean;
  imageSrc: string | null;
  imageAlt: string;
  imageFilenameHint: string;
  imageFit?: "cover" | "contain";
  priority?: boolean;
};

export default function ProjectPanel({
  index,
  eyebrow,
  title,
  body,
  reasoning,
  linkHref,
  linkLabel,
  background,
  imageOnLeft = false,
  imageSrc,
  imageAlt,
  imageFilenameHint,
  imageFit = "cover",
  priority,
}: ProjectPanelProps) {
  const media = (
    <div
      className={`af-panel-media${imageFit === "contain" ? " contain" : ""}`}
      data-reveal
    >
      <div className="af-panel-parallax" data-parallax>
        <ProjectImage
          src={imageSrc}
          alt={imageAlt}
          title={eyebrow}
          filenameHint={imageFilenameHint}
          priority={priority}
        />
      </div>
    </div>
  );

  const copy = (
    <div className="af-panel-copy">
      <div className="af-panel-index af-mono" data-reveal>
        {index}
      </div>
      <div className="af-panel-eyebrow" data-reveal>
        {eyebrow}
      </div>
      <h2 className="af-panel-title" data-reveal>
        {title}
      </h2>
      <p className="af-panel-body" data-reveal>
        {body}
      </p>
      {reasoning && (
        <p className="af-panel-reasoning" data-reveal>
          <span className="af-panel-reasoning-label">The tradeoff</span>
          {reasoning}
        </p>
      )}
      <div className="af-panel-links" data-reveal>
        <a href={linkHref} target="_blank" rel="noopener noreferrer">
          {linkLabel} ↗
        </a>
      </div>
    </div>
  );

  return (
    <section
      data-panel
      className="af-panel"
      style={{ background }}
    >
      <div className={`af-panel-inner${imageOnLeft ? " reverse" : ""}`}>
        {imageOnLeft ? (
          <>
            {media}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {media}
          </>
        )}
      </div>
    </section>
  );
}
