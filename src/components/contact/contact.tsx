"use client";

import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [selectedService, setSelectedService] = useState<string>("");

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Webflow development",
    "App design",
    "Graphic design",
    "Wordpress",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!selectedService) {
      toast.error("Please select what's in your mind.");
      return;
    }

    const messageContent = `Company: ${form.company}\nInterested in: ${selectedService}`;

    const sendEmail = async () => {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: messageContent,
        }),
      });

      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error || "Failed to send message.");
      }

      setForm({ name: "", email: "", company: "" });
      setSelectedService("");
      return "Message sent successfully!";
    };

    toast.promise(sendEmail(), {
      loading: "Sending your message...",
      success: "Message sent! I will contact you as soon as possible.",
      error: (err) => `Error: ${err.message}`,
    });
  };

  return (
    <section id="contact" className="w-full bg-[#FCFBF9] py-20 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 flex flex-col items-center">

        {/* Headings */}
        <div className="text-center mb-4 relative">
          <h2 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight leading-[1.1] text-black">
            <span className="text-gray-400">Say Hiii!</span> and tell me about<br />your idea
          </h2>
          {/* Hand-drawn Arrow under Say Hi! */}
          <div className="absolute left-[15%] sm:left-[20%] -bottom-4 hidden sm:block">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12 Q 50 14, 110 12 M 95 5 L 115 12 L 95 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <p className="text-gray-600 text-lg mb-16">
          Have a nice works? reach out and let&apos;s chat.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full relative mt-8">

          {/* Dot Grid Decoration */}
          <div className="absolute -right-8 -top-8 hidden md:grid grid-cols-4 gap-2 opacity-60">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-[3px] h-[3px] bg-black rounded-full" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-bold text-black mb-4">
                Name:*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Hello..."
                value={form.name}
                onChange={handleChange}
                required
                className="w-full pb-3 bg-transparent border-b border-gray-300 text-gray-900 focus:border-black outline-none placeholder-gray-400 text-sm transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-bold text-black mb-4">
                Email:*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Where can i reply"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pb-3 bg-transparent border-b border-gray-300 text-gray-900 focus:border-black outline-none placeholder-gray-400 text-sm transition-colors"
              />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col mb-16">
            <label htmlFor="company" className="text-sm font-bold text-black mb-4">
              Company name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your company or website?"
              value={form.company}
              onChange={handleChange}
              className="w-full pb-3 bg-transparent border-b border-gray-300 text-gray-900 focus:border-black outline-none placeholder-gray-400 text-sm transition-colors"
            />
          </div>

          {/* Services / What's in your mind */}
          <div className="mb-20">
            <p className="text-sm font-bold text-black mb-6">What&apos;s in your mind?*</p>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`px-6 py-3 rounded-full text-sm font-medium border transition-colors cursor-pointer ${selectedService === service
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Section */}
          <div className="flex flex-col items-center sm:items-end relative">
            {/* Squiggly Arrow */}
            <div className="absolute -left-4 sm:right-32 sm:left-auto -top-8 sm:-top-10">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12 scale-110">
                <path d="M30 5 L20 15 L28 20 L10 35 M10 35 L12 25 M10 35 L22 35" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition cursor-pointer text-sm shadow-md"
            >
              Send Me
            </button>
            <p className="text-xs text-gray-400 mt-4 text-center sm:text-right w-full font-medium">
              I&apos;ll must get back to you within 24 hours
            </p>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
