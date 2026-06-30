"use client";

import { useState, type FormEvent } from "react";

const TO = "info@site-guard.ai";

/**
 * Submits by composing a pre-filled email to the SiteGuard inbox using the
 * visitor's mail client — no backend or secrets required.
 *
 * To post to a hosted endpoint instead (e.g. Formspree), swap the body of
 * `handleSubmit` for a `fetch("https://formspree.io/f/XXXX", { method: "POST", body })`.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      `Organization: ${get("organization")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Industry: ${get("industry")}`,
      "",
      "What to detect:",
      get("message"),
    ];

    const subject = `SiteGuard demo request — ${get("organization") || get("name") || "new enquiry"}`;
    const href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Organization
        <input type="text" name="organization" placeholder="School or company" />
      </label>
      <label className="full">
        Work email
        <input type="email" name="email" placeholder="name@organization.com" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="Optional" />
      </label>
      <label>
        Industry
        <select name="industry" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Schools &amp; Campuses</option>
          <option>Manufacturing &amp; Warehousing</option>
          <option>Construction</option>
          <option>Healthcare &amp; Aged Care</option>
          <option>Retail &amp; Commercial</option>
          <option>Transport &amp; Logistics</option>
        </select>
      </label>
      <label className="full">
        What do you want to detect?
        <textarea
          name="message"
          rows={4}
          placeholder="Weapons, fire, PPE, vaping, intrusion, occupancy, reporting, multi-site visibility…"
        />
      </label>
      <div className="full">
        <button type="submit" className="button button-primary button-block button-lg">
          {sent ? "Opening your email…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
