import Header from "@/components/Header";
import ServicesHero from "@/components/Services/ServicesHero";
import ElevatingExcellenceSection from "@/components/Services/ElevatingExcellenceSection";
import ForthSpaceDifferenceSection from "@/components/Services/ForthSpaceDifferenceSection";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="font-sans">
      <Header />
      <ServicesHero />
      <ElevatingExcellenceSection />
      <ForthSpaceDifferenceSection />
      <Footer />
    </div>
  );
}
