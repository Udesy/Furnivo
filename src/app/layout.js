import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "@/components/layout/SmoothScroll";
import StructuredData from "@/components/seo/StructuredData";

const montserrat = localFont({
  src: [
    {
      path: "../fonts/Montserrat-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://furnivo.com"), // Update with your actual domain
  title: {
    default:
      "Furnivo - Modern Furniture & Home Decor | Stylish Living Solutions",
    template: "%s | Furnivo",
  },
  description:
    "Discover Furnivo's collection of stylish, high-quality furniture crafted for comfort and timeless elegance. Transform your living space with our modern sofas, chairs, and home decor.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  keywords: [
    "furniture",
    "modern furniture",
    "home decor",
    "furnivo",
    "sofas",
    "chairs",
    "living room furniture",
    "bedroom furniture",
    "contemporary furniture",
    "interior design",
    "home furnishings",
    "quality furniture",
  ],
  authors: [{ name: "Furnivo" }],
  creator: "Furnivo",
  publisher: "Furnivo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furnivo.com",
    siteName: "Furnivo",
    title: "Furnivo - Modern Furniture & Home Decor",
    description:
      "Discover Furnivo's collection of stylish, high-quality furniture crafted for comfort and timeless elegance.",
    images: [
      {
        url: "/images/heroImage.jpg",
        width: 1200,
        height: 630,
        alt: "Furnivo Modern Furniture Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnivo - Modern Furniture & Home Decor",
    description:
      "Discover Furnivo's collection of stylish, high-quality furniture crafted for comfort and timeless elegance.",
    images: ["/images/heroImage.jpg"],
    creator: "@furnivo", // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://furnivo.com",
  },
  category: "furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
