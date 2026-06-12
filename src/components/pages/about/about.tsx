"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        


        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
        >
          About Me
        </motion.h2>

        {/* Line animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 h-[2px] w-24 bg-black mx-auto origin-left"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          I’m a{" "}
          <span className="font-semibold text-gray-900">
            UI/UX Designer
          </span>
          , Creative and detail-oriented with 1.3+ years of experience designing responsive web and mobile applications. Skilled in user research, wireframing, prototyping, design systems, usability testing, and AI-assisted design workflows. Experienced in leveraging AI tools to accelerate UX research, content generation, user flow creation, design exploration, and productivity enhancement. Passionate about creating intuitive and user-centered digital experiences that drive business growth and customer satisfaction.
        </motion.p>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 text-lg font-medium bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
