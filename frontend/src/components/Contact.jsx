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
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center font-serif italic mb-16">
          <h1 className="text-4xl text-gray-900 font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600">
            Let's connect and work together!
          </p>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
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
                type="submit"
                className="bg-sky-500 hover:bg-sky-700 text-white py-3 px-5 rounded-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
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
