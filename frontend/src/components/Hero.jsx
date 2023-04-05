import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-16 lg:py-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(45deg, #37306B 0%, #66347F 25%, #9E4784 50%, #D27685 75%)",
      }}
    >
      <div class="waves"></div>
      <div className="absolute top-0 left-0 w-full h-16 bg-white z-2"></div>
      <div className="z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-slate-50">Hi. I'm John Bouakhasith, </span>
            <strong className="animate-text bg-gradient-to-r from-blue-300 to-pink-500 via-purple-400 bg-clip-text text-transparent text-3xl font-extrabold sm:text-4xl block">
              Web Developer.
            </strong>
          </h1>
          <p className="text-slate-50 mt-4 sm:text-xl sm:leading-relaxed">
            I am on a journey to overcome obstacles and achieve success as a
            self-taught web developer
          </p>
          <div className="mt-8 py-3 flex flex-wrap justify-center">
            <a
              href="#about"
              className="block sm:w-auto py-3 px-12 rounded-full bg-deep-indigo hover:bg-deep-purple text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
