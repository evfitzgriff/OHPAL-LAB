"use client";

import { FormEvent, useState } from "react";

const EMAIL_TARGET = "evan.griffith@tufts.edu";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (value: string) =>
    encodeURIComponent(value).replace(/%0A/g, "%0D%0A");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subjectBase = "OHPAL Lab inquiry";
    const subject =
      name.trim().length > 0
        ? `${subjectBase} from ${name.trim()}`
        : subjectBase;
    const body = message.trim();

    const query: string[] = [`subject=${encode(subject)}`];
    if (body.length > 0) {
      query.push(`body=${encode(body)}`);
    }

    window.location.href = `mailto:${EMAIL_TARGET}?${query.join("&")}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div>
        <label className="text-sm font-medium" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-medium" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring"
          placeholder="name@example.org"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-medium" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring"
          placeholder="How can we collaborate?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="rounded-xl border px-4 py-2 font-semibold hover:bg-gray-50"
      >
        Send Message
      </button>
      <p className="text-xs text-gray-500">
        
      </p>
    </form>
  );
}
