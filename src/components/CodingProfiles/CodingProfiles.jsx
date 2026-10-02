import React from "react";
import { codingProfiles } from "../../constants";
import Tilt from "react-parallax-tilt";

const CodingProfiles = () => (
  <section
    id="coding-profiles"
    className="w-full bg-section-nebula relative z-[4] -mt-16 clip-polygon-left pt-24 pb-28 sm:pb-32 font-sans scroll-mt-24"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
    {/* Section Title */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
        CODING PROFILES
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
        Links to my competitive programming and problem-solving profiles
      </p>
    </div>

    {/* Profiles Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
      {codingProfiles.map((profile) => (
        <Tilt
          key={profile.name}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1200}
          scale={1.02}
          transitionSpeed={800}
          gyroscope={true}
          className="h-full"
        >
          <div className="h-full flex flex-col justify-between items-center text-center p-6 sm:p-7 rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.18)] hover:border-[#8245ec]/80 hover:shadow-[0_0_30px_rgba(130,69,236,0.35)] transition-all duration-300">
            {/* Top: Logo & Title */}
            <div className="flex flex-col items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 mb-4 shadow-inner group-hover:scale-105 transition-transform">
                <img
                  src={profile.logo}
                  alt={`${profile.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-white text-xl font-bold mb-1">
                {profile.name}
              </h3>
              <p className="text-purple-300/80 text-xs font-medium mb-6">
                Competitive Programming
              </p>
            </div>

            {/* Bottom: Action Button */}
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#8245ec] hover:bg-[#9353f7] active:scale-95 text-white py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(130,69,236,0.4)] hover:shadow-[0_0_25px_rgba(130,69,236,0.6)] cursor-pointer"
              aria-label={`View ${profile.name} profile`}
            >
              <span>View Profile</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </Tilt>
      ))}
    </div>
    </div>
  </section>
);

export default CodingProfiles;
