import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main className="inner-page contact-page">
        <section className="contact-hero">
          <div className="contact-title-wrap">
            <p className="eyebrow">Available across Italy</p>
            <h1 className="display">
              Start with
              <br />
              <em>the date.</em>
            </h1>
          </div>
          <div className="contact-human-note">
            <p>
              A short message is enough. I&apos;ll ask the right questions from
              there.
            </p>
            <span>Personal reply · Two working days</span>
          </div>
        </section>

        <section className="contact-body" aria-label="Wedding enquiry">
          <div className="contact-aside">
            <p className="eyebrow">Tell me the basics</p>
            <h2>
              Date. City.
              <br />
              <em>What matters most.</em>
            </h2>
            <p>
              That is enough for a first reply. I&apos;ll tell you clearly if
              I&apos;m available and what makes sense for your wedding.
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
          <p className="eyebrow">A straight answer</p>
          <blockquote>
            Available means available.
            <br />
            <em>No long sales sequence.</em>
          </blockquote>
          <p>You&apos;ll get a personal reply with the next useful step.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
