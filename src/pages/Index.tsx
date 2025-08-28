import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductsSection from "@/components/ProductsSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <ContactForm />
      <LocationSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
