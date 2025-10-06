import React from "react";

export default function MembershipPlans() {
  return (
    <section className="py-24 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
              <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
          <h2 className="text-4xl font-light text-gray-900 mb-6">Membership Plans</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Choose from our carefully crafted membership options, designed to provide the perfect balance of privacy, 
            community, and professional support for your unique needs.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Day Pass */}
          <div className="bg-white p-10 shadow-sm border border-gray-100 rounded-sm flex flex-col">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Day Pass</h3>
            <p className="text-gray-600 mb-6">Perfect for visitors and professionals seeking a premium workspace for the day.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-light">₦15,000</span>
              <span className="text-gray-500 ml-2">/ day</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access from 8am - 8pm</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>High-speed WiFi</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Complimentary refreshments</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access to common areas</span>
              </li>
            </ul>

            <button className="mt-auto w-full py-3 border border-black text-black hover:bg-black hover:text-white transition duration-300">
              Select Plan
            </button>
          </div>

          {/* Hot Desk */}
          <div className="bg-white p-10 shadow-lg border border-black relative flex flex-col">
            <div className="absolute top-0 right-0 bg-black text-white py-1 px-4 text-xs">
              POPULAR
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Hot Desk</h3>
            <p className="text-gray-600 mb-6">Flexible workspace access with premium amenities for the modern professional.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-light">₦120,000</span>
              <span className="text-gray-500 ml-2">/ month</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>24/7 access</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>4 hours meeting room credits</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Business address & mail handling</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access to member events</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Premium coffee & refreshments</span>
              </li>
            </ul>

            <button className="mt-auto w-full py-3 bg-black text-white hover:bg-gray-800 transition duration-300">
              Select Plan
            </button>
          </div>

          {/* Private Office */}
          <div className="bg-white p-10 shadow-sm border border-gray-100 rounded-sm flex flex-col">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Private Office</h3>
            <p className="text-gray-600 mb-6">Your exclusive sanctuary for focused work and private meetings.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-light">₦350,000</span>
              <span className="text-gray-500 ml-2">/ month</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Lockable private office</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>24/7 access</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>8 hours meeting room credits</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Dedicated phone line</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Premium services & amenities</span>
              </li>
            </ul>

            <button className="mt-auto w-full py-3 border border-black text-black hover:bg-black hover:text-white transition duration-300">
              Select Plan
            </button>
          </div>
        </div>

        {/* Additional Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All plans include access to our premium facilities, high-speed internet, and complimentary refreshments.
            <br />Contact us for custom enterprise solutions and team packages.
          </p>
        </div>
      </div>
    </section>
  );
}