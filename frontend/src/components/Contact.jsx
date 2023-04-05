import { React, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    setStatus(data.message);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <h2 className="text-base text-deep-indigo font-semibold tracking-wide uppercase">
            contact
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
            Have any questions or comments? Please don't hesitate to reach out!
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-10">
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message here"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <div className="mt-6">
              <button
                disabled
                type="submit"
                className="line-through bg-deep-indigo hover:bg-deep-purple text-white py-3 px-5 rounded-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
              <a
                href="mailto:hi@johnbthe.dev"
                className="pl-6 text-blue-500 hover:text-blue-700"
              >
                Email Me &rarr;
              </a>
            </div>
          </form>
          {status && (
            <div className="text-center font-serif italic mb-16">{status}</div>
          )}
        </div>
      </div>
    </section>
  );
}
