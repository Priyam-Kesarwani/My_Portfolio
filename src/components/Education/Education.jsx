import React from "react";
import { education } from "../../constants";
import Tilt from "react-parallax-tilt";
import LazyImage from "../LazyImage/LazyImage";

const Education = () => {
  const isSingle = education.length === 1;

  return (
    <section
      id="education"
      className="w-full bg-section-nebula relative z-[2] -mt-16 clip-polygon-left pt-24 pb-28 sm:pb-32 font-sans scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {isSingle ? (
        /* Spotlight Card for Single Education */
        <div className="max-w-4xl mx-auto">
          {education.map((edu) => (
            <Tilt
              key={edu.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1200}
              scale={1.01}
              transitionSpeed={800}
              gyroscope={true}
              className="w-full"
            >
              <div className="w-full p-6 sm:p-8 rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.22)] hover:border-[#8245ec]/80 hover:shadow-[0_0_35px_rgba(130,69,236,0.4)] transition-all duration-300">
                {/* Header with School Logo, Degree, School & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800">
                  <div className="flex items-center space-x-4 sm:space-x-5 min-w-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 border border-white/20 rounded-2xl p-2 sm:p-2.5 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                      <LazyImage
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                        rootMargin="300px"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm sm:text-base font-semibold text-purple-300 mt-1">
                        {edu.school}
                      </h4>
                    </div>
                  </div>

                  <div className="shrink-0 self-start sm:self-center">
                    <span className="inline-block bg-purple-900/40 text-purple-300 border border-purple-600/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm">
                      {edu.date}
                    </span>
                  </div>
                </div>

                {/* Grade Badge */}
                {edu.grade && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Performance:
                    </span>
                    <span className="bg-[#8245ec]/20 text-purple-200 border border-[#8245ec]/40 px-3 py-0.5 rounded-full text-xs font-bold">
                      Grade: {edu.grade}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      ) : (
        /* Multi-education timeline fallback */
        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#8245ec] via-purple-500/60 to-transparent h-full"></div>
          <div className="space-y-12 sm:space-y-16">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={edu.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center w-full"
                >
                  <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 bg-gray-900 border-2 sm:border-4 border-[#8245ec] w-11 h-11 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-10 shadow-[0_0_15px_rgba(130,69,236,0.6)] p-1.5 sm:p-2">
                    <LazyImage
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain rounded-full"
                      rootMargin="300px"
                    />
                  </div>

                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0 ${
                      isEven ? "sm:mr-auto sm:pr-2" : "sm:ml-auto sm:pl-2"
                    }`}
                  >
                    <Tilt
                      tiltMaxAngleX={8}
                      tiltMaxAngleY={8}
                      perspective={1200}
                      scale={1.01}
                      transitionSpeed={800}
                      gyroscope={true}
                      className="w-full"
                    >
                      <div className="w-full p-6 sm:p-7 rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.18)] hover:border-[#8245ec]/80 hover:shadow-[0_0_30px_rgba(130,69,236,0.35)] transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 border border-white/20 rounded-xl p-2 flex items-center justify-center shrink-0 overflow-hidden">
                            <LazyImage
                              src={edu.img}
                              alt={edu.school}
                              className="max-w-full max-h-full object-contain"
                              rootMargin="300px"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                              {edu.degree}
                            </h3>
                            <h4 className="text-sm font-medium text-purple-300">
                              {edu.school}
                            </h4>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {edu.date}
                            </p>
                          </div>
                        </div>

                        {edu.grade && (
                          <p className="mt-3 text-xs font-semibold text-purple-300">
                            Grade: {edu.grade}
                          </p>
                        )}
                        <p className="mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {edu.desc}
                        </p>
                      </div>
                    </Tilt>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Education;
