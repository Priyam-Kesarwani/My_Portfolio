import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#03020c] relative z-0 -mt-16 pt-20 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-bold text-[#8245ec] tracking-wide">Priyam Kesarwani</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-5">
          {[
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#8245ec] text-gray-300 transition-colors text-sm sm:text-base font-medium cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/priyam.kesarwani.9809" },
            // { icon: <FaTwitter />, link: "https://twitter.com/CodingMaster6?s=09" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/priyam-kesarwani-55aa0924b/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/priyam_star/" },
            // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-gray-400 mt-6 leading-relaxed">
          © 2026 Priyam Kesarwani. All rights reserved. All logos belong to their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
