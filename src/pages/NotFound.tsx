import { Link } from "react-router-dom";
import { Home, Search, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOLayout from "./SEOLayout";

const NotFound = () => {
  return (
    <SEOLayout
      title="404 - Page Not Found"
      description="The page you're looking for doesn't exist. Return to our luxury fragrance collection."
      noIndex={true}
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-luxury">
        <div className="text-center text-white p-8 max-w-md">
          <Package className="h-24 w-24 mx-auto mb-6 opacity-60" />
          <h1 className="text-6xl font-luxury font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Fragrance Not Found</h2>
          <p className="text-white/80 mb-8">
            This page seems to have vanished like a delicate perfume note. Let's
            help you find your way back to our luxury collection.
          </p>
          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-white text-luxury-purple hover:bg-white/90"
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-luxury-purple"
            >
              <Link to="/products">
                <Search className="h-4 w-4 mr-2" />
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SEOLayout>
  );
};

export default NotFound;
