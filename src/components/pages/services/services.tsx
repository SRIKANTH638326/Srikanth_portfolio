"use client";

import React from "react";

const Services = () => {
  return (
    <div className="w-full bg-[#FCFBF9] relative font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-20">
        
        {/* Top Header / Social Divider */}
        <div className="flex flex-col xl:flex-row items-center w-full mb-16 xl:mb-24">
          <div className="h-[1px] bg-gray-200 flex-grow hidden xl:block"></div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 xl:px-8 py-4 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-600">
            <a href="#" className="flex items-center gap-3 hover:text-black transition-colors">
              <span className="font-serif italic text-lg sm:text-xl -mt-1 font-medium">f</span> FACEBOOK
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-black transition-colors">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.7 1.5C13.5 0.9 13 0.4 12.4 0.3C11.3 0 7 0 7 0C7 0 2.7 0 1.6 0.3C1 0.4 0.5 0.9 0.3 1.5C0 2.6 0 5 0 5C0 5 0 7.4 0.3 8.5C0.5 9.1 1 9.6 1.6 9.7C2.7 10 7 10 7 10C7 10 11.3 10 12.4 9.7C13 9.6 13.5 9.1 13.7 8.5C14 7.4 14 5 14 5C14 5 14 2.6 13.7 1.5ZM5.6 7.1V2.9L9.2 5L5.6 7.1Z"/></svg>
              YOUTUBE
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-black transition-colors">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.2C11.6 1.4 11.1 1.5 10.6 1.6C11.1 1.3 11.5 0.8 11.7 0.2C11.2 0.5 10.7 0.7 10.1 0.8C9.7 0.3 9 0 8.3 0C6.8 0 5.6 1.2 5.6 2.7C5.6 2.9 5.6 3.1 5.7 3.3C3.5 3.2 1.5 2.1 0.2 0.5C0 0.9 -0.1 1.4 -0.1 1.9C-0.1 2.8 0.4 3.6 1.1 4.1C0.7 4.1 0.3 4 0 3.8V3.8C0 5.1 0.9 6.1 2 6.3C1.8 6.4 1.5 6.4 1.3 6.4C1.1 6.4 1 6.4 0.8 6.3C1.1 7.3 2.1 8 3.2 8C2.3 8.7 1.1 9.2 0 9.2C-0.2 9.2 -0.4 9.1 -0.6 9.1C0.5 9.8 1.8 10.2 3.2 10.2C7 10.2 9.1 7 9.1 4.2C9.1 4.1 9.1 4 9.1 3.9C9.5 3.6 9.9 3.2 10.2 2.7C9.8 2.9 9.3 3 8.9 3.1C9.3 2.9 9.7 2.4 9.8 1.9L12 1.2Z"/></svg>
              TWITTER
            </a>
          </div>
          
          <div className="h-[1px] bg-gray-200 flex-grow hidden xl:block"></div>
          
          <div className="flex items-center justify-center gap-3 xl:px-8 py-4 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-800 hover:text-black transition-colors cursor-pointer w-full xl:w-auto">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.6 0H1.4C0.6 0 0 0.6 0 1.4V8.6C0 9.4 0.6 10 1.4 10H12.6C13.4 10 14 9.4 14 8.6V1.4C14 0.6 13.4 0 12.6 0ZM12.6 1.4V1.8L7 5.4L1.4 1.8V1.4H12.6ZM1.4 8.6V3.5L7 7L12.6 3.5V8.6H1.4Z"/></svg>
            srikanthc061@gmail.com
          </div>
        </div>

        {/* Section Title & Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
          <div className="max-w-xl">
            <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-gray-800 uppercase mb-6 flex items-center gap-4">
              <span className="w-10 h-[2px] bg-black"></span> MY SERVICES ?
            </h3>
            <h2 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold text-black leading-[1.05] tracking-tight">
              WHAT I'M <br/> OFFERING
            </h2>
          </div>
          <div className="max-w-[400px] text-sm text-gray-600 leading-relaxed font-medium mb-2 lg:mb-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </div>
          <div className="mb-2 lg:mb-4">
            <button className="bg-black text-white px-10 py-4 rounded-full text-[11px] font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors shadow-lg">
              ALL SERVICE
            </button>
          </div>
        </div>

        {/* Services Content & Grid */}
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-10 items-start relative mt-8">
          
          {/* Scroll Down Indicator */}
          <div className="hidden xl:flex flex-col items-center justify-start h-[350px] w-24 pt-8">
            <div className="transform -rotate-90 text-[10px] font-bold tracking-[0.25em] text-gray-500 whitespace-nowrap mb-20 mt-12">
              SCROLL DOWN
            </div>
            <div className="w-[1px] h-16 bg-gray-300 mb-8"></div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg hover:scale-110 transition-transform cursor-pointer shadow-md">
              ↓
            </div>
          </div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full">
            
            {/* Card 1: Dark */}
            <div className="bg-[#111] text-white p-10 sm:p-12 flex flex-col justify-between min-h-[380px] group transition-all cursor-pointer">
              <div className="mb-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="M2 2l7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold mb-10 leading-tight w-full sm:w-[80%] tracking-tight">UI-UX CREATIVE DESIGN</h3>
                <a href="#" className="text-[11px] font-bold tracking-[0.2em] flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                  READ MORE <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Card 2: Light */}
            <div className="bg-white text-black p-10 sm:p-12 flex flex-col justify-between min-h-[380px] border border-gray-200 group hover:border-black transition-all cursor-pointer">
              <div className="mb-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M16 6l-4.5 4.5a2 2 0 0 1-2.828 0v0a2 2 0 0 1 0-2.828L13 3z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold mb-10 leading-tight w-full sm:w-[80%] tracking-tight">VISUAL GRAPHIC DESIGN</h3>
                <a href="#" className="text-[11px] font-bold tracking-[0.2em] flex items-center gap-3 text-gray-500 group-hover:text-black transition-colors">
                  READ MORE <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Card 3: Light */}
            <div className="bg-white text-black p-10 sm:p-12 flex flex-col justify-between min-h-[380px] border border-gray-200 group hover:border-black transition-all cursor-pointer">
              <div className="mb-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <circle cx="12" cy="5" r="2"/>
                  <circle cx="5" cy="12" r="2"/>
                  <circle cx="19" cy="12" r="2"/>
                  <path d="M12 7v3"/>
                  <path d="M9 12h6"/>
                  <circle cx="12" cy="15" r="3"/>
                  <path d="M12 18v2"/>
                  <path d="M15 15l2 2"/>
                  <path d="M9 15l-2 2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold mb-10 leading-tight w-full sm:w-[90%] tracking-tight">STRATEGY & DIGITAL MARKETING</h3>
                <a href="#" className="text-[11px] font-bold tracking-[0.2em] flex items-center gap-3 text-gray-500 group-hover:text-black transition-colors">
                  READ MORE <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
