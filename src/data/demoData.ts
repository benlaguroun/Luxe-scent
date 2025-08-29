import { Product, Category } from "@/types/database";

export const demoProducts: Product[] = [
  {
    id: "1",
    name: "Noir de Noir",
    description:
      "A rich and sophisticated fragrance with notes of truffle, rose, and patchouli. Perfect for evening wear and special occasions.",
    price: 185,
    original_price: 220,
    brand: "Tom Ford",
    category: "unisex",
    image_url:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
    ],
    in_stock: true,
    stock_quantity: 25,
    rating: 4.8,
    review_count: 124,
    tags: ["luxury", "evening", "sophisticated"],
    is_featured: true,
    is_new: false,
    is_best_seller: true,
    is_trending: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "La Vie Est Belle",
    description:
      "A sweet and floral fragrance featuring iris, patchouli, and gourmand notes. Embodies joy and happiness.",
    price: 95,
    brand: "Lancôme",
    category: "women",
    image_url:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop",
    ],
    in_stock: true,
    stock_quantity: 40,
    rating: 4.6,
    review_count: 89,
    tags: ["floral", "sweet", "feminine"],
    is_featured: true,
    is_new: true,
    is_best_seller: false,
    is_trending: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Sauvage",
    description:
      "A fresh and spicy fragrance with bergamot, pepper, and ambroxan. The epitome of masculine elegance.",
    price: 128,
    brand: "Dior",
    category: "men",
    image_url:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
    ],
    in_stock: true,
    stock_quantity: 30,
    rating: 4.9,
    review_count: 256,
    tags: ["fresh", "spicy", "masculine"],
    is_featured: true,
    is_new: false,
    is_best_seller: false,
    is_trending: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Black Opium",
    description:
      "An addictive gourmand fragrance with coffee, vanilla, and white flowers. Mysteriously seductive.",
    price: 112,
    original_price: 135,
    brand: "YSL",
    category: "women",
    image_url:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
    ],
    in_stock: true,
    stock_quantity: 22,
    rating: 4.7,
    review_count: 178,
    tags: ["gourmand", "seductive", "evening"],
    is_featured: true,
    is_new: false,
    is_best_seller: false,
    is_trending: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Chance Eau Tendre",
    description:
      "A delicate and tender fragrance with grapefruit, quince, jasmine, and white musk.",
    price: 165,
    brand: "Chanel",
    category: "women",
    image_url:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    ],
    in_stock: true,
    stock_quantity: 18,
    rating: 4.5,
    review_count: 95,
    tags: ["fresh", "delicate", "feminine"],
    is_featured: false,
    is_new: true,
    is_best_seller: false,
    is_trending: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "6",
    name: "Light Blue",
    description:
      "A crisp and fresh Mediterranean fragrance with apple, cedar, and bellflower.",
    price: 89,
    brand: "Dolce & Gabbana",
    category: "women",
    image_url:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
    ],
    in_stock: true,
    stock_quantity: 35,
    rating: 4.4,
    review_count: 67,
    tags: ["fresh", "mediterranean", "summer"],
    is_featured: false,
    is_new: false,
    is_best_seller: false,
    is_trending: false,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
];

export const demoCategories: Category[] = [
  {
    id: "1",
    name: "Women's Perfume",
    description: "Elegant and sophisticated fragrances for women",
    image_url:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Men's Cologne",
    description: "Bold and masculine fragrances for men",
    image_url:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Unisex Fragrances",
    description: "Versatile scents for everyone",
    image_url:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=500&fit=crop",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Beauty & Skincare",
    description: "Premium beauty and skincare products",
    image_url:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop",
    created_at: "2024-01-01T00:00:00Z",
  },
];
