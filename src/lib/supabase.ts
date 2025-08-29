import { createClient } from "@supabase/supabase-js";
import {
  Product,
  Category,
  CartItem,
  Order,
  Review,
  User,
} from "@/types/database";
import { demoProducts, demoCategories } from "@/data/demoData";

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Products API
export const productsAPI = {
  // Get all products with optional filters
  async getProducts(filters?: {
    category?: string;
    search?: string;
    sortBy?: string;
    limit?: number;
    offset?: number;
  }) {
    try {
      let query = supabase.from("products").select("*");

      if (filters?.category && filters.category !== "all") {
        query = query.eq("category", filters.category);
      }

      if (filters?.search) {
        query = query.or(
          `name.ilike.%${filters.search}%,brand.ilike.%${filters.search}%`
        );
      }

      if (filters?.sortBy) {
        switch (filters.sortBy) {
          case "price-low":
            query = query.order("price", { ascending: true });
            break;
          case "price-high":
            query = query.order("price", { ascending: false });
            break;
          case "rating":
            query = query.order("rating", { ascending: false });
            break;
          case "newest":
            query = query.order("created_at", { ascending: false });
            break;
          default:
            query = query.order("is_featured", { ascending: false });
        }
      }

      if (filters?.limit) {
        query = query.limit(filters.limit);
      }

      if (filters?.offset) {
        query = query.range(
          filters.offset,
          filters.offset + (filters.limit || 10) - 1
        );
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Product[];
    } catch (error) {
      console.warn("Supabase not connected, using demo data");
      return demoProducts;
    }
  },

  // Get a single product by ID
  async getProduct(id: string) {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as Product;
    } catch (error) {
      console.warn("Supabase not connected, using demo data");
      return demoProducts.find((p) => p.id === id) || null;
    }
  },

  // Get featured products
  async getFeaturedProducts(limit = 6) {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .limit(limit);

      if (error) throw error;
      return data as Product[];
    } catch (error) {
      console.warn("Supabase not connected, using demo data");
      return demoProducts.filter((p) => p.is_featured).slice(0, limit);
    }
  },
};

// Categories API
export const categoriesAPI = {
  async getCategories() {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      if (error) throw error;
      return data as Category[];
    } catch (error) {
      console.warn("Supabase not connected, using demo data");
      return demoCategories;
    }
  },
};

// Cart API
export const cartAPI = {
  async getCartItems(userId: string) {
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select(
          `
          *,
          product:products(*)
        `
        )
        .eq("user_id", userId);

      if (error) throw error;
      return data as CartItem[];
    } catch (error) {
      console.warn("Supabase not connected, cart will be local only");
      return [];
    }
  },

  async addToCart(userId: string, productId: string, quantity: number) {
    try {
      const { data, error } = await supabase.from("cart_items").upsert(
        {
          user_id: userId,
          product_id: productId,
          quantity,
        },
        {
          onConflict: "user_id,product_id",
        }
      );

      if (error) throw error;
      return data;
    } catch (error) {
      console.warn("Supabase not connected, cart will be local only");
      return null;
    }
  },

  async updateCartItem(userId: string, productId: string, quantity: number) {
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .update({ quantity })
        .eq("user_id", userId)
        .eq("product_id", productId);

      if (error) throw error;
      return data;
    } catch (error) {
      console.warn("Supabase not connected, cart will be local only");
      return null;
    }
  },

  async removeFromCart(userId: string, productId: string) {
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .delete()
        .eq("user_id", userId)
        .eq("product_id", productId);

      if (error) throw error;
      return data;
    } catch (error) {
      console.warn("Supabase not connected, cart will be local only");
      return null;
    }
  },
};

// Orders API
export const ordersAPI = {
  async createOrder(orderData: Partial<Order>) {
    try {
      const { data, error } = await supabase
        .from("orders")
        .insert(orderData)
        .select()
        .single();

      if (error) throw error;
      return data as Order;
    } catch (error) {
      console.warn("Supabase not connected, order will be simulated");
      return null;
    }
  },

  async getUserOrders(userId: string) {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select(
          `
          *,
          order_items:order_items(
            *,
            product:products(*)
          )
        `
        )
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Order[];
    } catch (error) {
      console.warn("Supabase not connected, no orders available");
      return [];
    }
  },
};

// Reviews API
export const reviewsAPI = {
  async getProductReviews(productId: string) {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select(
          `
          *,
          user:profiles(full_name, avatar_url)
        `
        )
        .eq("product_id", productId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Review[];
    } catch (error) {
      console.warn("Supabase not connected, no reviews available");
      return [];
    }
  },

  async addReview(reviewData: Partial<Review>) {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert(reviewData)
        .select()
        .single();

      if (error) throw error;
      return data as Review;
    } catch (error) {
      console.warn("Supabase not connected, review will not be saved");
      return null;
    }
  },
};

// Auth helper functions
export const authAPI = {
  async getCurrentUser() {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;
      return user;
    } catch (error) {
      console.warn("Supabase not connected, no auth available");
      return null;
    }
  },

  async signUp(email: string, password: string, fullName: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.warn("Supabase not connected, auth not available");
      throw error;
    }
  },

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.warn("Supabase not connected, auth not available");
      throw error;
    }
  },

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.warn("Supabase not connected, auth not available");
      throw error;
    }
  },
};
