import Header from "@/components/Header";
import ContactHero from "@/components/Contact/ContactHero";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import ContactInfoSection from "@/components/Contact/ContactInfoSection";
import Footer from "@/components/Footer";
import MemberInquiries from "@/components/Memberships/MemberInquiries";

export default function Contact() {
  return (
    <div className="font-sans">
      <Header />
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
      <MemberInquiries />
      <Footer />
    </div>
  );
}
