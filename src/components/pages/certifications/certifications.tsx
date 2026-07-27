"use client";

import React from "react";
import Image from "next/image";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {certs.map((cert, index) => {
            const isMiddle = index === 1;
            const cardBg = isMiddle ? "bg-[#092B22]" : "bg-[#DDE3DE]";
            const textColor = isMiddle ? "text-white" : "text-gray-900";
            const descColor = isMiddle ? "text-gray-400" : "text-gray-600";
            const iconBg = isMiddle ? "bg-[#DDE3DE]" : "bg-[#256655]";
            const iconColor = isMiddle ? "text-[#092B22]" : "text-white";

            const roundedClass = index === 0 
              ? "rounded-3xl lg:rounded-l-[48px] lg:rounded-r-xl" 
              : index === 2 
                ? "rounded-3xl lg:rounded-r-[48px] lg:rounded-l-xl" 
                : "rounded-3xl lg:rounded-xl";

            return (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer flex flex-col pt-10 px-8 min-h-[460px] transition-transform hover:-translate-y-2 ${cardBg} ${roundedClass}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full ${iconBg} ${iconColor} flex items-center justify-center mb-8 flex-shrink-0 shadow-sm`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex flex-col mb-10">
                  <h3 className={`text-[22px] font-semibold mb-4 ${textColor}`}>
                    {cert.title}
                  </h3>
                  <p className={`text-[15px] leading-relaxed font-medium ${descColor}`}>
                    {cert.institution} – {cert.duration}. Focused on practical skills and industry-standard practices.
                  </p>
                </div>

                {/* Bottom Image (Ticket Mockup Style) */}
                <div className="mt-auto relative w-full h-[160px] rounded-t-[24px] overflow-hidden bg-white shadow-2xl translate-y-6 group-hover:translate-y-2 transition-transform duration-500 ease-out border border-white/20">
                   <Image
                     src={cert.image}
                     alt={cert.title}
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className="object-cover object-top opacity-95"
                   />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
