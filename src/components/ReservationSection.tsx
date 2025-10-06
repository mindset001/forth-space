export default function ReservationSection() {
  return (
    <section className="relative py-20 px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.png')"
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Begin your journey
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Select your preferred space and duration. Our concierge team will ensure every detail exceeds your expectations.
          </p>
        </div>

        {/* Reservation Form */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Workspace Reservations */}
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-8">
                Workspace Reservations
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Membership Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all">
                    <option value="">Select membership type</option>
                    <option value="hot-desk">Hot Desk</option>
                    <option value="dedicated-desk">Dedicated Desk</option>
                    <option value="private-office">Private Office</option>
                    <option value="executive-suite">Executive Suite</option>
                  </select>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#5E5836] hover:bg-gray-600 text-white px-8 py-3 font-medium transition-colors duration-300">
                Reserve workspace
              </button>
            </div>

            {/* Private Meeting Rooms */}
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-8">
                Private meeting rooms
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date & time
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                    />
                    <input
                      type="time"
                      className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration & Capacity
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <select className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all">
                      <option value="">Duration</option>
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="4">4 hours</option>
                      <option value="8">Full day</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all">
                      <option value="">Capacity</option>
                      <option value="2-4">2-4 people</option>
                      <option value="5-8">5-8 people</option>
                      <option value="9-12">9-12 people</option>
                      <option value="13+">13+ people</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#B8AA80] hover:bg-yellow-500 text-[#5E5836] px-8 py-3 font-medium transition-colors duration-300">
                Reserve Meeting Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}