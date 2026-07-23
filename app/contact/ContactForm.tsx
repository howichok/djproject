"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const date = String(data.get("date") || "Date not decided");
    const place = String(data.get("location") || "");
    const guests = String(data.get("guests") || "");
    const services = String(data.get("services") || "");
    const story = String(data.get("story") || "");
    const subject = encodeURIComponent(`Wedding enquiry — ${name || "new couple"}`);
    const body = encodeURIComponent(
      `Name(s): ${name}\nDate: ${date}\nLocation: ${place}\nGuests: ${guests}\nInterested in: ${services}\n\nTell us about it:\n${story}`,
    );
    window.location.href = `mailto:hello@vowvolume.studio?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field field-full">
        <label htmlFor="name">Your names</label>
        <input id="name" name="name" type="text" placeholder="Ana + Luca" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="field">
        <label htmlFor="date">Wedding date</label>
        <input id="date" name="date" type="date" />
      </div>
      <div className="field">
        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" placeholder="City / venue" />
      </div>
      <div className="field">
        <label htmlFor="guests">Approx. guests</label>
        <input id="guests" name="guests" type="number" min="1" placeholder="120" />
      </div>
      <div className="field field-full">
        <label htmlFor="services">What do you need?</label>
        <select id="services" name="services" defaultValue="Film + DJ">
          <option>Film + DJ</option>
          <option>Wedding film</option>
          <option>DJ + sound</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="story">What should the night feel like?</label>
        <textarea
          id="story"
          name="story"
          rows={5}
          placeholder="The atmosphere, the music you love, the part you cannot wait for…"
          required
        />
      </div>
      <button className="button button-lime form-submit" type="submit">
        Open enquiry email <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        This opens your email app with the details filled in. Prefer to write
        directly?{" "}
        <a href="mailto:hello@vowvolume.studio">hello@vowvolume.studio</a>
      </p>
    </form>
  );
}
