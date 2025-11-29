"use client";
import Image from 'next/image';

export default function StayInspired() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-gray-500">
      {/* Background Image */}
    <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Cozy living room with books and sofa"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left side - Text */}
          <div className="lg:max-w-lg">
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "48px",
              }}
            >
              Stay Inspired
            </h2>
            <p className="text-white">
              Subscribe to receive updates on new posts, exclusive offers, and
              special content just for you.
            </p>
          </div>

          {/* Right side - Email Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
          >
            <input
              type="email"
              required
              placeholder="E-mail"
              className="w-full h-10 px-3 rounded-md border border-white bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
              type="submit"
              className="px-3 py-1.5 border border-pink-500 text-white rounded-md hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 text-sm md:text-[15px] font-medium whitespace-nowrap self-start sm:self-center"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
