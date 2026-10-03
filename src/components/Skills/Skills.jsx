import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import LazyImage from "../LazyImage/LazyImage";

const Skills = () => (
  <section
    id="skills"
    className="w-full bg-section-space relative z-[5] -mt-16 clip-polygon-right pt-24 pb-28 sm:pb-32 font-sans scroll-mt-24"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
    {/* Section Title */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {SkillsInfo.map((category, index) => {
        const isLastOdd = index === SkillsInfo.length - 1 && SkillsInfo.length % 2 !== 0;

        return (
          <div
            key={category.title}
            className={`w-full ${isLastOdd ? "md:col-span-2 md:w-3/4 lg:w-3/5 md:mx-auto" : ""}`}
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.01}
              transitionSpeed={800}
              gyroscope={true}
              className="h-full"
            >
              <div className="h-full bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/60 shadow-[0_0_20px_rgba(130,69,236,0.18)] hover:border-[#8245ec]/80 hover:shadow-[0_0_30px_rgba(130,69,236,0.35)] transition-all duration-300 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center tracking-wide">
                  {category.title}
                </h3>

                {/* Skill Items */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full my-auto">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center space-x-2 bg-white/5 border border-gray-700/70 hover:border-[#8245ec]/80 rounded-2xl py-2.5 px-2.5 sm:px-3 text-center transition-colors group"
                    >
                      <LazyImage
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0 group-hover:scale-110 transition-transform"
                        rootMargin="300px"
                      />
                      <span className="text-xs sm:text-sm text-gray-200 font-medium truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>
        );
      })}
    </div>
    </div>
  </section>
);

export default Skills;
