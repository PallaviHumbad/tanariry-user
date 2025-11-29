// src/app/(app)/customer-care/page.js
import PolicyLayout from "@/components/layout/PolicyLayout";
import { Phone, Mail, Clock, MessageCircle, Package, Gift, Truck } from "lucide-react";

export default function CustomerCare() {
  return (
    <PolicyLayout title="Customer Care">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Intro */}
        <div className="text-center">
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            At <span className="font-semibold text-[#1E3A8A]">TanaRiri Overseas LLP</span>, your satisfaction is our priority. 
            Our dedicated support team is here to assist you at every step — from choosing the perfect brass thali to tracking your international shipment.
          </p>
        </div>

        {/* Contact Cards - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-[#1E3A8A]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Call Us</h3>
            <p className="text-lg font-medium">+91 97550 40030</p>
            <p className="text-sm text-gray-600">+91 96444 03330</p>
            <p className="text-xs text-gray-500 mt-2">Direct line to our team</p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-[#1E3A8A]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Email Us</h3>
            <p className="text-lg font-medium break-all">tanaririllp@gmail.com</p>
            <p className="text-xs text-gray-500 mt-2">Reply within 24 hours</p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-[#1E3A8A]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Support Hours</h3>
            <p className="text-lg font-medium">Mon–Sat</p>
            <p className="text-sm text-gray-600">10:00 AM – 6:00 PM IST</p>
            <p className="text-xs text-gray-500 mt-2">Closed on Sundays & National Holidays</p>
          </div>
        </div>

        {/* How We Help - Icons */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            How We Help You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, title: "Product Guidance", desc: "Not sure which brass kalash to buy? We’ll help." },
              { icon: Package, title: "Order Tracking", desc: "Real-time updates via SMS & email." },
              { icon: Truck, title: "Shipping Support", desc: "International? We handle customs." },
              { icon: Gift, title: "Gifting & Customization", desc: "Personalized engraving available." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border">
                <item.icon className="w-10 h-10 text-[#1E3A8A] mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

           {/* FAQ Section - 2 Columns - Pehle Wala Style + Smooth Animation */}
        <div className="bg-gradient-to-r from-[#1E3A8A]/5 to-transparent p-8 lg:p-12 rounded-2xl border-l-4 border-[#1E3A8A]">
        <h3 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT COLUMN */}
            <div className="space-y-5">
            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                How do I track my order?
                <span className="ml-3 text-#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    You’ll receive a tracking link via <strong>email & SMS</strong> within 24 hours of dispatch. Track on DTDC, Blue Dart, or DHL.
                </p>
                </div>
            </details>

            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                Can I change my delivery address?
                <span className="ml-3 text-[#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    Yes, <strong>within 12 hours</strong> of placing the order. Email us at <strong>support@tanariri.com</strong>.
                </p>
                </div>
            </details>

            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                Are brass utensils safe for cooking?
                <span className="ml-3 text-[#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    100% safe. Our brass is <strong>food-grade, lead-free</strong>, and used for centuries in Indian kitchens.
                </p>
                </div>
            </details>

            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                How to clean ceramic crockery?
                <span className="ml-3 text-[#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    <strong>Microwave & dishwasher safe</strong>. Use mild soap. Avoid abrasive scrubbers.
                </p>
                </div>
            </details>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-5">
            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                Do you ship internationally?
                <span className="ml-3 text-[#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    Yes! We ship to <strong>USA, UK, UAE, Canada, Germany, Australia</strong> & more. Delivery in 7–15 days.
                </p>
                </div>
            </details>

            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                Can I return a customized item?
                <span className="ml-3 text-[#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    No, <strong>customized or engraved items</strong> are non-returnable. Standard items: 15-day return.
                </p>
                </div>
            </details>

            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                Is gift wrapping available?
                <span className="ml-3 text-[#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    Yes! Add <strong>gift wrap + message</strong> at checkout for ₹99. Premium box included.
                </p>
                </div>
            </details>

            <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 group-hover:text-[#1E3A8A] transition-colors text-base list-none">
                Are products GST included?
                <span className="ml-3 text-[#1E3A8A] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                </summary>
                <div className="mt-3 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-40">
                <p className="text-sm text-gray-600 pl-1 pb-2">
                    Yes, all prices are <strong>GST inclusive</strong>. Invoice provided with every order.
                </p>
                </div>
            </details>
            </div>
        </div>
        </div>
      </div>
    </PolicyLayout>
    
  );
}