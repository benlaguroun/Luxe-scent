import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-luxury font-bold">Luxe Scent</h3>
              <span className="text-luxury-champagne font-luxury">
                Emporium
              </span>
            </div>
            <p className="text-white/80">
              Your destination for luxury perfumes and beauty products from the
              world's most prestigious brands.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 hover:text-luxury-champagne cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 hover:text-luxury-champagne cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-luxury-champagne cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 hover:text-luxury-champagne cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Women's Perfume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Men's Cologne
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Unisex Fragrances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Beauty Products
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-luxury-champagne transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Luxe Scent Emporium. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-luxury-champagne transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-luxury-champagne transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-luxury-champagne transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
