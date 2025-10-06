import React from 'react';
import Image from 'next/image';
import Hand from '../../../public/icons/hand.png';
import People from '../../../public/icons/people.png';
import Bulb from '../../../public/icons/bulb.png';
import Circle from '../../../public/icons/circle.png';
import Vision from '../../../public/icons/vision.png';
import Missison from '../../../public/icons/mission.png';

export default function PurposeVisionSection() {
  return (
    <section className="">
      <div className="">
        {/* Purpose & Vision Section */}
        <div className="py-10 px-8 bg-white">
          <div className="text-center mb-16">
          <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-12">
            Our Purpose & Vision
          </h2>
          
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Our Mission */}
            <div className="bg-[#F2F1EC] p-8 rounded-lg text-center">
              <div className="bg-[#E9E7E1] rounded-full w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <Image src={Missison} alt="Mission Icon" className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="md:text-[52px] text-[30px] text-[#5E5836] font-light text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className=" text-[#5E5836] leading-relaxed text-[16px] px-2 md:px-8">
                To redefine the workspace experience by creating environments 
                that foster excellence and empower Nigeria&apos;s most ambitious minds 
                to achieve extraordinary outcomes.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-[#F2F1EC] p-8 rounded-lg text-center">
              <div className="bg-[#E9E7E1] rounded-full w-12 h-12 mx-auto mb-6 flex items-center justify-center">
               <Image src={Vision} alt="Vision Icon" className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="md:text-[52px] text-[30px] text-[#5E5836] font-light text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className=" text-[#5E5836] leading-relaxed">
                To be recognized globally as Africa&apos;s premier destination for 
                sophisticated professionals and collaborative enterprises seeking 
                the perfect fusion of luxury and productivity.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Founding Principles Section */}
        <div className="bg-[#F2F1EC] p-12 text-center">
           <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-6">
            Our Founding Principles
          </h2>
          <p className="text-[#5E5836] text-lg mb-12 max-w-2xl mx-auto">
            These unwavering principles guide every decision we make and 
            define the character of the community we&apos;ve built.
          </p>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Curated Community */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-[#E9E7E1] rounded-full w-16 h-16 mx-auto py-6 mb-6 flex items-center justify-center">
                 <Image src={People} alt="Curated Community" className="w-10 h-10" />
              </div>
              <h3 className="text-[24px] font-medium text-[#5E5836] mb-3">
                Curated Community
              </h3>
              <p className="text-[#5E5836] p-2 text-[14px] leading-relaxed">
               We carefully select members who share our commitment to excellence and collaborative growth.
              </p>
            </div>

            {/* Purpose-Driven */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-[#E9E7E1] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image src={Circle} alt="Purpose-Driven" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-medium text-[#5E5836] mb-3">
                Purpose-Driven
              </h3>
              <p className="text-[#5E5836] p-2 text-sm leading-relaxed">
                Every space, service, and experience is meticulously designed with intention and impact
              </p>
            </div>

            {/* Holistic Wellness */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-[#E9E7E1] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image src={Hand} alt="Holistic Wellness" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-medium text-[#5E5836] mb-3">
                Holistic Wellness
              </h3>
              <p className="text-[#5E5836] p-2 text-sm leading-relaxed">
                True productivity emerges from the harmony of mind, body, and purposeful work
              </p>
            </div>

            {/* Innovation Catalyst */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-[#E9E7E1] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image src={Bulb} alt="Innovation Catalyst" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-medium text-[#5E5836] mb-3">
                Innovation Catalyst
              </h3>
              <p className="text-[#5E5836] p-2 text-sm leading-relaxed">
                Where visionary minds converge to transform ideas into industry-changing realities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}