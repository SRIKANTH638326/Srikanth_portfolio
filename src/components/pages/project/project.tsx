"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    title: "SmartEdLab – AI-powered language learning platform",
    description:
      "Architected a robust REST API backend managing complex dual-sided marketplace operations. Engineered end-to-end order lifecycles with dynamic state transitions, real-time technician tracking, and Role-Based Access Control. Features a specialized Partner Management module with OTP-authenticated QC logins, system-wide 'Partner ID' tracking, and secure document pipelines for automated PDF processing.",
    image: "/project/smartEdlab.png",
    
    type: "UI/UX Design",
    category: "Web Application",
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
    link: "blank",
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
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section id="projects" className="relative bg-[#FCFBF9] text-gray-900 py-20 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="relative mb-20 lg:mb-32 flex flex-col items-center justify-center">
          {/* Faded background text */}
          <h1 className="absolute text-[80px] sm:text-[140px] lg:text-[180px] font-bold text-gray-900 opacity-[0.03] tracking-wider uppercase select-none pointer-events-none whitespace-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            PORTFOLIO
          </h1>
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight z-10 text-black">
            /SELECTED WORK
          </h2>
        </div>

        {/* Navigation / Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-8">
          <div className="flex gap-6 sm:gap-8 text-sm sm:text-base">
            {["All", "App", "Web", "Graphic"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-colors ${
                  activeTab === tab
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black font-medium"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <a href="#" className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-2 text-black cursor-pointer">
            View All Work <span className="text-lg leading-none font-light">↗</span>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.title} 
              className="flex flex-col group cursor-pointer" 
              onClick={() => window.open(project.link, "_blank")}
            >
              
              {/* Image Container */}
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-4 bg-[#F8F8F8] border border-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Arrow Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-2xl text-black font-light leading-none">↗</span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-base sm:text-lg font-semibold text-black mb-3 leading-snug">
                {project.title.split('–')[0].trim()}
              </h3>
              
              {/* Tags */}
              <div className="flex gap-2">
                <span className="px-3 py-1.5 border border-gray-200 rounded-full text-[11px] font-medium text-gray-700 bg-transparent">
                  {project.type}
                </span>
                <span className="px-3 py-1.5 border border-gray-200 rounded-full text-[11px] font-medium text-gray-700 bg-transparent">
                  {project.tech[0]}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

