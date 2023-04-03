import React from "react";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="w-full m-auto">
          <div className="text-center font-serif italic mb-16">
            <h1 className="text-4xl text-gray-900 font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-600">
              Here's a little bit about myself and my background
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
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 mb-6 px-4">
              <img
                src="https://placehold.it/300x300"
                alt="Profile Image"
                className="h-64 w-full object-cover object-center rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-3/4 px-4">
              <p className="text-lg text-gray-600 mb-4">
                Hello! My name is John Bouakhasith and I am a junior web
                developer with expertise in HTML, CSS, JavaScript, and various
                web development frameworks. My passion lies in creating visually
                appealing and highly functional websites that provide an optimal
                user experience.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                I am primarily self-taught, utilizing resources such as
                FreeCodeCamp, YouTube, and The Odin Project to hone my skills.
                In addition, I have some experience working with React and PHP,
                and I'm always eager to expand my knowledge.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                When I'm not coding, you can find me indulging in my other
                interests. I enjoy playing PC games, watching TV shows and
                sports, traveling when possible, and spending quality time with
                my furry feline companions - Kevin and Calvin.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                Please feel free to reach out if you have any questions or
                inquiries!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
