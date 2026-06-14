"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <section id="education" className="bg-[#FCFBF9] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Content */}
        <div className="space-y-12">
          <div className="text-left">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-black leading-[1.1] mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My academic journey has provided me with a strong foundation in computer science and logical problem-solving, which heavily influences my structured approach to UI/UX design. I believe continuous learning is key to making things feel effortless.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 justify-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm border-b border-gray-200 pb-2">
                  {idx === 0 ? "Undergraduate" : "High School"}
                </h4>
                <div className="space-y-2 pt-2">
                  <h5 className="font-semibold text-gray-800 text-base leading-tight">{edu.title}</h5>
                  <p className="text-gray-500 text-sm font-medium">{edu.institution}</p>
                  <div className="flex flex-col space-y-1 mt-3">
                    <p className="text-gray-400 text-xs">{edu.duration}</p>
                    <p className="text-[#946E1C] text-sm font-medium">{edu.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

