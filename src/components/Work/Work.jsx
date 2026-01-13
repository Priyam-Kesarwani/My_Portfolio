import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Split projects into major (first 3) and minor (rest)
  const majorProjects = projects.slice(0, 3);
  const minorProjects = projects.slice(3);

  const MajorProjectCard = ({ project }) => (
    <div
      key={project.id}
      onClick={() => handleOpenModal(project)}
      className="w-full border-2 border-purple-500/30 bg-gray-900 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/70 hover:-translate-y-3 hover:border-purple-500/60 transition-all duration-300 flex flex-col lg:flex-row"
    >
      <div className="lg:w-1/2 p-6 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 lg:h-full object-cover rounded-xl"
        />
      </div>
      <div className="lg:w-1/2 p-8 flex-grow flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 pt-2 text-base leading-relaxed">
          {project.description}
        </p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#251f38] text-sm font-semibold text-purple-500 rounded-full px-3 py-1.5 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div
      key={project.id}
      onClick={() => handleOpenModal(project)}
      className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
          {project.description}
        </p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      // style={{ clipPath: "polygon(0 0, 100% 0, 100% 98%, 75% 95%, 0 100%)" }}
    >
      {/* Major Projects Section */}
      <div className="mb-32 py-16 px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">MAJOR PROJECTS</h2>
          <div className="w-40 h-1.5 bg-purple-500 mx-auto mt-6"></div>
        </div>
        <div className="flex flex-col gap-12 w-full">
          {majorProjects.map((project) => (
            <MajorProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Minor Projects Section */}
      {minorProjects.length > 0 && (
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">MINOR PROJECTS</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          </div>
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {minorProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] lg:w-[60vw] max-w-3xl overflow-hidden relative overflow-y-auto max-h-[90vh]">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
