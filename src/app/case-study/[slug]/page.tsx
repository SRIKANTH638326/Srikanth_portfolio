"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cs-animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    if (contentRef.current) observer.observe(contentRef.current);

    // Animate hero on mount
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current?.classList.add("cs-animate-in");
      }, 100);
    }

    return () => observer.disconnect();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FCFBF9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D4A3E] text-white rounded-full hover:bg-[#1e3329] transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        /* ===== CASE STUDY PAGE STYLES ===== */

        .cs-page {
          font-family: "Inter", "Geist", -apple-system, BlinkMacSystemFont,
            sans-serif;
          background: #FCFBF9;
          color: #1a1a1a;
          scroll-behavior: smooth;
        }

        html {
          scroll-behavior: smooth;
        }

        /* --- Sticky Back Nav --- */
        .cs-back-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(252, 251, 249, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 6px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        .cs-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 100px;
          border: none;
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .cs-back-btn:hover {
          background: #fff;
          transform: translateX(-2px);
        }

        .cs-live-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 100px;
          background: #007ABC;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .cs-live-btn:hover {
          background: #000000ff;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(45, 74, 62, 0.3);
        }

        /* --- Animation Base States --- */
        .cs-animate-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-animate-section.cs-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Hero Section --- */
        .cs-hero {
          padding: 140px 40px 80px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .cs-badge {
          display: inline-block;
          padding: 8px 24px;
          border-radius: 100px;
          border: 1.5px solid rgba(0, 0, 0, 0.15);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 32px;
        }

        .cs-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .cs-hero-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #1a1a1a;
          margin-bottom: 0;
        }

        .cs-hero-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          max-width: 520px;
        }

        .cs-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
        }

        .cs-tech-tag {
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 12px;
          font-weight: 500;
          color: #555;
          background: rgba(255, 255, 255, 0.5);
        }

        /* --- Main Two-Column Layout: Left content + Right sticky image --- */
        .cs-main-layout {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Left scrollable content */
        .cs-left-content {
          /* Flows naturally */
        }

        /* Right sticky image column */
        .cs-right-sticky {
          position: sticky;
          top: 100px; /* below the nav bar */
          align-self: start;
        }

        /* --- Gallery Image --- */
        .cs-gallery {
          position: relative;
        }

        .cs-gallery-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4 /3.5;
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1);
        }

        .cs-gallery-image-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          pointer-events: none;
        }

        /* Decorative rings */
        .cs-gallery-ring {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 2px solid rgba(45, 74, 62, 0.08);
          top: -40px;
          right: -40px;
          pointer-events: none;
        }

        .cs-gallery-ring-2 {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 2px solid rgba(45, 74, 62, 0.06);
          bottom: -30px;
          left: -30px;
          pointer-events: none;
        }

        /* --- Content Block with Left Border --- */
        .cs-content-block {
          position: relative;
          padding-left: 24px;
          margin-bottom: 48px;
        }

        .cs-content-block::before {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 3px;
          border-radius: 3px;
          background: linear-gradient(180deg, #2d4a3e, #8ba898);
        }

        .cs-content-label {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }

        .cs-content-text {
          font-size: 14.5px;
          line-height: 1.75;
          color: #555;
        }

        /* --- Solution Section --- */
        .cs-solution-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .cs-solution-list {
          list-style: none;
          padding: 0;
          margin: 0 0 48px 0;
        }

        .cs-solution-item {
          position: relative;
          padding-left: 20px;
          margin-bottom: 16px;
          font-size: 14.5px;
          line-height: 1.7;
          color: #444;
        }

        .cs-solution-item::before {
          content: "•";
          position: absolute;
          left: 0;
          top: 0;
          color: #2d4a3e;
          font-weight: 700;
          font-size: 18px;
        }

        /* --- Results Cards --- */
        .cs-results-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .cs-results-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 32px;
        }

        .cs-result-card {
          padding: 28px 24px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(0, 0, 0, 0.06);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .cs-result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          background: rgba(255, 255, 255, 0.85);
        }

        .cs-result-value {
          font-size: 28px;
          font-weight: 800;
          color: #2d4a3e;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .cs-result-label {
          font-size: 13px;
          line-height: 1.5;
          color: #666;
        }

        /* --- Key Takeaway Card --- */
        .cs-takeaway-card {
          padding: 28px 24px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .cs-takeaway-title {
          font-size: 14px;
          font-weight: 700;
          color: #2d4a3e;
          margin-bottom: 10px;
        }

        .cs-takeaway-text {
          font-size: 14px;
          line-height: 1.7;
          color: #555;
        }

        /* --- Section Spacing --- */
        .cs-section-gap {
          margin-bottom: 48px;
        }

        /* --- Suggested Projects Section --- */
        .cs-suggested-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 40px 100px;
        }

        .cs-suggested-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 12px;
          text-align: center;
        }

        .cs-suggested-heading {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
          text-align: center;
        }

        .cs-suggested-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .cs-suggested-card {
          display: block;
          text-decoration: none;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .cs-suggested-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
        }

        .cs-suggested-card:hover .cs-suggested-img img {
          transform: scale(1.05);
        }

        .cs-suggested-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #f0ede8;
        }

        .cs-suggested-img img {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-suggested-info {
          padding: 20px;
        }

        .cs-suggested-category {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #2d4a3e;
          margin-bottom: 8px;
        }

        .cs-suggested-name {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        /* --- Divider --- */
        .cs-divider {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .cs-divider-line {
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
        }

        /* ===== RESPONSIVE ===== */

        @media (max-width: 1024px) {
          .cs-hero {
            padding: 120px 24px 60px;
          }
          .cs-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .cs-main-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 24px 80px;
          }
          .cs-right-sticky {
            position: relative;
            top: 0;
            order: -1; /* show image first on mobile */
          }
          .cs-gallery-image-wrapper {
            aspect-ratio: 4 / 3.5;
          }
          .cs-suggested-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cs-suggested-section {
            padding: 60px 24px 80px;
          }
          .cs-back-nav {
            padding: 12px 20px;
          }
        }

        @media (max-width: 640px) {
          .cs-hero {
            padding: 100px 16px 40px;
          }
          .cs-main-layout {
            padding: 0 16px 60px;
          }
          .cs-results-grid {
            grid-template-columns: 1fr;
          }
          .cs-suggested-grid {
            grid-template-columns: 1fr;
          }
          .cs-suggested-section {
            padding: 40px 16px 60px;
          }
          .cs-back-nav {
            padding: 10px 16px;
          }
          .cs-next-project {
            padding: 40px 16px 80px;
          }
        }
      `}</style>

      <div className="cs-page">
        {/* Sticky Navigation */}
        <nav className="cs-back-nav">
          <Link href="/#projects" className="cs-back-btn">
            <ArrowLeft size={16} />
            Back
          </Link>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-live-btn"
            >
              View Live
              <ExternalLink size={14} />
            </a>
          )}
        </nav>

        {/* Hero Section */}
        <div ref={heroRef} className="cs-hero cs-animate-section">
          <span className="cs-badge">Case Study</span>
          <div className="cs-hero-grid">
            <div>
              <h1 className="cs-hero-title">{project.title}</h1>
            </div>
            <div>
              <p className="cs-hero-desc">{project.description}</p>
              <div className="cs-tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="cs-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Two-Column Layout: Left content + Right sticky image */}
        <div ref={contentRef} className="cs-main-layout cs-animate-section">
          {/* Left: All scrollable content */}
          <div className="cs-left-content">
            {/* Client Overview */}
            <div className="cs-content-block">
              <h3 className="cs-content-label">Client Overview</h3>
              <p className="cs-content-text">{project.clientOverview}</p>
            </div>

            {/* Challenge */}
            <div className="cs-content-block">
              <h3 className="cs-content-label">Challenge</h3>
              <p className="cs-content-text">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="cs-section-gap">
              <h3 className="cs-solution-title">
                Solution — Design Approach:
              </h3>
              <ul className="cs-solution-list">
                {project.solution.map((item, i) => (
                  <li key={i} className="cs-solution-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="cs-section-gap">
              <h3 className="cs-results-title">Impact & Results:</h3>
              <div className="cs-results-grid">
                {project.results.map((result, i) => (
                  <div key={i} className="cs-result-card">
                    <div className="cs-result-value">{result.value}</div>
                    <div className="cs-result-label">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="cs-takeaway-card">
              <h4 className="cs-takeaway-title">Key Takeaways</h4>
              <p className="cs-takeaway-text">{project.keyTakeaway}</p>
            </div>
          </div>

          {/* Right: Sticky Image */}
          <div className="cs-right-sticky">
            <div className="cs-gallery">
              <div className="cs-gallery-ring" />
              <div className="cs-gallery-ring-2" />
              <div className="cs-gallery-image-wrapper">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="cs-divider">
          <div className="cs-divider-line" />
        </div>

        {/* Suggested Projects */}
        {(() => {
          const otherProjects = projects.filter(
            (p) => p.slug !== project.slug
          );
          // Pick up to 3 suggested projects
          const suggested = otherProjects.slice(0, 4);
          return (
            <div className="cs-suggested-section">
              <p className="cs-suggested-label">More Projects</p>
              <h3 className="cs-suggested-heading">Explore Other Work</h3>
              <div className="cs-suggested-grid">
                {suggested.map((sp) => (
                  <Link
                    key={sp.slug}
                    href={`/case-study/${sp.slug}`}
                    className="cs-suggested-card"
                  >
                    <div className="cs-suggested-img">
                      <Image
                        src={sp.image}
                        alt={sp.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="cs-suggested-info">
                      <p className="cs-suggested-category">{sp.type}</p>
                      <h4 className="cs-suggested-name">
                        {sp.title.split("–")[0].trim()}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </>
  );
}
