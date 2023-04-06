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
              Who Am I?
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
                Hello there. My name is John Bouakhasith, and I'm a self-taught
                web developer with a passion for crafting visually stunning and
                highly functional websites. I've always had a deep interest in
                web development, but it wasn't until a couple of years ago that
                I started learning to code. Since then, I've found a sense of
                fulfillment in designing and creating websites from scratch.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                I have dedicated countless hours to honing my web development
                skills using various resources, including FreeCodeCamp, YouTube,
                and The Odin Project. Thanks to these resources, I have been
                able to learn a lot and I am always looking for ways to expand
                my knowledge and explore new technologies. Ultimately, my goal
                is to become a talented and accomplished full-stack web
                developer.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                When I'm not coding, you'll likely find me indulging in my other
                hobbies. I'm an avid PC gamer, a fan of binge-worthy TV shows
                and sports, and I love to travel whenever possible. I also have
                two furry feline companions, Kevin and Calvin, who keep me
                company during long coding sessions.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                Thank you for taking the time to learn a bit about me. If you
                have any questions or inquiries, please don't hesitate to get in
                touch. I'm always open to connecting and would love to hear from
                you!
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
