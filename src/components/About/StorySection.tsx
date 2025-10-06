import React from 'react';
import Image from 'next/image';
import One from '../../../public/images/measure.png';
export default function StorySection() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div>
            <div className="w-16 h-px bg-gray-400 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-8 leading-tight">
              A Story of
              <br />
              Distinction
            </h2>
            
            <div className="space-y-6 text-[#5E5836] leading-relaxed">
              <p>
                Founded in 2022 by visionaries who understood that Nigeria&apos;s extraordinary 
                talent deserved extraordinary environments, 4orth Space was conceived not 
                merely as a workspace, but as a sanctuary for the ambitious, the creative, 
                and the transformative.
              </p>
              
              <p>
                Our founders, seasoned entrepreneurs who had navigated the complexities 
                of building world-class enterprises, recognized a profound absence of truly 
                sophisticated, purpose-built environments that could match the caliber of 
                Nigeria&apos;s most exceptional minds.
              </p>
              
              <p>
                Today, we stand as Nigeria&apos;s premier destination for those who refuse to 
                compromise on excellence. Our carefully curated community of 500+ 
                distinguished members spans the spectrum of industry leadership, from 
                pioneering tech innovators to renowned creative visionaries.
              </p>
            </div>
          </div>

          {/* Image and Statistics Section */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={One}
                alt="Professional meeting in 4orth Space"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Statistics Card */}
            <div className="absolute -top-8 -right-8 bg-[#5E5836] text-white p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-light mb-2">500+</div>
                <div className="text-sm font-medium">Elite Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}