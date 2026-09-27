import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Profile from "../../assets/profile.jpg"; 
import Tilt from "react-parallax-tilt";


const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 98%, 75% 95%, 0 100%)" }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Priyam Kesarwani
          </h2>
          {/* Skills with Typewriter */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
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
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
           Full-stack developer and Software Engineer at HuemanAI with hands-on experience architecting scalable multi-tenant SaaS platforms (Next.js, NestJS, PostgreSQL) and building high-performance web applications using the MERN stack. Expert in competitive programming with a LeetCode Knight badge (max rating 1850+, top 5.67% globally), a 4-star rating on CodeChef (max rating 1880), and over 1,100 DSA problems solved across platforms. A Computer Science graduate from IET Lucknow passionate about writing efficient code and delivering seamless user experiences.
          </p>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1pE-Cc4Pr2400xhk_aNF8TbFXQ-WksQLa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 text-lg font-bold transition duration-300 transform-hover:scale-105 rounded-full"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 20px #a8245ec, 0 0 40px #a8245ec",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
        <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}>
          
          <img
            src={Profile}
            alt="Priyam Kesarwani"
            className="rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] w-full h-full"
          />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
