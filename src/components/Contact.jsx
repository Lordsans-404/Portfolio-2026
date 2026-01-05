import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SmArrow from '../assets/sm-arrow.png';

export const Contact = () => {
    return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full ">
        <div className="flex lg:justify-between lg:flex-row flex-col gap-12 items-start mb-32">
          <p className="text-7xl lg:text-[6rem] font-serif leading-none">
            Reach Out to Me
          </p>
          <span className="border border-2 border-white/80 rounded-full px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors duration-300">
            Farros Mufid
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-12 mb-16 font-sans">
          <div className="mb-8 lg:mb-0">
            <div className="w-12 h-0.5 bg-white mb-4"></div>
            <p className="text-xl mb-2 font-sans">LinkedIn</p>
            <a 
              href="https://linkedin.com/in/farros-mufid-anwari" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Farros Mufid
            </a>
          </div>

          <div className="mb-8 lg:mb-0">
            <div className="w-12 h-0.5 bg-white mb-4"></div>
            <p className="text-xl mb-2 font-sans">Email</p>
            <a 
              href="mailto:mufid.anwari01@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              mufid.anwari01@gmail.com
            </a>
          </div>

          <div className="mb-8 lg:mb-0">
            <div className="w-12 h-0.5 bg-white mb-4"></div>
            <p className="text-xl mb-2 font-sans">Whatsapp</p>
            <a 
              href="https://wa.me/6288976949503"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+62) 889 7694 9503
            </a>
          </div>
        </div>

        <div className="flex justify-end">
          <a href='https://github.com/lordsans-404' className="flex items-center gap-3 text-xl hover:gap-5 transition-all duration-300 mr-2">
            <img src={SmArrow} alt="arrow" className="w-6 h-auto opacity-80 rotate-180 scale-x-[-1] -scale-y-100" />
            <span className='text-white'>Let's collaborate</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => (
    <footer className="bg-black text-gray-500 py-8 text-center border-t border-white/5 text-sm mb-20">
        <p>© 2026 Farros Mufid. All rights reserved.</p>
    </footer>
);
