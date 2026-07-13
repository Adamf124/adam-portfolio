import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes — Adam Ferguson",
  description:
    "Short write-ups on real problems: a bug, a decision, a moment where something technical had to get explained to someone who doesn't code.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <Nav />
      <main className="af-notes">
        <header className="af-notes-header">
          <div className="af-notes-eyebrow">Notes</div>
          <h1 className="af-notes-title">
            Problems, <em>as they actually happened.</em>
          </h1>
          <p className="af-notes-intro">
            Short write-ups on real problems: a bug, a decision, a moment
            where something technical had to get explained to someone who
            doesn&apos;t code. Less finished than the work, closer to how it
            actually happened.
          </p>
        </header>
        <div className="af-notes-list">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="af-notes-item"
            >
              <div className="af-notes-item-date">{note.date}</div>
              <h2 className="af-notes-item-title">{note.title}</h2>
              <p className="af-notes-item-summary">{note.summary}</p>
              <span className="af-notes-item-more">Read the note →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
