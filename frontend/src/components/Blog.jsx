import React from "react";

export default function Blog() {
  return (
    <section id="blog">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center font-serif italic mb-16">
          <h1 className="text-4xl text-gray-900 font-bold mb-4">
            Thinking Out Loud
          </h1>
          <p className="text-lg text-gray-600">
            My web development and personal blog
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

        <div className="mt-4 flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="p-6">
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    Post Title 1
                  </h3>
                </a>
                <p className="mt-1 text-sm text-gray-500">April 1, 2023</p>
                <p className="mt-1 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus bibendum dolor at consequat rhoncus.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Read More &rarr;
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
