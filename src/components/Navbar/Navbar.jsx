import React, { useEffect, useState, useRef } from "react";
import { FiMenu, FiX, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "coding-profiles", label: "Coding" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickingRef = useRef(false);

  // Scroll listener for compacting glassmorphic bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Real-time ScrollSpy: Track active section in viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      if (isClickingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    isClickingRef.current = true;

    const section = document.getElementById(sectionId);
    if (section) {
      const navOffset = 85;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-10 ${
        isScrolled
          ? "py-3 bg-[#050414]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(130,69,236,0.15)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram with Cosmic Orbit Beacon */}
        <button
          onClick={() => handleMenuClick("about")}
          className="group flex items-center gap-3 text-left cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#8245ec] via-[#6366f1] to-[#00f0ff] p-[1.5px] shadow-[0_0_18px_rgba(130,69,236,0.5)] group-hover:shadow-[0_0_28px_rgba(0,240,255,0.75)] group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-[#070518] flex items-center justify-center font-bold text-xs text-white tracking-wider">
              PK
            </div>
            {/* Orbiting stardust ring */}
            <span
              className="absolute -inset-1 rounded-full border border-cyan-400/30 animate-spin opacity-50 pointer-events-none"
              style={{ animationDuration: "9s" }}
            />
          </div>

          <div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all">
              <span className="text-[#8245ec] font-mono mr-1">&lt;</span>
              <span>Priyam</span>
              <span className="text-gray-300 ml-1">Kesarwani</span>
              <span className="text-[#00f0ff] font-mono ml-1">/&gt;</span>
            </div>
          </div>
        </button>

        {/* Desktop Space Bubble Tab Selector (Center Floating Pod) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center p-1.5 rounded-full bg-[#0d0926]/75 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.55),0_0_25px_rgba(130,69,236,0.22)] relative"
        >
          {/* Subtle Ambient Cosmic Glow underneath */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8245ec]/25 via-[#00f0ff]/15 to-[#8245ec]/25 blur-md pointer-events-none -z-10" />

          <ul className="flex items-center gap-1 relative z-10">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`relative px-3.5 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
                      isActive
                        ? "text-white font-semibold shadow-[0_0_18px_rgba(130,69,236,0.35),0_0_10px_rgba(99,102,241,0.2)] scale-100"
                        : "text-gray-300 hover:text-white hover:bg-white/[0.08] hover:scale-105 active:scale-95"
                    }`}
                  >
                    {/* Active Space Bubble Background with Iridescent Cosmic Glow & Glass Highlight */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8245ec] via-[#7544ea] to-[#6366f1] -z-10 ring-1 ring-white/20 overflow-hidden">
                        {/* Top specular reflection / glass bubble gloss */}
                        <span className="absolute inset-x-2 top-0.5 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                        {/* Subtle bottom shadow curvature */}
                        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                      </span>
                    )}

                    {/* Orbiting Stardust Sparkle Dot for Active Tab */}
                    {isActive && (
                      <span className="relative flex h-1.5 w-1.5 mr-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-200 shadow-[0_0_6px_#c084fc]" />
                      </span>
                    )}

                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side: Social & Cosmic Contact Bubble */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/Priyam-Kesarwani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/priyam-kesarwani-55aa0924b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <FaLinkedin className="text-lg text-blue-400" />
          </a>
          <button
            onClick={() => handleMenuClick("contact")}
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#8245ec]/30 via-cyan-500/20 to-[#8245ec]/30 hover:from-[#8245ec] hover:to-[#00f0ff] text-white border border-cyan-400/40 hover:border-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Say Hello</span>
            <FiSend className="text-xs" />
          </button>
        </div>

        {/* Mobile Toggle Button with Space Bubble Styling */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-full bg-[#0d0926]/80 border border-white/15 backdrop-blur-xl flex items-center justify-center text-white hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 cursor-pointer"
          >
            {isOpen ? <FiX className="text-xl text-cyan-300" /> : <FiMenu className="text-xl text-[#8245ec]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer: Cosmic Floating Glass Capsule */}
      {isOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto rounded-3xl bg-[#09061e]/95 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(130,69,236,0.3)] p-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#8245ec] to-[#6366f1] text-white font-semibold shadow-[0_0_18px_rgba(130,69,236,0.35)]"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                    )}
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="text-[10px] tracking-wider uppercase font-mono text-purple-200">
                      ACTIVE
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Priyam-Kesarwani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white text-base"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/priyam-kesarwani-55aa0924b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 text-base"
              >
                <FaLinkedin />
              </a>
            </div>
            <button
              onClick={() => handleMenuClick("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#8245ec] to-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              <span>Say Hello</span>
              <FiSend className="text-xs" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
