import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="af-about">
      <div className="af-about-inner">
        <div className="af-about-photo-wrap" data-reveal>
          <div className="af-about-photo-frame" />
          <Image
            src="/images/about/adam.jpg"
            alt="Adam Ferguson"
            className="af-about-photo"
            width={444}
            height={555}
          />
        </div>
        <div className="af-about-content">
          <div className="af-about-eyebrow" data-reveal>
            About
          </div>
          <h2 className="af-about-title" data-reveal>
            What three years of teaching taught me about building.
          </h2>
          <p className="af-about-body" data-reveal>
            Atlanta-based developer. Three years teaching full-stack
            development to bootcamp cohorts at Georgia Tech, work that trains
            one specific skill: finding where someone&apos;s understanding
            breaks, then explaining the same idea a different way until it
            holds.
          </p>
          <p className="af-about-body" data-reveal>
            I&apos;ve carried that into the work itself. Storefronts,
            marketing sites, and internal tools, shipped end to end, for
            clients who don&apos;t read code and don&apos;t need to. Today the
            process runs through Claude and Claude Code: design in Claude,
            refine by hand, ship in Next.js. The tools changed. Making
            something clear and correct didn&apos;t.
          </p>
          <p className="af-about-availability" data-reveal>
            Open to full-time technical roles as well as select project work.
          </p>
          <div className="af-about-stack" data-reveal>
            React · Node · Next.js · Stripe · Shopify · Git
          </div>
        </div>
      </div>
    </section>
  );
}
