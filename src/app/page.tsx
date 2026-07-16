import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollFX from "@/components/ScrollFX";
import ProjectPanel from "@/components/ProjectPanel";
import About from "@/components/About";
import ContactFooter from "@/components/ContactFooter";
import { getProjectImageSrc } from "@/lib/projectImages";

const THIS_SITE_REPO = "https://github.com/Adamf124/adam-portfolio";

export default function Home() {
  return (
    <>
      <ScrollFX />
      <Nav />
      <Hero />

      <div id="work" className="af-work">
        <ProjectPanel
          index="01"
          eyebrow="E-commerce · Next.js / Stripe · 2025"
          title={
            <>
              Built for one job: getting growers to the right pot fast.
            </>
          }
          body="Cheap Fabric Pots, a direct-to-grower storefront designed, built, and shipped solo. Next.js App Router, Stripe checkout, and a catalog tuned for one job: getting growers to the right pot fast."
          reasoning="Payments came down to documentation. Every processor had a checkout API; Stripe was the one whose docs could be followed end to end without a support thread, whose hookups worked on the first pass, and whose invoicing came in the same package instead of as a second integration. Integration cost is mostly reading cost. The clearest manual won."
          linkHref="https://github.com/Adamf124/cheapfabricpots"
          linkLabel="View Source"
          background="#0E1114"
          imageSrc={getProjectImageSrc("fabric-pots")}
          imageAlt="Cheap Fabric Pots screenshot"
          imageFilenameHint="public/images/projects/fabric-pots.jpg"
          imageFit="contain"
        />

        <ProjectPanel
          index="02"
          eyebrow="Marketing Site · AI Handoff · 2026"
          title={
            <>
              Designed in Claude. Shipped pixel-for-pixel in Next.js.
            </>
          }
          body="A home-services site designed in Claude, exported as a handoff bundle, then implemented pixel-for-pixel in Next.js. A working study in AI-native process: design fast, refine by hand, ship real code."
          reasoning="The hard call in an AI handoff is what to keep. A design prototype's code is built for iteration speed, not production, so the structure was thrown away and only the rendered result was treated as the spec. Pixel-for-pixel meant matching output, not porting markup, and every place the mockup had been vague (breakpoints, image sizing, states it never showed) had to become an explicit decision."
          linkHref="https://github.com/Adamf124/home-services-site"
          linkLabel="View Source"
          background="#101312"
          imageOnLeft
          imageSrc={getProjectImageSrc("home-services")}
          imageAlt="Home Services site screenshot"
          imageFilenameHint="public/images/projects/home-services.jpg"
          imageFit="contain"
          mediaAspect="5 / 4"
          priority
        />

        <ProjectPanel
          index="03"
          eyebrow="Interactive · GSAP / Canvas · 2026"
          title={
            <>
              This page is the proof. GSAP and canvas, tuned to survive
              mobile.
            </>
          }
          body="The page you're reading. A particle field rendered on canvas, scroll choreography in GSAP, and a restrained type system. Designed with AI, tuned by hand, open source."
          reasoning="The open question during the build: these pinned, scroll-scrubbed panels are the identity of the page and also its biggest mobile-performance risk. The options were to strip the effect on phones or keep it and pay the cost down elsewhere. It stayed, and the budget came out of the particle field instead: fewer particles at a lower pixel-ratio cap, a shorter parallax range, and the canvas loop paused whenever the tab is hidden."
          linkHref={THIS_SITE_REPO}
          linkLabel="View Source"
          background="#12100E"
          imageSrc={getProjectImageSrc("portfolio")}
          imageAlt="Screenshot of this portfolio site"
          imageFilenameHint="public/images/projects/portfolio.jpg"
        />
      </div>

      <About />
      <ContactFooter />
    </>
  );
}
