"use client";

import React from "react";
import {
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiVercel,
  SiGit,
  SiFigma,
  SiFramer,
  SiMysql,
} from "react-icons/si";
import Image from "next/image";


// VSCode SVG Component
const VSCodeIcon = () => (
  <div className="w-10 h-10 relative">
    <Image
      src="/project/vscode.png"
      alt="Visual Studio Code"
      width={40}
      height={40}
      className="object-contain"
    />
  </div>
);



// Render Logo
const RenderIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#2E2E2E" />
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="1" />
  </svg>
);



// Adobe XD Icon
const AdobeXDIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#470137" />
    <text x="32" y="42" fontSize="24" textAnchor="middle" fill="#FF61F6" fontFamily="Arial, sans-serif" fontWeight="bold">Xd</text>
  </svg>
);

// Adobe Photoshop Icon
const PhotoshopIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#001E36" />
    <text x="32" y="42" fontSize="24" textAnchor="middle" fill="#31A8FF" fontFamily="Arial, sans-serif" fontWeight="bold">Ps</text>
  </svg>
);

// Power BI Icon
const PowerBIIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="32" width="8" height="20" fill="#F2C811" />
    <rect x="28" y="20" width="8" height="32" fill="#F2C811" />
    <rect x="42" y="8" width="8" height="44" fill="#F2C811" />
  </svg>
);

// Tableau Icon
const TableauIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="8" fill="#E97B30" />
    <circle cx="32" cy="14" r="4" fill="#5C85AF" />
    <circle cx="32" cy="50" r="4" fill="#5C85AF" />
    <circle cx="14" cy="32" r="4" fill="#F5C04B" />
    <circle cx="50" cy="32" r="4" fill="#F5C04B" />
    <circle cx="18" cy="18" r="3" fill="#D36E7B" />
    <circle cx="46" cy="46" r="3" fill="#D36E7B" />
    <circle cx="18" cy="46" r="3" fill="#80A157" />
    <circle cx="46" cy="18" r="3" fill="#80A157" />
  </svg>
);



// Matplotlib Icon
const MatplotlibIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#11557C" />
    <path d="M 16 48 L 16 16 L 48 16" fill="none" stroke="white" strokeWidth="4" />
    <path d="M 16 48 L 26 32 L 36 38 L 48 24" fill="none" stroke="#FFC107" strokeWidth="4" />
  </svg>
);

// Seaborn Icon
const SeabornIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#4C72B0" />
    <text x="32" y="42" fontSize="24" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">Sb</text>
  </svg>
);

// Stitch Icon
const StitchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" fill="#FFC107" />
    <path d="M22 32 L32 22 L42 32 L32 42 Z" fill="black" />
  </svg>
);



// Skills Array

const skills = [
  {
    name: "Figma",
    icon: (
      <div className="text-purple-500">
        <SiFigma size={40} />
      </div>
    ),
  },
  { name: "Adobe XD", icon: <AdobeXDIcon /> },
  { name: "Adobe Photoshop", icon: <PhotoshopIcon /> },
  {
    name: "Framer",
    icon: (
      <div className="text-black">
        <SiFramer size={40} />
      </div>
    ),
  },
  { name: "Stitch", icon: <StitchIcon /> },
  {
    name: "HTML",
    icon: (
      <div className="text-orange-500">
        <SiHtml5 size={40} />
      </div>
    ),
  },
  {
    name: "CSS",
    icon: (
      <div className="text-blue-500">
        <SiTailwindcss size={40} />
      </div>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <div className="text-yellow-400">
        <SiJavascript size={40} />
      </div>
    ),
  },
  {
    name: "React.js",
    icon: (
      <div className="text-cyan-500">
        <FaReact size={40} />
      </div>
    ),
  },
  {
    name: "Git",
    icon: (
      <div className="text-orange-600">
        <SiGit size={40} />
      </div>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <div className="text-gray-800">
        <SiGit size={40} />
      </div>
    ),
  },
  { name: "Power BI", icon: <PowerBIIcon /> },
  { name: "Tableau", icon: <TableauIcon /> },
  {
    name: "MySQL",
    icon: (
      <div className="text-blue-500">
        <SiMysql size={40} />
      </div>
    ),
  },
  {
    name: "Python",
    icon: (
      <div className="text-blue-400">
        <FaPython size={40} />
      </div>
    ),
  },
  { name: "Matplotlib", icon: <MatplotlibIcon /> },
  { name: "Seaborn", icon: <SeabornIcon /> },
  {
    name: "Vercel",
    icon: (
      <div className="text-black">
        <SiVercel size={40} />
      </div>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <div className="text-green-500">
        <SiMongodb size={40} />
      </div>
    ),
  },
  {
    name: "Git/GitHub",
    icon: (
      <div className="text-orange-600">
        <SiGit size={40} />
      </div>
    ),
  },
  { name: "VSCode", icon: <VSCodeIcon /> },
  { name: "Render", icon: <RenderIcon /> },
];

const Skills = () => {
  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));



  return (
    <section id="skills" className="relative py-20 bg-[#FCFBF9] overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 z-10 mb-16">
        <div className="text-left space-y-2">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
            <span className="text-[#007ABC] mr-2">—</span>My Favorite Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#007ABC]">
            Exploring the Tools
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Behind My Designs
          </h2>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-8 overflow-hidden py-4 mask-image-fade">
        {/* Row 1 */}
        <div className="flex w-[200%] animate-scroll-left">
          {[...row1, ...row1].map((skill, i) => (
            <div
              key={`row1-${i}`}
              className="flex flex-col items-center justify-center pt-8 pb-10 mx-3 sm:mx-4 w-32 sm:w-40 rounded-2xl bg-[#F2F2F2] flex-shrink-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
                {skill.icon}
              </div>
              <p className="text-xs text-gray-600 font-medium text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-[200%] animate-scroll-right">
          {[...row2, ...row2].map((skill, i) => (
            <div
              key={`row2-${i}`}
              className="flex flex-col items-center justify-center pt-8 pb-10 mx-3 sm:mx-4 w-32 sm:w-40 rounded-2xl bg-[#F2F2F2] flex-shrink-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
                {skill.icon}
              </div>
              <p className="text-xs text-gray-600 font-medium text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

