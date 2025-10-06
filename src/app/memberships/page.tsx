

import Header from "@/components/Header";
import MembershipsHero from "@/components/Memberships/MembershipsHero";
import DetailedMembershipPlans from "@/components/Memberships/DetailedMembershipPlans";
import MembershipElevation from "@/components/Memberships/MembershipElevation";
import MemberInquiries from "@/components/Memberships/MemberInquiries";
import MembershipBenefits from "@/components/Memberships/MembershipBenefits";
import MembershipTestimonials from "@/components/Memberships/MembershipTestimonials";
import MembershipFAQ from "@/components/Memberships/MembershipFAQ";
import Footer from "@/components/Footer";

export default function Memberships() {
  return (
    <div className="font-sans">
      <Header />
      <MembershipsHero />
      <DetailedMembershipPlans />
      <MembershipElevation />
      <MemberInquiries />
     
      <Footer />
    </div>
  );
}
