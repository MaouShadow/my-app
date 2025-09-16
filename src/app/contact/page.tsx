"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form data here (e.g., send to API)
    console.log({ name, email, message });
  };

  return (
    <section className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border p-3 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
