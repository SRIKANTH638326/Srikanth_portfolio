"use client";

import React from "react";
import { PenTool, LineChart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificationsData = [
    {
      title: "UI/UX Designing & Development",
      institution: "FITA Academy",
      date: "January 2025",
      icon: PenTool,
    },
    {
      title: "Data Analysis Certification",
      institution: "Udemy",
      date: "March 2024 & November 2025",
      icon: LineChart,
    },
    {
      title: "Cyber Security Orientation Program",
      institution: "3-Hour Certification Program",
      date: "Completed",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="certifications" className="bg-[#EFECE6] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-widest text-[#946E1C] uppercase mb-4">
            Continuous Learning
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            My <span className="font-semibold">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-start group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-[#EFECE6] flex items-center justify-center mb-8 group-hover:bg-[#946E1C] transition-colors duration-300">
                  <Icon size={28} className="text-gray-800 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#946E1C] transition-colors">
                  {cert.title}
                </h3>
                
                <div className="mt-auto pt-4 w-full border-t border-gray-100 flex flex-col gap-1">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {cert.institution}
                  </p>
                  <p className="text-sm text-gray-400">
                    {cert.date}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
