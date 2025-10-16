import React from "react";
import { codingProfiles } from "../../constants";

const CodingProfiles = () => (
  <section
    id="coding-profiles"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">CODING PROFILES</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        Links to my competitive programming profiles
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {codingProfiles.map((profile) => (
        <div
          key={profile.name}
          className="flex items-center justify-between bg-gray-900 border border-white rounded-2xl px-6 py-4"
        >
          <div className="flex items-center gap-4">
            <img src={profile.logo} alt={`${profile.name} logo`} className="w-10 h-10" />
            <div className="text-white text-xl font-semibold">{profile.name}</div>
          </div>
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-semibold"
            aria-label={`View ${profile.name} profile`}
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default CodingProfiles;


