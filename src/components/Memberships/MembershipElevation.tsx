'use client'

import React from "react";
import Image from "next/image";
import Elevate from '../../../public/images/elevate.png';
import Shake from '../../../public/icons/shake.png';
import People from '../../../public/icons/people.png';
import Curate from '../../../public/icons/curate.png';
import Clock from '../../../public/icons/clock.png';

export default function MembershipElevation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl font-light text-[#5C5B37] mb-12 leading-tight">
              An Elevation Beyond<br />Membership
            </h2>

            {/* Distinguished Network */}
            <div className="flex items-start mb-10">
              <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center mr-4 flex-shrink-0">
                {/* <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center mr-4 flex-shrink-0"> */}
                <Image src={People} alt="Shake Icon" width={24} height={24} />   
              {/* </div> */}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Distinguished Network</h3>
                <p className="text-[#5E5836]">
                  Connect with Nigeria&apos;s most influential leaders, entrepreneurs, and 
                  visionaries in an environment of mutual respect and collaboration
                </p>
              </div>
            </div>

            {/* Curated Experiences */}
            <div className="flex items-start mb-10">
              <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center mr-4 flex-shrink-0">
                {/* <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center mr-4 flex-shrink-0"> */}
                <Image src={Curate} alt="Curate Icon" width={24} height={24} />   
              {/* </div> */}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Curated Experiences</h3>
                <p className="text-[#5E5836]">
                  Thoughtfully designed events, masterclasses, and cultural gatherings 
                  that enrich both personal and professional dimensions
                </p>
              </div>
            </div>

            {/* Strategic Partnerships */}
            <div className="flex items-start mb-10">
              <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center mr-4 flex-shrink-0">
                {/* <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center mr-4 flex-shrink-0"> */}
                <Image src={Shake} alt="Shake Icon" width={24} height={24} />   
              {/* </div> */}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Strategic Partnerships</h3>
                <p className="text-[#5E5836]">
                  Access to exclusive opportunities, investment networks, and 
                  collaborative ventures that shape the future of business
                </p>
              </div>
            </div>

            {/* Seamless Accessibility */}
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center mr-4 flex-shrink-0">
                <Image src={Clock} alt="Clock Icon" width={24} height={24} />   
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Seamless Accessibility</h3>
                <p className="text-[#5E5836]">
                  Sophisticated security systems and 24/7 availability ensure your 
                  professional rhythm is never constrained
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] lg:h-auto">
            <div className="w-full h-full rounded-lg overflow-hidden">
              
              <Image src={Elevate} alt="Elevate Workspace" layout="fill" objectFit="cover" className="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}