import React, { useState, useEffect, useRef } from "react";
import { codingProfiles } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FiCode } from "react-icons/fi";

const CodingProfiles = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const tabRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const target = 1100;
          const duration = 2500; // 2.5 seconds count-up duration
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * target);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (tabRef.current) {
      observer.observe(tabRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="coding-profiles"
      className="w-full bg-section-nebula relative z-[4] -mt-16 clip-polygon-left pt-24 pb-28 sm:pb-32 font-sans scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
            CODING PROFILES
          </h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Links to my competitive programming and problem-solving profiles
          </p>
        </div>

        {/* Dynamic Problems Solved Counter Tab */}
        <div ref={tabRef} className="flex justify-center mb-10 sm:mb-12">
          <div className="group relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#8245ec]/50 bg-gradient-to-r from-gray-900/95 via-[#160f38]/95 to-gray-900/95 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.3)] hover:shadow-[0_0_35px_rgba(130,69,236,0.5)] hover:border-[#8245ec] transition-all duration-300">
            {/* Left Icon Badge */}
            <div className="w-9 h-9 rounded-full bg-[#8245ec]/25 border border-[#8245ec]/50 flex items-center justify-center text-[#c084fc] shadow-inner shrink-0 group-hover:scale-110 transition-transform">
              <FiCode className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            {/* Dynamic Counter & Text */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 font-mono tabular-nums tracking-tight min-w-[3.5rem] sm:min-w-[4.2rem] text-right">
                {count}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#8245ec]">
                +
              </span>
              <span className="text-sm sm:text-base font-semibold text-gray-200 tracking-wide ml-1">
                DSA Problems Solved
              </span>
            </div>

            {/* Live Indicator Dot */}
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
            </div>
          </div>
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
};

export default CodingProfiles;
