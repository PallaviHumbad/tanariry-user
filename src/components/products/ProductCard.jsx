'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import toast from 'react-hot-toast';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltipCart, setShowTooltipCart] = useState(false);

  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const productId = product?._id || product?.id;
  const isWishlisted = isInWishlist(productId);

  const getImageUrl = (path) => {
    if (!path) return "/fallback.jpg";
    if (path.startsWith("http")) return path;
    if (path.startsWith("uploads/")) return `${BACKEND_URL}/${path}`;
    return `${BACKEND_URL}/uploads/${path}`;
  };

  const mainImage = getImageUrl(product.productImages?.[0]);
  const hoverImage = getImageUrl(product.productImages?.[1]);
  const productName = product.productName || 'Unnamed Product';

  const discountPrice = Number(product?.discountPrice ?? product?.originalPrice ?? 0);
  const originalPrice = Number(product?.originalPrice ?? discountPrice);
  const hasDiscount = originalPrice > discountPrice;

  const [imgSrc, setImgSrc] = useState(mainImage);

  if (!productId) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg text-center opacity-50">
        <p className="text-sm text-gray-500">Product not available</p>
      </div>
    );
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      ...product,
      quantity: 1,
      selectedPrice: discountPrice,
    });

    toast.success(`${productName} added to cart!`, {
      position: 'bottom-center',
      duration: 2000,
    });
  };

  const handleWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await toggleWishlist(product);
  };

  return (
    <Link href={`/products/${productId}`} prefetch={false}>
      <div
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">

          {/* Main Image */}
          <Image
            src={imgSrc}
            alt={productName}
            fill
            className={`object-cover transition-all duration-500 ${isHovered ? ' scale-105' : 'opacity-100 blur-0 scale-100'
              }`}
            onError={() => setImgSrc('/fallback.jpg')}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover Image (only if exists) */}
          {/* {hoverImage && (
            <Image
              src={hoverImage}
              alt={`${productName} hover`}
              fill
              className={`object-cover transition-opacity duration-500 absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              onError={(e) => (e.currentTarget.src = '/fallback.jpg')}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )} */}

          {/* Dark overlay */}
          <div
            className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          />

          {/* Cart Button */}
          <div className="absolute bottom-1.5 right-1.5 z-20">
            <button
              onClick={handleAddToCart}
              onMouseEnter={() => setShowTooltipCart(true)}
              onMouseLeave={() => setShowTooltipCart(false)}
              className="relative bg-white hover:bg-[#1E3A8A] text-pink-500 hover:text-white 
                p-3 rounded-full shadow-lg transition-all duration-300 
                transform hover:scale-110 cursor-pointer"
              aria-label="Add to cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              {showTooltipCart && (
                <div className="absolute top-1/2 -translate-y-1/2 right-full mr-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded whitespace-nowrap pointer-events-none z-30">
                  Add to cart
                  <div className="absolute top-1/2 -translate-y-1/2 left-full -ml-1 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-gray-800"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3
            className="text-gray-900 font-normal text-lg group-hover:text-[#1E3A8A] transition-colors cursor-pointer"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {productName}
          </h3>

          {product.description && (
            <p className="text-sm text-gray-600 line-clamp-2 leading-snug">
              {product.description}
            </p>
          )}

          <p className="text-gray-700 font-medium leading-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
            {hasDiscount ? (
              <>
                <span className="text-[#1E3A8A] inline-block align-middle">₹{discountPrice.toLocaleString('en-IN')}</span>
                <span className="line-through text-gray-400 ml-2 text-sm inline-block align-middle">
                  ₹{originalPrice.toLocaleString('en-IN')}
                </span>
              </>
            ) : (
              <span className="inline-block align-middle">₹{discountPrice.toLocaleString('en-IN')}</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}
