import React from "react";
import One from '../../public/images/measure.png';
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={One}
                alt="Professional meeting in modern office space"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Statistics Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#5E5836] text-white p-8  shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-light mb-2">98%</div>
                <div className="text-sm font-medium">Member satisfaction</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between h-full">
           <div className="flex flex-col items-start gap-4">
            <div className="w-16 h-px bg-[#5E5836]"></div>
             <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
              Exceptional by
              <br />
              Every Measure
            </h2>

            <blockquote className="">
              <p className="text-black font-[400] text-[16px] leading-relaxed mb-6">
                &ldquo;4orth Space has redefined my understanding of what a workspace can be. The attention to detail, the caliber of fellow members, and the seamless service create an environment where excellence isn&apos;t just expected—it&apos;s inevitable.&rdquo;
              </p>
            </blockquote>
           </div>

            {/* Rating and Author */}
            <div className="flex flex-col items-start gap-4">
              {/* Star Rating */}
              <div className="flex text-[#A7A284] text-xl">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Author Info */}
              <div className="text-black">
                <div className="font-medium text-gray-800">Dr. Adaora Okefor</div>
                <div className="text-sm text-gray-600">Senior Partner, Okefor & Associates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}