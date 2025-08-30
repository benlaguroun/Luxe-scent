import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Women's", href: "/products?category=women" },
    { label: "Men's", href: "/products?category=men" },
    { label: "Unisex", href: "/products?category=unisex" },
    { label: "All Products", href: "/products" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-luxury font-bold text-luxury-purple">
              Luxe Scent
            </h1>
            <span className="text-luxury-rose-gold font-luxury">Emporium</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-luxury-purple transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center relative max-w-md">
            <Input
              placeholder="Search luxury perfumes..."
              className="pr-10 border-luxury-purple/20 focus:border-luxury-purple"
            />
            <Search className="absolute right-3 h-4 w-4 text-luxury-purple/60" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-luxury-purple/10"
            >
              <Search className="h-5 w-5 text-luxury-purple" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex hover:bg-luxury-purple/10"
            >
              <Heart className="h-5 w-5 text-luxury-purple" />
            </Button>

            {/* User */}
            <div className="relative group hidden sm:block">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-luxury-purple/10"
              >
                <User className="h-5 w-5 text-luxury-purple" />
              </Button>

              {/* User dropdown menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {localStorage.getItem("isAuthenticated") ? (
                    <>
                      <button
                        onClick={() => navigate("/account")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      >
                        My Account
                      </button>
                      <button
                        onClick={() => {
                          localStorage.removeItem("isAuthenticated");
                          localStorage.removeItem("userEmail");
                          localStorage.removeItem("userName");
                          navigate("/");
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-red-600"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => navigate("/register")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      >
                        Create Account
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-luxury-purple/10 relative"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag className="h-5 w-5 text-luxury-purple" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxury-rose-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5 text-luxury-purple" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-white border-l border-gray-200"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <h2 className="text-lg font-luxury font-bold text-luxury-purple">
                        Menu
                      </h2>
                    </div>
                  </div>

                  {/* Mobile Search */}
                  <div className="py-4 border-b">
                    <div className="relative">
                      <Input
                        placeholder="Search luxury perfumes..."
                        className="pr-10 border-luxury-purple/20 focus:border-luxury-purple"
                      />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-luxury-purple/60" />
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-4">
                    <div className="space-y-4">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block py-3 px-4 text-lg text-foreground hover:text-luxury-purple hover:bg-luxury-purple/5 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    <div className="border-t mt-6 pt-6 space-y-4">
                      <Link
                        to="/wishlist"
                        className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-luxury-purple hover:bg-luxury-purple/5 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Heart className="h-5 w-5" />
                        Wishlist
                      </Link>
                      {localStorage.getItem("isAuthenticated") ? (
                        <>
                          <Link
                            to="/account"
                            className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-luxury-purple hover:bg-luxury-purple/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <User className="h-5 w-5" />
                            My Account
                          </Link>
                          <button
                            onClick={() => {
                              localStorage.removeItem("isAuthenticated");
                              localStorage.removeItem("userEmail");
                              localStorage.removeItem("userName");
                              setIsMobileMenuOpen(false);
                              navigate("/");
                            }}
                            className="flex items-center gap-3 py-3 px-4 w-full text-left text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <User className="h-5 w-5" />
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-luxury-purple hover:bg-luxury-purple/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <User className="h-5 w-5" />
                            Sign In
                          </Link>
                          <Link
                            to="/register"
                            className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-luxury-purple hover:bg-luxury-purple/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <User className="h-5 w-5" />
                            Create Account
                          </Link>
                        </>
                      )}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
