import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { demoProducts } from "@/data/demoData";
import { Product } from "@/types/database";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOLayout from "./SEOLayout";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = demoProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <SEOLayout
        title="Product Not Found"
        description="The requested product could not be found."
      >
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </SEOLayout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const relatedProducts = demoProducts
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  return (
    <SEOLayout
      title={`${product.name} - ${product.brand}`}
      description={product.description}
      keywords={`${product.brand}, ${product.name}, perfume, fragrance, luxury`}
    >
      <Header />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-luxury-cream">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden bg-luxury-cream border-2 transition-colors ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex gap-2">
                {product.is_new && (
                  <Badge className="bg-luxury-rose-gold text-white">New</Badge>
                )}
                {product.is_best_seller && (
                  <Badge className="bg-luxury-purple text-white">
                    Best Seller
                  </Badge>
                )}
                {product.is_trending && (
                  <Badge className="bg-gradient-luxury text-white">
                    Trending
                  </Badge>
                )}
              </div>

              {/* Brand & Name */}
              <div>
                <p className="text-lg text-luxury-purple font-medium mb-2">
                  {product.brand}
                </p>
                <h1 className="text-3xl lg:text-4xl font-luxury font-bold text-foreground">
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.review_count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-luxury-purple">
                  ${product.price}
                </span>
                {product.original_price && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.original_price}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-luxury hover:shadow-luxury transition-luxury"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center space-y-2">
                  <Truck className="h-6 w-6 mx-auto text-luxury-purple" />
                  <div>
                    <p className="font-medium text-sm">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">
                      Orders over $50
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="h-6 w-6 mx-auto text-luxury-purple" />
                  <div>
                    <p className="font-medium text-sm">Authentic</p>
                    <p className="text-xs text-muted-foreground">
                      100% Genuine
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <RotateCcw className="h-6 w-6 mx-auto text-luxury-purple" />
                  <div>
                    <p className="font-medium text-sm">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">
                      30-day policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">About This Fragrance</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description} This exquisite fragrance combines the
                finest ingredients to create a unique and memorable scent
                experience. Perfect for any occasion, this perfume embodies
                luxury and sophistication.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-medium mb-2">Fragrance Family</h4>
                  <p className="text-muted-foreground">
                    Floral, Oriental, Woody
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Concentration</h4>
                  <p className="text-muted-foreground">Eau de Parfum (EDP)</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Ingredients</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Top Notes</h4>
                  <p className="text-muted-foreground">
                    Bergamot, Lemon, Pink Pepper
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium">Heart Notes</h4>
                  <p className="text-muted-foreground">
                    Rose, Jasmine, Lily of the Valley
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium">Base Notes</h4>
                  <p className="text-muted-foreground">
                    Sandalwood, Vanilla, Musk
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="font-medium">
                            Amazing fragrance!
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          This perfume exceeded my expectations. The scent is
                          long-lasting and perfect for both day and evening
                          wear.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Sarah M. - Verified Purchase
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">
                More from {product.brand}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                    className="group cursor-pointer bg-white rounded-2xl shadow-card hover-lift p-4"
                  >
                    <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-luxury-cream">
                      <img
                        src={relatedProduct.image_url}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-luxury-purple font-medium">
                        {relatedProduct.brand}
                      </p>
                      <h3 className="font-semibold text-foreground leading-tight">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-lg font-bold text-luxury-purple">
                        ${relatedProduct.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </SEOLayout>
  );
};

export default ProductDetail;
