"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section id="projects" className="relative bg-[#FCFBF9] text-gray-900 py-20 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header Section */}
        <div className="relative mb-20 lg:mb-32 flex flex-col items-center justify-center">
          {/* Faded background text */}
          <h1 className="absolute text-[80px] sm:text-[140px] lg:text-[180px] font-bold text-[#007ABC] opacity-[10%] tracking-wider uppercase select-none pointer-events-none whitespace-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            PORTFOLIO
          </h1>
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight z-10 text-[#007ABC]">
            /Selected Work
          </h2>
        </div>

        {/* Navigation / Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-8">
          <div className="flex gap-6 sm:gap-8 text-sm sm:text-base">
            {["All", "App", "Web", "Graphic"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-colors ${activeTab === tab
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black font-medium"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <a href="#" className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-2 text-black cursor-pointer">
            View All Work <span className="text-lg leading-none font-light">↗</span>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-study/${project.slug}`}
              className="flex flex-col group cursor-pointer no-underline"
            >

              {/* Image Container */}
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-2 bg-[#F8F8F8] border border-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-400 ease-out"
                />

                {/* Hover Arrow Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-2xl text-black font-light leading-none">↗</span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-base sm:text-lg font-semibold text-black mb-3 leading-snug">
                {project.title.split('–')[0].trim()}
              </h3>

              {/* Tags */}
              <div className="flex gap-2">
                <span className="px-3 py-1.5 border border-gray-200 rounded-full text-[11px] font-medium text-gray-700 bg-transparent">
                  {project.type}
                </span>
                <span className="px-3 py-1.5 border border-gray-200 rounded-full text-[11px] font-medium text-gray-700 bg-transparent">
                  {project.tech[0]}
                </span>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
