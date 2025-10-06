'use client'

import React, { useState } from "react";

export default function DetailedMembershipPlans() {
  const [pricingPeriod, setPricingPeriod] = useState("daily"); // "daily" or "monthly"

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8">
          <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1 inline-flex shadow-sm">
            <button 
              className={`rounded-full px-6 py-2 text-sm transition-colors ${
                pricingPeriod === "daily" 
                  ? "bg-[#5A5D36] text-white" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setPricingPeriod("daily")}
            >
              Daily access
            </button>
            <button 
              className={`rounded-full px-6 py-2 text-sm transition-colors ${
                pricingPeriod === "monthly" 
                  ? "bg-[#5A5D36] text-white" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setPricingPeriod("monthly")}
            >
              Monthly Commitment
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {/* Experience Pass */}
          <div className="bg-white p-6 rounded-none border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-light text-[#5A5D36] mb-3">Experience Pass</h3>
              <p className="text-[#5E5836] text-sm min-h-[60px]">
                An exclusive introduction to our professional community and world-class amenities.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-4xl text-black font-light">₦15,000</span>
                <span className="text-black">/day</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-3">Included privileges:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Access to curated common areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Premium high-speed connectivity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Complimentary tea service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Access to Members&apos; Lounge</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Private meeting room (3 hours)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Concierge printing services</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 space-y-2">
              <p className="text-sm font-medium text-gray-700 mb-2">Available at higher tiers:</p>
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-sm text-gray-500">Private office access</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-sm text-gray-500">Personal storage</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-sm text-gray-500">After-hours access</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-sm text-gray-500">Mail services</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-[#5A5D36] text-white py-2 hover:bg-[#4a4a2c] transition-colors flex items-center justify-center">
              Reserve Today 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>

          {/* Professional */}
          <div className="bg-white p-6 rounded-none border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-light text-[#5A5D36] mb-3">Professional</h3>
              <p className="text-[#5E5836] text-sm min-h-[60px]">
                The go-to option for independent, accomplished individuals who value flexibility and refinement.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-4xl text-black font-light">₦18,000</span>
                <span className="text-black">/day</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-3">Included privileges:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Access to all collaborative spaces</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Enterprise-grade connectivity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Elevated premium beverage service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Priority booking for all amenities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Private meeting rooms (8 hours/month)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Professional printing & scanning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Secure personal storage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Exclusive member events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Prestigious business address</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 space-y-2">
              <p className="text-sm font-medium text-gray-700 mb-2">Available at higher tiers:</p>
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-sm text-gray-500">Dedicated private office</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-sm text-gray-500">24/7 facility access</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-[#5A5D36] text-white py-2 hover:bg-[#4a4a2c] transition-colors flex items-center justify-center">
              Reserve Today 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>

          {/* Executive */}
          <div className="bg-white p-6 rounded-none border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-light text-[#5A5D36] mb-3">Executive</h3>
              <p className="text-[#5E5836] text-sm min-h-[60px]">
                The pinnacle of professional workspace for distinguished leaders and innovators.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-4xl  text-black font-light">₦25,000</span>
                <span className="text-black">/day</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-3">Included privileges:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Private executive office suite</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Dedicated high-speed fiber</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Personal concierge service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Unlimited access to all facilities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Priority meeting room privileges</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Executive printing & document services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Premium storage solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Comprehensive mail handling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Unrestricted 24/7 access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">VIP member event invitations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#5E5836] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Reserved parking allocation</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-6 bg-[#5A5D36] text-white py-2 hover:bg-[#4a4a2c] transition-colors flex items-center justify-center">
              Reserve Today 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
