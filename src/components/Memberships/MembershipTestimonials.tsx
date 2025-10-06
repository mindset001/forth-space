import React from "react";

export default function MembershipTestimonials() {
  return (
    <section className="py-24 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Member Experiences</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Hear from our community of professionals who have found their ideal workspace at 4orth SPACE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/testimonial-1.jpg')"
                  }}
                ></div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Adeyemi Johnson</h4>
                <p className="text-gray-500 text-sm">Founder & CEO, TechNova</p>
              </div>
            </div>
            <div className="mb-6">
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Moving my startup to 4orth SPACE was one of the best business decisions I&apos;ve made. 
                The environment fosters creativity, the amenities are top-notch, and the networking 
                opportunities have led to valuable partnerships. It&apos;s more than just an office space; 
                it&apos;s a catalyst for growth."
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">Private Office Member • 1 year</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/testimonial-2.jpg')"
                  }}
                ></div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Chiamaka Okafor</h4>
                <p className="text-gray-500 text-sm">Independent Consultant</p>
              </div>
            </div>
            <div className="mb-6">
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "The hot desk membership at 4orth SPACE gives me the flexibility I need as a consultant 
                while providing a professional environment that impresses my clients. The community here 
                is supportive and diverse, and I&apos;ve found many collaborative opportunities that have 
                expanded my business."
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">Hot Desk Member • 8 months</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/testimonial-3.jpg')"
                  }}
                ></div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Oluwaseun Adegoke</h4>
                <p className="text-gray-500 text-sm">Creative Director, VisualCraft</p>
              </div>
            </div>
            <div className="mb-6">
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "As a creative professional, my environment deeply influences my work. 4orth SPACE&apos;s 
                beautiful design, attention to detail, and calm atmosphere have significantly boosted 
                my creativity and productivity. The staff are incredibly supportive and responsive to 
                all my needs."
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">Private Office Member • 2 years</p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/testimonial-4.jpg')"
                  }}
                ></div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Ibrahim Tanko</h4>
                <p className="text-gray-500 text-sm">Financial Analyst</p>
              </div>
            </div>
            <div className="mb-6">
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "The privacy of a dedicated desk combined with the community aspects of 4orth SPACE 
                gives me the perfect balance. The location is convenient, the facilities are immaculate, 
                and the networking events have connected me with valuable clients and collaborators."
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">Dedicated Desk Member • 6 months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}