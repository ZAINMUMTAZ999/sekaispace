"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Do I really need to protect myself from Click Fraud?",
    answer:
      "Click fraud is a type of theft that can deplete your advertising budget, resulting in substantial financial losses. Unfortunately, it operates in a legal grey area, which creates a loophole that unscrupulous individuals can exploit. We understand the unfairness of this situation and are dedicated to upholding the highest standards of integrity and security for your Ads. With our comprehensive protection measures, you can have confidence that your advertising investment will be optimised and safeguarded against the threat of click fraud.",
  },
  {
    question: "How easy is it to set things up?",
    answer:
      "Our system is designed for simplicity — setup takes only a few minutes, with no coding required.",
  },
  {
    question: "What happens if I exceed my plan limit?",
    answer:
      "If you exceed your plan limit, we’ll notify you in advance so you can upgrade your plan or adjust your settings.",
  },
  {
    question: "Are there any additional commitments or fees?",
    answer:
      "No, there are no hidden costs. You only pay for the plan you select, and you can cancel anytime.",
  },
  {
    question: "How long can I use the free Detect plan?",
    answer:
      "You can use the free plan indefinitely, with limited protection features available.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-sm">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFaq(index)}
              className={`w-full flex justify-between items-center text-left px-5 py-4 font-medium transition-all ${
                openIndex === index
                  ? "bg-purple-50 text-purple-700 border-l-4 border-purple-600 hover:cursor-pointer"
                  : "hover:bg-gray-50 hover:cursor-pointer"
              }`}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-purple-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-700 text-sm md:text-base bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}