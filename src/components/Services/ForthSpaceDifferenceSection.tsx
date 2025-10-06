import React from "react";
import Image from "next/image";
import Dist from '../../../public/icons/dist.png';
import Shake from '../../../public/icons/shake.png';
import Trans from '../../../public/icons/trans.png'

export default function ForthSpaceDifferenceSection() {
  const differences = [
    {
      icon: (
        <Image src={Dist} alt="Distinguished Advisory" className="w-8 h-8" />
      ),
      title: "Distinguished Advisory",
      description: "Access to Nigeria&apos;s most respected business leaders and international thought leaders who provide strategic guidance."
    },
 
    {
      icon: (
        <Image src={Shake} alt="Bespoke Approach" className="w-8 h-8" />
      ),
      title: "Bespoke Approach",
      description: "Every engagement is meticulously tailored to your unique circumstances, aspirations, and market position."
    },
    {
      icon: (
        <Image src={Trans} alt="Transformative Outcomes" className="w-8 h-8" />
      ),
      title: "Transformative Outcomes",
      description: "We measure success not just in metrics, but in the lasting transformation of leaders and organizations."
    }
  ];

  return (
    <section className="py-20 px-8 bg-[#F9F7F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center  mb-16">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <h2 className="text-[30px] md:text-5xl font-light text-[#5E5836] mb-6">
            The 4orth Space Difference
          </h2>
          <p className="text-[#5E5836] text-[20px] max-w-3xl mx-auto md:px-10 leading-relaxed">
            What distinguishes our services is not merely expertise, but our commitment to 
            excellence that reflects the sophistication of our clientele.
          </p>
        </div>

        {/* Differences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {differences.map((difference, index) => (
            <div key={index} className="text-center bg-white py-8 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300  ">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#E9E7E1] rounded-full flex items-center justify-center text-gray-600 mx-auto mb-6">
                {difference.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-[24px] font-medium text-[#5E5836] mb-4">
                {difference.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#5E5836] leading-relaxed text-[14px]">
                {difference.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}