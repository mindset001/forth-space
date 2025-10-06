'use client'

import React, { useState, useEffect, useRef } from 'react';

type CountProperty = 'members' | 'leaders' | 'value' | 'concierge';

interface StatisticItem {
  number: string;
  label: string;
  countTo: number;
  countProperty: CountProperty;
  prefix: string;
  suffix: string;
}

export default function ExcellenceMeasuredSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState({
    members: 0,
    leaders: 0,
    value: 0,
    concierge: 0
  });
  
  const statistics: StatisticItem[] = [
    {
      number: "500+",
      label: "Distinguished members",
      countTo: 500,
      countProperty: "members",
      prefix: "",
      suffix: "+"
    },
    {
      number: "50+",
      label: "Industry Leaders",
      countTo: 50,
      countProperty: "leaders",
      prefix: "",
      suffix: "+"
    },
    {
      number: "N2B+",
      label: "Member company value",
      countTo: 2,
      countProperty: "value",
      prefix: "N",
      suffix: "B+"
    },
    {
      number: "24/7",
      label: "Concierge Services",
      countTo: 24,
      countProperty: "concierge",
      prefix: "",
      suffix: "/7"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 1500; // Animation duration in ms
    const interval = 16; // Update interval in ms (roughly 60fps)
    
    const timers = statistics.map(stat => {
      const steps = Math.ceil(duration / interval);
      const increment = stat.countTo / steps;
      let currentCount = 0;
      
      return setInterval(() => {
        currentCount += increment;
        if (currentCount > stat.countTo) {
          currentCount = stat.countTo;
          clearInterval(timers[statistics.indexOf(stat)]);
        }
        
        setCounts(prev => ({
          ...prev,
          [stat.countProperty]: Math.floor(currentCount)
        }));
      }, interval);
    });
    
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-[#F9F7F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-[#5E5836] mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#5E5836] mb-12">
            Excellence Measured
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-5xl md:text-6xl font-light text-[#5E5836] mb-4 group-hover:text-gray-600 transition-colors duration-300">
                {stat.prefix}
                {isVisible ? counts[stat.countProperty] : 0}
                {stat.suffix}
              </div>
              <p className="text-[#5E5836] text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}