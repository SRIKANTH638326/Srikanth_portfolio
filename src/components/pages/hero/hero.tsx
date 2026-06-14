"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax translation values
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yShapesFast = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yShapesSlow = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div ref={containerRef} className="w-full relative bg-[#FCFBF9] overflow-hidden font-sans">
      {/* Background colorful blur */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-[-10%] left-[30%] w-[60%] h-[60%] bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 opacity-40 blur-[100px] rounded-full pointer-events-none" 
      />

      {/* Decorative lines & shapes */}
      <motion.div style={{ y: yShapesFast }} className="absolute top-10 left-[30%] w-[100px] h-[2px] bg-black transform -rotate-45" />
      <motion.div style={{ y: yShapesFast }} className="absolute top-14 left-[32%] w-[60px] h-[2px] bg-black transform -rotate-45" />

      <motion.div style={{ y: yShapesSlow }} className="absolute top-[40%] right-[48%] w-2 h-4 bg-black transform rotate-12" />
      
      {/* Black circle "Hello" */}
      <motion.div 
        style={{ y: yShapesFast }}
        className="absolute top-[50%] left-[45%] w-[120px] h-[120px] bg-black rounded-full flex items-center justify-center text-white text-3xl font-light transform -rotate-12 z-0 hidden lg:flex"
      >
        Hello
        <div className="absolute -top-4 -left-12 w-[100px] h-[2px] bg-black transform -rotate-45" />
      </motion.div>
      
      {/* Squiggly shape placeholder (CSS drawing approximation) */}
      <motion.div style={{ y: yShapesSlow }} className="absolute top-[45%] right-[10%] w-10 h-10 border-t-4 border-r-4 border-black rounded-tr-xl transform rotate-45 hidden lg:block" />
      <motion.div style={{ y: yShapesSlow }} className="absolute top-[48%] right-[8%] w-10 h-10 border-b-4 border-l-4 border-black rounded-bl-xl transform rotate-45 hidden lg:block" />

      {/* Main Content */}
      <motion.div style={{ y: yContent }} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col items-start space-y-6">
            <div className="text-3xl">👋</div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black tracking-tight leading-none">
              Hello! <br className="hidden md:block lg:hidden" />
              <span className="font-extrabold whitespace-nowrap">I'm Srikanth</span>
            </h1>
            
            <div className="flex items-center gap-4 w-full">
              <div className="h-[2px] w-24 bg-gray-300" />
              <h2 className="text-2xl sm:text-3xl font-light text-gray-600">
                UI/UX Designer
              </h2>
              <span className="text-3xl text-black">✦</span>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md pt-4">
              Hello! I'm Srikanth. I'm a <span className="font-bold text-black">UX designer, design thinker, product designer</span>, experience strategist, generative artist & human-loving introvert
            </p>

            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-black text-lg">✔</span>
                <span className="text-gray-800 text-sm font-medium">Product must be authentic</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black text-lg">✔</span>
                <span className="text-gray-800 text-sm font-medium">Solve pain points elegantly</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black text-lg">✔</span>
                <span className="text-gray-800 text-sm font-medium">User testing, feedback, and validation</span>
              </div>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <button className="bg-[#111] hover:bg-black text-white px-8 py-3.5 rounded-[2rem] text-sm font-medium transition-colors">
                Let's Talk
              </button>
              <button className="text-black font-medium text-sm flex items-center gap-2 border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                Download Cv <span>↓</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end z-10 mt-12 lg:mt-0">
            <div className="relative w-[300px] h-[350px] sm:w-[400px] sm:h-[460px] md:w-[500px] md:h-[580px]">
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
      </motion.div>

      {/* Marquee Bottom Banner */}
      <div className="w-full bg-[#111] py-5 overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 text-white font-sans font-bold tracking-[0.2em] text-sm sm:text-base">
          <span>✦</span>
          <span>WEB DESIGN</span>
          <span>✦</span>
          <span>APP DESIGN</span>
          <span>✦</span>
          <span>DEVELOPMENT</span>
          <span>✦</span>
          <span>WEB FLOW</span>
          <span>✦</span>
          <span>BRANDING</span>
          <span>✦</span>
          <span>WEB DESIGN</span>
          <span>✦</span>
          <span>APP DESIGN</span>
          <span>✦</span>
          <span>DEVELOPMENT</span>
          <span>✦</span>
          <span>WEB FLOW</span>
          <span>✦</span>
          <span>BRANDING</span>
        </div>
      </div>
      
      {/* Add custom animation for marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Hero;

