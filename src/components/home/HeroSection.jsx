'use client';

import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-[600px] w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/tanariri.mp4" type="video/mp4" />
                </video>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className=" text-white">
                    <h1
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 400,
                            fontSize: '48px',
                        }}
                    >
                        Made with Care for a Cleaner Future
                    </h1>
                    <p
                        className="text-lg mb-6 text-white/90 leading-relaxed"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Explore our curated selection of handcrafted crockery and tableware, designed to elevate every meal into a memorable experience.
                    </p>
                    <Link
                        href="/products"
                        className={`
                            group inline-flex items-center gap-2.5 
                            bg-[#172554] text-white 
                            hover:bg-[#1E3A8A] 
                            px-6 py-3 
                            rounded-md 
                            font-medium text-base 
                            tracking-wide 
                            transition-all duration-300 ease-in-out
                            shadow-sm hover:shadow-md
                            focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:ring-offset-2
                        `}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                        Explore Now
                        <svg
                            className="w-7 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1 text-pink-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
