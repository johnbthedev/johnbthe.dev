import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const linkedIn = "https://www.linkedin.com/in/johnbthedev/";
  const gitHub = "https://github.com/johnbthedev";
  const instagram = "https://www.instagram.com/johnbdot/";
  const twitter = "https://twitter.com/johnbthe_dev";

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
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              A little bit about me and my background
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 mt-10">
            <div className="w-full md:w-1/4 mb-4 px-4">
              <img
                src="img/portrait.jpg"
                alt="Profile Image"
                className="h-64 w-full object-cover object-center rounded-lg shadow-lg"
              />
              <p
                className="text-center
              "
              >
                <div className="flex flex-col rounded-lg bg-gray-200 mt-4 p-4 lg:p-2">
                  <div
                    id="first-row"
                    className="flex justify-center pb-1 lg:pb-0"
                  >
                    <span className="font-bold uppercase text-xs text-gray-600">
                      connect with me
                    </span>
                  </div>
                  <div
                    id="second-row"
                    className="flex flex-col lg:flex-row justify-center"
                  >
                    <div className="pb-1 lg:pb-0 lg:pr-2">
                      <a
                        href={linkedIn}
                        className="lg:hidden block w-auto py-2 rounded-full bg-[#0077b5] text-white text-sm"
                      >
                        LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a
                        className="hidden lg:inline-block text-3xl text-[#0077b5]"
                        href={linkedIn}
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                    <div className="pb-1 lg:pb-0 lg:px-2">
                      <a
                        href={gitHub}
                        className="lg:hidden block block w-auto py-2 rounded-full bg-gray-900 text-white text-sm"
                      >
                        GitHub <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        className="hidden lg:inline-block text-3xl text-gray-900"
                        href={gitHub}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                    <div className="pb-1 lg:pb-0 lg:px-2">
                      <a
                        href={instagram}
                        className="lg:hidden block block w-auto py-2 rounded-full bg-[#833AB4] text-white text-sm"
                      >
                        Instagram <FontAwesomeIcon icon={faInstagramSquare} />
                      </a>
                      <a
                        className="hidden lg:inline-block text-3xl text-[#833AB4]"
                        href={instagram}
                      >
                        <FontAwesomeIcon icon={faInstagramSquare} />
                      </a>
                    </div>
                    <div className="lg:px-2">
                      <a
                        href={twitter}
                        className="lg:hidden block block w-auto py-2 rounded-full bg-[#1DA1F2] text-white text-sm"
                      >
                        Twitter <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a
                        className="hidden lg:inline-block text-3xl text-[#1DA1F2]"
                        href={twitter}
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>
                  </div>
                </div>
              </p>
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
                my knowledge and explore new technologies.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Ultimately, my goal is to become a talented and accomplished
                full-stack web developer.
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
