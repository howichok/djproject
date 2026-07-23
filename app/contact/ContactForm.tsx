"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const date = String(data.get("date") || "Date not decided");
    const place = String(data.get("location") || "");
    const services = String(data.get("services") || "");
    const story = String(data.get("story") || "");
    const subject = encodeURIComponent(`Wedding enquiry — ${name || "new couple"}`);
    const body = encodeURIComponent(
      `Name(s): ${name}\nEmail: ${email}\nDate: ${date}\nLocation in Italy: ${place}\nInterested in: ${services}\n\nWhat matters most:\n${story}`,
    );
    window.location.href = `mailto:bookings@djpositiv.com?subject=${subject}&body=${body}`;
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
        <label htmlFor="location">Where in Italy?</label>
        <input id="location" name="location" type="text" placeholder="City / venue" required />
      </div>
      <div className="field field-full">
        <label htmlFor="services">What do you need?</label>
        <select id="services" name="services" defaultValue="Image + music">
          <option>Image + music</option>
          <option>Moving image</option>
          <option>Live music</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="story">What matters most?</label>
        <textarea
          id="story"
          name="story"
          rows={5}
          placeholder="A few words about the day you are planning…"
          required
        />
      </div>
      <button className="button button-lime form-submit" type="submit">
        Send the details <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        Your email is used only to reply to this enquiry. Write directly:{" "}
        <a href="mailto:bookings@djpositiv.com">bookings@djpositiv.com</a>
      </p>
    </form>
  );
}
