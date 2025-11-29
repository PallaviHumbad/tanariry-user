import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import StayInspired from "../home/StayInspired";

export default function PolicyLayout({ title, children }) {
  return (
    <section className=" bg-gray-50">
      <div className=" py-8 mx-auto px-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#d87f4a] transition mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1
          className="text-4xl lg:text-5xl font-bold text-center mb-12 text-[#172554]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 space-y-8 text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
      <StayInspired />
    </section>
  );
}