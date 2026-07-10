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
            Craft, without the&nbsp;<em>noise.</em>
          </h2>
          <p className="af-about-body" data-reveal>
            Atlanta-based developer and educator. I spent three years
            mentoring full-stack cohorts at Georgia Tech&apos;s coding
            bootcamp, and I&apos;ve shipped storefronts, marketing sites, and
            internal tools end-to-end.
          </p>
          <p className="af-about-body" data-reveal>
            Today I work AI-native — design in Claude, refine by hand, ship in
            Next.js. The tools are new; the standard isn&apos;t.
          </p>
          <div className="af-about-stack" data-reveal>
            React · Node · Next.js · Stripe · Shopify · Git
          </div>
        </div>
      </div>
    </section>
  );
}
