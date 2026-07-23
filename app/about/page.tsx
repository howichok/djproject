import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const principles = [
  {
    number: "01",
    title: "Instinct over interruption",
    copy: "We look for what is already true instead of manufacturing a moment for the camera.",
  },
  {
    number: "02",
    title: "Taste over trends",
    copy: "The film and the set should still feel like you long after this season’s references disappear.",
  },
  {
    number: "03",
    title: "Energy over ego",
    copy: "The work is not about being the loudest supplier in the room. It is about making the room feel alive.",
  },
  {
    number: "04",
    title: "One arc, not two vendors",
    copy: "Film, sound and timing share the same creative plan from the first call to the last song.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="inner-page">
        <section className="about-hero">
          <p className="eyebrow">About DJ POSITIV</p>
          <h1 className="display">
            We don&apos;t stand
            <br />
            <span>outside the feeling.</span>
          </h1>
          <div className="about-hero-bottom">
            <p className="about-lede">
              One creative team for the two things that shape how a wedding is
              remembered: what you see, and what you feel when the music starts.
            </p>
            <div className="about-disc" aria-hidden="true">
              <span>DP</span>
            </div>
          </div>
        </section>

        <section className="origin-section">
          <div className="origin-media">
            <img
              src="/images/dj-console.jpg"
              alt="Hands working across a professional DJ console"
            />
          </div>
          <div className="origin-copy">
            <p className="eyebrow">Why both?</p>
            <h2 className="display">Because timing is everything.</h2>
            <p>
              A film editor and a DJ do the same essential work: they listen,
              feel the pace, and know exactly when a moment needs space—or a
              beat.
            </p>
            <p>
              DJ POSITIV brings those instincts together. The result is a
              quieter presence during the intimate parts, a sharper sense of
              the whole day&apos;s arc, and one less handoff for weddings
              anywhere in Italy.
            </p>
          </div>
        </section>

        <section className="manifesto-section" aria-labelledby="manifesto-title">
          <div className="manifesto-head">
            <p className="eyebrow">Our working principles</p>
            <h2 id="manifesto-title" className="display">
              The way we
              <br />
              enter a room.
            </h2>
          </div>
          <div className="manifesto-list">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-quote">
          <p className="eyebrow">Our measure of a good night</p>
          <blockquote className="display">
            “You forgot we were filming.
            <br />
            You forgot to leave the dance floor.”
          </blockquote>
          <p className="quote-caption">That is the whole idea.</p>
        </section>

        <section className="about-next">
          <div>
            <p className="eyebrow">If this feels like your pace</p>
            <h2 className="display">Tell us what you&apos;re planning.</h2>
          </div>
          <Link className="button button-lime" href="/contact">
            Start the conversation <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
