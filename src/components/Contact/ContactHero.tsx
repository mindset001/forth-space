export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contact.png')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
          Engage with Excellence
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We invite distinguished entrepreneurs and exceptional conversions 
          with Nigeria&apos;s most discerning professionals.
        </p>
      </div>
    </section>
  );
}