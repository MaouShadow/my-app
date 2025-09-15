export default function Contact() {
  return (
    <section className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border p-3 rounded"
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
