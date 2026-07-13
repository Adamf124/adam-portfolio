import Link from "next/link";

export default function Nav() {
  return (
    <nav className="af-nav">
      <Link href="/" className="af-nav-logo">
        Adam Ferguson
      </Link>
      <div className="af-nav-links">
        <Link href="/#work">Work</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
