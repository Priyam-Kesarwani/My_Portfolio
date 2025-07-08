import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans backgroundImage"
       style={{ clipPath: "polygon(0 0, 100% 0, 100% 98%, 75% 95%, 0 100%)" }}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

          {/* Timeline Circle for mobile */}
  <div className="absolute -left-6 top-0 sm:hidden z-20">
    <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center">
      <img
        src={education[0]?.img}
        alt={education[0]?.school}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>

        {/* Education Entries */}
       {education.map((edu, index) => (
  <div
    key={edu.id}
    className="relative flex flex-col sm:flex-row items-center mb-16"
  >
    {/* Left side: content for even, empty for odd */}
    {index % 2 === 0 ? (
      <>
        <div className="w-full sm:w-1/2 sm:pr-8 flex justify-end">
          {/* Content */}
          <div className="p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md w-full max-w-xl">
            {/* ...content as before... */}
            <div className="flex items-center space-x-6">
              <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {edu.school}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
            <p className="mt-4 text-gray-400">{edu.desc}</p>
          </div>
        </div>
        {/* Timeline Circle */}
   {/* Timeline Circle for desktop only */}
      <div className="z-10 flex-shrink-0 hidden flex-col items-center sm:w-0 sm:px-0 sm:flex">
        <div className="mx-auto bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
        {/* Empty right side for spacing */}
        <div className="hidden sm:block w-1/2"></div>
      </>
    ) : (
      <>
        {/* Empty left side for spacing */}
        <div className="hidden sm:block w-1/2"></div>
        {/* Timeline Circle */}
        <div className="z-10 flex-shrink-0 flex flex-col items-center sm:w-0 sm:px-0">
          <div className="mx-auto bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center">
            <img
              src={edu.img}
              alt={edu.school}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        {/* Content on right for odd index */}
        <div className="w-full sm:w-1/2 sm:pl-8 flex justify-start">
          {/* Content */}
          <div className="p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md w-full max-w-xl">
            {/* ...content as before... */}
            <div className="flex items-center space-x-6">
              <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {edu.school}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
            <p className="mt-4 text-gray-400">{edu.desc}</p>
          </div>
        </div>
      </>
    )}
  </div>
))}
       
      </div>
    </section>
  );
};

export default Education;
