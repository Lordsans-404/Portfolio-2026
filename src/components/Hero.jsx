import React from 'react';
import { motion } from 'framer-motion';
import myPict from '../assets/myPict.png';
import StarIcon from '../assets/star-icon.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden pt-20 z-10">

            {/* Background Gradient Spot - Subtle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

                {/* Left Content */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="space-y-2">
                            <div className="text-5xl md:text-8xl font-serif font-normal tracking-tight">
                                Welcome to
                            </div>
                            <div className="flex items-start gap-3">
                                <h1 className="text-7xl md:text-9xl lg:text-9xl font-serif italic font-light leading-[0.85] tracking-tighter">
                                    My Portfolio
                                </h1>
                                <motion.span
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="inline-block mt-2"
                                >
                                    <img src={StarIcon} alt="star" className="relative lg:-right-26 lg:-top-2 w-10 h-10 animate-pulse"/>
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="border border-white/80 rounded-full px-6 py-3 inline-flex items-center"
                    >
                        <span className="text-lg font-light tracking-wide whitespace-nowrap">
                            Farros Mufid / Web Developer
                        </span>
                    </motion.div>
                </div>

                {/* Right Content - Portrait with Arch */}
                <div className="relative flex justify-center md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-80 h-[450px] md:w-96 md:h-[537px]"
                    >
                        {/* SVG Filter for Duotone Effect */}
                        <svg className="absolute w-0 h-0">
                            <defs>
                                <filter id="duotone">
                                    <feColorMatrix
                                        type="matrix"
                                        values="0.33 0.33 0.33 0 0
                                                0.33 0.33 0.33 0 0
                                                0.33 0.33 0.33 0 0
                                                0 0 0 1 0"
                                    />
                                    <feComponentTransfer colorInterpolationFilters="sRGB">
                                        <feFuncR type="table" tableValues="0 0.51" />
                                        <feFuncG type="table" tableValues="0 0.54" />
                                        <feFuncB type="table" tableValues="0 0.59" />
                                    </feComponentTransfer>
                                </filter>
                            </defs>
                        </svg>

                        {/* The Arch Shape Implementation via CSS Mask or Border Radius */}
                        <div className="absolute inset-4 border border-5 border-white rounded-t-[10rem] rounded-b-[.5rem] flex items-end justify-center">
                            {/* Image */}
                            <img
                                src={myPict}
                                alt="Farros Mufid"
                                className="w-full h-auto object-cover rounded-b-[.5rem] transition-all duration-700"
                                style={{ filter: 'url(#duotone)' }}
                            />
                        </div>

                        {/* Decoration */}
                        <div className="absolute bottom-24.5 right-3.75 w-32 h-20 border-5 border-white border-r-black rounded-l-[10rem] bg-black"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
