"use client";

import React from "react";
import Image from "next/image";
import { PenTool, LineChart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificationsData = [
    {
      title: "UI/UX Designing & Development",
      description: "🏫 FITA Academy\n📅 January 2025",
      icon: PenTool,
      bgColor: "bg-[#EFECE6]", // Light Beige
      iconColor: "text-gray-800",
    },
    {
      title: "Data Analysis Certification",
      description: "🏫 Udemy\n📅 March 2024 & November 2025",
      icon: LineChart,
      bgColor: "bg-[#EFECE6]", // Light Beige
      iconColor: "text-gray-800",
    },
    {
      title: "Cyber Security Orientation Program",
      description: "📅 3-Hour Certification Program",
      icon: ShieldCheck,
      bgColor: "bg-[#1D63A6]", // Deep Blue
      iconColor: "text-white",
    },
  ];

  return (
    <section id="certifications" className="bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left Column: Image & Vertical Text */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Image */}
            <motion.div 
              className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[500px] lg:w-[400px] lg:h-[600px] overflow-hidden rounded-md shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/certifications_side.png" 
                alt="Certifications" 
                layout="fill" 
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Vertical Title & Divider */}
            <motion.div 
              className="flex items-center gap-6 lg:gap-10 h-[450px] sm:h-[500px] lg:h-[600px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center h-full relative">
                <h2 
                  className="text-5xl sm:text-6xl md:text-7xl font-serif text-gray-900 tracking-wider whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Certifications
                </h2>
              </div>
              
              {/* Vertical Divider */}
              <div className="w-[2px] h-[80%] bg-gray-200"></div>
            </motion.div>
          </div>

          {/* Right Column: List */}
          <div className="flex flex-col justify-center space-y-8 mt-10 lg:mt-0 flex-1 w-full max-w-md">
            {certificationsData.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-6 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Icon Box */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 ${cert.bgColor}`}>
                    <Icon size={32} className={cert.iconColor} />
                  </div>
                  {/* Text Content */}
                  <div className="pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#d97706] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 whitespace-pre-line leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
