const Categories = () => {
  const categories = [
    {
      name: "Women's Perfume",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
      count: 150,
    },
    {
      name: "Men's Cologne",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
      count: 120,
    },
    {
      name: "Unisex Fragrances",
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=500&fit=crop",
      count: 85,
    },
    {
      name: "Beauty & Skincare",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop",
      count: 200,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-purple mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections for every preference and
            occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer hover-lift">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-luxury font-semibold text-xl mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {category.count} products
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

export default Categories;
