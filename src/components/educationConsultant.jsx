import React from "react";

export default function EducationConsultant() {
  return (
    <div className="flex flex-col mt-36 gap-36 mb-20 md:flex-row bg-white w-[80vw] mx-auto">
      {/* Left side - Office Photo with Team */}
      <div className="md:w-1/2 bg-gray-100">
        <div className="h-full">
          <img
            src="/images/group.jpeg"
            alt="Team of education consultants in office reception"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Right side - Text Content */}
      <div className="md:w-1/2 p-4 flex flex-col justify-center bg-white">
        <div className="text-center h-full mt-5">
          <h1 className="text-4xl text-black mb-2 max-sm:text-2xl">WELCOME TO OMIFOD</h1>
          <h2 className="text-4xl  text-black mb-2 max-sm:text-2xl">FOREIGN LINKS EDUCATION</h2>
          <h2 className="text-4xl text-black mb-8 max-sm:text-2xl">CONSULT LTD</h2>

          <p className="text-base text-gray-800 mb-6">
            We are dedicated to guiding aspiring students towards their global
            academic dreams. With a wealth of experience and a passion for
            education, we provide comprehensive services to help students gain
            admission to top-tier institutions worldwide.
          </p>

          <p className="text-sm text-gray-700 mb-8">
            Our team of experienced education consultants is committed to
            providing personalized support and guidance throughout your academic
            journey. We strive to make your overseas education experience
            seamless and rewarding.
          </p>

          <p className="text-sm font-medium text-gray-800">
            Contact us today to embark on your global academic adventure!
          </p>
        </div>
      </div>
    </div>
  );
}
