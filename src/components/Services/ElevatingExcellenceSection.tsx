import React from "react";
import Image from "next/image";
import Event from '../../../public/images/event.png'
import Meeting from '../../../public/images/meeting.png'
import Arrow from '../../../public/icons/arrow.png'

export default function ElevatingExcellenceSection() {
  const services = [
    {
      image: Meeting,
      title: "Hot Desks",
      subtitle: "Flexible seating for your daily grind.",
      description: "Pick any available desk in our shared workspace and enjoy high-speed internet, power access, and a vibrant community. Perfect for freelancers and students.",
      buttonText: "Reserve a Space"
    },
    {
      image: Event,
      title: "Private Offices",
      subtitle: "Privacy meets productivity.",
      description: "Enclosed offices designed for individuals or teams. Enjoy all coworking benefits with the added advantage of privacy and focus.",
      buttonText: "Reserve a Space"
    },
      {
      image: Meeting,
      title: "Event Spaces",
      subtitle: "Host, share, and inspire.",
      description: "Multipurpose event areas for workshops, networking sessions, product launches, or community gatherings. Scalable to your needs.",
      buttonText: "Reserve a Space"
    },
    {
      image: Event,
      title: "Meeting Rooms",
      subtitle: "Professional spaces to connect and collaborate.",
      description: "Bookable meeting rooms equipped with presentation screens, whiteboards, and comfortable seating — perfect for client sessions, workshops, and team huddles.",
      buttonText: "Reserve a Space"
    }
  ];

  return (
    <section className="py-10 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-6">
            Elevating Excellence
          </h2>
          <p className="text-[#5E5836] text-lg max-w-3xl mx-auto leading-relaxed">
            Each service is thoughtfully designed to meet the sophisticated needs of 
            Nigeria&apos;s most discerning professionals and forward-thinking organizations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <div className="aspect-[4/2] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-[#5E5836] mb-2">
                  {service.title}
                </h3>
                
                <p className="text-black font-medium mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-[#5E5836] w-[80%] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="w-full bg-[#5E5836] hover:bg-yellow-600 text-white px-6 py-3 font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                  {service.buttonText}
                  <Image src={Arrow} alt="Arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}