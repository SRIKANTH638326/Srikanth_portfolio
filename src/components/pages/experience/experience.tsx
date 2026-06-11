"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Zikrabyte Solutions",
      duration: "Jan 2025 – Present",
      description:
        "Responsible for designing user interfaces for web and mobile applications. Creating wireframes, mockups, and prototypes to communicate design ideas.",
      color: "apple",
    },
    {
      role: "UI/UX Design & Development",
      company: "Freelance",
      duration: "2024 – 2025",
      description:
        "Responsible for designing user interfaces for web and mobile applications. Creating wireframes, mockups, and prototypes to communicate design ideas.",
      color: "green",
    },
  ];
  const colorClasses: Record<string, { bg: string; text: string }> = {
    apple: { bg: "bg-amber-50", text: "text-[#d97706]" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  };

  return (
    <section
      id="experience"
      className="bg-white py-4 sm:py-8 lg:py-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>

          {/* Animated line below heading */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 h-[2px] w-24 bg-black mx-auto origin-left"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`${colorClasses[exp.color].bg} ${
                    colorClasses[exp.color].text
                  } p-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors`}
                >
                  <Briefcase size={32} />
                </div>
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-semibold ${
                  colorClasses[exp.color].text
                } text-center`}
              >
                {exp.role}
              </h3>

              <p className="mt-2 text-gray-700 text-center text-lg font-medium">
                {exp.company} | {exp.duration}
              </p>
              <p className="mt-4 text-gray-600 text-center leading-relaxed text-base sm:text-lg">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
