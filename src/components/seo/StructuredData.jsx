export default function StructuredData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://furnivo-gold.vercel.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Furnivo",
    url: baseUrl,
    logo: `${baseUrl}/images/furnivo-image3.png`,
    description:
      "Stylish, high-quality furniture crafted for comfort and timeless elegance.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@furnivo.com",
    },
    sameAs: [
      // Add your social media profiles here
      // "https://www.facebook.com/furnivo",
      // "https://www.instagram.com/furnivo",
      "https://x.com/U_desy101",
      "https://www.linkedin.com/in/uddeshya-prajapati-b82849249/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Furnivo",
    url: baseUrl,
    description:
      "Discover Furnivo's collection of stylish, high-quality furniture crafted for comfort and timeless elegance.",
    publisher: {
      "@type": "Organization",
      name: "Furnivo",
    },
  };

  const furnitureStoreSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Furnivo",
    url: "https://furnivo-gold.vercel.app/",
    description:
      "Modern furniture and home decor store offering stylish, high-quality furniture for contemporary living spaces.",
    image: `${baseUrl}/images/heroImage.jpg`,
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(furnitureStoreSchema),
        }}
      />
    </>
  );
}
