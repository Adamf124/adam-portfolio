const TEXT =
  "Selected Work — Cheap Fabric Pots — Home Services — This Site — Selected Work — Cheap Fabric Pots — Home Services — This Site — ";

export default function Marquee() {
  return (
    <div className="af-marquee" aria-hidden="true">
      <div className="af-marquee-track">
        <span className="af-marquee-text">{TEXT}</span>
        <span className="af-marquee-text">{TEXT}</span>
      </div>
    </div>
  );
}
