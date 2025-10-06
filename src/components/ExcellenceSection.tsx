export default function ExcellenceSection() {
  return (
    <section className="py-20 px-8 bg-[#F9F7F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-6">
            Excellence by Design
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every detail at 4orth Space has been meticulously crafted to inspire greatness. 
            From our curated environments to our distinguished community, we create the 
            optimal conditions for exceptional achievement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Uncompromising Quality */}
          <div className="text-center">
            <div className="bg-[#E9E7E1] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#5E5836] mb-4">
              Uncompromising Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Premium materials, exceptional service, and attention to every 
              detail that matters.
            </p>
          </div>

          {/* Curated Community */}
          <div className="text-center">
            <div className="bg-[#E9E7E1] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#5E5836] mb-4">
              Curated Community
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A selective membership of ambitious professionals, creatives, and thought 
              leaders.
            </p>
          </div>

          {/* Discrete Excellence */}
          <div className="text-center">
            <div className="bg-[#E9E7E1] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#5E5836] mb-4">
              Discrete Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional confidentiality and sophisticated environments for sensitive 
              work.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border-t  border-[#5E5836] py-12">
          <div>
            <div className="text-4xl lg:text-5xl font-light text-[#5E5836] mb-2">
              500<span className="text-3xl">+</span>
            </div>
            <p className="text-[#5E5836] text-sm">Distinguished members</p>
          </div>
          
          <div>
            <div className="text-4xl lg:text-5xl font-light text-[#5E5836] mb-2">
              15k<span className="text-3xl">+</span>
            </div>
            <p className="text-[#5E5836] text-sm">Hours of productivity</p>
          </div>
          
          <div>
            <div className="text-4xl lg:text-5xl font-light text-[#5E5836] mb-2">
              200<span className="text-3xl">+</span>
            </div>
            <p className="text-[#5E5836] text-sm">Success stories</p>
          </div>
          
          <div>
            <div className="text-4xl lg:text-5xl font-light text-[#5E5836] mb-2">
              24/7
            </div>
            <p className="text-[#5E5836] text-sm">Access and Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}