import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <form className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="8"
            placeholder="Enter your message here"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </form>
      <div className="w-full md:w-1/2 p-6">
        <p className="text-lg mb-4">
          If you have any questions or would like to get in touch, please fill
          out the form on the left and we'll get back to you as soon as
          possible.
        </p>
        <p className="text-lg">
          Alternatively, you can email us directly at{" "}
          <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
