"use client";

import React from "react";

const Certifications = () => {
  const certs = [
    {
      title: "UI/UX Designing & Development",
      institution: "FITA Academy",
      duration: "6 months of dedicated study",
      level: "Advanced",
      bg: "bg-[#D4EAC8]",
      image: "/cert_uiux.png",
    },
    {
      title: "Data Analysis Certification",
      institution: "Udemy",
      duration: "3 months of dedicated study",
      level: "Intermediate",
      bg: "bg-[#F5C5A3]",
      image: "/cert_data.png",
    },
    {
      title: "Cyber Security Orientation",
      institution: "Online Program",
      duration: "1 month of dedicated study",
      level: "Beginner",
      bg: "bg-[#BDD4EF]",
      image: "/cert_cyber.png",
    },
  ];

  return (
    <section id="certifications" className="bg-[#FCFBF9] py-20 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16 lg:mb-20">
          {/* Left: small text + description */}
          <div className="flex flex-col gap-5 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-sm font-bold">✦</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              I continuously upskill through certifications, exploring design, development, data analysis, and cybersecurity.
            </p>
          </div>

          {/* Right: Big title */}
          <div className="flex-1 lg:text-right flex items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-black leading-[1.1] w-full">
              Directions of Learning
            </h2>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer flex flex-col min-h-[320px] ${cert.bg}`}
            >
              {/* Top: Badge + Arrow */}
              <div className="flex justify-between items-start p-5 pb-0">
                <span className="text-xs font-semibold bg-white/70 text-gray-700 px-3 py-1 rounded-full">
                  {cert.level}
                </span>
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <span className="text-black text-base font-light leading-none">↗</span>
                </div>
              </div>

              {/* Middle: Image */}
              <div className="flex-1 px-5 pt-4">
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Bottom: Text */}
              <div className="p-5 pt-4">
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium">{cert.duration}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
