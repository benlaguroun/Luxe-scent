import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/database";

interface ProductCardProps {
  id?: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  product?: Product;
}

const ProductCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew = false,
  isBestSeller = false,
  isTrending = false,
  product,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    } else {
      // Fallback for demo data
      const demoProduct: Product = {
        id: id || Date.now().toString(),
        name,
        brand,
        price,
        original_price: originalPrice,
        image_url: image,
        images: [image],
        description: `${brand} ${name}`,
        category: "perfumes",
        rating,
        review_count: reviews,
        is_new: isNew,
        is_best_seller: isBestSeller,
        is_trending: isTrending,
        is_featured: false,
        in_stock: true,
        stock_quantity: 10,
        tags: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      addToCart(demoProduct);
    }
  };
  return (
    <div className="group bg-white rounded-2xl shadow-card hover-lift p-4 sm:p-6 relative overflow-hidden">
      {/* Tags */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex flex-col gap-2">
        {isNew && <Badge className="bg-luxury-rose-gold text-white">New</Badge>}
        {isBestSeller && (
          <Badge className="bg-luxury-purple text-white">Best Seller</Badge>
        )}
        {isTrending && (
          <Badge className="bg-gradient-luxury text-white">Trending</Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/80 hover:bg-white transition-luxury min-h-[44px] min-w-[44px] sm:min-h-[auto] sm:min-w-[auto]"
        aria-label="Add to wishlist"
      >
        <Heart className="h-4 w-4 text-luxury-purple" />
      </Button>

      {/* Product Image */}
      <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-luxury-cream">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-luxury group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <p className="text-sm text-luxury-purple font-medium">{brand}</p>
          <h3 className="font-luxury font-semibold text-foreground text-lg leading-tight">
            {name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-luxury-purple">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          <Button
            size="sm"
            className="bg-gradient-luxury hover:shadow-luxury transition-luxury min-h-[44px] text-sm sm:text-base"
            onClick={handleAddToCart}
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
