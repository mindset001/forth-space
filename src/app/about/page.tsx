import Header from "@/components/Header";
import AboutHero from "@/components/About/AboutHero";
import StorySection from "@/components/About/StorySection";
import PurposeVisionSection from "@/components/About/PurposeVisionSection";
import ExcellenceQuoteSection from "@/components/About/ExcellenceQuoteSection";
import VisionaryLeadershipSection from "@/components/About/VisionaryLeadershipSection";
import ExcellenceMeasuredSection from "@/components/About/ExcellenceMeasuredSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="font-sans bg-white flex flex-col gap-4">
      <Header />
      <AboutHero />
      <StorySection />
      <PurposeVisionSection />
      <ExcellenceQuoteSection />
      <VisionaryLeadershipSection />
      <ExcellenceMeasuredSection />
      <Footer />
    </div>
  );
}
