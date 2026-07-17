import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { getAllNotes, getNote } from "@/lib/notes";

export async function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/notes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Note not found | Adam Ferguson" };
  const title = `${note.title} | Adam Ferguson`;
  const url = `/notes/${slug}`;
  return {
    title,
    description: note.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: note.summary,
      url,
      siteName: "Adam Ferguson",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: note.summary,
    },
  };
}

export default async function NotePage({ params }: PageProps<"/notes/[slug]">) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <>
      <Nav />
      <main className="af-notes af-note-single">
        <Link href="/notes" className="af-note-back">
          ← All notes
        </Link>
        <article>
          <header className="af-note-head">
            <div className="af-notes-eyebrow">{note.date}</div>
            <h1 className="af-note-title">{note.title}</h1>
          </header>
          <div
            className="af-note-prose"
            dangerouslySetInnerHTML={{ __html: note.html }}
          />
        </article>
        <footer className="af-note-foot">
          <Link href="/notes" className="af-note-back">
            ← All notes
          </Link>
          <a href="mailto:adam@adamferguson.pro" className="af-note-contact">
            adam@adamferguson.pro
          </a>
        </footer>
      </main>
    </>
  );
}
