import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const AryaniShop = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image / Mockup */}
            <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-xl opacity-50 blur group-hover:opacity-75 transition duration-500"></div>
                <div className="relative border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                    <div className="h-8 bg-gray-800 flex items-center px-4 gap-2 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="ml-4 w-full h-4 bg-gray-700/50 rounded-full max-w-[200px]"></div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop"
                        alt="AryaniShop"
                        className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Description floating below image */}
                <div className="mt-8 relative pl-8 border-l border-white/20">
                    <p className="text-xl text-gray-300 font-light leading-relaxed">
                        A simple online store for product catalog. Features product listing, shopping cart, and checkout flow.
                    </p>
                    <ul className="mt-4 space-y-2">
                        {[
                            "Product listing",
                            "Shopping cart",
                            "Checkout via Whatsapp",
                            "Admin management"
                        ].map((feature, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right: Info */}
            <div className="order-1 lg:order-2 space-y-8">
                <div>
                    <h3 className="text-6xl md:text-7xl font-serif leading-tight">
                        AryaniShop
                    </h3>
                    <p className="text-2xl text-gray-400 font-serif italic mt-2">
                        E-Commerce Page
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-xl font-medium border-b border-white/20 pb-2 inline-block">Tech Stack</h4>
                    <ul className="space-y-3">
                        {[
                            "Django (Backend)",
                            "Bootstrap (Frontend)",
                            "MySQL (Database)"
                        ].map((tech, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-8 flex gap-4">
                    <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                        View Live <ExternalLink size={18} />
                    </button>
                    <button className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                        Source Code <Github size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AryaniShop;
