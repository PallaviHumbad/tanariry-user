import React from 'react';

export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-lg overflow-hidden">
      {/* Image Placeholder */}
      <div className="aspect-square bg-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 background-animate" />
      </div>

      {/* Badge Placeholder */}
      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <div className="h-6 w-12 bg-orange-200 rounded" />
        <div className="h-6 w-16 bg-white border border-orange-300 rounded" />
      </div>

      {/* Text Placeholder */}
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-100 rounded w-1/2" />
        <div className="flex items-center gap-2">
          <div className="h-7 bg-gray-300 rounded w-20" />
          <div className="h-5 bg-gray-100 rounded w-16 line-through" />
        </div>
      </div>

      <style jsx>{`
        .background-animate {
          background-size: 400% 100%;
          animation: shimmer 2s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -400% 0; }
          100% { background-position: 400% 0; }
        }
      `}</style>
    </div>
  );
}