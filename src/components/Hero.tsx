import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 leading-tight animate-slide-up">
          Discover Your
          <span className="block text-luxury-champagne animate-bounce-gentle">
            Signature Scent
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-delayed">
          Indulge in our curated collection of luxury perfumes and beauty
          products from the world's most prestigious brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in animation-delay-500">
          <Button
            size="lg"
            className="bg-white text-luxury-purple hover:bg-white/90 transition-luxury px-8 py-6 text-lg font-medium hover:scale-105 hover:shadow-luxury group"
          >
            <span className="group-hover:animate-pulse">Shop Collection</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-luxury-purple transition-luxury px-8 py-6 text-lg font-medium hover:scale-105 hover:shadow-luxury group"
          >
            <span className="group-hover:animate-pulse">Explore Brands</span>
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-bounce-gentle"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-luxury-rose-gold/20 rounded-full backdrop-blur-sm animate-bounce-gentle animation-delay-300"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-luxury-champagne/20 rounded-full backdrop-blur-sm animate-pulse animation-delay-700"></div>
    </section>
  );
};

export default Hero;
