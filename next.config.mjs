/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecom-backend-new-5v6o.onrender.com',
        pathname: '/uploads/**',        // ← Images ke liye
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  async rewrites() {
    return [
      // Customer orders route (specific first)
      {
        source: '/api/customer-orders/:path*',
        destination: 'https://ecom-backend-new-5v6o.onrender.com/api/customer-orders/:path*',
      },
      // All other API routes
      {
        source: '/api/:path*',
        destination: 'https://ecom-backend-new-5v6o.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;