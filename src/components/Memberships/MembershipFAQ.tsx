'use client'

import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-light text-gray-900">{question}</h3>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 pr-12">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function MembershipFAQ() {
  const faqs = [
    {
      question: "What&apos;s included in each membership plan?",
      answer: "Each membership plan includes different amenities based on your needs. All plans include high-speed internet, access to common areas, complimentary refreshments, and printing services. Higher tier plans include additional benefits like private office space, dedicated desks, meeting room credits, mail handling, and access to premium events."
    },
    {
      question: "Can I upgrade or downgrade my membership?",
      answer: "Yes, you can upgrade or downgrade your membership with 30 days&apos; notice. We understand that your business needs may change, and we&apos;re flexible in accommodating those changes. Please speak with our membership coordinator to arrange any adjustments to your plan."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "Our standard memberships require a minimum 3-month commitment. We also offer month-to-month options with a slightly higher rate. For private offices, we typically require a 6-month minimum commitment. Day passes have no commitment requirements."
    },
    {
      question: "Are there any additional costs beyond the membership fee?",
      answer: "Your membership fee covers most amenities. Additional costs may include: extra meeting room hours beyond your allocated credits, event space rentals, specialized administrative services, catering for meetings, and premium printing services. All additional services are clearly priced and optional."
    },
    {
      question: "Can I use the space on weekends?",
      answer: "Yes, members with 24/7 access plans (Hot Desk, Dedicated Desk, and Private Office) can access the space anytime, including weekends and holidays. Day Pass holders have access only during business hours (8am-8pm) on weekdays."
    },
    {
      question: "How do I book meeting rooms?",
      answer: "Meeting rooms can be booked through our member portal or mobile app. Each membership plan comes with a specific allocation of meeting room credits. You can view availability, book rooms, and manage your reservations easily through the digital platform."
    },
    {
      question: "Can I bring guests to the workspace?",
      answer: "Yes, members can bring guests for meetings or brief collaborations. Guests must sign in at reception and be accompanied by a member. For extended guest visits (over 2 hours), there may be a day pass fee. Please inform the reception desk in advance when expecting guests."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Everything you need to know about our membership plans and workspace facilities.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

        {/* Contact for more questions */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a href="/contact" className="inline-block bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}