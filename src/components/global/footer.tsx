'use client';

import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { label: 'Homepage', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-[#FCFBF9] w-full px-4 sm:px-6 lg:px-8 pb-8 pt-10 font-sans">
      <div className="max-w-[1200px] mx-auto bg-[#050505] rounded-[32px] sm:rounded-[40px] px-8 sm:px-12 lg:px-16 pt-16 pb-8 text-white relative overflow-hidden">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
          
          {/* Left: Logo & Text */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <span className="text-white font-bold text-lg leading-none">S</span>
              </div>
              <span className="text-white text-xl font-bold tracking-tight">
                Srikanth
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Our mission is to empower lazy people design, build, and kickstart their startups with the absolute least amount of effort.
            </p>
          </div>


        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-gray-200 hover:text-[#007ABC] transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs sm:text-sm text-gray-400 font-medium">
            Copyright {new Date().getFullYear()}© Srikanth, All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-gray-300">
            <a href="#" className="hover:text-[#007ABC] transition-colors">
              <Facebook size={20} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="hover:text-[#007ABC] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#007ABC] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/srikanth-c-270b00347/" className="hover:text-[#007ABC] transition-colors">
              <Linkedin size={20} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://github.com/SRIKANTH638326" className="hover:text-[#007ABC] transition-colors">
              <Github size={20} fill="currentColor" strokeWidth={0} />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
