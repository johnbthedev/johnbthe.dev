import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <span className="font-semibold text-xl tracking-tight">
              johnbthe.dev
            </span>
          </div>
          <div className="lg:flex lg:items-center">
            <div className="text-sm">
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-6">
                Home
              </a>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-6">
                About
              </a>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-6">
                Portfolio
              </a>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-6">
                Contact
              </a>
              <span className="text-sm block mt-4 lg:inline-block lg:mt-0">
                &copy; 2023 johnbthe.dev. Made with React and Tailwind.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
