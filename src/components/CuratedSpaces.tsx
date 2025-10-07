import React from 'react';
import Image from 'next/image';
import One from '../../public/images/one.png';
import Two from '../../public/images/two.png';
import Three from '../../public/images/three.png';
import Four from '../../public/images/four.png';

export default function CuratedSpaces() {
  const spaces = [
    {
      id: 1,
      title: "Private Offices",
      description: "Fully furnished private offices designed for focused work and confidential meetings.",
      image: One
    },
    {
      id: 2,
      title: "Meeting Rooms",
      description: "Premium meeting spaces with modern amenities and professional atmosphere.",
      image: Two
    },
    {
      id: 3,
      title: "Executive Suites",
      description: "Sophisticated workspaces tailored for executive needs and client presentations.",
      image: Three
    },
    {
      id: 4,
      title: "Collaborative Spaces",
      description: "Collaborative meeting spaces equipped with state-of-the-art technology.",
      image: Four
    },
    {
      id: 5,
      title: "Creative Studios",
      description: "Creative environments designed to inspire innovation and productivity.",
      image: One
    },
    {
      id: 6,
      title: "Premium Offices",
      description: "Elegant office solutions with panoramic city views and premium furnishing.",
      image: Two
    },
    {
      id: 7,
      title: "Flexible Workspaces",
      description: "Modern workspaces with flexible layouts for dynamic business needs.",
      image: Three
    },
    {
      id: 8,
      title: "Executive Suites",
      description: "Executive suites with dedicated support and premium service amenities.",
      image: Four
    },
    {
      id: 9,
      title: "Professional Offices",
      description: "Professional environments designed for maximum productivity and comfort.",
      image: One
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-6">
            Thoughtfully Curated Spaces
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto md:w-[40%] leading-relaxed">
            Professional confidentiality and sophisticated 
            environments for sensitive work.
          </p>
        </div>

        {/* Spaces Grid - FIXED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div 
              key={space.id} 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* FIX: Using Next.js Image component properly */}
              <div className="absolute inset-0">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div> */}

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-white text-xl font-medium mb-2">
                  {space.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {space.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}