"use client";

import React from "react";

const About = () => {
  return (
    <section id="about" className="relative bg-[#FCFBF9] py-16 lg:py-20 overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col">

        {/* Top Header */}
        <div className="flex justify-between items-start mb-12 lg:mb-16">
          <div className="inline-block border-b-2 border-black pb-1.5">
            <span className="text-[16px] lg:text-[16px] text-black">
              About me
            </span>
          </div>

          <div className="text-black">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45 scale-125">
              <path d="M10 2H14V10H22V14H14V22H10V14H2V10H10V2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Large Quote / Bio */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl letter-spacing-[0.4px] lg:text-[34px] font-bold text-black leading-tight tracking-tight max-w-[100%]">
            UI/UX Designer with 1.3+ years of experience creating user-centered digital experiences for web and mobile applications. Skilled in user research, wireframing, prototyping, interaction design, design systems, and usability optimization. Passionate about solving complex problems through intuitive and visually engaging interfaces that balance user needs with business objectives.
          </h2>
        </div>

      </div>
    </section>
  );
};

export default About;
