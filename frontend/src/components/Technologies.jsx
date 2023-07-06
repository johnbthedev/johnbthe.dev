import React from "react";

function Technologies() {
  return (
    <section id="technolgies" className="bg-gray-100">
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-deep-indigo font-semibold tracking-wide uppercase">
            technologies
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mastering the Latest Web Development Technologies
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Some of the technologies I utilize to create exceptional websites
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/5 p-6 flex justify-center">
            <a className="touch-action-manipulation" href="https://react.dev/">
              <img className="h-20" src="img/react.svg" alt="React Logo" />
            </a>
          </div>

          <div className="w-1/2 md:w-1/5 p-6 flex justify-center">
            <a
              className="touch-action-manipulation"
              href="https://tailwindcss.com/"
            >
              <img
                className="h-20"
                src="img/tailwind-css.svg"
                alt="Tailwind Logo"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/5 p-6 flex justify-center">
            <a
              className="touch-action-manipulation"
              href="https://getbootstrap.com/"
            >
              <img
                className="h-20"
                src="img/bootstrap.svg"
                alt="Bootstrap Logo"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/5 p-6 flex justify-center">
            <a className="touch-action-manipulation" href="https://strapi.io/">
              <img className="h-20" src="img/strapi.svg" alt="Strapi Logo" />
            </a>
          </div>
          <div className="w-1/2 md:w-1/5 p-6 flex justify-center">
            <a
              className="touch-action-manipulation"
              href="https://wordpress.org/"
            >
              <img
                className="h-20"
                src="img/wordpress.svg"
                alt="WordPress Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
