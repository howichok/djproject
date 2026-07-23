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
    note: "Documentary coverage · Direction only when it helps",
  },
  {
    number: "02",
    id: "promise",
    eyebrow: "The promise",
    title: "Your film should move like the day felt.",
    copy: "Not a highlight reel assembled by habit. A living edit built from your voices, the pauses between them, and the people who made the room feel like home.",
    image: "/images/wedding-dance.jpg",
    alt: "Newlyweds dancing together at an outdoor night reception",
    note: "4K multi-camera film · Vows and speeches captured cleanly",
  },
  {
    number: "03",
    id: "release",
    eyebrow: "The release",
    title: "Then the room changes key.",
    copy: "We read the floor in real time—no rigid playlist, no microphone theatre. Just a set that knows when to hold back, when to turn, and when to let the chorus hit.",
    image: "/images/dj-console.jpg",
    alt: "DJ mixing on a console under vivid club lighting",
    note: "Open-format DJ set · Concert-grade sound · Discreet hosting",
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
              <p className="eyebrow hero-eyebrow">Wedding films + DJ experiences</p>
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
                <span>V</span>
              </div>
              <div className="hero-timecode" aria-hidden="true">
                REC&nbsp; 23:48:16
              </div>
              <div className="hero-wave">
                <span className="eyebrow">Room level</span>
                <WaveBars />
              </div>
              <p className="photo-credit">One story / two disciplines</p>
            </div>
          </div>

          <div className="hero-ticker" aria-hidden="true">
            <div>
              <span>WEDDING FILMS</span><b>✦</b><span>DJ + SOUND</span><b>✦</b>
              <span>ONE CREATIVE TEAM</span><b>✦</b><span>WEDDING FILMS</span><b>✦</b>
              <span>DJ + SOUND</span><b>✦</b><span>ONE CREATIVE TEAM</span><b>✦</b>
            </div>
          </div>
        </section>

        <section id="experience" className="story-prologue">
          <div className="story-prologue-top">
            <p className="eyebrow">Your day, in three movements</p>
            <p className="chapter-index">01—03</p>
          </div>
          <h2 className="display prologue-title">
            It starts with a <em>whisper.</em>
            <br />
            It ends at full volume.
          </h2>
          <div className="prologue-foot">
            <p>Scroll into the story</p>
            <span aria-hidden="true">↓</span>
          </div>
        </section>

        <section className="story-chapters" aria-label="The wedding-day story">
          {movements.map((movement, index) => (
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
                <div className="film-label">
                  <span>V/V — A{index + 1}</span>
                  <span>{movement.note}</span>
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
          <p className="eyebrow">The Vow / Volume approach</p>
          <div className="amplitude-copy display">
            <span>Real people.</span>
            <span className="outline">Real rhythm.</span>
            <span>No performance required.</span>
          </div>
        </section>

        <section className="services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Two disciplines / one point of view</p>
            <h2 id="services-title" className="display">
              Keep the feeling.
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
                <li><span>Cinematic highlight film</span><span>05–08 min</span></li>
                <li><span>Full ceremony film</span><span>Multi-cam</span></li>
                <li><span>Vows + speeches</span><span>Clean audio</span></li>
                <li><span>Vertical teaser</span><span>48 hours</span></li>
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
                <li><span>Open-format DJ set</span><span>Live mix</span></li>
                <li><span>Sound system</span><span>Room-tuned</span></li>
                <li><span>Wireless microphones</span><span>Discreet</span></li>
                <li><span>Music direction</span><span>Built with you</span></li>
              </ul>
              <Link className="panel-link" href="/contact">
                Start your sound brief <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="process-intro">
            <p className="eyebrow">How the night comes together</p>
            <h2 id="process-title" className="display">One conversation. No crossed wires.</h2>
            <p>
              Film and music are planned in the same room, so the schedule,
              energy and important moments all move as one.
            </p>
          </div>
          <ol className="process-list">
            <li>
              <span className="process-no">01</span>
              <h3>Tell us the atmosphere</h3>
              <p>What you love, what you never want, and what the room should feel like.</p>
            </li>
            <li>
              <span className="process-no">02</span>
              <h3>We shape the arc</h3>
              <p>A calm, useful plan for coverage, sound, entrances, speeches and the dance floor.</p>
            </li>
            <li>
              <span className="process-no">03</span>
              <h3>Live the day</h3>
              <p>We stay alert, unobtrusive and ready for the moments no schedule could predict.</p>
            </li>
            <li>
              <span className="process-no">04</span>
              <h3>Press play, years later</h3>
              <p>A film with a pulse—and a night your guests still talk about.</p>
            </li>
          </ol>
        </section>

        <section className="closing-cta">
          <div className="closing-ring" aria-hidden="true">
            <span>VV</span>
          </div>
          <p className="eyebrow">Now booking 2026—2027</p>
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
