export default function ContactFooter() {
  return (
    <>
      <div id="contact" className="af-contact">
        <div className="af-contact-eyebrow" data-reveal>
          Available for select work
        </div>
        <a
          href="mailto:adam@adamferguson.pro"
          className="af-contact-email"
          data-reveal
        >
          adam@adamferguson.pro
        </a>
      </div>
      <footer className="af-footer">
        <div className="af-footer-inner">
          <span>© 2026 Adam Ferguson — Atlanta, GA</span>
          <span className="af-footer-links">
            <a href="https://github.com/Adamf124" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adamferguson124/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
