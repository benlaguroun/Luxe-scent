import { Helmet } from "react-helmet-async";
import { ReactNode } from "react";

interface SEOLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noIndex?: boolean;
  children: ReactNode;
}

const SEOLayout = ({
  title,
  description,
  keywords = "luxury perfumes, designer fragrances, beauty products, cologne, cosmetics",
  image = "/og-image.jpg",
  noIndex = false,
  children,
}: SEOLayoutProps) => {
  const fullTitle = `${title} | Luxe Scent Emporium - Premium Fragrances & Beauty`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="robots"
          content={noIndex ? "noindex, nofollow" : "index, follow"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Luxe Scent Emporium" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />

        {/* Additional SEO */}
        <meta name="author" content="Luxe Scent Emporium" />
        <meta name="theme-color" content="#8B5CF6" />
        <link rel="canonical" href={siteUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Luxe Scent Emporium",
            description: "Premium luxury perfumes and beauty products",
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            image: `${siteUrl}${image}`,
            priceRange: "$$-$$$",
            paymentAccepted: ["Credit Card", "Cash on Delivery"],
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
          })}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default SEOLayout;
