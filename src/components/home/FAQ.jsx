"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the shipping options?",
    answer:
      "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free standard shipping is available on orders over $50. International shipping is also available with delivery times varying by location.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery for a full refund. Items must be unused, in their original packaging, and in the same condition as received. Please contact our customer service team to initiate a return.",
  },
  {
    question: "How do I care for my crockery?",
    answer:
      "Most of our crockery is dishwasher and microwave safe. However, we recommend hand washing delicate pieces and fine china to preserve their beauty. Avoid sudden temperature changes and abrasive cleaners. Detailed care instructions are included with each product.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes, all our products come with a 1-year warranty against manufacturing defects. This covers any issues with materials or workmanship. Normal wear and tear, accidental damage, or misuse are not covered under warranty.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this number to track your package in real-time. You can also check your order status by logging into your account on our website.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-background text-black">
      <div className="w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side */}
          <div>
            <h2
              className="leading-tight text-[#172554]"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 400,
                fontSize: "40px",
              }}
            >
              Frequently
              <br />
              Asked
              <br />
              <span className="italic">Questions</span>
            </h2>
          </div>

          {/* Right Side – Smooth FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 pb-3">
      <button
        onClick={onToggle}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-md font-medium pr-4">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ease-in-out text-pink-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: height }}
      >
        <div ref={contentRef} className="pt-2 pb-1">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};