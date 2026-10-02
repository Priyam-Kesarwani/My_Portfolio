import React from "react";
import { experiences } from "../../constants";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  const isSingle = experiences.length === 1;

  return (
    <section
      id="experience"
      className="w-full bg-section-nebula relative z-[6] -mt-16 clip-polygon-left pt-24 pb-28 sm:pb-32 font-sans scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          A collection of my work experience and engineering roles across organizations
        </p>
      </div>

      {isSingle ? (
        /* Spotlight Card for Single Experience (HuemanAI) */
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience) => (
            <Tilt
              key={experience.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1200}
              scale={1.01}
              transitionSpeed={800}
              gyroscope={true}
              className="w-full"
            >
              <div className="w-full p-6 sm:p-8 rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.22)] hover:border-[#8245ec]/80 hover:shadow-[0_0_35px_rgba(130,69,236,0.4)] transition-all duration-300">
                {/* Header with Logo, Role, Company & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 sm:h-14 px-3 sm:px-4 bg-white/5 border border-white/15 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="h-6 sm:h-7 max-w-[130px] sm:max-w-[150px] object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm sm:text-base font-semibold text-purple-300">
                        {experience.company}
                        {experience.location && (
                          <span className="text-gray-400 font-normal">
                            {" "}• {experience.location}
                          </span>
                        )}
                      </h4>
                    </div>
                  </div>

                  <div className="self-start sm:self-center">
                    <span className="inline-block bg-purple-900/40 text-purple-300 border border-purple-600/40 px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {experience.date}
                    </span>
                  </div>
                </div>

                {/* Bullet points or paragraph */}
                {experience.points && experience.points.length > 0 ? (
                  <ul className="mt-5 space-y-2.5 text-gray-300 text-xs sm:text-sm">
                    {experience.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-relaxed text-gray-300"
                      >
                        <span className="text-[#8245ec] font-bold text-base leading-tight mt-0.5 shrink-0">
                          ▹
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {experience.desc}
                  </p>
                )}

                {/* Skills Tags */}
                {experience.skills && experience.skills.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                      Key Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-[#8245ec]/20 text-purple-200 px-3 py-1 text-xs rounded-full border border-[#8245ec]/40 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Tilt>
          ))}
        </div>
      ) : (
        /* Multi-experience timeline */
        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#8245ec] via-purple-500/60 to-transparent h-full"></div>
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center w-full"
                >
                  <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 bg-gray-900 border-2 sm:border-4 border-[#8245ec] w-11 h-11 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-10 shadow-[0_0_15px_rgba(130,69,236,0.6)] p-1.5 sm:p-2">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain rounded-full"
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
                      <div className="w-full p-5 sm:p-7 rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.18)] hover:border-[#8245ec]/80 hover:shadow-[0_0_30px_rgba(130,69,236,0.35)] transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 border border-white/20 rounded-xl p-2 flex items-center justify-center shrink-0 overflow-hidden">
                            <img
                              src={experience.img}
                              alt={experience.company}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                              {experience.role}
                            </h3>
                            <h4 className="text-sm font-medium text-purple-300">
                              {experience.company}
                              {experience.location && (
                                <span className="text-gray-400 font-normal">
                                  {" "}• {experience.location}
                                </span>
                              )}
                            </h4>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {experience.date}
                            </p>
                          </div>
                        </div>

                        {experience.points && experience.points.length > 0 ? (
                          <ul className="mt-4 space-y-2 text-gray-300 text-xs sm:text-sm">
                            {experience.points.map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 leading-relaxed text-gray-300"
                              >
                                <span className="text-[#8245ec] font-bold text-sm leading-tight mt-0.5 shrink-0">
                                  ▹
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {experience.desc}
                          </p>
                        )}

                        {experience.skills && experience.skills.length > 0 && (
                          <div className="mt-5 pt-4 border-t border-gray-800">
                            <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                              Key Technologies
                            </h5>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {experience.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="bg-[#8245ec]/20 text-purple-200 px-3 py-1 text-xs rounded-full border border-[#8245ec]/40 font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
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

export default Experience;
