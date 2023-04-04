import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-fixed bg-cover bg-center py-16 lg:py-0"
      style={{
        background:
          "linear-gradient(45deg, #37306B 0%, #66347F 25%, #9E4784 50%, #D27685 75%)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-white z-1"></div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-slate-50">Hi. I'm John Bouakhasith, </span>
            <strong className="animate-text bg-gradient-to-r from-blue-300 to-pink-500 via-purple-400 bg-clip-text text-transparent text-3xl font-extrabold sm:text-4xl sm:block">
              Junior Web Developer.
            </strong>
          </h1>
          <p className="text-slate-50 mt-4 sm:text-xl sm:leading-relaxed">
            I am on a journey to overcome obstacles and achieve success as a
            self-taught web developer
          </p>
          <div className="mt-8 py-3 flex flex-wrap justify-center">
            <a
              href="#contact"
              className="block sm:w-auto py-3 px-12 rounded-full bg-deep-indigo hover:bg-deep-purple text-white"
            >
              Join Me
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,282.7C672,288,768,288,864,256C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
