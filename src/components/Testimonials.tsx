import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      comment:
        "Absolutely love the quality and authenticity of the perfumes. Fast shipping and beautiful packaging!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c2?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 5,
      comment:
        "Best selection of luxury fragrances online. Customer service is exceptional and very knowledgeable.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      comment:
        "Found my signature scent here! The website is easy to navigate and the prices are competitive.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-luxury-purple to-luxury-purple-light text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-luxury font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their luxury
            fragrance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <Quote className="h-8 w-8 text-luxury-champagne mb-4" />

              <p className="text-white/90 mb-6 italic">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-white/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
