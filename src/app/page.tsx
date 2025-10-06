import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExcellenceSection from "@/components/ExcellenceSection";
import CuratedSpaces from "@/components/CuratedSpaces";
import ReservationSection from "@/components/ReservationSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-[#F9F7F5]">
      <Header />
      <Hero />
      <ExcellenceSection />
      <CuratedSpaces />
      <ReservationSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
