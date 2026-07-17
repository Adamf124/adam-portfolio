import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/notes";

const SITE_URL = "https://adamferguson.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getAllNotes();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/notes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...notes.map((note) => ({
      url: `${SITE_URL}/notes/${note.slug}`,
      lastModified: note.date ? new Date(note.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
