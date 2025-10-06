export default function ExcellenceQuoteSection() {
  return (
    <section className="relative py-32 px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.png')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <blockquote className="mb-8">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
            "Where excellence is not an aspiration, but a standard"
          </p>
        </blockquote>
        
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          This philosophy permeates every aspect of the 4orth Space experience, from our meticulously curated 
          environments to our distinguished community.
        </p>
      </div>
    </section>
  );
}