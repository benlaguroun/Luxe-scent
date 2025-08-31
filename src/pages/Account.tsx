import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  Edit2,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOLayout from "@/pages/SEOLayout";

const Account = () => {
  const navigate = useNavigate();
  const { state: wishlistState, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (!authStatus) {
      navigate("/login");
      return;
    }

    setIsAuthenticated(true);
    const email = localStorage.getItem("userEmail") || "john@example.com";
    const name = localStorage.getItem("userName") || "John Doe";
    setUserInfo((prev) => ({ ...prev, email, name }));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const handleSaveProfile = () => {
    localStorage.setItem("userName", userInfo.name);
    localStorage.setItem("userEmail", userInfo.email);
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  const demoOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 285.0,
      items: ["Noir de Noir", "La Vie Est Belle"],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Processing",
      total: 128.0,
      items: ["Sauvage"],
    },
  ];

  return (
    <SEOLayout
      title="My Account"
      description="Manage your Luxe Scent Emporium account, view orders, and update your preferences."
      keywords="account, orders, profile, luxury perfumes"
    >
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-luxury text-primary mb-2">
              My Account
            </h1>
            <p className="text-muted-foreground">
              Manage your account settings and view your order history
            </p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your account details and preferences
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      <Edit2 className="h-4 w-4 mr-2" />
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={userInfo.name}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={userInfo.phone}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  {isEditing && (
                    <div className="flex gap-2">
                      <Button onClick={handleSaveProfile}>Save Changes</Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>
                    View and track your recent orders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {demoOrders.map((order) => (
                      <div
                        key={order.id}
                        className="border rounded-lg p-4 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Order {order.id}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Ordered on {order.date}
                        </p>
                        <p className="text-sm">
                          Items: {order.items.join(", ")}
                        </p>
                        <p className="font-semibold">
                          Total: ${order.total.toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    My Wishlist ({wishlistState.items.length})
                  </CardTitle>
                  <CardDescription>
                    Save your favorite fragrances for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {wishlistState.items.length === 0 ? (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Your wishlist is empty. Start adding your favorite
                        fragrances!
                      </p>
                      <Button
                        className="mt-4"
                        onClick={() => navigate("/products")}
                      >
                        Browse Products
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlistState.items.map((item) => (
                        <Card
                          key={item.id}
                          className="overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div
                            className="aspect-square bg-luxury-cream cursor-pointer overflow-hidden"
                            onClick={() =>
                              navigate(`/product/${item.product.id}`)
                            }
                          >
                            <img
                              src={item.product.image_url}
                              alt={item.product.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <p className="text-sm text-luxury-purple font-medium">
                                {item.product.brand}
                              </p>
                              <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                                {item.product.name}
                              </h3>

                              {/* Rating */}
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(item.product.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                                <span className="text-xs text-muted-foreground ml-1">
                                  ({item.product.review_count})
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="font-bold text-luxury-purple">
                                  ${item.product.price}
                                </span>
                                {item.product.original_price && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${item.product.original_price}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex gap-2 mt-4">
                              <Button
                                size="sm"
                                className="flex-1 bg-gradient-luxury text-xs"
                                onClick={() => addToCart(item.product)}
                              >
                                <ShoppingBag className="h-3 w-3 mr-1" />
                                Add to Cart
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  removeFromWishlist(item.product.id)
                                }
                                className="text-destructive hover:bg-destructive/10"
                              >
                                <Heart className="h-3 w-3 fill-current" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences and security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Notification Preferences
                    </Button>
                    <Button
                      variant="destructive"
                      className="w-full justify-start"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <Footer />
      </div>
    </SEOLayout>
  );
};

export default Account;
