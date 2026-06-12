/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  const tools = ["Figma", "Photoshop", "Adobe XD", "Framer"];

  return (
    <div className="w-full flex flex-col">

      {/* ══════════════════════════════════════════
          Section 1 — Presentation Banner
      ══════════════════════════════════════════ */}
      <div className="w-full bg-white px-6 sm:px-10 lg:px-16 pt-28 pb-10">
        <div className="w-full bg-[#EFECE6] relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[460px] rounded-2xl border border-gray-200 shadow-sm">

          {/* Inner border frame */}
          <div className="absolute inset-5 sm:inset-7 border border-[#8199B1]/40 rounded-xl pointer-events-none" />

          {/* PORTFOLIO watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span
              className="text-[80px] sm:text-[140px] md:text-[180px] lg:text-[230px] font-serif text-transparent leading-none tracking-widest"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.85)" }}
            >
              PORTFOLIO
            </span>
          </div>

          {/* Foreground content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A1A] tracking-tight">
              UI/UX Designer
            </h2>
            <p className="mt-5 text-[10px] sm:text-xs font-bold tracking-[0.5em] text-[#555] uppercase">
              Presentation
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          Section 2 — Personal Intro
      ══════════════════════════════════════════ */}
      <div className="w-full bg-white relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-16 left-[48%] w-2.5 h-2.5 rounded-full bg-[#946E1C]/30 pointer-events-none" />
        <div className="absolute top-24 right-[22%] w-3 h-3 rounded-full bg-[#946E1C]/40 pointer-events-none" />
        <div className="absolute bottom-16 right-[12%] w-2 h-2 rounded-full bg-gray-300 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left: Text ── */}
            <div className="flex flex-col space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="text-[#946E1C]">Srikanth</span>
              </h2>

              <p className="text-2xl sm:text-3xl font-light text-gray-700 leading-snug">
                UI/UX Designer
              </p>

              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
                UI/UX Designer passionate about creating fast, scalable, and
                intuitive digital experiences. My work is inspired by the idea
                that technology should feel simple and elegant, just like the
                world's best-designed products.
              </p>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-3 pt-1">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:border-gray-800 hover:text-gray-900 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-8 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md cursor-pointer"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 border-2 border-gray-900 text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Hire Me
                </a>
              </div>
            </div>

            {/* ── Right: Photo ── */}
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-[260px] h-[320px] sm:w-[360px] sm:h-[440px] md:w-[420px] md:h-[510px] lg:w-[460px] lg:h-[560px]">
                <Image
                  src="/Srikanth_image.png"
                  alt="Srikanth"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;

