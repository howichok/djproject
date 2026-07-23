import { SiteFooter, SiteHeader, WaveBars } from "../components/SiteChrome";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main className="inner-page contact-page">
        <section className="contact-hero">
          <div className="contact-title-wrap">
            <p className="eyebrow">Check your date</p>
            <h1 className="display">
              Is your night
              <br />
              <em>still free?</em>
            </h1>
          </div>
          <div className="contact-wave-block">
            <p className="eyebrow">Signal open</p>
            <WaveBars />
            <p>Most replies land within two working days.</p>
          </div>
        </section>

        <section className="contact-body" aria-label="Wedding enquiry">
          <div className="contact-aside">
            <p className="eyebrow">Before we talk</p>
            <h2>Bring the feeling, not a finished plan.</h2>
            <p>
              A date and a rough location are enough to begin. We&apos;ll help
              you shape coverage, sound and timing from there.
            </p>
            <dl>
              <div>
                <dt>Based</dt>
                <dd>Italy / available across Europe</dd>
              </div>
              <div>
                <dt>Booking</dt>
                <dd>2026—2027 dates open</dd>
              </div>
              <div>
                <dt>Direct</dt>
                <dd>
                  <a href="mailto:bookings@djpositiv.com">
                    bookings@djpositiv.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </section>

        <section className="contact-after">
          <p className="eyebrow">What happens next</p>
          <div className="contact-next-grid">
            <article>
              <span>01</span>
              <h3>We check the date</h3>
              <p>A clear availability reply, usually within two working days.</p>
            </article>
            <article>
              <span>02</span>
              <h3>We meet properly</h3>
              <p>A relaxed video call about your people, place, music and priorities.</p>
            </article>
            <article>
              <span>03</span>
              <h3>You get one plan</h3>
              <p>A tailored proposal that brings film and sound into one considered arc.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
