import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "@/types/database";
import { toast } from "@/hooks/use-toast";

interface WishlistItem {
  id: string;
  product: Product;
  added_at: string;
}

interface WishlistState {
  items: WishlistItem[];
}

type WishlistAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_WISHLIST" };

const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistCount: () => number;
} | null>(null);

const wishlistReducer = (
  state: WishlistState,
  action: WishlistAction
): WishlistState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        return state; // Item already in wishlist
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now().toString(),
            product: action.payload,
            added_at: new Date().toISOString(),
          },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };

    case "CLEAR_WISHLIST":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
  });

  const addToWishlist = (product: Product) => {
    const isAlreadyInWishlist = state.items.some(
      (item) => item.product.id === product.id
    );

    if (isAlreadyInWishlist) {
      toast({
        title: "Already in wishlist",
        description: `${product.name} is already in your wishlist.`,
        variant: "default",
      });
      return;
    }

    dispatch({ type: "ADD_ITEM", payload: product });
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    });
  };

  const isInWishlist = (productId: string) => {
    return state.items.some((item) => item.product.id === productId);
  };

  const getWishlistCount = () => {
    return state.items.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        state,
        dispatch,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        getWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
