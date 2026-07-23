import Link from "next/link";
import type { CSSProperties } from "react";

type ActivePage = "home" | "about" | "contact";

export function SiteHeader({ active }: { active: ActivePage }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="DJ POSITIV home">
        <span>DJ</span>
        <i aria-hidden="true" />
        <span>POSITIV</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link className={active === "home" ? "active" : ""} href="/">Home</Link>
        <Link className={active === "about" ? "active" : ""} href="/about">About</Link>
        <Link className={active === "contact" ? "active" : ""} href="/contact">Contact</Link>
      </nav>
      <Link className="header-cta" href="/contact">
        Check your date <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export function WaveBars() {
  return (
    <div className="wave-bars" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <i key={index} style={{ "--bar": index } as CSSProperties} />
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-mark">
        <span>DJ</span>
        <i aria-hidden="true" />
        <span>POSITIV</span>
      </div>
      <div className="footer-grid">
        <p>
          Wedding films and DJ experiences
          <br />
          made with feeling.
        </p>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p className="footer-label">Enquiries</p>
          <a href="mailto:bookings@djpositiv.com">bookings@djpositiv.com</a>
          <p>Available for weddings across Italy</p>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026 DJ POSITIV</span>
        <span>Film the feeling. Score the night.</span>
      </div>
    </footer>
  );
}
