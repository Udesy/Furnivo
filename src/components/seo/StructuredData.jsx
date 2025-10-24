export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Furnivo",
    "url": "https://furnivo.com",
    "logo": "https://furnivo.com/images/furnivo-image3.png",
    "description": "Stylish, high-quality furniture crafted for comfort and timeless elegance.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@furnivo.com"
    },
    "sameAs": [
      // Add your social media profiles here
      // "https://www.facebook.com/furnivo",
      // "https://www.instagram.com/furnivo",
      // "https://twitter.com/furnivo",
      // "https://www.linkedin.com/company/furnivo"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Furnivo",
    "url": "https://furnivo.com",
    "description": "Discover Furnivo's collection of stylish, high-quality furniture crafted for comfort and timeless elegance.",
    "publisher": {
      "@type": "Organization",
      "name": "Furnivo"
    }
  };

  const furnitureStoreSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "Furnivo",
    "url": "https://furnivo.com",
    "description": "Modern furniture and home decor store offering stylish, high-quality furniture for contemporary living spaces.",
    "image": "https://furnivo.com/images/heroImage.jpg",
    "priceRange": "$$"
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

