'use client'

import React from "react";
import ContactInfoSection from "../Contact/ContactInfoSection";

export default function MemberInquiries() {
  return (
    <>
     {/* <ContactInfoSection /> */}
    <section className="py-20 bg-[#F9F7F5]">
      <div className="max-w-5xl mx-auto px-8">
        
        <h2 className="text-4xl font-light text-[#5A5D36] mb-6 text-center">
          Member Inquiries
        </h2>
        <p className="text-[#5E5836] text-center mb-12">
          Thoughtful answers to the questions most valued by our distinguished community
        </p>

        {/* Inquiries */}
        <div className="space-y-6">
          {/* Membership Transitions */}
          <div className="bg-gray-50 p-8 rounded-sm">
            <h3 className="text-lg font-medium text-[#5E5836] mb-3">
              How flexible are membership transitions?
            </h3>
            <p className="text-[#5E5836]">
              We understand that professional needs evolve. Membership adjustments can be made seamlessly, with
              changes taking effect at your next billing cycle. Any differences are carefully prorated to ensure fairness
              and transparency.
            </p>
          </div>

          {/* Commitment Structure */}
          <div className="bg-gray-50 p-8 rounded-sm">
            <h3 className="text-lg font-medium text-[#5E5836] mb-3">
              What commitment structure do you offer?
            </h3>
            <p className="text-[#5E5836]">
              We honor your autonomy with month-to-month arrangements that require no long-term commitments.
              Should your circumstances change, a respectful 30-day notice allows for graceful transition.
            </p>
          </div>

          {/* Guest Policy */}
          <div className="bg-gray-50 p-8 rounded-sm">
            <h3 className="text-lg font-medium text-[#5E5836] mb-3">
              What is your guest policy?
            </h3>
            <p className="text-[#5E5836]">
              We welcome your distinguished guests. Experience Pass holders may host one guest,
              Professional members may invite up to three guests, while Executive and Enterprise members
              enjoy unlimited guest privileges.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    {/* Contact Information Section */}
   
    </>
  );
}