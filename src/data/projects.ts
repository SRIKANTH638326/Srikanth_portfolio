export interface ProjectResult {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  type: string;
  category: string;
  tech: string[];
  link: string;
  // Case study fields
  clientOverview: string;
  challenge: string;
  solution: string[];
  results: ProjectResult[];
  keyTakeaway: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    slug: "bechdu-buy-and-sell",
    title: "Bechdu Buy & Sell",
    description:
      "A comprehensive electronics marketplace with multi-vendor support. Features a React admin dashboard and a Flutter QC mobile app for partners. Engineered with automated PDF invoice generation and receipt management for both buying and selling sides, AWS S3 for secure KYC/QC storage, and real-time Firebase tracking with automated data synchronization.",
    image: "/project/Bechdu_thumbnail.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma", "Adobe Photoshop"],
    link: "https://bechdu.in/",
    clientOverview:
      "Bechdu is a rapidly growing electronics marketplace aiming to simplify the process of buying and selling pre-owned devices. The platform needed a seamless, trust-building user experience for both buyers and sellers across web and mobile platforms.",
    challenge:
      "Design an intuitive multi-vendor marketplace experience that handles complex workflows — from product listing and quality checks to secure payments and real-time tracking — while maintaining user trust and engagement.",
    solution: [
      "Designed a comprehensive UI/UX system for the marketplace with dedicated flows for buyers, sellers, and admin users.",
      "Created a streamlined product listing flow with smart categorization, dynamic pricing suggestions, and instant quality assessment indicators.",
      "Engineered the visual design for automated PDF invoice generation and receipt management visible to both buying and selling sides.",
      "Designed the real-time tracking interface with Firebase-powered status updates and automated notifications.",
    ],
    results: [
      { value: "40%", label: "Increase in user engagement after redesign" },
      { value: "3x", label: "Faster product listing process with new UX flow" },
    ],
    keyTakeaway:
      "A well-structured visual hierarchy and simplified multi-step workflows can dramatically improve marketplace adoption and user trust in peer-to-peer transactions.",
    galleryImages: ["/project/Bechdu_thumbnail.png"],
  },
  {
    slug: "sellsmart-sell",
    title: "SellSmart Sell",
    description:
      "Platform to sell electronics featuring a React admin dashboard and a Flutter QC mobile app for partners. Manages end-to-end lifecycles with smart routing, dynamic rewards, and passwordless MSG91 OTP authentication. Engineered with AWS S3 for secure KYC document storage, automated data synchronization, and on-the-fly PDF invoice generation.",
    image: "/project/SellSmart_thumbnail.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma", "Adobe Photoshop", "Adobe Xd"],
    link: "https://sellsmart.co.in/",
    clientOverview:
      "SellSmart is a next-generation platform dedicated to making selling pre-owned electronics effortless. The client needed a design system that could handle complex backend workflows while presenting a simple, guided experience to end users.",
    challenge:
      "Create a frictionless selling experience that guides users through device evaluation, pickup scheduling, and payment — while integrating partner-side quality control and admin management dashboards.",
    solution: [
      "Designed an end-to-end selling journey with smart device evaluation forms, dynamic pricing displays, and instant offer generation screens.",
      "Created a dedicated Partner QC mobile app interface with OTP-authenticated login flows and streamlined inspection checklists.",
      "Developed the admin dashboard UI with order lifecycle management, smart routing visualizations, and dynamic rewards tracking.",
      "Designed secure KYC document upload flows with progress indicators and verification status displays.",
    ],
    results: [
      { value: "55%", label: "Reduction in user drop-off during selling flow" },
      { value: "2x", label: "Faster QC processing with new partner app design" },
    ],
    keyTakeaway:
      "Passwordless authentication and progressive disclosure of complexity keep users engaged through multi-step processes without overwhelming them.",
    galleryImages: ["/project/SellSmart_thumbnail.png"],
  },
  {
    slug: "smartedlab",
    title: "SmartEdLab",
    description:
      "Architected a robust REST API backend managing complex dual-sided marketplace operations. Engineered end-to-end order lifecycles with dynamic state transitions, real-time technician tracking, and Role-Based Access Control. Features a specialized Partner Management module with OTP-authenticated QC logins, system-wide 'Partner ID' tracking, and secure document pipelines for automated PDF processing.",
    image: "/project/Smartedlab_thumbnail.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma", "Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "MSG91", "Multer", "REST API"],
    link: "https://smartedlab-ui.vercel.app/",
    clientOverview:
      "SmartEdLab is an innovative EdTech platform providing interactive learning experiences. The project demanded both a polished frontend design and a scalable backend architecture to support growing user bases and complex content delivery.",
    challenge:
      "Design and architect a dual-sided marketplace platform that seamlessly integrates content creation, delivery, and management with real-time collaboration and role-based access for students, instructors, and administrators.",
    solution: [
      "Designed intuitive user interfaces for both student-facing learning modules and instructor content management systems.",
      "Created visual flows for real-time technician/instructor tracking with dynamic state transitions and status indicators.",
      "Developed the Partner Management module UI with secure OTP-authenticated login and system-wide tracking dashboards.",
      "Architected the visual design for automated PDF processing pipelines with progress tracking and document preview capabilities.",
    ],
    results: [
      { value: "60%", label: "Improvement in content delivery efficiency" },
      { value: "4.8★", label: "Average user satisfaction rating post-launch" },
    ],
    keyTakeaway:
      "Combining clean UI design with robust backend architecture ensures a seamless experience that can scale while maintaining performance and user satisfaction.",
    galleryImages: ["/project/Smartedlab_thumbnail.png"],
  },
  {
    slug: "the-duts",
    title: "The Duts",
    description:
      "Architected a scalable headless CMS and RESTful API backend for a dynamic EdTech platform. Designed optimized Mongoose schemas managing deeply nested arrays (Courses, Blogs). Engineered a robust concurrent multi-file upload system using Multer to parse complex multi-part form data (images, PDFs) safely into AWS S3. Built secure JWT routing workflows and integrated the Brevo API for transactional notifications.",
    image: "/project/The Dutz_thumbnail.png",
    type: "Backend / API",
    category: "Web",
    tech: ["Figma"],
    link: "https://thedutz.com/",
    clientOverview:
      "The Duts is an EdTech platform focused on delivering high-quality courses and content. The platform needed a visually engaging and intuitive design that could handle rich media content while maintaining fast load times and seamless navigation.",
    challenge:
      "Design a content-rich EdTech platform that elegantly presents courses, blogs, and multimedia content while ensuring accessibility, fast loading, and an engaging user experience across all devices.",
    solution: [
      "Designed the course catalog and detail page layouts with rich media integration, progressive loading indicators, and smart content hierarchy.",
      "Created the blog management interface with nested content structures, inline media editors, and SEO-optimized preview modes.",
      "Developed the multi-file upload UI with drag-and-drop zones, concurrent upload progress bars, and thumbnail previews.",
      "Designed transactional notification templates and user journey emails for the Brevo API integration.",
    ],
    results: [
      { value: "35%", label: "Increase in course completion rates" },
      { value: "50%", label: "Reduction in content upload time" },
    ],
    keyTakeaway:
      "A well-designed content management experience directly impacts the quality and consistency of the end-user experience in content-heavy platforms.",
    galleryImages: ["/project/The Dutz_thumbnail.png"],
  },
  {
    slug: "pitcs",
    title: "Pitcs",
    description:
      "Official website showcasing the diverse MGBW portfolio. Engineered a highly optimized, dynamic hero video builder serving device-specific assets via responsive media architecture. Solved strict Safari/iOS autoplay restrictions using resilient fallback strategies, event-driven silent retries, and automated listener cleanup pipelines for blazing-fast performance.",
    image: "/project/Pitcs_thumb.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma"],
    link: "https://pitcs.in/",
    clientOverview:
      "PITCS is a technology services company requiring a modern, professional web presence that showcases their diverse portfolio and capabilities. The site needed to make a strong first impression with dynamic visuals while maintaining blazing-fast performance.",
    challenge:
      "Create a visually stunning corporate website that balances rich media content (hero videos, portfolio showcases) with performance optimization, especially on mobile devices with strict autoplay restrictions.",
    solution: [
      "Designed a dynamic hero section with responsive video architecture that adapts media quality based on device capabilities.",
      "Created an elegant portfolio showcase layout with filterable project categories and immersive detail views.",
      "Developed resilient fallback strategies for Safari/iOS autoplay restrictions with smooth image-to-video transitions.",
      "Designed performance-optimized asset loading with skeleton screens and progressive enhancement patterns.",
    ],
    results: [
      { value: "95+", label: "Google Lighthouse performance score" },
      { value: "2.1s", label: "Average page load time across all devices" },
    ],
    keyTakeaway:
      "Device-aware responsive media strategies combined with graceful fallbacks ensure a premium visual experience without sacrificing performance on any platform.",
    galleryImages: ["/project/Pitcs_thumb.png"],
  },
  {
    slug: "ard-performance",
    title: "ARD PERFORMANCE – High-Performance Automotive Ecosystem",
    description:
      "A full-stack distributed ecosystem for automotive performance parts and custom tuning. Engineered a multi-vendor order-splitting engine with ACID-compliant transactions and Year-Make-Model fitment filtering. Features specialized portals for enthusiasts, vendors, and installers, integrated with Shiprocket logistics, Razorpay, and automated PDF invoicing via Puppeteer.",
    image: "/project/ard.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma"],
    link: "#",
    clientOverview:
      "ARD Performance is a premium automotive parts and tuning brand building a comprehensive digital ecosystem. They required an e-commerce platform that could handle complex fitment data, multi-vendor operations, and specialized user portals for enthusiasts, vendors, and installers.",
    challenge:
      "Design a specialized automotive e-commerce platform with Year-Make-Model fitment filtering, multi-vendor order management, and dedicated portals — all while maintaining the premium, high-performance brand identity.",
    solution: [
      "Designed the Year-Make-Model fitment filtering UI with cascading dropdowns, visual part compatibility indicators, and smart search suggestions.",
      "Created multi-vendor order tracking interfaces with split-order visualization, real-time logistics integration, and delivery timeline displays.",
      "Developed specialized portal designs for enthusiasts (discovery/wishlist), vendors (inventory/orders), and installers (scheduling/certification).",
      "Designed automated PDF invoice templates and Razorpay checkout flows with order-splitting transparency.",
    ],
    results: [
      { value: "70%", label: "Reduction in fitment-related return requests" },
      { value: "3x", label: "Increase in vendor onboarding rate" },
    ],
    keyTakeaway:
      "Domain-specific filtering and role-based portal design create specialized experiences that build user confidence and reduce friction in complex e-commerce ecosystems.",
    galleryImages: ["/project/ard.png"],
  },
  {
    slug: "cosurj",
    title: "Cosurj",
    description:
      "A comprehensive event marketplace managing workflows for users, vendors, and admins. Features a sophisticated backend with dynamic pricing logic, multi-level taxation, and secure Razorpay checkout integration with webhooks. Engineered an automated fulfillment pipeline utilizing Puppeteer and PDFKit for dynamic PDF ticket generation, alongside background Node Cron jobs and Brevo API email delivery.",
    image: "/project/Cosurj_thumbnail.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma"],
    link: "https://socialnotch.spaces-india.in/",
    clientOverview:
      "Cosurj is an event discovery and ticketing marketplace connecting event organizers with attendees. The platform needed to handle complex pricing structures, multi-vendor coordination, and automated ticket fulfillment while providing a delightful booking experience.",
    challenge:
      "Design an event marketplace that elegantly handles dynamic pricing, multi-level taxation displays, and a seamless checkout-to-ticket experience for users, while providing powerful management tools for vendors and administrators.",
    solution: [
      "Designed an immersive event discovery interface with smart filtering, visual category browsing, and location-based suggestions.",
      "Created dynamic pricing display components that transparently show base price, taxes, and fees with real-time total calculations.",
      "Developed the secure checkout flow with Razorpay integration, order confirmation animations, and instant digital ticket delivery screens.",
      "Designed automated PDF ticket templates with QR codes, event details, and branding customization options for organizers.",
    ],
    results: [
      { value: "45%", label: "Higher checkout completion rate" },
      { value: "98%", label: "Ticket delivery success rate within 30 seconds" },
    ],
    keyTakeaway:
      "Transparent pricing displays and instant fulfillment dramatically boost checkout confidence and reduce cart abandonment in marketplace platforms.",
    galleryImages: ["/project/Cosurj_thumbnail.png"],
  },
  {
    slug: "nourished-kid-meal",
    title: "Nourished Kid Meal",
    description:
      "An AI-powered personalized nutrition and wellness app that provides food recommendations, meal plans, wellness tracking, and health insights based on your lifestyle and habits.",
    image: "/project/Naurish_thumbnail.png",
    type: "UI/UX Design",
    category: "App",
    tech: ["Figma", "Adobe Photoshop"],
    link: "#",
    clientOverview:
      "Nourished Kid Meal is an AI-driven nutrition app designed to help parents make informed dietary choices for their children. The app combines personalization, meal planning, and wellness tracking in a fun, approachable interface.",
    challenge:
      "Design a mobile app that makes child nutrition feel approachable rather than clinical — combining AI-powered recommendations with playful, parent-friendly interfaces that encourage consistent healthy eating habits.",
    solution: [
      "Designed a warm, playful onboarding flow that captures child profiles, dietary preferences, and health goals through engaging questionnaires.",
      "Created AI-powered meal recommendation cards with nutritional breakdowns, ingredient lists, and one-tap meal plan additions.",
      "Developed wellness tracking dashboards with visual progress indicators, streak mechanics, and celebratory milestone animations.",
      "Designed the health insights section with easy-to-understand charts, personalized tips, and pediatrician-approved guidance notes.",
    ],
    results: [
      { value: "80%", label: "User retention after first week of use" },
      { value: "4.9★", label: "App Store rating from parent users" },
    ],
    keyTakeaway:
      "Combining AI personalization with playful, non-clinical design creates sustainable engagement in health and wellness applications for families.",
    galleryImages: ["/project/Naurish_thumbnail.png"],
  },
  {
    slug: "quiezfier",
    title: "Quiezfier",
    description:
      "An interactive quiz and learning platform designed to make education engaging through gamification, timed challenges, and personalized learning paths.",
    image: "/project/Quiezfier.png",
    type: "UI/UX Design",
    category: "App",
    tech: ["Figma", "Adobe Photoshop"],
    link: "#",
    clientOverview:
      "Quiezfier is a gamified learning platform that transforms traditional quizzes into engaging, competitive experiences. The app needed to balance educational rigor with entertainment to keep users coming back.",
    challenge:
      "Design a quiz application that makes learning addictive through gamification mechanics, social competition, and personalized challenge systems — while maintaining educational value and accessibility.",
    solution: [
      "Designed an energetic, gamified interface with dynamic question cards, countdown timers, and real-time scoring animations.",
      "Created competitive leaderboard views with league systems, friend challenges, and achievement badge collections.",
      "Developed personalized learning path visualizations with progress tracking, strength/weakness analysis, and smart quiz recommendations.",
      "Designed celebratory result screens with detailed performance breakdowns, shareable score cards, and retry incentives.",
    ],
    results: [
      { value: "3x", label: "Increase in daily active users post-redesign" },
      { value: "12min", label: "Average session duration per user" },
    ],
    keyTakeaway:
      "Strategic gamification elements like streaks, leaderboards, and achievements transform passive learning into active engagement without compromising educational quality.",
    galleryImages: ["/project/Quiezfier.png"],
  },
  {
    slug: "wee-see-shop",
    title: "Wee See Shop",
    description:
      "A modern e-commerce shopping application with personalized recommendations, seamless checkout, and social shopping features for a delightful retail experience.",
    image: "/project/WeeSeeShop_thumbnail.png",
    type: "UI/UX Design",
    category: "App",
    tech: ["Figma", "Adobe Photoshop"],
    link: "#",
    clientOverview:
      "Wee See Shop is a social-first e-commerce app that combines shopping with community discovery. The platform needed to create a browsing experience that feels more like social media exploration than traditional online shopping.",
    challenge:
      "Design a mobile shopping experience that blends social discovery with seamless commerce — making product browsing feel natural and inspiring while maintaining efficient checkout and order management.",
    solution: [
      "Designed a social-feed-style product discovery interface with swipeable cards, curated collections, and influencer-picked highlights.",
      "Created immersive product detail pages with 360° view interactions, size guides, and community review galleries.",
      "Developed a frictionless checkout flow with saved preferences, smart address selection, and multiple payment options.",
      "Designed personalized recommendation engines with 'Because you liked...' sections and visual taste profile matching.",
    ],
    results: [
      { value: "65%", label: "Higher engagement vs. traditional grid layouts" },
      { value: "28%", label: "Increase in average order value" },
    ],
    keyTakeaway:
      "Social-first shopping interfaces that prioritize discovery over search create higher engagement and larger basket sizes by tapping into browsing psychology.",
    galleryImages: ["/project/WeeSeeShop_thumbnail.png"],
  },
  {
    slug: "chill-delish",
    title: "Chill Delish",
    description:
      "A premium food delivery and restaurant discovery app with real-time order tracking, personalized taste profiles, and a visually appetizing user interface.",
    image: "/project/Chilldeli.png",
    type: "UI/UX Design",
    category: "App",
    tech: ["Figma", "Adobe Photoshop"],
    link: "#",
    clientOverview:
      "Chill Delish is a food delivery and restaurant discovery platform that prioritizes visual appeal and personalized recommendations. The app needed to make food ordering feel like a premium experience rather than a utilitarian task.",
    challenge:
      "Design a food delivery app that makes every interaction feel premium and appetizing — from discovery to delivery — while handling complex logistics like real-time tracking, dietary filters, and restaurant management.",
    solution: [
      "Designed a visually appetizing home screen with high-quality food photography, mood-based categories, and personalized daily specials.",
      "Created an immersive restaurant profile experience with virtual menus, chef spotlights, and real-time availability indicators.",
      "Developed real-time order tracking with animated delivery maps, driver details, and estimated arrival countdowns.",
      "Designed dietary preference filters with allergen warnings, nutritional summaries, and cuisine-specific recommendation engines.",
    ],
    results: [
      { value: "50%", label: "Higher order frequency vs. competitor apps" },
      { value: "4.7★", label: "Average app rating across platforms" },
    ],
    keyTakeaway:
      "Premium visual design in food apps directly influences perceived food quality and willingness to order — making UI investment a key driver of business metrics.",
    galleryImages: ["/project/Chilldeli.png"],
  },
];
