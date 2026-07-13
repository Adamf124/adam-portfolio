import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Note = NoteMeta & {
  html: string;
};

/**
 * Notes live as markdown files in content/notes/. Adding an entry is dropping
 * in one .md file with `title`, `date`, and `summary` frontmatter — no code
 * changes. Set `draft: true` in frontmatter to keep an unfinished entry out
 * of the site entirely.
 */
function noteFiles(): string[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md");
}

function parseNote(file: string): Note | null {
  const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
  const { data, content } = matter(raw);
  if (data.draft) return null;
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title ?? file,
    date: data.date ?? "",
    summary: data.summary ?? "",
    html: marked.parse(content, { async: false }),
  };
}

export function getAllNotes(): Note[] {
  return noteFiles()
    .map(parseNote)
    .filter((n): n is Note => n !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNote(slug: string): Note | null {
  const safe = slug.replace(/[^a-z0-9-]/gi, "");
  if (!safe || safe.toLowerCase() === "readme") return null;
  if (!fs.existsSync(path.join(NOTES_DIR, `${safe}.md`))) return null;
  return parseNote(`${safe}.md`);
}
