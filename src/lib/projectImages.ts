import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const PROJECTS_DIR = path.join(process.cwd(), "public", "images", "projects");

/**
 * Looks for public/images/projects/<slug>.{jpg,png,webp,avif} and returns the
 * public URL if one exists, or null so callers can render a placeholder.
 * Drop a file with the right slug name in and the real screenshot shows up
 * automatically, no code changes needed.
 */
export function getProjectImageSrc(slug: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(PROJECTS_DIR, `${slug}${ext}`))) {
      return `/images/projects/${slug}${ext}`;
    }
  }
  return null;
}
