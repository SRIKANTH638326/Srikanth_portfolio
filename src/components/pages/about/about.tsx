"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative bg-[#EFECE6] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="text-sm font-bold tracking-widest text-[#946E1C] uppercase mb-4">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Designing <br className="hidden lg:block" />
              <span className="font-semibold">purposeful</span> digital experiences.
            </h2>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col pt-2 lg:pt-12"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I’m a <span className="font-semibold text-gray-900">UI/UX Designer</span> with 1.3+ years of experience designing responsive web and mobile applications. I am creative, detail-oriented, and passionate about creating intuitive, user-centered digital experiences that drive business growth and customer satisfaction.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              My core skills span across user research, wireframing, prototyping, design systems, and usability testing. Furthermore, I actively leverage AI-assisted design workflows to accelerate UX research, explore new design possibilities, and enhance overall productivity.
            </p>

            <div>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white bg-black rounded-full hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md cursor-pointer"
              >
                Explore My Work
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
