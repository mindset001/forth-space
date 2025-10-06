import React from 'react';
import Image from 'next/image';
import One from '../../../public/images/joseph.png';
import Two from '../../../public/images/smith.png';
import Three from '../../../public/images/abena.png';

export default function VisionaryLeadershipSection() {
  const leaders = [
    {
      name: "Joseph Smith",
      position: "Founder & CEO",
      image: One,
      description: "Visionary leader with 20+ years building transformative enterprise-class Africa and Europe experiences."
    },
    {
      name: "Christina Smith",
      position: "Co-Founder & Chief Strategy Officer",
      image: Two,
      description: "Distinguished entrepreneur and operational strategist dedicated to creating spaces where innovation flourishes."
    },
    {
      name: "Abena Mee",
      position: "Director of Experience",
      image: Three,
      description: "Master curator of exceptional experiences, crafting meaningful connections among leading visionaries."
    }
  ];

  return (
    <section className="py-10 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
         <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-6">
            Visionary Leadership
          </h2>
          <p className="text-[#5E5836] text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the distinguished minds behind 4orth Space's revolutionary 
            approach to workspace excellence and community curation.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center rounded-lg bg-[#F9F7F5] group">
              {/* Photo */}
              <div className="relative mb-6 overflow-hidden bg-[#F9F7F5] rounded-lg">
                <div className=" bg-gray-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-[246px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Info */}
              <div className='py-4'>
                <h3 className="text-2xl font-light text-gray-800 mb-2 text-[40px]">
                  {leader.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4 text-[18px]">
                  {leader.position}
                </p>
                <p className="text-[#5E5836] text-[18px] px-10 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}