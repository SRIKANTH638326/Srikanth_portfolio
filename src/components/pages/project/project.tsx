"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "BECHDU – Electronics Buy & Sell Marketplace",
    description:
      "A comprehensive electronics marketplace with multi-vendor support. Features a React admin dashboard and a Flutter QC mobile app for partners. Engineered with automated PDF invoice generation and receipt management for both buying and selling sides, AWS S3 for secure KYC/QC storage, and real-time Firebase tracking with automated data synchronization.",
    image: "/project/bechdu.png",
    type: "UI/UX Design",
    tech: [
      "Figma",
      "Adobe photoshop",
    ],
    link: "https://bechdu.in/",
  },
  {
    title: "SellSmart – Used Electronics Selling Platform",
    description:
      "Platform to sell electronics featuring a React admin dashboard and a Flutter QC mobile app for partners. Manages end-to-end lifecycles with smart routing, dynamic rewards, and passwordless MSG91 OTP authentication. Engineered with AWS S3 for secure KYC document storage, automated data synchronization, and on-the-fly PDF invoice generation.",
    image: "/project/sellsmart.png",
    type: "UI/UX Design",
    tech: [
      "Figma",
      "Adobe photoshop",
      "Adobe Xd",
    ],
    link: "https://sellsmart.co.in/",
  },
  {
    title: "GETFIXED – Electronics Repair Booking Platform",
    description:
      "Architected a robust REST API backend managing complex dual-sided marketplace operations. Engineered end-to-end order lifecycles with dynamic state transitions, real-time technician tracking, and Role-Based Access Control. Features a specialized Partner Management module with OTP-authenticated QC logins, system-wide 'Partner ID' tracking, and secure document pipelines for automated PDF processing.",
    image: "/project/getfixed.png",
    type: "Full Stack",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "MSG91",
      "Multer",
      "REST API",
    ],
    link: "https://getfixed.co.in/",
  },
  {
    title: "Code Shark API – EdTech & Agency Backend Platform",
    description:
      "Architected a scalable headless CMS and RESTful API backend for a dynamic EdTech platform. Designed optimized Mongoose schemas managing deeply nested arrays (Courses, Blogs). Engineered a robust concurrent multi-file upload system using Multer to parse complex multi-part form data (images, PDFs) safely into AWS S3. Built secure JWT routing workflows and integrated the Brevo API for transactional notifications.",
    image: "/project/codesharks.png",
    type: "Backend / API",
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "AWS S3",
      "Multer",
      "Brevo",
      "JWT",
      "Puppeteer",
      "REST API",
    ],
    link: "https://www.code-sharks.com/",
  },
  {
    title: "MGBW – Mangalore Ganesh Beedi Works",
    description:
      "Official website showcasing the diverse MGBW portfolio. Engineered a highly optimized, dynamic hero video builder serving device-specific assets via responsive media architecture. Solved strict Safari/iOS autoplay restrictions using resilient fallback strategies, event-driven silent retries, and automated listener cleanup pipelines for blazing-fast performance.",
    image: "/project/mgbw.png",
    type: "Frontend",
    tech: [
      "Next.js",
      "React",
      "HTML5 Video API",
      "TypeScript",
      "Tailwind CSS",
      "Event-Driven",
      "Brevo",
    ],
    link: "https://mgbwgroup.com/",
  },
  {
    title: "ARD PERFORMANCE – High-Performance Automotive Ecosystem",
    description:
      "A full-stack distributed ecosystem for automotive performance parts and custom tuning. Engineered a multi-vendor order-splitting engine with ACID-compliant transactions and Year-Make-Model fitment filtering. Features specialized portals for enthusiasts, vendors, and installers, integrated with Shiprocket logistics, Razorpay, and automated PDF invoicing via Puppeteer.",
    image: "/project/ard.png",
    type: "Full Stack / Marketplace",
    tech: [
      "Node.js",
      "TypeScript",
      "React.js",
      "MongoDB",
      "Mongoose",
      "Razorpay",
      "Shiprocket",
      "AWS S3",
      "Puppeteer",
      "Brevo",
    ],
    link: "https://arduser.vercel.app/",
  },
  {
    title: "SOCIAL NOTCH – Event Booking & Vendor Marketplace",
    description:
      "A comprehensive event marketplace managing workflows for users, vendors, and admins. Features a sophisticated backend with dynamic pricing logic, multi-level taxation, and secure Razorpay checkout integration with webhooks. Engineered an automated fulfillment pipeline utilizing Puppeteer and PDFKit for dynamic PDF ticket generation, alongside background Node Cron jobs and Brevo API email delivery.",
    image: "/project/socialnotch.png",
    type: "Full Stack",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "AWS S3",
      "Razorpay API",
      "Puppeteer",
      "PDFKit",
      "Brevo",
      "Node Cron",
      "Winston Logging",
      "JWT Auth",
    ],
    link: "https://socialnotch.spaces-india.in/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const colors = [
    "bg-[#F3CE9E]", // Pastel Orange
    "bg-[#B4D2A6]", // Pastel Green
    "bg-[#BDB6DF]", // Pastel Purple
    "bg-[#F4A5AE]", // Pastel Pink
    "bg-[#98C1D9]", // Pastel Blue
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="projects"
      className="relative bg-white text-black py-16 overflow-hidden px-2"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A selection of my web and full-stack projects, highlighting clean
          design and smooth user experiences.
        </p>

        {/* Grid Layout on Desktop / Carousel on Mobile */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-6 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                layout
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                onClick={() =>
                  window.open(project.link, "_blank", "noopener,noreferrer")
                }
                className="min-w-full sm:min-w-0 snap-center sm:snap-none bg-transparent hover:bg-white hover:shadow-xl p-4 -m-4 rounded-[24px] transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* Image with cutout button */}
                <div className="relative w-full h-56 sm:h-[260px] rounded-[20px] overflow-hidden mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Arrow Button */}
                  <div className="absolute bottom-3 right-3">
                    <div className={`w-12 h-12 rounded-full border-[4px] border-white flex items-center justify-center text-white transition-transform group-hover:-rotate-12 group-hover:scale-110 shadow-sm ${colors[index % colors.length]}`}>
                      <ArrowUpRight strokeWidth={2.5} size={20} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col relative px-2 mt-2">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex-1">
                    {project.title.split("–")[0].trim()}
                  </h3>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className={`text-gray-700 text-[10px] font-bold uppercase px-3 py-1.5 rounded-md ${colors[(index + i) % colors.length]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex sm:hidden justify-center gap-2 mb-8">
          {visibleProjects.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-[#946E1C]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Load More Button */}
        {projects.length > 6 && (
          <div className="mt-8 sm:mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 bg-black text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : "Load More Projects"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

