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
    <section id="education" className="bg-[#FCFBF9] text-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Content */}
        <div className="space-y-16">
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

          {/* List Layout */}
          <motion.div
            className="flex flex-col w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-8">
                <div className="flex flex-col mb-2 md:mb-0">
                  <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">{edu.institution}</h3>
                  <p className="text-gray-500 font-medium text-lg">{edu.title}</p>
                </div>
                <div className="text-gray-500 font-medium text-lg">
                  {edu.duration}
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

