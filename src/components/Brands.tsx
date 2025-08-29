const Brands = () => {
  const brands = [
    "Chanel",
    "Dior",
    "Tom Ford",
    "YSL",
    "Lancôme",
    "Gucci",
    "Versace",
    "Prada",
  ];

  return (
    <section className="py-16 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-purple mb-4">
            Prestigious Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with the world's most exclusive perfume and beauty brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-card transition-luxury cursor-pointer group"
            >
              <span className="font-luxury font-semibold text-luxury-purple group-hover:text-luxury-rose-gold transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
