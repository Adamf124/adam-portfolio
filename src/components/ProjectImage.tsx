import Image from "next/image";

type ProjectImageProps = {
  src: string | null;
  alt: string;
  title: string;
  filenameHint: string;
  priority?: boolean;
};

/**
 * Renders the real screenshot when one exists at the expected path, otherwise
 * a styled placeholder that tells whoever is filling in content exactly what
 * filename to drop in. No code changes needed to swap it later.
 */
export default function ProjectImage({
  src,
  alt,
  title,
  filenameHint,
  priority,
}: ProjectImageProps) {
  if (src) {
    return (
      <Image
        className="af-project-image"
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    );
  }

  return (
    <div className="af-project-placeholder" role="img" aria-label={alt}>
      <span className="af-project-placeholder-title">{title}</span>
      <span className="af-project-placeholder-hint">
        Drop a screenshot at <code>{filenameHint}</code> to replace this
        placeholder.
      </span>
    </div>
  );
}
