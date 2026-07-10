import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
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
      <Marquee />

      <div id="work" className="af-work">
        <ProjectPanel
          index="01"
          eyebrow="E-commerce · Next.js / Stripe · 2025"
          title={
            <>
              Commerce, stripped to&nbsp;<em>essentials.</em>
            </>
          }
          body="Cheap Fabric Pots — a direct-to-grower storefront designed, built, and shipped solo. Next.js App Router, Stripe checkout, and a catalog tuned for one job: getting growers to the right pot fast."
          linkHref="https://github.com/Adamf124/cheapfabricpots"
          linkLabel="View Source"
          background="#0E1114"
          imageSrc={getProjectImageSrc("fabric-pots")}
          imageAlt="Cheap Fabric Pots screenshot"
          imageFilenameHint="public/images/projects/fabric-pots.jpg"
        />

        <ProjectPanel
          index="02"
          eyebrow="Marketing Site · AI Handoff · 2026"
          title={
            <>
              From AI mockup to <em>production.</em>
            </>
          }
          body="A home-services site designed in Claude, exported as a handoff bundle, then implemented pixel-for-pixel in Next.js. A working study in AI-native process: design fast, refine by hand, ship real code."
          linkHref="https://github.com/Adamf124/home-services-site"
          linkLabel="View Source"
          background="#101312"
          imageOnLeft
          imageSrc={getProjectImageSrc("home-services")}
          imageAlt="Home Services site screenshot"
          imageFilenameHint="public/images/projects/home-services.jpg"
          priority
        />

        <ProjectPanel
          index="03"
          eyebrow="Interactive · GSAP / Canvas · 2026"
          title={
            <>
              The portfolio <em>is</em> the case&nbsp;study.
            </>
          }
          body="The page you're reading. A particle field rendered on canvas, scroll choreography in GSAP, and a restrained type system — designed with AI, tuned by hand, open source."
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
