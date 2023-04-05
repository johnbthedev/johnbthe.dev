import React from "react";

function Skills() {
  return (
    <section id="skills" className="bg-gray-100">
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-deep-indigo font-semibold tracking-wide uppercase">
            skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Web Development Skills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the skills that make me a competent and proficient web
            developer
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
                    Proficient in HTML, CSS, and JavaScript
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    My skills in these core technologies allow me to build
                    visually appealing and interactive websites. I have
                    experience using HTML to structure content, CSS to style it,
                    and JavaScript to create dynamic and interactive elements.
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
                    Experienced in working with web development frameworks
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    I have experience and familiarity with popular web
                    development frameworks such as React and Bootstrap. I have
                    used these frameworks to build complex web applications and
                    websites, leveraging their built-in features and
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
                    Knowledgeable in responsive design
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    I can create websites that are optimized for various devices
                    and accessible to all users. I understand the importance of
                    responsive design and have experience using media queries,
                    flexbox, and grid systems to create layouts that adapt to
                    different screen sizes.
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
                    Strong problem-solving and debugging skills
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    I have the ability to troubleshoot and solve problems that
                    arise during the development process in a timely and
                    efficient manner, delivering high-quality websites. I am
                    comfortable using debugging tools and techniques, and have
                    experience identifying and resolving issues such as broken
                    links, syntax errors, and performance bottlenecks.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
