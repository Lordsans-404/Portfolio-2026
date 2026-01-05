import React from 'react';
import { motion } from 'framer-motion';
import pjKafconnect from '../assets/pj-kafconnect.png';
import pjMedly from '../assets/pj-medly.png';
import pjPrisma from '../assets/pj-prisma.png';
import pjSnap from '../assets/pj-snap.png';

const projectImages = [pjKafconnect, pjSnap, pjPrisma, pjMedly];

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center py-20 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-12 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-[0.85]"
                    >
                        Who Is <br />
                        <span className="italic font-light">Farros?</span>
                    </motion.h2>

                    <div className="space-y-8 max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl font-light leading-relaxed text-gray-300"
                        >
                            Farros is an Information Systems student focused on web development, with experience in both front-end and back-end technologies. He enjoys building web applications 
                            and learning new tools. Currently, he is part of the Web Development Division at GDGoC UIN Jakarta.
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                            className="h-px w-32 bg-white origin-left"
                        />
                    </div>
                </div>

                {/* Right Content - Scrolling Images */}
                <div className="relative h-[600px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                    <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        className="flex flex-col gap-8 w-full items-center"
                    >
                        {/* Duplicate the array to create seamless loop */}
                        {[...projectImages, ...projectImages].map((img, index) => (
                            <div
                                key={index}
                                className="w-full relative group transform transition-transform hover:scale-[1.02] duration-500"
                            >
                                <img
                                    src={img}
                                    alt={`Project preview ${index + 1}`}
                                    className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 rounded-xl" />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};

export default About;
