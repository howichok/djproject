import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main className="inner-page contact-page">
        <section className="contact-hero">
          <div className="contact-title-wrap">
            <p className="eyebrow">Italy weddings only</p>
            <h1 className="display">
              Tell me about
              <br />
              <em>your day.</em>
            </h1>
          </div>
          <div className="contact-human-note">
            <p>
              You&apos;re not writing to a booking desk. You&apos;re writing
              directly to me.
            </p>
            <span>— DJ POSITIV</span>
          </div>
        </section>

        <section className="contact-body" aria-label="Wedding enquiry">
          <div className="contact-aside">
            <p className="eyebrow">A real conversation</p>
            <h2>
              You don&apos;t need to have it <em>all figured out.</em>
            </h2>
            <p>
              A date, a place and a feeling are enough. Tell me what matters to
              you, and I&apos;ll come back with honest ideas—without pressure.
            </p>
            <dl>
              <div>
                <dt>Where</dt>
                <dd>Weddings anywhere in Italy</dd>
              </div>
              <div>
                <dt>Reply</dt>
                <dd>Personally, within two working days</dd>
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

        <section className="contact-promise">
          <p className="eyebrow">What happens next</p>
          <blockquote>
            If your date is free, we start with a <em>conversation</em>—not a
            sales call.
          </blockquote>
          <p>No template pitch. No pressure. Just a clear answer from a real person.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
