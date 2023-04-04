import React from "react";

function Technologies() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Technologies I've Worked With
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center">
          <div className="w-1/4 p-6">
            <img
              className="h-12 w-12"
              src="/images/react-logo.svg"
              alt="React Logo"
            />
          </div>
          <div className="w-1/4 p-6">
            <img
              className="h-12 w-12"
              src="/images/nodejs-logo.svg"
              alt="Node.js Logo"
            />
          </div>
          <div className="w-1/4 p-6">
            <img
              className="h-12 w-12"
              src="/images/mysql-logo.svg"
              alt="MySQL Logo"
            />
          </div>
          <div className="w-1/4 p-6">
            <img
              className="h-12 w-12"
              src="/images/aws-logo.svg"
              alt="AWS Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
