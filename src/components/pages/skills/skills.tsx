/* eslint-disable react/jsx-key */
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaWhatsapp,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiPostman,
  SiVercel,

  SiNetlify,
  SiExpress,
  SiGit,
  SiFirebase,
  SiFigma,
  SiFramer,
  SiMysql,
} from "react-icons/si";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

// Acertinity UI / Shadcn placeholder icon
const AcertinityUIIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="60" height="60" rx="8" ry="8" fill="#4F46E5" />
    <text
      x="32"
      y="42"
      fontSize="28"
      textAnchor="middle"
      fill="white"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      A
    </text>
  </svg>
);

// Shiprocket SVG Icon
const ShiprocketIcon = () => (
  <svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="#852f8d" d="M256 0c-141.38 0-256 114.62-256 256s114.62 256 256 256 256-114.62 256-256-114.62-256-256-256zm0 464c-114.88 0-208-93.12-208-208s93.12-208 208-208 208 93.12 208 208-93.12 208-208 208z" />
    <path fill="#852f8d" d="M371.4 140.6c-4.7-4.7-12.3-4.7-17 0l-128.4 128.4-56.4-56.4c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17l64.9 64.9c4.7 4.7 12.3 4.7 17 0l136.9-136.9c4.7-4.7 4.7-12.3 0-17z" />
  </svg>
);

// MSG91 SVG Icon
const MSG91Icon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ed1c24" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
);

// Render Logo
const RenderIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#2E2E2E" />
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="1" />
  </svg>
);

// Brevo Icon
const BrevoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#00df9a" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" />
  </svg>
);

// GSAP Logo
const GSAPIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="256" cy="256" r="256" fill="#88CE02" />
    <path
      fill="#fff"
      d="M322.9 167.3c-9.6-3.8-20.5.9-24.3 10.5l-27.6 69.3-37.3-47.6c-7-9-20-10.7-29-3.7s-10.7 20-3.7 29l55.7 71c4.2 5.4 10.8 8.4 17.6 8.1 7-.3 13.2-4.6 15.9-11l41.2-103.4c3.8-9.6-0.9-20.5-10.5-24.3z"
    />
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

// Excel Icon
const ExcelIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#217346" />
    <text x="32" y="42" fontSize="26" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">X</text>
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

// Floating Background Icons
const FloatingIcons = () => {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: "random(-10,10)",
        rotation: "random(-2,2)",
        duration: 8 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  const icons = [
    <div className="text-cyan-400/10">
      <FaReact size={40} />
    </div>,
    <div className="text-green-500/10">
      <FaNodeJs size={40} />
    </div>,
    <div className="text-yellow-400/10">
      <FaDatabase size={40} />
    </div>,
    <div className="text-green-400/10">
      <SiMongodb size={40} />
    </div>,
    <div className="text-gray-400/10">
      <SiNextdotjs size={40} />
    </div>,
    <div className="text-sky-400/10">
      <SiTailwindcss size={40} />
    </div>,
    <div className="text-blue-600/10">
      <SiTypescript size={40} />
    </div>,
    <div className="text-orange-500/10">
      <FaGitAlt size={40} />
    </div>,
    <div className="text-blue-300/10">
      <FaPython size={40} />
    </div>,
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) iconsRef.current[i] = el;
          }}
          className="absolute"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

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

  const percentages = ["98%", "95%", "92%", "90%", "88%", "85%"];

  return (
    <section id="skills" className="relative py-20 bg-white overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 mb-16">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
            <span className="text-[#946E1C] mr-2">—</span>My Favorite Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#946E1C] italic">
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
              className="flex flex-col items-center justify-center pt-8 pb-10 mx-3 sm:mx-4 w-32 sm:w-40 rounded-2xl bg-gray-50 flex-shrink-0 transition-transform duration-300 hover:-translate-y-2"
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
              className="flex flex-col items-center justify-center pt-8 pb-10 mx-3 sm:mx-4 w-32 sm:w-40 rounded-2xl bg-gray-50 flex-shrink-0 transition-transform duration-300 hover:-translate-y-2"
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

