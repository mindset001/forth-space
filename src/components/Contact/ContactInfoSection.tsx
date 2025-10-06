export default function ContactInfoSection() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#5E5836]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Our Office",
      details: [
        "4orth Space Victoria Island",
        "Prestigious Business District",
        "Lagos, Nigeria"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#5E5836]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Connect Directly",
      details: [
        "+234 809 456 7890",
        "+234 701 234 5678"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#5E5836]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Correspondence",
      details: [
        "welcome@4orthspace.com",
        "concierge@4orthspace.com"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#5E5836]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Access Hours",
      details: [
        "Monday - Friday: 6:00 AM - 10:00 PM",
        "Saturday - Sunday: 8:00 AM - 9:00 PM",
        "Executive Members: Unrestricted Access"
      ]
    }
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#E9E7E1] rounded-full flex items-center justify-center mx-auto mb-6">
                {info.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-medium text-[#000000] mb-4">
                {info.title}
              </h3>
              
              {/* Details */}
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[#5E5836] text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}