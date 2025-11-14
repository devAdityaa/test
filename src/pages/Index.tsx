import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Integrations from "@/components/Integrations";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Industries />
      <Integrations />
      <CaseStudies />
      <Testimonials />
      <Philosophy />
      <LeadCapture />
      <Footer />
    </div>
  );
};

export default Index;
