import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Women's Perfume",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
      count: 150,
      slug: "women",
    },
    {
      name: "Men's Cologne",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
      count: 120,
      slug: "men",
    },
    {
      name: "Unisex Fragrances",
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=500&fit=crop",
      count: 85,
      slug: "unisex",
    },
    {
      name: "Beauty & Skincare",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop",
      count: 200,
      slug: "beauty",
    },
  ];

  const handleCategoryClick = (slug: string) => {
    navigate(`/products?category=${slug}`);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-luxury-cream/30 to-white"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-luxury-purple/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-purple mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections for every preference and
            occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.slug)}
              className="group cursor-pointer hover-lift animate-scale-in"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 shadow-card hover:shadow-luxury transition-all duration-500">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-500">
                  <h3 className="font-luxury font-semibold text-xl mb-1 group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
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
