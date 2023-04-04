import React from "react";

function Services() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center">
          <h2 className="text-base text-deep-indigo font-semibold tracking-wide uppercase">
            services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Web Development Services with a Personal Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the web development services I offer and how they can help
            you
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-purple text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Website Design and Development
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    From concept to launch, I offer full website design and
                    development services tailored to your specific needs. I
                    specialize in creating visually stunning and user-friendly
                    websites that are optimized for performance and
                    functionality.
                  </p>
                </div>
              </div>
            </li>

            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-purple text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Responsive Design
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    In today's mobile-first world, it's essential that your
                    website is optimized for viewing on a range of devices. I
                    can ensure that your website looks great and functions
                    seamlessly on desktops, tablets, and mobile devices.
                  </p>
                </div>
              </div>
            </li>

            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-purple text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Website Maintenance and Updates
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    A website is an ever-evolving entity that requires regular
                    updates and maintenance to remain fully functional. I offer
                    ongoing maintenance and support services to ensure that your
                    website stays up-to-date and runs smoothly at all times.
                  </p>
                </div>
              </div>
            </li>

            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-purple text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Search Engine Optimization (SEO)
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    To help your website rank higher in search engine results, I
                    offer comprehensive SEO services, including keyword
                    research, on-page optimization, and link building. With my
                    help, you can increase your website's visibility and drive
                    more traffic to your online presence.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
