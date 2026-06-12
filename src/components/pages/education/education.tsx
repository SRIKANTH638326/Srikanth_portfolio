"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Computer Science",
      institution: "Jairam Arts and Science College, Salem",
      duration: "June 2021 – May 2024",
      score: "CGPA: 7.0",
    },
    // {
    //   title: "Pre-University",
    //   institution: "Jairam Pre-University College, Salem",
    //   duration: "2018 – 2020",
    //   score: "Percentage: 80%",
    // },
    {
      title: "High School",
      institution: "Sri Sakthi Vikaas Matric Hr. Sec. School, Salem",
      duration: "2021",
      score: "Percentage: 71%",
    },
  ];

  return (
    <section id="education" className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center">
          
          {/* Left: ID Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end pt-16"
          >
            <div className="relative flex flex-col items-center">
              {/* Lanyard Top */}
              <div className="absolute -top-[120px] flex justify-center w-full z-0">
                <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 140C10 70 30 10 60 10C90 10 110 70 110 140" stroke="#E5E7EB" strokeWidth="20" strokeLinecap="round" />
                  <rect x="45" y="110" width="30" height="15" rx="4" fill="#D1D5DB" />
                  <circle cx="60" cy="130" r="6" stroke="#9CA3AF" strokeWidth="3" />
                </svg>
              </div>

              {/* Card */}
              <div className="relative z-10 bg-[#EFECE6] p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200/60 w-[240px] sm:w-[280px]">
                {/* Hole punch */}
                <div className="w-full flex justify-center mb-3">
                  <div className="w-14 h-3 rounded-full bg-gray-100 shadow-inner"></div>
                </div>
                
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                  <Image 
                    src="/Srikanth_image.png" 
                    alt="Srikanth" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-12">
            <div>
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Education
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My academic journey has provided me with a strong foundation in computer science and logical problem-solving, which heavily influences my structured approach to UI/UX design. I believe continuous learning is key to making things feel effortless.
              </motion.p>
            </div>

            {/* Grid Layout similar to the image */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm border-b border-gray-200 pb-2">
                    {idx === 0 ? "Undergraduate" : "High School"}
                  </h4>
                  <div className="space-y-2 pt-2">
                    <h5 className="font-semibold text-gray-800 text-sm leading-tight">{edu.title}</h5>
                    <p className="text-gray-500 text-xs font-medium">{edu.institution}</p>
                    <div className="flex flex-col space-y-1 mt-2">
                      <p className="text-gray-400 text-xs">{edu.duration}</p>
                      <p className="text-[#946E1C] text-xs font-medium">{edu.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

