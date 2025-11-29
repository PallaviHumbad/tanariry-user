// src/components/FiltersSidebar.jsx
'use client';

import { X } from "lucide-react";
import { useState } from "react";

const colors = [
  { name: "Baby Blue", count: 2 },
  { name: "Beehive", count: 1 },
  { name: "Beige", count: 4 },
  { name: "Betulia", count: 1 },
  { name: "Black", count: 8 },
  { name: "Black Oak", count: 2 },
  { name: "Blue", count: 2 },
  { name: "Bordeaux", count: 1 },
  { name: "Brown", count: 2 },
  { name: "Gin", count: 1 },
  { name: "Gold", count: 3 },
  { name: "Gray", count: 5 },
  { name: "Green", count: 4 },
  { name: "Ivory", count: 2 },
  { name: "Lavender", count: 1 },
  { name: "Navy", count: 3 },
  { name: "Olive", count: 2 },
  { name: "Pink", count: 1 },
  { name: "Red", count: 3 },
  { name: "Silver", count: 2 },
  { name: "White", count: 6 },
  { name: "Yellow", count: 1 },
];

export default function FiltersSidebar({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("ambientes");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0]);
  const [showAllColors, setShowAllColors] = useState(false);

  const toggleColor = (colorName) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const displayedColors = showAllColors ? colors : colors.slice(0, 7);

  // RESET FUNCTION
  const handleReset = () => {
    setSearchQuery("");
    setSelectedColors([]);
    setPriceRange([0]);
    setShowAllColors(false);
    setActiveTab("ambientes");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto rounded-r-2xl">
        <div className="p-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-200">
            {["ambientes", "amurin"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-1 text-sm font-medium capitalize transition-colors relative ${
                  activeTab === tab ? "text-[#d87f4a]" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d87f4a]" />
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-10 px-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#d87f4a] focus:ring-1 focus:ring-[#d87f4a]"
            />
            <button className="bg-black text-white h-10 px-5 text-sm rounded-md hover:bg-black/90 transition-colors">
              Search
            </button>
          </div>

          {/* Colors */}
          <div className="mb-8">
            <h4 className="text-md font-medium mb-4">Color</h4>
            <div className="space-y-3">
              {displayedColors.map((color) => (
                <label
                  key={color.name}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color.name)}
                    onChange={() => toggleColor(color.name)}
                    className="w-4 h-4 text-[#d87f4a] border-gray-300 rounded focus:ring-[#d87f4a]"
                  />
                  <span className="text-sm text-gray-700">
                    {color.name} <span className="text-gray-400">({color.count})</span>
                  </span>
                </label>
              ))}
            </div>

            {colors.length > 7 && !showAllColors && (
              <button
                onClick={() => setShowAllColors(true)}
                className="mt-4 text-[#d87f4a] hover:underline text-xs font-medium"
              >
                + Show {colors.length - 7} more
              </button>
            )}
          </div>

          {/* Price Slider */}
          <div className="mb-8">
            <h4 className="text-md font-medium mb-4">Filter by price</h4>
            <div className="px-1">
              <input
                type="range"
                min="0"
                max="11000"
                step="100"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #d87f4a 0%, #d87f4a ${(priceRange[0] / 11000) * 100}%, #e5e7eb ${(priceRange[0] / 11000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <style jsx>{`
                .slider-thumb::-webkit-slider-thumb {
                  appearance: none;
                  width: 16px;
                  height: 16px;
                  background: #d87f4a;
                  border-radius: 50%;
                  cursor: pointer;
                  margin-top: -6px;
                }
                .slider-thumb::-moz-range-thumb {
                  width: 16px;
                  height: 16px;
                  background: #d87f4a;
                  border-radius: 50%;
                  cursor: pointer;
                  border: none;
                }
              `}</style>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span className="font-medium">${priceRange[0].toLocaleString()}</span>
                <span className="text-gray-400">Max. Price</span>
              </div>
            </div>
          </div>

          {/* Buttons: Apply + Reset */}
          <div className="flex gap-3">
            <button className="flex-1 bg-[#d87f4a] text-white h-11 rounded-md hover:bg-[#b86a3d] transition-colors text-sm font-medium">
              Apply Filters
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-200 text-gray-700 h-11 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium"
            >
              Reset
            </button>
          </div>

        </div>
      </div>
    </>
  );
}