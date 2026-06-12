"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      role: "UI/UX DESIGNER",
      company: "Zikrabyte Solutions",
      duration: "Jan 2025 – Present",
    },
    {
      role: "UI/UX DESIGN & DEVELOPMENT",
      company: "Freelance",
      duration: "2024 – 2025",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">


        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left Column - Text and List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight leading-[1.1]">
              Experience
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl mb-12">
              From a curious creator to a full-time designer, crafting purposeful and user-centered digital experiences.
            </p>

            <div className="flex flex-col w-full">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 border-t border-gray-200 gap-2 sm:gap-4 group"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 uppercase tracking-wide transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:items-end">
                    <p className="text-[#946E1C] font-semibold text-lg">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm font-medium mt-1">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200"></div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-xl"
          >
            <Image
              src="/experience_workspace.png"
              alt="Experience Journey"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
