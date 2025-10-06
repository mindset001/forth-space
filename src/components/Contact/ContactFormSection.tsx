import React from 'react';
import Image from 'next/image';
import One from '../../../public/images/measure.png';
import Arrow from '../../../public/icons/arrow.png'

export default function ContactFormSection() {
  return (
    <section className="py-20 px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Form Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-6 leading-tight">
              Begin the Conversation
            </h2>
            
            <p className="text-[#5E5836] mb-8 leading-relaxed">
              Share your distinguished vision with us. We respond to all correspondence 
              within 24 hours, reflecting the same attention to detail that defines our 
              sanctuary.
            </p>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Distinguished Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Organization/Affiliation"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-none placeholder-gray-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#5E5836] hover:bg-yellow-600 text-white px-8 py-3 font-medium transition-colors duration-300 gap-2"
                >
                  Send your message
                 <Image src={Arrow} alt="arrow" className='h-4 w-4 object-contain' />
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={One}
                alt="Professional meeting at 4orth Space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}