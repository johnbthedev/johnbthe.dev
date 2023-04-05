import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full m-auto">
          <div className="lg:text-center">
            <h2 className="text-base text-deep-indigo font-semibold tracking-wide uppercase">
              portfolio
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              See My Web Development Skills in Action
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore my projects and see how I bring my web development goals
              to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="img/coming-soon.jpg"
                alt="Project Image"
                className="h-64 w-full object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl text-gray-900 font-semibold mb-2">
                  Therapy With Esther
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Technologies used: React, Tailwind CSS
                </p>
                <p className="text-md text-gray-900 mb-4">
                  This website was created for a relationship therapist who
                  specializes in helping individuals and couples build healthy
                  and fulfilling relationships. The website features a modern
                  and inviting design, with easy-to-use navigation and
                  informative content about the therapist's services and
                  approach.
                </p>
                <p className="text-md text-gray-900 mb-4">
                  Still under construction.
                </p>

                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="img/coming-soon.jpg"
                alt="Project Image"
                className="h-64 w-full object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl text-gray-900 font-semibold mb-2">
                  NotJustSnkrs
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Technologies used: HTML, CSS, JavaScript, WooCommerce
                </p>
                <p className="text-md text-gray-900 mb-4">
                  This was created using WooCommerce to provide a seamless
                  shopping experience for sneakerheads and streetwear
                  enthusiasts. The website offers a wide selection of shoes,
                  clothing, and accessories from top brands such as Nike,
                  Adidas, and Supreme.
                </p>
                <p className="text-md text-gray-900 mb-4">
                  Still under construction.
                </p>

                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
