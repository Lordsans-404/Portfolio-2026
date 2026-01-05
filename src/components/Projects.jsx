import React, { useState, useRef, useEffect } from 'react';
import KafConnect from './projects/KafConnect';
import AryaniShop from './projects/AryaniShop';
import BifiSmart from './projects/BifiSmart';
import Snap from './projects/Snap';
import Medly from './projects/Medly';
import { motion, useScroll, useTransform } from 'framer-motion';

const projectComponents = [
    { Component: KafConnect, name: 'KafConnect' },
    // { Component: AryaniShop, name: 'AryaniShop' },
    { Component: BifiSmart, name: 'BifiSmart' },
    { Component: Snap, name: 'Snap' },
    { Component: Medly, name: 'Medly' }
];


const ProjectCard = ({ index, progress, totalProjects }) => {
    const { Component } = projectComponents[index];

    const start = index / totalProjects;
    const end = (index + 1) / totalProjects;
    const peak = (start + end) / 2;

    const opacity = useTransform(
        progress,
        [start, start + 0.05, peak - 0.05, peak, peak + 0.05, end - 0.05, end],
        [0, 0.3, 1, 1, 1, 0.3, 0]
    );

    const scale = useTransform(
        progress,
        [start, peak, end],
        [0.85, 1, 0.85]
    );

    const y = useTransform(
        progress,
        [start, peak, end],
        [100, 0, -100]
    );

    return (
        <motion.div
            style={{ opacity, scale, y }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <Component />
        </motion.div>
    );
};
const Projects = () => {
    const containerRef = useRef(null);
    const totalProjects = projectComponents.length;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Fade in when entering section, fade out when leaving
    const sectionOpacity = useTransform(
        scrollYProgress,
        [0, 0.05, 0.95, 1],
        [0, 1, 1, 0]
    );

    return (
        <div
            id="projects"
            ref={containerRef}
            className="relative bg-black"
            style={{ height: `${totalProjects * 100}vh` }}
        >
            {/* Fixed viewport container - this stays in place */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen pointer-events-none"
                style={{ opacity: sectionOpacity }}
            >
                {/* Animated background */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: useTransform(
                            scrollYProgress,
                            [0, 0.33, 0.66, 1],
                            [
                                'radial-gradient(circle at 50% 50%, #1e3a8a 0%, transparent 50%)',
                                'radial-gradient(circle at 50% 50%, #831843 0%, transparent 50%)',
                                'radial-gradient(circle at 50% 50%, #065f46 0%, transparent 50%)',
                                'radial-gradient(circle at 50% 50%, #1e3a8a 0%, transparent 50%)'
                            ]
                        )
                    }}
                />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 left-0 right-0 pt-12 pb-8 text-center z-20 text-white"
                >
                    <h2 className="text-5xl md:text-5xl font-serif">
                        Selected Projects
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-white mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* Project display area */}
                <div className="absolute inset-0 flex items-center justify-center pb-20">
                    <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
                        {projectComponents.map((_, index) => (
                            <ProjectCard
                                key={index}
                                index={index}
                                progress={scrollYProgress}
                                totalProjects={totalProjects}
                            />
                        ))}
                    </div>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                    {projectComponents.map((project, index) => {
                        const start = index / totalProjects;
                        const end = (index + 1) / totalProjects;
                        const peak = (start + end) / 2;

                        const indicatorOpacity = useTransform(
                            scrollYProgress,
                            [start, peak, end],
                            [0.3, 1, 0.3]
                        );

                        const indicatorScale = useTransform(
                            scrollYProgress,
                            [start, peak, end],
                            [1, 1.5, 1]
                        );

                        return (
                            <motion.div
                                key={project.name}
                                style={{
                                    opacity: indicatorOpacity,
                                    scale: indicatorScale
                                }}
                                className="w-2 h-2 rounded-full bg-white transition-all"
                            />
                        );
                    })}
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 1 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0])
                    }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-sm z-20"
                >
                    <span>Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Projects;