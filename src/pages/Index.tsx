import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import StorySection from "@/components/StorySection";
import ExperienceSection from "@/components/ExperienceSection";
import ShopSection from "@/components/ShopSection";
import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <StorySection />
      <ExperienceSection />
      {/* <ShopSection /> */}
      <CommunitySection />
      <FAQSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
