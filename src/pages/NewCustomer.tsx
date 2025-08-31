import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Music,
  Gift,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOLayout from "./SEOLayout";
import { useToast } from "@/hooks/use-toast";

const NewCustomer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [discountClaimed, setDiscountClaimed] = useState(false);

  const socialSource = searchParams.get("source");
  const promoCode = searchParams.get("promo");

  const socialPlatforms = {
    facebook: {
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-600",
      discount: "20%",
    },
    instagram: {
      name: "Instagram",
      icon: Instagram,
      color: "text-pink-600",
      discount: "25%",
    },
    whatsapp: {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "text-green-600",
      discount: "15%",
    },
    tiktok: {
      name: "TikTok",
      icon: Music,
      color: "text-black",
      discount: "30%",
    },
  };

  const currentPlatform =
    socialSource &&
    socialPlatforms[socialSource as keyof typeof socialPlatforms];
  const defaultDiscount = "20%";
  const discount = currentPlatform?.discount || defaultDiscount;

  const handleClaimDiscount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setDiscountClaimed(true);
    setIsLoading(false);

    toast({
      title: "Welcome Discount Claimed! 🎉",
      description: `Your ${discount} off coupon has been sent to ${email}`,
    });

    // Store discount in localStorage for checkout
    localStorage.setItem(
      "welcomeDiscount",
      JSON.stringify({
        code: `WELCOME${discount.replace("%", "")}`,
        discount: parseInt(discount.replace("%", "")),
        email: email,
      })
    );
  };

  const handleShopNow = () => {
    navigate("/products");
  };

  useEffect(() => {
    // Add entrance animation
    const timer = setTimeout(() => {
      document
        .querySelector(".welcome-content")
        ?.classList.add("animate-fadeInUp");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SEOLayout
      title="Welcome New Customer - Exclusive Discount"
      description="Welcome to Luxe Scent Emporium! Claim your exclusive discount on luxury perfumes and beauty products."
      keywords="new customer discount, welcome offer, luxury perfumes discount, beauty products promotion"
    >
      <main className="min-h-screen bg-gradient-to-br from-luxury-cream via-white to-luxury-champagne/30">
        <Header />

        <div className="container mx-auto px-4 py-16">
          <div className="welcome-content max-w-4xl mx-auto opacity-0 transition-all duration-1000">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-card animate-bounceGentle">
                <Sparkles className="h-5 w-5 text-luxury-rose-gold" />
                <span className="text-sm font-medium text-luxury-purple">
                  {currentPlatform
                    ? `Welcome from ${currentPlatform.name}!`
                    : "Welcome New Customer!"}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-luxury font-bold text-luxury-purple mb-4">
                Exclusive Welcome
                <span className="block text-luxury-rose-gold">Discount</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start your luxury fragrance journey with an exclusive discount
                on your first order.
              </p>
            </div>

            {/* Discount Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Discount Claim Card */}
              <Card className="relative overflow-hidden border-2 border-luxury-purple/20 shadow-luxury hover-lift">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-luxury opacity-10 rounded-full blur-xl"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    {currentPlatform && (
                      <currentPlatform.icon
                        className={`h-8 w-8 ${currentPlatform.color}`}
                      />
                    )}
                    <div>
                      <CardTitle className="text-2xl text-luxury-purple">
                        {discount} OFF
                      </CardTitle>
                      <CardDescription>Your First Order</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {!discountClaimed ? (
                    <form onSubmit={handleClaimDiscount} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-luxury-purple mb-2 block">
                          Enter your email to claim your discount
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="border-luxury-purple/20 focus:border-luxury-purple"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-luxury hover:shadow-luxury transition-luxury hover:scale-105"
                        disabled={isLoading || !email}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Claiming Discount...
                          </div>
                        ) : (
                          <>
                            <Gift className="h-4 w-4 mr-2" />
                            Claim {discount} Discount
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 rounded-full px-4 py-2">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Discount Claimed!</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Check your email for the discount code
                      </p>
                      <Button
                        onClick={handleShopNow}
                        className="w-full bg-gradient-luxury hover:shadow-luxury transition-luxury hover:scale-105"
                      >
                        Shop Now & Save {discount}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Benefits Card */}
              <Card className="border-luxury-purple/20 shadow-card">
                <CardHeader>
                  <CardTitle className="text-luxury-purple">
                    Why Choose Us?
                  </CardTitle>
                  <CardDescription>
                    Premium benefits for our valued customers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "100% Authentic luxury fragrances",
                    "Free shipping on orders over $50",
                    "30-day satisfaction guarantee",
                    "Exclusive member-only offers",
                    "Expert fragrance consultations",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Social Media Promo Codes */}
            <Card className="border-luxury-purple/20 shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-luxury-purple">
                  Follow Us for More Exclusive Offers
                </CardTitle>
                <CardDescription>
                  Get special promo codes when you follow us on social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(socialPlatforms).map(([platform, data]) => {
                    const IconComponent = data.icon;
                    return (
                      <a
                        key={platform}
                        href={`/new-customer?source=${platform}&promo=${platform.toUpperCase()}${data.discount.replace(
                          "%",
                          ""
                        )}`}
                        className="group block bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-card transition-all duration-300 hover:scale-105 border hover:border-luxury-purple/20"
                      >
                        <IconComponent
                          className={`h-8 w-8 mx-auto mb-2 ${data.color} group-hover:scale-110 transition-transform`}
                        />
                        <p className="font-medium text-sm text-luxury-purple">
                          {data.name}
                        </p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {data.discount} OFF
                        </Badge>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </main>
    </SEOLayout>
  );
};

export default NewCustomer;
