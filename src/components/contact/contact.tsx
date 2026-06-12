/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") {
      const cleanedValue = value.replace(/[^a-zA-Z\s]/g, "");
      setForm({ ...form, [name]: cleanedValue });
    } else {
      setForm({ ...form, [name]: value });
    }
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

    const sendEmail = async () => {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error || "Failed to send message.");
      }

      setForm({ name: "", email: "", message: "" });
      return "Message sent successfully!";
    };

    toast.promise(sendEmail(), {
      loading: "Sending your message...",
      success: "Message sent! I will contact you as soon as possible.",
      error: (err) => `Error: ${err.message}`,
    });
  };

  return (
    <section id="contact" className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl lg:text-6xl font-normal text-gray-900 mb-12 tracking-tight">
            Get in touch
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-gray-500 text-sm mb-1">Email:</p>
              <p className="text-gray-900 text-base font-medium">srikanthc061@gmail.com</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">Phone:</p>
              <p className="text-gray-900 text-base font-medium">+91 8110813471</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">Address:</p>
              <p className="text-gray-900 text-base font-medium leading-relaxed max-w-sm">
                Bengaluru, India
              </p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-3">Follow us</p>
              <div className="flex space-x-3">
                {[
                  { icon: <Instagram size={18} fill="currentColor" />, href: "#" },
                  { icon: <Github size={18} fill="currentColor" />, href: "https://github.com/SRIKANTH638326" },
                  { icon: <Linkedin size={18} fill="currentColor" />, href: "https://www.linkedin.com/in/srikanth-c-270b00347/" },
                  { icon: <Twitter size={18} fill="currentColor" />, href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-700 text-white p-2.5 rounded-full transition flex items-center justify-center cursor-pointer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#F5F5F5] border-none rounded-2xl text-gray-900 focus:ring-2 focus:ring-black outline-none placeholder-gray-400 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#F5F5F5] border-none rounded-2xl text-gray-900 focus:ring-2 focus:ring-black outline-none placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something..."
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-5 bg-[#F5F5F5] border-none rounded-3xl text-gray-900 focus:ring-2 focus:ring-black outline-none placeholder-gray-400 resize-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1A1A1A] text-white py-4 rounded-2xl font-medium hover:bg-black transition cursor-pointer text-sm"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
