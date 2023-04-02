import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-100">
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="w-full m-auto">
          <div className="text-center font-serif italic mb-16">
            <h1 className="text-4xl text-gray-900 font-bold mb-4">Portfolio</h1>
            <p className="text-lg text-gray-600">
              Take a look at some of my recent projects
            </p>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <div className="absolute px-4 -translate-x-1/2 bg-gray-100 left-1/2 dark:bg-gray-900">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://placehold.it/600x400"
                  alt="Project Image"
                  className="h-64 w-full object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="text-xl text-gray-900 font-semibold mb-2">
                    Project Name
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Technologies used: HTML, CSS, JavaScript
                  </p>
                  <p className="text-lg text-gray-900 mb-4">
                    A short description of the project.
                  </p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
