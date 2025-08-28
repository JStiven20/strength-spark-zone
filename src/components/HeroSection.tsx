import { Button } from "@/components/ui/button";
import gymHero from "@/assets/gym-hero.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gymHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Transform Your Body,
            <span className="block text-energy">Transform Your Life</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto font-medium">
            Join our gym and achieve your fitness goals with expert trainers and top equipment
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-energy hover:bg-energy/90 text-energy-foreground font-bold px-8 py-4 text-lg rounded-full shadow-energy hover:shadow-large transition-all duration-300 hover:scale-105 animate-pulse-energy"
          >
            Get Started Today
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;