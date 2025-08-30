import { Facebook, Instagram, MessageCircle, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50",
      followers: "125K",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50",
      followers: "89K",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      color: "hover:text-green-600",
      bgColor: "hover:bg-green-50",
      followers: "Chat",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://tiktok.com",
      color: "hover:text-black",
      bgColor: "hover:bg-gray-50",
      followers: "45K",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-luxury-cream via-white to-luxury-champagne/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-luxury-rose-gold/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-luxury-purple/10 rounded-full blur-xl animate-pulse animation-delay-700"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-purple mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with us on social media for the latest beauty trends,
            exclusive offers, and behind-the-scenes content from our luxury
            world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div
                key={social.name}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block bg-white rounded-2xl p-8 text-center shadow-card hover-lift
                    border border-transparent hover:border-luxury-purple/20
                    transition-all duration-500 group-hover:shadow-luxury
                    ${social.bgColor}
                  `}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-luxury-cream transition-all duration-300 group-hover:scale-110 ${social.color}`}
                  >
                    <IconComponent className="h-8 w-8 text-luxury-purple transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-luxury-purple mb-2 group-hover:scale-105 transition-transform duration-300">
                    {social.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {social.followers}
                  </p>
                </a>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-delayed">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-card border border-luxury-purple/10">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-luxury border-2 border-white animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-medium text-luxury-purple">
                Join 250K+ Beauty Lovers
              </p>
              <p className="text-sm text-muted-foreground">
                Get exclusive content & offers
              </p>
            </div>
            <Button
              className="bg-gradient-luxury hover:shadow-luxury transition-luxury hover:scale-105"
              size="lg"
            >
              Follow Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
