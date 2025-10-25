export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
    ],
    sitemap: "https://furnivo-gold.vercel.app/sitemap.xml",
  };
}
