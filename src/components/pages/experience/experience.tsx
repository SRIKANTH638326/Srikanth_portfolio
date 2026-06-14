"use client";

import React from "react";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      company: "Zikrabyte Solutions",
      duration: "Jan 2025 – Present",
      description: "Leading UI/UX design initiatives, crafting user-centered digital experiences for web and mobile.",
      tags: ["UIUX", "Prototyping"],
    },
    {
      company: "Freelance",
      duration: "2024 – 2025",
      description: "Delivered UI/UX design and development projects, collaborating with clients to bring creative visions to life.",
      tags: ["UIUX", "Branding"],
    },
    {
      company: "Creative Studio Co.",
      duration: "2023 – 2024",
      description: "Designed brand identities and digital interfaces for early-stage startups, focusing on visual consistency and user engagement.",
      tags: ["Branding", "UIUX"],
    },
  ];

  return (
    <section id="experience" className="bg-[#FCFBF9] text-gray-900 py-20 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div className="flex flex-col max-w-xl">
            <div className="flex items-center gap-2 text-sm font-medium mb-6 text-black">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              Experiences
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1]">
              Explore My Design <br /> Journey
            </h2>
          </div>
          
          <div className="flex flex-col max-w-sm gap-6 md:mt-2">
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Over the past 1.3+ years, I've had the opportunity to work on a wide range of design projects, collaborating with diverse teams and clients to bring creative visions to life.
            </p>
            <a href="#contact" className="text-black font-semibold text-sm border-b border-black pb-0.5 self-start hover:text-gray-600 hover:border-gray-600 transition-colors">
              Book A Call ↗
            </a>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col w-full">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;
            return (
              <div key={index} className="flex flex-col border-t border-gray-200 py-10 lg:py-12">
                
                {/* Row: Company, Description, Tags */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
                  {/* Left */}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2 font-medium">
                      <span className="text-gray-400">•</span> {exp.duration}
                    </p>
                  </div>

                  {/* Middle */}
                  <div className="flex items-start md:mt-1">
                    <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right (Tags) */}
                  <div className="flex flex-wrap gap-3 md:justify-end md:mt-1">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-colors ${
                          isLast
                            ? "bg-[#1A1A1A] text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded section for last item */}
                {isLast && (
                  <div className="mt-14 flex flex-col md:flex-row gap-10 lg:gap-16 items-start md:items-end">
                    
                    <div className="flex gap-4 w-full md:w-1/2">
                      <div className="relative w-1/3 aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <Image src="/project/bechdu.png" alt="Experience 1" fill className="object-cover" />
                      </div>
                      <div className="relative w-1/3 aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <Image src="/experience_workspace.png" alt="Experience 2" fill className="object-cover" />
                      </div>
                      <div className="relative w-1/3 aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <Image src="/project/sellsmart.png" alt="Experience 3" fill className="object-cover" />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 flex items-end justify-between gap-6 pb-2">
                      <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] font-medium">
                        From crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges.
                      </p>
                      <button className="w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 hover:bg-black hover:scale-105 transition-all shadow-lg cursor-pointer">
                        <span className="text-2xl font-light leading-none">↗</span>
                      </button>
                    </div>
                    
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
