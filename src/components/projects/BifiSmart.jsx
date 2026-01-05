import React from 'react';
import PjPrisma from '../../assets/pj-prisma.png';
import PjPrisma2 from '../../assets/pj-prisma-2.png';
import SmArrow from '../../assets/sm-arrow.png';

const BifiSmart = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto py-12 lg:py-20 px-4 lg:mt-34">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8 lg:mb-0 items-start relative">

                {/* 1. Prisma Card (Top Left on desktop, 2nd on mobile) */}
                <div className="order-2 lg:order-1 lg:col-span-7 relative z-10">
                    <div className="relative rounded-2xl lg:rounded-[1rem] overflow-hidden border border-2 border-white/90 shadow-2xl group">
                        <img
                            src={PjPrisma2}
                            alt="Prisma Kalkulator Tangan"
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* 2. Main Title (Top Right area on desktop, 1st on mobile) */}
                <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-start lg:pl-10 lg:pt-10 mb-8 lg:mb-0">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight tracking-tight text-white">
                        Bifi Smart <span className="font-light">&</span><br />
                        Prisma
                    </h2>
                </div>

                {/* 3. Description (Bottom Left area on desktop, 3rd on mobile) */}
                <div className="order-3 -bottom-8 lg:col-span-4 lg:row-start-2 lg:mt-[-50px] relative z-20 lg:pt-8">
                    <div className="hidden lg:block relative flex justify-end">
                        <img className="w-6 h-5 absolute right-2" src={SmArrow} alt="sm-arrow" />
                    </div>

                    <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed lg:mt-20">
                        I've built these Landing Pages for my first internship Using Wordpress, focusing on delivering clear information, improving brand visibility, and optimizing SEO to increase discoverability.
                    </p>
                </div>

                {/* 4. Bifi Smart Card (Bottom Right, overlapping, 4th on mobile) */}
                <div className="order-4 lg:col-span-8 lg:col-start-5 lg:row-start-2 relative z-10 mt-8 lg:-mt-20">
                    <div className="relative rounded-2xl lg:rounded-[1rem] overflow-hidden border border-2 border-white/80 shadow-2xl group ml-auto w-full lg:w-[110%] lg:-mr-[10%]">
                        <img
                            src={PjPrisma}
                            alt="Bifi Smart Landing Page"
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BifiSmart;
