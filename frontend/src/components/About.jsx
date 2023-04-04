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
                src="img/portrait.jpg"
                alt="Profile Image"
                className="h-64 w-full object-cover object-center rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-3/4 px-4">
              <p className="text-lg text-gray-600 mb-4">
                Hey there! I'm John Bouakhasith, a junior web developer with a
                passion for creating visually stunning and highly functional
                websites that offer an amazing user experience. With expertise
                in HTML, CSS, JavaScript, and various web development
                frameworks, I love nothing more than bringing digital visions to
                life.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                As a primarily self-taught developer, I've spent countless hours
                honing my skills through resources like FreeCodeCamp, YouTube,
                and The Odin Project. I've also gained valuable experience
                working with React and WordPress, but I'm always eager to expand
                my knowledge and explore new technologies.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                When I'm not coding, you'll find me indulging in my other
                interests. I'm an avid PC gamer, a fan of binge-worthy TV shows
                and sports, and I love to travel whenever I can. Oh, and I can't
                forget to mention my two furry feline companions, Kevin and
                Calvin - they keep me company during those long coding sessions.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                If you have any questions or inquiries, please don't hesitate to
                reach out. I'd love to hear from you.
              </p>
              <p className="mb-4">
                <a
                  href="#contact"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Contact Me &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
