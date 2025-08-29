import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $75",
    },
    {
      icon: Shield,
      title: "Authentic Products",
      description: "100% genuine luxury brands guaranteed",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert customer service available anytime",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day hassle-free return policy",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-luxury transition-luxury">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-luxury font-semibold text-luxury-purple mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
