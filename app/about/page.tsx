import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const principles = [
  {
    number: "01",
    title: "Stay out of the way",
    copy: "The wedding comes first. The camera follows.",
  },
  {
    number: "02",
    title: "Listen before choosing",
    copy: "Your references start the conversation; they never become a template.",
  },
  {
    number: "03",
    title: "Keep the plan useful",
    copy: "Clear decisions before the day leave more room for spontaneity during it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="inner-page">
        <section className="about-hero">
          <p className="eyebrow">About</p>
          <h1 className="display">
            Present, never
            <br />
            <span>in the way.</span>
          </h1>
          <div className="about-hero-bottom">
            <p className="about-lede">
              DJ POSITIV brings moving image and live music under one direction
              for weddings across Italy.
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
            <p className="eyebrow">The connection</p>
            <h2 className="display">
              The camera and the booth share one skill:
              <br />
              <em>timing.</em>
            </h2>
            <p>
              Both require attention: knowing when to come closer, when to step
              back and when a moment needs room.
            </p>
            <p>
              That shared sense of timing keeps the visual story and the party
              connected without making the wedding feel produced.
            </p>
          </div>
        </section>

        <section className="manifesto-section" aria-labelledby="manifesto-title">
          <div className="manifesto-head">
            <p className="eyebrow">The standard</p>
            <h2 id="manifesto-title" className="display">
              How we
              <br />
              show up.
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
          <p className="eyebrow">The result</p>
          <blockquote className="display">
            “Nothing felt staged.
            <br />
            Nothing sounded borrowed.”
          </blockquote>
          <p className="quote-caption">That is the standard.</p>
        </section>

        <section className="about-next">
          <div>
            <p className="eyebrow">Available across Italy</p>
            <h2 className="display">Start with the date.</h2>
          </div>
          <Link className="button button-lime" href="/contact">
            Check availability <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
