import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Product from "@/components/sections/Product";
import Card from "@/components/sections/Card";
import FAQs from "@/components/sections/FAQs";
import Newsletter from "@/components/sections/Newsletter";
import { queries } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function page() {
  const [previewData, aboutData, productData, cardData] = await Promise.all([
    client.fetch(queries.preview),
    client.fetch(queries.about),
    client.fetch(queries.product),
    client.fetch(queries.card),
  ]);
  return (
    <>
      <Navbar />
      <Hero previewData={previewData} />
      <About data={aboutData} />
      <Product data={productData} />
      <Card data={cardData} />
      <FAQs />
      <Newsletter />
      <Footer />
    </>
  );
}
