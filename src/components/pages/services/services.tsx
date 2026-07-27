"use client";

import React from "react";

const Services = () => {
  const servicesData = [
    {
      title1: "UI-UX Creative Design",
      tags: ["Figma", "Prototyping", "Wireframing", "Interaction"],
      description:
        "Designing intuitive, user-centred interfaces with seamless user experiences, modern aesthetics, and scalable design systems for web and mobile applications.",
      bg: "bg-[#0F0F10]",
      top: "top-20 lg:top-32",
    },
    {
      title1: "Visual Graphic Design",
      tags: ["Branding", "Illustration", "Typography"],
      description:
        "Creating impactful visual identities, marketing assets, and engaging graphics that strengthen brand recognition and communicate ideas with clarity.",
      bg: "bg-[#1E2024]",
      top: "top-24 lg:top-40",
    },
    {
      title1: "Web Development",
      tags: ["React", "CSS", "HTML5", "Responsive"],
      description:
        "Building fast, responsive, and scalable websites using modern technologies, ensuring clean code, optimal performance, and seamless user experiences across all devices.",
      bg: "bg-[#2E3238]",
      top: "top-28 lg:top-48",
    },
  ];

  return (
    <section className="w-full bg-[#FCFBF9] relative font-sans py-14 lg:py-32">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-16 mb-12 lg:mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
          <div className="max-w-xl">
            <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-5 flex items-center gap-4 uppercase tracking-widest">
              <span className="w-10 h-[2px] bg-black"></span>
              My Services
            </h3>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-black leading-[1.05] tracking-tight">
              WHAT I&apos;M <br />
              OFFERING
            </h2>
          </div>

          <div className="max-w-[400px] text-sm text-gray-600 leading-relaxed font-medium">
            Delivering end-to-end digital solutions, from immersive user
            interfaces to compelling brand identities and strategic marketing
            campaigns.
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 lg:px-16 pb-12 lg:pb-32">
        <div className="relative w-full">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className={`sticky ${service.top}
              w-full
              min-h-fit
              lg:h-[75vh]
              flex flex-col justify-between
              p-5 sm:p-8 lg:p-16
              rounded-[2rem] lg:rounded-[3.5rem]
              shadow-2xl
              border border-white/5
              gap-5 lg:gap-0
              mb-6 sm:mb-[10vh] lg:mb-[40vh]
              last:mb-0
              transition-all duration-500
              ${service.bg}`}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div className="pt-2 lg:pt-0">
                <h3 className="text-3xl sm:text-5xl lg:text-[5rem] font-bold leading-tight tracking-tight text-white">
                  {service.title1}
                </h3>
              </div>

              {/* Description */}
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="hidden sm:block text-white mt-1 flex-shrink-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>

                <p className="text-sm sm:text-base lg:text-xl text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;