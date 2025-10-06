import React from "react";
import Image from "next/image";

export default function MembershipBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Membership Benefits</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our members enjoy exclusive perks and amenities designed to enhance productivity, 
            foster connections, and elevate the work experience.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Benefit 1 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-3">Secure Access</h3>
            <p className="text-gray-600">
              Premium security with 24/7 surveillance and secure keyless entry systems, ensuring your 
              workspace and possessions remain protected.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-3">Flexible Hours</h3>
            <p className="text-gray-600">
              Access your workspace whenever inspiration strikes with our 24/7 availability, 
              empowering you to work according to your optimal schedule.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-3">Community Events</h3>
            <p className="text-gray-600">
              Connect with like-minded professionals through our curated networking events, 
              workshops, and social gatherings designed to inspire collaboration.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-3">Premium Amenities</h3>
            <p className="text-gray-600">
              Enjoy high-speed internet, artisanal coffee, printing services, and ergonomic 
              workspaces designed for comfort and productivity.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-3">Business Services</h3>
            <p className="text-gray-600">
              Utilize our prestigious business address, mail handling, and receptionist services 
              to elevate your professional image with clients and partners.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-3">Meeting Spaces</h3>
            <p className="text-gray-600">
              Access to elegantly designed meeting rooms equipped with the latest technology for 
              impressive client presentations and team collaborations.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="#" className="inline-block bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition duration-300">
            Schedule a Tour
          </a>
        </div>
      </div>
    </section>
  );
}