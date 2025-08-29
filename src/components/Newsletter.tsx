import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-rose">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury">
            <Mail className="h-16 w-16 text-luxury-purple mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-purple mb-4">
              Stay in the Scent Loop
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about new arrivals, exclusive offers, and
              fragrance tips. Plus, get 15% off your first order when you
              subscribe!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-luxury-purple/20 focus:border-luxury-purple"
              />
              <Button className="bg-gradient-luxury hover:shadow-luxury transition-luxury px-8">
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
