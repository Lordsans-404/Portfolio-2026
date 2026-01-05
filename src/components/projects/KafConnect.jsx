import React from 'react';
import PjKafConnect from '../../assets/pj-kafconnect.png';
import PjKafConnect2 from '../../assets/pj-kafconnect-2.png';
import SmArrow from '../../assets/sm-arrow.png';
import StarIcon from '../../assets/star-icon.png';

const KafConnect = () => {
    return (
        <div className="relative h-full w-full max-w-6xl mx-auto py-12 lg:py-20 px-4 lg:mt-22">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative mb-8 lg:mb-0">

                {/* 1. Main Image (Top Left) */}
                <div className="order-2 lg:order-1 lg:col-span-7 relative z-10">
                    <div className="relative rounded-2xl lg:rounded-[1rem] overflow-hidden border border-2 border-white/90 shadow-2xl group">
                        <img
                            src={PjKafConnect}
                            alt="KafConnect Homepage"
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* 2. Title & Tech Stack (Top Right) */}
                <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-start lg:pl-4">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight tracking-tight text-white mb-2">
                        KAFConnect <br />
                        <span className="relative lg:-top-4 text-3xl sm:text-4xl italic font-light text-gray-400 font-serif">E-Recruitment System</span>
                    </h2>

                    <div className="space-y-4">
                        <p className="text-xl font-medium text-gray-200 font-sans">Tech Stack :</p>
                        <ul className="">
                            {[
                                "Nest JS (Backend)",
                                "Next Js (Frontend)",
                                "TailwindCSS (Styling)",
                                "Postgresql (Database)"
                            ].map((tech, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. Description & Features (Bottom Left) */}
                <div className="order-3 lg:col-span-5 lg:mt-[-20px] lg:row-start-2 relative z-20">
                    <div className="relative">
                        {/* Arrow connecting to secondary image */}
                        <div className="hidden lg:block absolute top-6 -right-36 transform translate-x-1/2 -translate-y-1/2">
                            <img src={SmArrow} alt="arrow" className="w-10 h-auto opacity-80 rotate-180 scale-x-[-1] -scale-y-100" />
                        </div>

                        <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                            A full-stack recruitment platform with some key features, such as :
                        </p>
                        <ul className="space-y-2 pl-4">
                            {[
                                "Job posting & management",
                                "Candidate application system",
                                "Onsite Test",
                                "Admin dashboard",
                                "Email Authentication",
                                "CRUD operations"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 4. Secondary Image (Bottom Right) */}
                <div className="lg:w-md order-4 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:absolute lg:top-16 right-0 z-10 mt-8 lg:-mt-20">
                    <div className="relative">
                        {/* Decorative Stars */}
                        <img src={StarIcon} alt="star" className="absolute -left-18 top-1/2 w-8 h-8 animate-pulse" />
                        <div className="relative rounded-2xl lg:rounded-[1rem] overflow-hidden border-2 border-white/90 shadow-2xl group w-full ml-auto">
                            <img
                                src={PjKafConnect2}
                                alt="KafConnect Dashboard"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KafConnect;
