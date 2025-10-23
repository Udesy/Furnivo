import { groq } from "next-sanity";

export const queries = {
  hero: groq`*[_type == "heroSection"]{
    name,
    alt,
    "src": imageFile.asset->url,
    slug
    }`,

  preview: groq`*[_type == "previewBox"]{
        text,
        subText,
        "src": imageFile.asset->url,
        alt,
    }`,

  about: groq`*[_type == "aboutSection"]{
    title,
    subText,
    "src": imageFile.asset->url,
    slug,
    }`,

  product: groq`*[_type == "product3D"]{
        productTitle,
        description,
        "modelFile" : modelFile.asset->url,
        "src": productImage.asset->url,
        scale,
        lightDirection,
        productPrice,
        productCategory,
        productFabric,
        slug
    }`,

  card: groq`*[_type == "bentoCard"] | order(slug asc) {
  slug,
    title,
    className,
    "src": imageFile.asset->url,
    imageDescription,
    }`,
};
