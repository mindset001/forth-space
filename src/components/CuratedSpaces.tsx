export default function CuratedSpaces() {
  const spaces = [
    {
      id: 1,
      title: "Private Offices",
      description: "Fully furnished private offices designed for focused work and confidential meetings.",
      image: "/images/private-office-1.jpg"
    },
    {
      id: 2,
      title: "Private Offices",
      description: "Premium office spaces with modern amenities and professional atmosphere.",
      image: "/images/private-office-2.jpg"
    },
    {
      id: 3,
      title: "Private Offices",
      description: "Sophisticated workspaces tailored for executive needs and client presentations.",
      image: "/images/private-office-3.jpg"
    },
    {
      id: 4,
      title: "Private Offices",
      description: "Collaborative meeting spaces equipped with state-of-the-art technology.",
      image: "/images/private-office-4.jpg"
    },
    {
      id: 5,
      title: "Private Offices",
      description: "Creative environments designed to inspire innovation and productivity.",
      image: "/images/private-office-5.jpg"
    },
    {
      id: 6,
      title: "Private Offices",
      description: "Elegant office solutions with panoramic city views and premium furnishing.",
      image: "/images/private-office-6.jpg"
    },
    {
      id: 7,
      title: "Private Offices",
      description: "Modern workspaces with flexible layouts for dynamic business needs.",
      image: "/images/private-office-7.jpg"
    },
    {
      id: 8,
      title: "Private Offices",
      description: "Executive suites with dedicated support and premium service amenities.",
      image: "/images/private-office-8.jpg"
    },
    {
      id: 9,
      title: "Private Offices",
      description: "Professional environments designed for maximum productivity and comfort.",
      image: "/images/private-office-9.jpg"
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Thoughtfully Curated Spaces
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Professional confidentiality and sophisticated 
            environments for sensitive work.
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div 
              key={space.id} 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${space.image}')`
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              </div>

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

        {/* Call to Action */}
      
      </div>
    </section>
  );
}