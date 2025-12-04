"use client";
import Image from "next/image";
import Link from "next/link";

export default function ArtisanEdit() {
  return (
    <section className="bg-[#0F172A] text-white flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 py-10 gap-8 md:gap-12">
      {/* Left Side: Images */}
      <div className="flex flex-col md:flex-row md:w-2/3 w-full gap-8">
        {/* Ceramic Bowls */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg relative">
          <Image
            src="https://images.unsplash.com/photo-1721328004336-c19ee38adcd1?auto=format&fit=crop&w=800&q=80"
            alt="Handmade ceramic bowls in earthy tones"
            fill
            className="object-cover"
          />
        </div>

        {/* Artisan at Work */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg relative">
          <Image
            src="https://images.unsplash.com/photo-1753164725849-54c0698969e5?auto=format&fit=crop&w=800&q=80"
            alt="Artisan shaping clay on pottery wheel"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side: Text & CTA */}
      <div className="md:w-1/3 w-full text-center md:text-left flex flex-col justify-center">
        <h2 className="text-3xl mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: '48px'
              }} >
          The Artisan Edit
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
          Unwind in style. Discover our handpicked selection of ceramic
          dinnerware, serveware, and drinkware designed for effortless elegance
          and timeless appeal.
        </p>
        <Link href="/products">
          <button className="border border-pink-500 text-white bg-transparent px-6 py-2.5 rounded-md hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 font-medium w-fit mx-auto md:mx-0 shadow-sm hover:shadow-pink-200">
            Shop Collection
          </button>
        </Link>
      </div>
    </section>
  );
}
