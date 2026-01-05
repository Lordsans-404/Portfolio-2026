import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Briefcase, Mail, Github, Linkedin, FolderGit2 } from 'lucide-react';

const Dock = () => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-full flex justify-center pointer-events-none">
            {/* Desktop Dock - Hidden on mobile */}
            <div className="hidden md:block pointer-events-auto">
                <DesktopDock />
            </div>

            {/* Mobile Dock - Hidden on desktop */}
            <div className="block md:hidden pointer-events-auto w-full px-4 flex justify-center">
                <MobileDock />
            </div>
        </div>
    );
};

const MobileDock = () => {
    return (
        <div className="flex h-16 items-center gap-3 rounded-2xl bg-gray-900/90 backdrop-blur-xl px-4 border border-white/20 shadow-2xl overflow-x-auto no-scrollbar max-w-full">
            {icons.map((item) => {
                const Icon = item.icon;
                return (
                    <button
                        key={item.id}
                        onClick={() => item.href ? window.open(item.href, '_blank') : scrollToSection(item.id)}
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-800/80 border border-white/10 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                        aria-label={item.label}
                    >
                        <Icon size={20} className="w-5 h-5 min-w-[17px]" />
                    </button>
                );
            })}
        </div>
    );
};

const DesktopDock = () => {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="flex h-16 items-end gap-4 rounded-2xl bg-gray-900/50 backdrop-blur-xl px-4 pb-3 border border-white/10"
        >
            {icons.map((item) => (
                <DockIcon mouseX={mouseX} key={item.id} {...item} />
            ))}
        </motion.div>
    );
};

const DockIcon = ({ mouseX, icon: Icon, id, href, label }) => {
    let ref = React.useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.button
            ref={ref}
            style={{ width }}
            onClick={() => href ? window.open(href, '_blank') : scrollToSection(id)}
            className="aspect-square w-10 flex items-center justify-center rounded-full bg-gray-800/80 border border-white/10 hover:bg-gray-700 transition-colors relative group"
        >
            <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                {label}
            </span>
        </motion.button>
    );
};

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const icons = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Mail, href: 'mailto:mufid.anwari01@gmail.com' },
    { id: 'github', label: 'GitHub', icon: Github, href: 'https://github.com/lordsans-404' },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/farros-mufid-anwari' },
];

export default Dock;
