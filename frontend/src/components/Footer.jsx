import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div class="hidden flex items-center lg:flex">
            <div class="bg-gray-200 text-gray-500 font-bold text-lg p-2 rounded">
              JB
            </div>
            <h1 class="ml-2 text-white font-bold text-lg">johnbthe.dev</h1>
          </div>
          <div className="lg:flex lg:items-center">
            <div className="text-sm lg:flex lg:items-center">
              <a
                href="#home"
                className="block mt-0 lg:inline-block lg:mt-0 mr-6"
              >
                Home
              </a>
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 mr-6"
              >
                About
              </a>
              <a
                href="#skills"
                className="block mt-4 lg:inline-block lg:mt-0 mr-6"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="block mt-4 lg:inline-block lg:mt-0 mr-6"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 mr-6"
              >
                Contact
              </a>
              <span className="text-sm block mt-4 lg:inline-block lg:mt-0">
                &copy; 2023 johnbthe.dev. Designed & developed by me ♥
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
