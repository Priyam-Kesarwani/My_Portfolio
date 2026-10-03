import React, { useState } from "react";
import { projects } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiX } from "react-icons/fi";
import LazyImage from "../LazyImage/LazyImage";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // "all", "major", "minor"

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Major projects: first 3; Minor: remaining
  const majorProjects = projects.slice(0, 3);
  const minorProjects = projects.slice(3);

  const MajorProjectCard = ({ project, index }) => {
    const isReverse = index % 2 !== 0;

    return (
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1400}
        scale={1.01}
        transitionSpeed={800}
        gyroscope={true}
        className="w-full"
      >
        <div
          className={`w-full rounded-3xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.18)] hover:border-[#8245ec]/80 hover:shadow-[0_0_35px_rgba(130,69,236,0.35)] transition-all duration-300 overflow-hidden flex flex-col ${
            isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Project Image Preview */}
          <div
            onClick={() => handleOpenModal(project)}
            className="lg:w-1/2 p-5 sm:p-6 lg:p-7 flex-shrink-0 cursor-pointer group"
          >
            <div className="w-full h-56 sm:h-72 lg:h-full min-h-[220px] rounded-2xl overflow-hidden relative border border-white/10 bg-black/40 shadow-inner">
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                rootMargin="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-purple-300 border border-purple-500/30 flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                <span>Click to view details</span>
                <span>↗</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="bg-[#8245ec]/25 text-purple-300 border border-[#8245ec]/40 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Featured Project
                </span>
              </div>

              <h3
                onClick={() => handleOpenModal(project)}
                className="text-2xl sm:text-3xl font-bold text-white hover:text-purple-300 transition-colors cursor-pointer mb-3"
              >
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-[#8245ec]/20 text-purple-200 border border-[#8245ec]/35 rounded-full px-2.5 sm:px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
              {project.webapp && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8245ec] hover:bg-[#9353f7] active:scale-95 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(130,69,236,0.4)] cursor-pointer"
                >
                  <span>Live Demo</span>
                  <FiExternalLink className="text-sm" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800/90 hover:bg-gray-700 active:scale-95 text-gray-200 border border-gray-700 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                >
                  <FaGithub className="text-base" />
                  <span>Code</span>
                </a>
              )}
              <button
                onClick={() => handleOpenModal(project)}
                className="text-xs text-gray-400 hover:text-white px-3 py-2 transition-colors ml-auto cursor-pointer"
              >
                Full Details
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    );
  };

  const MinorProjectCard = ({ project }) => (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1200}
      scale={1.02}
      transitionSpeed={800}
      gyroscope={true}
      className="h-full"
    >
      <div className="h-full flex flex-col justify-between rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.16)] hover:border-[#8245ec]/80 hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] transition-all duration-300 overflow-hidden">
        {/* Card Image */}
        <div
          onClick={() => handleOpenModal(project)}
          className="p-4 cursor-pointer group"
        >
          <div className="w-full h-44 rounded-xl overflow-hidden relative border border-white/10 bg-black/40">
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              rootMargin="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
          <div>
            <h3
              onClick={() => handleOpenModal(project)}
              className="text-xl font-bold text-white hover:text-purple-300 transition-colors cursor-pointer mb-2"
            >
              {project.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#8245ec]/20 text-purple-200 border border-[#8245ec]/30 rounded-full px-2.5 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-gray-400 text-xs self-center">
                  +{project.tags.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 pt-3 border-t border-gray-800">
            {project.webapp && (
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#8245ec] hover:bg-[#9353f7] active:scale-95 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-all shadow-[0_0_10px_rgba(130,69,236,0.3)] cursor-pointer"
              >
                <span>Live</span>
                <FiExternalLink />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-800 hover:bg-gray-700 active:scale-95 text-gray-200 border border-gray-700 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer"
              >
                <FaGithub />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );

  return (
    <section
      id="work"
      className="w-full bg-section-space relative z-[3] -mt-16 clip-polygon-right pt-24 pb-32 sm:pb-36 font-sans scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          A showcase of full-stack platforms, AI applications, and software engineering projects
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-[#8245ec] text-white shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                : "bg-gray-900/80 text-gray-400 hover:text-white border border-gray-700/60"
            }`}
          >
            All ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("major")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "major"
                ? "bg-[#8245ec] text-white shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                : "bg-gray-900/80 text-gray-400 hover:text-white border border-gray-700/60"
            }`}
          >
            Major Projects ({majorProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("minor")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "minor"
                ? "bg-[#8245ec] text-white shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                : "bg-gray-900/80 text-gray-400 hover:text-white border border-gray-700/60"
            }`}
          >
            Minor Projects ({minorProjects.length})
          </button>
        </div>
      </div>

      {/* Major Projects Showcase */}
      {(activeTab === "all" || activeTab === "major") && (
        <div className="mb-16">
          {activeTab === "all" && (
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-900/30 border border-purple-600/30 px-3 py-1 rounded-full">
                Featured Flagships
              </span>
              <div className="h-px bg-gradient-to-r from-purple-500/40 to-transparent flex-1" />
            </div>
          )}
          <div className="flex flex-col gap-10 sm:gap-12 w-full">
            {majorProjects.map((project, idx) => (
              <MajorProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      )}

      {/* Minor Projects Grid */}
      {(activeTab === "all" || activeTab === "minor") && (
        <div>
          {activeTab === "all" && (
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-900/30 border border-purple-600/30 px-3 py-1 rounded-full">
                Other Notable Projects
              </span>
              <div className="h-px bg-gradient-to-r from-purple-500/40 to-transparent flex-1" />
            </div>
          )}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {minorProjects.map((project) => (
              <MinorProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-gradient-to-b from-gray-900 to-[#0c0926] border border-purple-500/40 rounded-2xl shadow-[0_0_50px_rgba(130,69,236,0.4)] w-[95%] sm:w-[85%] lg:w-[65vw] max-w-3xl overflow-hidden relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <div className="flex justify-end p-4 pb-0">
              <button
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="p-6 sm:p-8 pt-2">
              {/* Project Image */}
              <div className="w-full rounded-xl overflow-hidden border border-white/15 bg-black/50 mb-6 max-h-80 shadow-inner">
                <LazyImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#8245ec]/25 text-purple-200 border border-[#8245ec]/40 text-xs font-semibold rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all border border-gray-700 cursor-pointer"
                  >
                    <FaGithub className="text-base" />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#8245ec] hover:bg-[#9353f7] active:scale-95 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(130,69,236,0.5)] cursor-pointer"
                  >
                    <span>View Live Site</span>
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Work;
