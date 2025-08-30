import Features from "@/components/Features";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import SocialMedia from "@/components/SocialMedia";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SEOLayout from "./SEOLayout";

const Index = () => {
  return (
    <SEOLayout
      title="Home"
      description="Discover luxury perfumes and beauty products at Luxe Scent Emporium. Premium designer fragrances, exclusive collections, and exceptional quality."
      keywords="luxury perfumes, designer fragrances, beauty products, exclusive perfumes, premium cosmetics, luxury scents"
    >
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Categories />
        <ProductShowcase />
        <Features />
        <Brands />
        <Testimonials />
        <SocialMedia />
        <Newsletter />
        <Footer />
      </main>
    </SEOLayout>
  );
};

export default Index;
