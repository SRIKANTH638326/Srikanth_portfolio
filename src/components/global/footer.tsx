'use client';

import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const categories = [
    'UI/UX Design',
    'Wireframing & Prototyping',
    'Design Systems',
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: '#' },
    { icon: <Github size={18} />, href: '#' },
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
  ];

  return (
    <footer className="bg-[#111111] text-white w-full">

      {/* Top section: Logo + categories */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-[#111111] rounded-sm" />
          </div>
          <span className="text-white text-2xl font-bold tracking-widest uppercase">
            Srikanth
          </span>
        </div>


      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* Middle: Nav links */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-300 text-sm sm:text-base font-medium hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-4 pb-10">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="w-12 h-12 bg-[#1E1E1E] rounded-xl flex items-center justify-center text-gray-300 hover:bg-[#946E1C] hover:text-white transition-all duration-300 cursor-pointer"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* Bottom: legal + copyright */}
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center gap-3">

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Srikanth C. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
