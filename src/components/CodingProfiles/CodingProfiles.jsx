import React, { useState, useEffect, useRef } from "react";
import { codingProfiles, dsaTopics } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FiCode } from "react-icons/fi";

const CodingProfiles = () => {
  const [count, setCount] = useState(0);
  const [cfCount, setCfCount] = useState(0);
  const tabRef = useRef(null);
  const isVisibleRef = useRef(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const target = 1100;
    const targetCF = 400;
    const duration = 2400; // ~2.4 seconds smooth count-up

    const startAnimation = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setCount(0);
      setCfCount(0);
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic curve for natural deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * target);
        const currentCFCount = Math.floor(easeOut * targetCF);
        setCount(currentCount);
        setCfCount(currentCFCount);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(target);
          setCfCount(targetCF);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    let intervalId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisibleRef.current = true;
          // Run immediately on entering viewport
          startAnimation();

          // Repeat every 9 seconds while in view
          if (intervalId) clearInterval(intervalId);
          intervalId = setInterval(() => {
            if (isVisibleRef.current) {
              startAnimation();
            }
          }, 9000);
        } else {
          isVisibleRef.current = false;
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (tabRef.current) {
      observer.observe(tabRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section
      id="coding-profiles"
      className="w-full bg-section-nebula relative z-[4] -mt-16 clip-polygon-left pt-24 pb-28 sm:pb-32 font-sans scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
            CODING
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
              <p className="text-purple-300/80 text-xs font-medium mb-3">
                Competitive Programming
              </p>

              {/* Profile Specific Badge / Dynamic Tab */}
              {profile.name === "CodeChef" && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.25)] mb-6">
                  <span className="text-amber-400 tracking-wider">★★★★</span>
                  <span>4 Star</span>
                </div>
              )}

              {profile.name === "LeetCode" && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-400/40 text-purple-200 text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] mb-6">
                  <span className="text-base text-purple-300 leading-none">♞</span>
                  <span>Knight Badge</span>
                </div>
              )}

              {profile.name === "Codeforces" && (
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-cyan-400/40 text-cyan-200 text-xs font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-6">
                  <span className="text-cyan-400 mr-0.5">⚡</span>
                  <span className="font-mono tabular-nums text-sm text-white font-extrabold">{cfCount}</span>
                  <span className="text-cyan-400 font-extrabold">+</span>
                  <span className="font-medium text-gray-300 ml-1">Problems Solved</span>
                </div>
              )}
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

    {/* Continuous Scrolling DSA Topics Marquee */}
        <div className="mt-12 sm:mt-16 w-full max-w-6xl mx-auto">
          {/* Subtle Section Divider & Label */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent to-purple-500/40 w-16 sm:w-28" />
            <span className="text-xs uppercase tracking-widest text-purple-300/80 font-semibold px-2">
              Core DSA Topics Mastered
            </span>
            <div className="h-px bg-gradient-to-l from-transparent to-purple-500/40 w-16 sm:w-28" />
          </div>

          {/* Marquee Track with edge fade masks */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-2">
            <div className="animate-marquee-ltr flex items-center gap-3 select-none">
              {[...dsaTopics, ...dsaTopics].map((topic, index) => (
                <div
                  key={`${topic}-${index}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/25 bg-gray-900/80 hover:bg-[#160f38] hover:border-[#8245ec] text-gray-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap shadow-[0_0_12px_rgba(130,69,236,0.1)] shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8245ec] shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
