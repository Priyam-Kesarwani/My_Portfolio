import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Profile from "../../assets/profile.jpg"; 
import Tilt from "react-parallax-tilt";
import ProfileScene3D from "./ProfileScene3D";


const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-section-space relative z-[7] clip-polygon-right pt-6 pb-28 sm:pb-32 font-sans scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-14 md:px-16 lg:px-20 xl:px-24">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-12">
        {/* Left Side */}
        <div className="w-full relative z-20 md:w-[60%] lg:w-[62%] text-center md:text-left mt-6 md:mt-0 flex flex-col items-center md:items-start">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-1 sm:mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Priyam Kesarwani
          </h2>
          {/* Skills with Typewriter */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Software Engineer",
                  "MERN Stack Developer",
                  "Competitive Programmer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          <p className="w-full text-base sm:text-lg text-gray-400 mt-4 mb-6 md:mb-8 leading-relaxed text-justify [text-justify:inter-word]">
            Full-stack developer and Software Engineer at HuemanAI with hands-on experience architecting scalable multi-tenant SaaS platforms (Next.js, NestJS, PostgreSQL) and building high-performance web applications using the MERN stack. Expert in competitive programming with a LeetCode Knight badge (max rating 1850+, top 5.67% globally), a 4-star rating on CodeChef (max rating 1880), and over 1,100 DSA problems solved across platforms. A Computer Science graduate from IET Lucknow passionate about writing efficient code and delivering seamless user experiences.
          </p>

          {/* Download Resume Button */}
          <div className="mt-6 mb-4 md:mb-0">
            <a
              href="https://drive.google.com/file/d/1pE-Cc4Pr2400xhk_aNF8TbFXQ-WksQLa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold sm:font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 rounded-full cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow:
                  "0 0 2px #8245ec, 0 0 20px #8245ec, 0 0 35px rgba(168,85,247,0.4)",
              }}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side - Image with Orbiting Stars */}
        <div className="relative z-10 md:w-[40%] lg:w-[38%] flex justify-center md:justify-end shrink-0">
          <div className="relative flex items-center justify-center">
            <ProfileScene3D />
            <Tilt
              className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={Profile}
                alt="Priyam Kesarwani"
                className="rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] w-full h-full"
              />
            </Tilt>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
