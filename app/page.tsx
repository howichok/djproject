import Link from "next/link";
import { SiteFooter, SiteHeader, WaveBars } from "./components/SiteChrome";

const movements = [
  {
    number: "01",
    id: "quiet",
    eyebrow: "The quiet before",
    title: "Anticipation has its own soundtrack.",
    copy: "The dress before the zip. A hand finding another hand. The room taking one last breath. We stay close enough to feel it and quiet enough not to change it.",
    image: "/images/veil-portrait.jpg",
    alt: "Editorial portrait of a bride wearing a pearl-detailed veil",
  },
  {
    number: "02",
    id: "promise",
    eyebrow: "The promise",
    title: "Your film should move like the day felt.",
    copy: "Not a highlight reel assembled by habit. A living edit built from your voices, the pauses between them, and the people who made the room feel like home.",
    image: "/images/wedding-dance.jpg",
    alt: "Newlyweds dancing together at an outdoor night reception",
  },
  {
    number: "03",
    id: "release",
    eyebrow: "The release",
    title: "Then the room changes key.",
    copy: "We read the floor in real time—no rigid playlist, no microphone theatre. Just a set that knows when to hold back, when to turn, and when to let the chorus hit.",
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
              <p className="eyebrow hero-eyebrow">Wedding films + DJ experiences in Italy</p>
              <h1 id="home-title" className="display hero-title">
                <span>The night</span>
                <span>you never</span>
                <span className="italic-line">want to</span>
                <span>forget.</span>
              </h1>
              <div className="hero-bottom">
                <p>
                  We film the glances you almost missed, then score the room
                  until the last light comes on.
                </p>
                <div className="button-row">
                  <a className="button button-lime" href="#experience">
                    See the experience <span aria-hidden="true">↘</span>
                  </a>
                  <Link className="text-link" href="/contact">
                    Check your date <span aria-hidden="true">↗</span>
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
              <span>DJ POSITIV</span><b>✦</b><span>WEDDING FILMS</span><b>✦</b>
              <span>DJ + SOUND</span><b>✦</b><span>DJ POSITIV</span><b>✦</b>
              <span>WEDDING FILMS</span><b>✦</b><span>DJ + SOUND</span><b>✦</b>
            </div>
          </div>
        </section>

        <section id="experience" className="story-prologue">
          <h2 className="display prologue-title">
            It starts with a <em>whisper.</em>
            <br />
            It ends at full volume.
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
                {movement.id === "release" && (
                  <div className="release-wave" aria-hidden="true">
                    <WaveBars />
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="amplitude-strip" aria-label="Our creative approach">
          <p className="eyebrow">The DJ POSITIV approach</p>
          <div className="amplitude-copy display">
            <span>Real people.</span>
            <span className="italic-statement">Real rhythm.</span>
            <span>No performance required.</span>
          </div>
        </section>

        <section className="services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Two disciplines / one point of view</p>
            <h2 id="services-title" className="display">
              Keep the <em>feeling.</em>
              <br />
              Move the room.
            </h2>
          </div>

          <div className="service-split">
            <article className="service-panel service-film">
              <div className="service-panel-head">
                <p className="service-index">01</p>
                <p className="eyebrow">Wedding films</p>
              </div>
              <h3>Frame by frame</h3>
              <p className="service-lead">
                Story-first films with the polish of an editorial and the
                honesty of a home movie.
              </p>
              <ul>
                <li>The day, honestly observed</li>
                <li>Vows and voices, kept forever</li>
                <li>A film that feels like you</li>
              </ul>
              <Link className="panel-link" href="/contact">
                Build your film coverage <span aria-hidden="true">↗</span>
              </Link>
            </article>

            <article className="service-panel service-dj">
              <div className="service-panel-head">
                <p className="service-index">02</p>
                <p className="eyebrow">DJ + sound</p>
              </div>
              <h3>Beat by beat</h3>
              <p className="service-lead">
                A room-aware set shaped around your taste—not a wedding
                playlist with your names added.
              </p>
              <ul>
                <li>A set built around your taste</li>
                <li>Sound shaped for the room</li>
                <li>Energy read in real time</li>
              </ul>
              <Link className="panel-link" href="/contact">
                Start your sound brief <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="process-intro">
            <p className="eyebrow">Simple from the start</p>
            <h2 id="process-title" className="display">
              One conversation.
              <br />
              <em>No crossed wires.</em>
            </h2>
            <p>
              Tell us how you want it to feel. We take care of the rest.
            </p>
          </div>
          <ol className="process-list">
            <li>
              <span className="process-no">01</span>
              <h3>Tell us about you</h3>
              <p>Your people, your music, your kind of night.</p>
            </li>
            <li>
              <span className="process-no">02</span>
              <h3>We make it yours</h3>
              <p>One thoughtful plan for the film and the dance floor.</p>
            </li>
            <li>
              <span className="process-no">03</span>
              <h3>Be completely there</h3>
              <p>We read the room. You live the moment.</p>
            </li>
          </ol>
        </section>

        <section className="closing-cta">
          <div className="closing-ring" aria-hidden="true">
            <i className="pulse-orbit pulse-orbit-one" />
            <i className="pulse-orbit pulse-orbit-two" />
            <span>DP</span>
          </div>
          <p className="eyebrow">Italy weddings · Now booking 2026—2027</p>
          <h2 className="display">
            Let&apos;s make
            <br />
            <em>some noise.</em>
          </h2>
          <Link className="button button-dark" href="/contact">
            Check your date <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
