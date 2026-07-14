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
    title: "Bechdu – Buy & Sell Used Electronics Platform",
    description:
      "A comprehensive electronics marketplace with multi-vendor support. Features a React admin dashboard and a Flutter QC mobile app for partners. Engineered with automated PDF invoice generation and receipt management for both buying and selling sides, AWS S3 for secure KYC/QC storage, and real-time Firebase tracking with automated data synchronization.",
    image: "/project/Bechdu_add.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma", "Adobe Photoshop"],
    link: "https://bechdu.in/",
    clientOverview:
      "Bechdu is a rapidly growing electronics marketplace aiming to simplify the process of buying and selling pre-owned devices. The platform needed a seamless, trust-building user experience for both buyers and sellers across web and mobile platforms.",
    challenge:
      "The existing experience presented several usability and business challenges. Users found it difficult to understand the selling process, compare device values, and build confidence in the platform's pricing and verification system. The interface lacked a clear information hierarchy, resulting in longer decision times and reduced user engagement. Additionally, the buying journey did not effectively showcase refurbished products, warranty information, or trust indicators, leading to missed conversion opportunities.",
    solution: [
      "The redesign focused on creating a user-centered experience that balances simplicity, transparency, and business goals. A clean visual system with consistent typography, spacing, and reusable UI components was introduced to improve usability across web and mobile platforms.",
      "The selling journey was redesigned into a guided step-by-step flow, allowing users to easily select their device, complete condition assessments, receive an instant valuation, schedule doorstep pickup, and track the transaction. Trust-building elements such as warranty badges, secure payment messaging, customer reviews, and transparent pricing explanations were strategically incorporated throughout the experience.",
      "For the buying experience, product discovery was enhanced with powerful search, smart filters, detailed product pages, comparison options, and clear specifications. The checkout process was streamlined to minimize friction while maintaining confidence through visible support and payment information.",
      "The QC Partner App streamlined quality checks with a guided checklist workflow, real-time status tracking, and OTP-authenticated logins. Secure document upload flows with clear progress indicators and verification feedback enhanced operational efficiency and user confidence.",
    ],
    results: [
      { value: "40%", label: "Increase in user engagement after redesign" },
      { value: "3x", label: "Faster product listing process with new UX flow" },
    ],
    keyTakeaway:
      "User trust is the foundation of successful recommerce platforms, balancing business goals with user needs results in higher engagement and stronger conversion potential. Sustainable digital products benefit from experiences that make buying and selling electronics simple, transparent, and reliable.",
    galleryImages: ["/project/Bechdu_thumbnail.png"],
  },
  {
    slug: "sellsmart-sell",
    title: "SellSmart - The Smarter Way to Sell Your Phone",
    description:
      "SellSmart simplifies the process of selling used smartphones through a fast, transparent, and reliable experience. The platform guides users from device selection and valuation to pickup and payment, ensuring every interaction is simple, secure, and trustworthy.",
    image: "/project/Sellsmart_thumbnail.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma", "Adobe Photoshop", "Adobe Xd"],
    link: "https://sellsmart.co.in/",
    clientOverview:
      "SellSmart is a digital recommerce platform that helps users sell their used smartphones and electronic devices quickly and securely. The platform offers instant device valuation, doorstep pickup, real-time price estimation, and fast payments while providing customers with access to certified refurbished devices. Its goal is to simplify the resale process and make upgrading technology more convenient and transparent.",
    challenge:
      "The existing platform lacked a structured user journey, making it difficult for users to understand the selling process from valuation to payment. Important trust indicators such as pricing transparency, quality checks, and secure transactions were not clearly communicated. The buying experience also suffered from poor product organization, limited filtering options, and an outdated interface, resulting in reduced user engagement and lower conversion opportunities.",
    solution: [
      "The design introduced a clean, step-by-step selling process that guides users through device selection, condition assessment, and instant valuation with clear progress indicators and visual feedback.",
      "Important trust elements such as warranty information, secure payment details, customer reviews, and transparent pricing explanations were integrated throughout the experience to build user confidence.",
      "The buying interface was enhanced with improved product organization, advanced search, powerful filtering, detailed specification layouts, and comparison tools to streamline device discovery.",
      "A dedicated Partner QC mobile app was designed with an OTP-authenticated login, streamlined inspection checklists, and secure document upload workflows to improve operational efficiency.",
    ],
    results: [
      { value: "55%", label: "Increase in completed sales" },
      { value: "70%", label: "Increase in user engagement on selling page" },
    ],
    keyTakeaway:
      "Building trust through transparency and ease-of-use is key for high-value transactions. A seamless, step-by-step process keeps users engaged while highlighting security and reliability at every touchpoint.",
    galleryImages: ["/project/SellSmart_thumbnail.png"],
  },
  {
    slug: "smartedlab",
    title: "Designing an AI-Powered Language Learning Platform",
    description:
      "SmartEdLab is an AI-driven language learning platform that helps students improve their Listening, Speaking, Reading, and Writing (LSRW) skills through self-paced courses, AI-powered tutoring, live classes, and interactive assessments. The platform also enables educational institutions to deliver branded language learning experiences through a white-label solution, allowing them to manage students, instructors, content, and subscriptions from a centralized dashboard.",
    image: "/project/Smartedlab_thumbnail.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma", "Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "MSG91", "Multer", "REST API"],
    link: "https://smartedlab-ui.vercel.app/",
    clientOverview:
      "SmartEdLab was developed for an educational technology client looking to modernize language education with AI and scalable digital infrastructure. The goal was to create a single platform that serves individual learners while also enabling schools, colleges, training institutes, and corporate organizations to launch their own branded language learning ecosystem.",
    challenge:
      "Design and architect a comprehensive EdTech platform supporting three distinct user groups: individual learners, independent instructors, and institutional administrators. The system required seamless content delivery, progress tracking, subscription management, and secure payments across all user types.",
    solution: [
      "Implemented a unified design system with role-based interfaces for Students (LSRW learning), Instructors (content creation & management), and Partner Admins (enterprise management & white-label customization).",
      "Designed responsive learning modules with interactive exercises, audio-visual content integration, AI-powered voice analysis for pronunciation feedback, and progress tracking dashboards.",
      "Architected the visual design for automated PDF processing pipelines with progress tracking and document preview capabilities.",
    ],
    results: [
      { value: "10", label: "User Roles" },
      { value: "4.8★", label: "Average user satisfaction rating post-launch" },
    ],
    keyTakeaway:
      "A well-designed platform can successfully serve multiple user groups with distinct needs. By prioritizing clear navigation, role-specific features, and consistent user experience, educational platforms can enhance learning outcomes and operational efficiency.",
    galleryImages: ["/project/Smartedlab_thumbnail.png"],
  },
  {
    slug: "the-duts",
    title: "The Dutz – Healthy Snacking E-Commerce Experience",
    description:
      "The Dutz is an e-commerce platform that offers a wide range of healthy snacks and food products. The platform is designed to provide users with a seamless and enjoyable shopping experience, with a focus on clean UI, easy navigation, and personalized recommendations.",
    image: "/project/The Dutz_thumbnail.png",
    type: "UI/UX Design",
    category: "Web",
    tech: ["Figma"],
    link: "https://thedutz.com/",
    clientOverview: 
      "The Dutz is an EdTech platform focused on delivering high-quality courses and content. The platform needed a visually engaging and intuitive design that could handle rich media content while maintaining fast load times and seamless navigation.",
    challenge:
      "The Dutz e-commerce platform required a modern, intuitive interface that could effectively showcase its range of healthy snacks. The design needed to balance rich product visuals with simple navigation, seamless multi-step purchasing, and elements that build trust for first-time buyers.",
    solution: [
      "Designed a refreshed brand identity with a clean, modern logo, vibrant color palette, and premium typography that reflects the brand’s focus on health and quality.",
      "Created an intuitive e-commerce layout with prominent product displays, high-quality imagery, easy filtering options, and clear calls-to-action.",
      "Developed a simplified multi-step checkout flow with clear progress indicators, guest checkout option, and transparent pricing to reduce friction and build trust.",
      "Designed engaging product detail pages showcasing nutritional information, usage benefits, customer testimonials, and trust signals like ingredient transparency and quality certifications.",
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
