import Link from "next/link";
import { SiteFooter, SiteHeader, WaveBars } from "./components/SiteChrome";

const movements = [
  {
    number: "01",
    id: "morning",
    eyebrow: "Morning",
    title: "Let the day happen.",
    copy: "No retakes. No posing marathon. We notice what matters without pulling you away from it.",
    image: "/images/veil-portrait.jpg",
    alt: "Editorial portrait of a bride wearing a pearl-detailed veil",
  },
  {
    number: "02",
    id: "ceremony",
    eyebrow: "Ceremony",
    title: "Keep the voices.",
    copy: "The words, the nerves and the laugh that broke the tension—recorded clearly and edited without turning them into a trailer.",
    image: "/images/wedding-dance.jpg",
    alt: "Newlyweds dancing together at an outdoor night reception",
  },
  {
    number: "03",
    id: "after-dark",
    eyebrow: "After dark",
    title: "Give the party its own shape.",
    copy: "The music grows from your taste, your guests and what is actually happening on the floor—not from a standard wedding set.",
    image: "/images/dj-console.jpg",
    alt: "DJ mixing on a console under vivid club lighting",
  },
];

export default function Home() {
  return (
    <>
      <div className="scroll-meter" aria-hidden="true" />
      <SiteHeader active="home" />

      <main>
        <section className="home-hero" aria-labelledby="home-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Film + music for weddings in Italy</p>
              <h1 id="home-title" className="display hero-title">
                <span>Your wedding.</span>
                <span className="italic-line">Fully</span>
                <span>alive.</span>
              </h1>
              <div className="hero-bottom">
                <p>
                  Honest images. A dance floor with its own pulse. Planned
                  together, never copied from another wedding.
                </p>
                <div className="button-row">
                  <a className="button button-lime" href="#experience">
                    See how it works <span aria-hidden="true">↘</span>
                  </a>
                  <Link className="text-link" href="/contact">
                    Ask about your date <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hero-art" aria-label="Wedding reception at night">
              <div className="hero-image-wrap">
                <img
                  className="hero-image"
                  src="/images/wedding-dance.jpg"
                  alt="A newlywed couple dancing beneath string lights"
                />
                <span className="frame-corner frame-corner-a" aria-hidden="true" />
                <span className="frame-corner frame-corner-b" aria-hidden="true" />
              </div>
              <div className="record-seal" aria-hidden="true">
                <span>DP</span>
              </div>
              <div className="hero-wave">
                <WaveBars />
              </div>
            </div>
          </div>

          <div className="hero-ticker" aria-hidden="true">
            <div>
              <span>DJ POSITIV</span><b>✦</b><span>ITALY ONLY</span><b>✦</b>
              <span>IMAGE + MUSIC</span><b>✦</b><span>DJ POSITIV</span><b>✦</b>
              <span>ITALY ONLY</span><b>✦</b><span>IMAGE + MUSIC</span><b>✦</b>
            </div>
          </div>
        </section>

        <section id="experience" className="story-prologue">
          <h2 className="display prologue-title">
            One wedding.
            <br />
            <em>No copy-paste.</em>
          </h2>
        </section>

        <section className="story-chapters" aria-label="The wedding-day story">
          {movements.map((movement) => (
            <article
              className={`story-chapter chapter-${movement.id}`}
              key={movement.id}
            >
              <div className="chapter-copy">
                <p className="chapter-number">{movement.number}</p>
                <div>
                  <p className="eyebrow">{movement.eyebrow}</p>
                  <h2>{movement.title}</h2>
                  <p className="chapter-body">{movement.copy}</p>
                </div>
              </div>

              <div className="chapter-visual">
                <div className="chapter-image-mask">
                  <img src={movement.image} alt={movement.alt} loading="lazy" />
                </div>
                {movement.id === "after-dark" && (
                  <div className="release-wave" aria-hidden="true">
                    <WaveBars />
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="amplitude-strip" aria-label="Made around each couple">
          <p className="eyebrow">Made around you</p>
          <div className="amplitude-copy display">
            <span>Unforced.</span>
            <span className="italic-statement">Specific.</span>
            <span>Alive.</span>
          </div>
        </section>

        <section className="signature-section" aria-labelledby="signature-title">
          <div className="signature-intro">
            <p className="eyebrow">One direction from start to finish</p>
            <h2 id="signature-title" className="display">
              Your wedding,
              <br />
              <em>held together.</em>
            </h2>
            <p>
              Moving image and live music planned side by side, so the day has
              one pace instead of separate suppliers pulling in different directions.
            </p>
          </div>

          <div className="signature-rows">
            <article>
              <span>01</span>
              <p className="eyebrow">Moving image</p>
              <h3>Nothing staged.</h3>
              <p>Natural coverage, sharp editing and the voices worth keeping.</p>
            </article>
            <article>
              <span>02</span>
              <p className="eyebrow">Live music</p>
              <h3>Nothing generic.</h3>
              <p>A set guided by your taste and the people in front of us.</p>
            </article>
          </div>

          <Link className="button button-dark signature-link" href="/contact">
            Talk about your date <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="process-intro">
            <p className="eyebrow">How it works</p>
            <h2 id="process-title" className="display">
              Less planning noise.
              <br />
              <em>More certainty.</em>
            </h2>
            <p>
              One call to understand what matters. One clear proposal after that.
            </p>
          </div>
          <ol className="process-list">
            <li>
              <span className="process-no">01</span>
              <h3>Send the basics</h3>
              <p>Date, city and what you want from the day.</p>
            </li>
            <li>
              <span className="process-no">02</span>
              <h3>Get a clear proposal</h3>
              <p>Straight answers, honest scope and no inflated package.</p>
            </li>
            <li>
              <span className="process-no">03</span>
              <h3>Enjoy your wedding</h3>
              <p>We arrive prepared and stay tuned in.</p>
            </li>
          </ol>
        </section>

        <section className="closing-cta">
          <div className="closing-ring" aria-hidden="true">
            <i className="pulse-orbit pulse-orbit-one" />
            <i className="pulse-orbit pulse-orbit-two" />
            <span>DP</span>
          </div>
          <p className="eyebrow">Italy · 2026—2027</p>
          <h2 className="display">
            Ready when
            <br />
            <em>you are.</em>
          </h2>
          <Link className="button button-dark" href="/contact">
            Tell me the date <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
