import ProductCard from "./ProductCard";

const ProductShowcase = () => {
  // Sample product data - in real app, this would come from Supabase
  const products = [
    {
      id: 1,
      name: "Noir de Noir",
      brand: "Tom Ford",
      price: 185,
      originalPrice: 220,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      isBestSeller: true,
    },
    {
      id: 2,
      name: "La Vie Est Belle",
      brand: "Lancôme",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      isNew: true,
    },
    {
      id: 3,
      name: "Sauvage",
      brand: "Dior",
      price: 128,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 256,
      isTrending: true,
    },
    {
      id: 4,
      name: "Black Opium",
      brand: "YSL",
      price: 112,
      originalPrice: 135,
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 178,
    },
    {
      id: 5,
      name: "Chance Eau Tendre",
      brand: "Chanel",
      price: 165,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 95,
      isNew: true,
    },
    {
      id: 6,
      name: "Light Blue",
      brand: "Dolce & Gabbana",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 67,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-luxury-cream to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-purple mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of luxury perfumes from the
            world's most prestigious brands
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              rating={product.rating}
              reviews={product.reviews}
              isNew={product.isNew}
              isBestSeller={product.isBestSeller}
              isTrending={product.isTrending}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-luxury text-white px-8 py-4 rounded-full font-medium hover:shadow-luxury transition-luxury">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
