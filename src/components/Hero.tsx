import React from "react";
import One from '../../public/images/hero.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-8 justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero.png')"
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-6 mb-6 leading-tight">
          Where Ambition
          <br />
          Flourishes
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Nigeria's most distinguished creative and professional sanctuary. A 
          refined environment where exceptional minds converge, collaborate, and 
          create legacy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#5E5836] text-white px-8 py-3 font-[400] hover:bg-white hover:text-[#5E5836] transition-colors duration-300 min-w-[160px]">
            Reserve a Space
          </button>
          <button className="bg-white text-black px-8 py-3 font-[400] hover:bg-[#5E5836] hover:text-white transition-colors duration-300 min-w-[160px]">
            Become a member
          </button>
        </div>
      </div>

     
    </section>
  );
}