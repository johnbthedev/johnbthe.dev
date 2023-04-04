import React from "react";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="w-full m-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full m-auto">
          <div className="lg:text-center">
            <h2 className="text-base text-deep-indigo font-semibold tracking-wide uppercase">
              about
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet John Bouakhasith, Junior Web Developer
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A little about me and my background
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 mt-10">
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
