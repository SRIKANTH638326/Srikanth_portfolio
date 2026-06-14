"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "BECHDU – Electronics Buy & Sell Marketplace",
    description:
      "A comprehensive electronics marketplace with multi-vendor support. Features a React admin dashboard and a Flutter QC mobile app for partners. Engineered with automated PDF invoice generation and receipt management for both buying and selling sides, AWS S3 for secure KYC/QC storage, and real-time Firebase tracking with automated data synchronization.",
    image: "/project/bechdu.png",
    type: "UI/UX Design",
    category: "App",
    tech: ["Figma", "Adobe photoshop"],
    link: "https://bechdu.in/",
  },
  {
    title: "SellSmart – Used Electronics Selling Platform",
    description:
      "Platform to sell electronics featuring a React admin dashboard and a Flutter QC mobile app for partners. Manages end-to-end lifecycles with smart routing, dynamic rewards, and passwordless MSG91 OTP authentication. Engineered with AWS S3 for secure KYC document storage, automated data synchronization, and on-the-fly PDF invoice generation.",
    image: "/project/sellsmart.png",
    type: "UI/UX Design",
    category: "App",
    tech: ["Figma", "Adobe photoshop", "Adobe Xd"],
    link: "https://sellsmart.co.in/",
  },
  {
    title: "GETFIXED – Electronics Repair Booking Platform",
    description:
      "Architected a robust REST API backend managing complex dual-sided marketplace operations. Engineered end-to-end order lifecycles with dynamic state transitions, real-time technician tracking, and Role-Based Access Control. Features a specialized Partner Management module with OTP-authenticated QC logins, system-wide 'Partner ID' tracking, and secure document pipelines for automated PDF processing.",
    image: "/project/getfixed.png",
    type: "Full Stack",
    category: "Web",
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
    category: "Web",
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
    category: "Graphic",
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
    category: "Web",
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
    category: "Web",
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("All");

  const colors = [
    { bg: "bg-[#EBF38B]", border: "border-[#EBF38B]" }, // Pale yellow
    { bg: "bg-[#9AF09F]", border: "border-[#9AF09F]" }, // Pale green
    { bg: "bg-[#F3CE9E]", border: "border-[#F3CE9E]" }, // Orange
    { bg: "bg-[#BDB6DF]", border: "border-[#BDB6DF]" }, // Purple
    { bg: "bg-[#F4A5AE]", border: "border-[#F4A5AE]" }, // Pink
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section
      id="projects"
      className="relative bg-white text-gray-900 py-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Title & Navigation */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.05] uppercase tracking-tighter"
          >
            FEATURED <span className="text-[#946E1C]">PROJECTS</span>
          </motion.h2>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pb-2">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="inline-flex flex-wrap rounded-full border border-gray-200 bg-gray-50/50 p-1 mb-10">
          {["All", "App", "Web", "Graphic"].map((tab, index) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-[#946E1C] text-white shadow-md"
                  : "text-gray-500 hover:text-[#946E1C]"
              }`}
            >
              0{index + 1} {tab}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Layout */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const color = colors[index % colors.length];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  onClick={() => window.open(project.link, "_blank")}
                  className={`min-w-[85vw] sm:min-w-[550px] lg:min-w-[700px] h-[400px] sm:h-[380px] snap-center rounded-[32px] flex flex-col sm:flex-row overflow-hidden cursor-pointer group flex-shrink-0 shadow-xl border-8 ${color.border}`}
                >
                  {/* Left Content */}
                  <div className={`w-full sm:w-1/2 h-[55%] sm:h-full p-8 sm:p-10 flex flex-col justify-end ${color.bg} text-[#1A1A1A]`}>
                    <div className="mb-2">
                      <div className="text-xs font-semibold tracking-widest uppercase opacity-70 font-mono mb-4">
                        0{index + 1} {project.type}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black uppercase leading-[1.05] tracking-tight">
                        {project.title.split("–")[0].trim()}
                      </h3>
                    </div>
                  </div>
                  {/* Right Image */}
                  <div className="w-full sm:w-1/2 h-[45%] sm:h-full relative bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

