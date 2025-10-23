export const preview_images = [
  {
    src: "/images/slides_image/slide-1.jpg",
    alt: "Slide 1",
    text: "Minimalistic and Elegance look",
    subtext: "Living Room",
  },
  {
    src: "/images/slides_image/slide-2.jpg",
    alt: "Slide 2",
    text: "Modern look in your Living Room",
    subtext: "Sitting Area",
  },
  {
    src: "/images/slides_image/slide-3.jpg",
    alt: "Slide 3",
    text: "Comfortable Sitting Area for Offices",
    subtext: "Office Area",
  },
];

export const about_content = [
  {
    id: 0,
    h1: "Thoughtful Design with Purpose",
    p: "At Furnivo, every piece begins with a simple idea—create furniture that blends modern minimalism with everyday comfort.",
    src: "/images/about-section/image-1.jpg",
  },
  {
    id: 1,
    h1: "Quality Craftsmanship You Can Trust",
    p: "We source premium woods and finishes to ensure lasting durability without compromising on style.",
    src: "/images/about-section/image-2.jpg",
  },
  {
    id: 2,
    h1: "Furniture Made for Every Space You Imagine",
    p: "From cozy homes to dynamic workspaces, Furnivo collections bring warmth and character to any environment.",
    src: "/images/about-section/image-3.jpg",
  },
];

export const models = [
  {
    id: 0,
    path: "/models/chair-1.glb",
    image: "/images/product_images/chair-1.png",
    scale: 0.4,
    lightdir: {
      dirX: 6.5,
      dirY: 4.5,
      dirZ: 8.0,
    },
    content: {
      product_title: "Emerald Luxury Velvet Accent Chair",
      product_desc:
        "Experience unparalleled comfort with this stunning emerald green accent chair. Crafted with premium velvet upholstery and solid hardwood frame, it features deep cushioning and elegant tapered legs. Perfect for adding a bold statement to your office space while maintaining sophisticated functionality.",
      product_price: "$1,299",
      product_fabric: "Premium Velvet",
      product_category: "Office",
    },
  },
  {
    id: 1,
    path: "/models/chair-2.glb",
    image: "/images/product_images/chair-2.png",
    scale: 0.4,
    lightdir: {
      dirX: 15.0,
      dirY: -1.5,
      dirZ: 3.5,
    },
    content: {
      product_title: "Sage Whisper Contemporary Dining Chair",
      product_desc:
        "Elevate your dining experience with this exquisite sage-toned linen chair. Featuring ergonomic design and plush padding, it combines timeless elegance with modern comfort. The gentle pistachio hue brings warmth and tranquility, making every meal a luxurious occasion in your sitting area.",
      product_price: "$1,149",
      product_fabric: "Belgian Linen",
      product_category: "Sitting Area",
    },
  },
  {
    id: 2,
    path: "/models/chair-3.glb",
    image: "/images/product_images/chair-3.png",
    scale: 0.4,
    lightdir: {
      dirX: -1.0,
      dirY: 9.5,
      dirZ: 12.0,
    },
    content: {
      product_title: "Blush Rose Velvet Lounge Chair",
      product_desc:
        "Indulge in sophisticated comfort with this captivating rose-blush accent chair. The soft pink velvet finish radiates elegance while providing exceptional seating comfort. Designed with graceful curves and sturdy construction, it transforms any living room into a chic sanctuary of style and relaxation.",
      product_price: "$1,399",
      product_fabric: "Premium Velvet",
      product_category: "Living Room",
    },
  },
  {
    id: 3,
    path: "/models/sofa-1.glb",
    image: "/images/product_images/sofa-1.png",
    scale: 0.4,
    lightdir: {
      dirX: 24.0,
      dirY: 27.0,
      dirZ: 29.5,
    },
    content: {
      product_title: "Teal Majesty Three Seater Sofa",
      product_desc:
        "Transform your living space with this magnificent teal boucle sofa. Featuring deep seating, plush cushions, and a sleek silhouette, it offers both style and supreme comfort. The rich sea-green tone adds coastal elegance, while premium craftsmanship ensures lasting durability for years of enjoyment.",
      product_price: "$1,899",
      product_fabric: "Textured Boucle",
      product_category: "Living Room",
    },
  },
  {
    id: 4,
    path: "/models/sofa-2.glb",
    image: "/images/product_images/sofa-2.png",
    scale: 0.4,
    lightdir: {
      dirX: 8.0,
      dirY: 11.5,
      dirZ: 7.0,
    },
    content: {
      product_title: "Sunburst Gold Velvet Sectional Sofa",
      product_desc:
        "Brighten your space with this radiant golden-yellow chenille sofa. Combining contemporary design with classic comfort, it features generous seating and supportive cushioning. The vibrant mustard hue creates an inviting atmosphere perfect for entertaining guests or unwinding after long days in ultimate luxury.",
      product_price: "$1,799",
      product_fabric: "Soft Chenille",
      product_category: "Sitting Area",
    },
  },
  {
    id: 5,
    path: "/models/sofa-3.glb",
    image: "/images/product_images/sofa-3.png",
    scale: 0.3,
    lightdir: {
      dirX: 7.5,
      dirY: 23.0,
      dirZ: 24.0,
    },
    content: {
      product_title: "Olive Mist Designer Three Seater",
      product_desc:
        "Discover refined sophistication with this stunning olive-cream leather sofa. The muted sage-cream tone exudes natural elegance while the spacious design accommodates family and friends comfortably. Expertly upholstered with premium materials, it brings understated luxury and timeless appeal to your office lounge.",
      product_price: "$1,950",
      product_fabric: "Italian Leather",
      product_category: "Office",
    },
  },
];

export const bento_card = [
  {
    id: 0,
    className:
      "relative col-start-1 col-end-5 row-span-2 rounded-[20px] overflow-hidden",
    imageSrc:
      "https://cdn.sanity.io/images/gcnzniv1/production/6af640fe18b81bea3efccc2c31cbd110025067c0-832x1248.png",
    children: "Bedroom",
  },
  {
    id: 1,
    className: "relative col-start-5 col-end-9 rounded-[20px] overflow-hidden",
    imageSrc:
      "https://cdn.sanity.io/images/gcnzniv1/production/0530d1d964c90e2109245bc14272237044bff829-1184x864.png",
    children: "Office",
  },
  {
    id: 2,
    className: "relative col-start-9 col-end-13 rounded-[20px] overflow-hidden",
    imageSrc:
      "https://cdn.sanity.io/images/gcnzniv1/production/547a506cb8f54ea3009d32f30b90a1d295b1c3b3-768x1344.png",
    children: "Living Room",
  },
  {
    id: 3,
    className: "relative  col-start-5 col-end-9 rounded-[20px] overflow-hidden",
    imageSrc:
      "https://cdn.sanity.io/images/gcnzniv1/production/0659a13c3a56eea64f2f4fd3c88ccd1a711b4988-832x1248.png",
    children: "Kitchen",
  },
  {
    id: 4,
    className: "relative col-start-9 col-end-13 rounded-[20px] overflow-hidden",
    imageSrc:
      "https://cdn.sanity.io/images/gcnzniv1/production/f6fdb0c51e3f6aa2fb96454807b964a792c087f4-512x768.png",
    children: "Dining Room",
  },
];

export const faqs = [
  {
    id: 0,
    question: "What types of furniture does Furnivo offer?",
    answer:
      "We specialize in premium sofas, chairs, and seating for living rooms, offices, and sitting areas. All pieces are crafted from the finest woods and upholstered in luxury fabrics including velvet, linen, boucle, chenille, and Italian leather.",
  },
  {
    id: 1,
    question: "Do you offer custom furniture options?",
    answer:
      "Yes, we provide customization services including fabric selection, wood finishes, and dimensional adjustments to perfectly suit your space and style preferences.",
  },
  {
    id: 2,
    question: "What is your furniture price range?",
    answer:
      "Our collection ranges from $1,149 to $1,950, reflecting our commitment to premium quality materials and expert craftsmanship.",
  },
  {
    id: 3,
    question: "How long does furniture delivery take?",
    answer:
      "Standard delivery takes 4-6 weeks for in-stock items. Custom orders typically require 8-12 weeks for production and delivery.",
  },
  {
    id: 4,
    question: "Do you provide assembly and installation services?",
    answer:
      "Yes, we offer professional white-glove delivery service including assembly, installation, and packaging removal for all furniture purchases.",
  },
  {
    id: 5,
    question: "What is your return and exchange policy?",
    answer:
      "We offer a 30-day return policy for unused items in original condition. Custom orders are final sale but covered by our craftsmanship warranty.",
  },
  {
    id: 6,
    question: "How do I care for velvet furniture?",
    answer:
      "Regular vacuuming with a soft brush attachment and immediate blotting of spills is recommended. Avoid direct sunlight and rotate cushions periodically for even wear.",
  },
  {
    id: 7,
    question: "Do you ship internationally or only locally?",
    answer:
      "Currently, we ship across India with free delivery on orders over ₹50,000. International shipping is available on request with additional charges.",
  },
];

const TwitterIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 26 26"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.33333 0C1.9401 0 0 1.9401 0 4.33333V21.6667C0 24.0599 1.9401 26 4.33333 26H21.6667C24.0599 26 26 24.0599 26 21.6667V4.33333C26 1.9401 24.0599 0 21.6667 0H4.33333ZM5.62463 5.57143H10.5383L14.0277 10.5299L18.2619 5.57143H19.8095L14.7266 11.5225L20.9944 20.4286H16.0819L12.0327 14.6758L7.11905 20.4286H5.57143L11.3339 13.6831L5.62463 5.57143ZM7.99442 6.80952L16.7276 19.1905H18.6246L9.89146 6.80952H7.99442Z"
      fill="black"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 26 26"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5.2C0 2.32812 2.32812 0 5.2 0H20.8C23.6718 0 26 2.32812 26 5.2V20.8C26 23.6718 23.6718 26 20.8 26H5.2C2.32812 26 0 23.6718 0 20.8V5.2ZM5.2 2.6C3.76406 2.6 2.6 3.76406 2.6 5.2V20.8C2.6 22.236 3.76406 23.4 5.2 23.4H20.8C22.236 23.4 23.4 22.236 23.4 20.8V5.2C23.4 3.76406 22.236 2.6 20.8 2.6H5.2ZM13 9.1C10.846 9.1 9.1 10.846 9.1 13C9.1 15.154 10.846 16.9 13 16.9C15.154 16.9 16.9 15.154 16.9 13C16.9 10.846 15.154 9.1 13 9.1ZM6.5 13C6.5 9.41015 9.41015 6.5 13 6.5C16.5898 6.5 19.5 9.41015 19.5 13C19.5 16.5898 16.5898 19.5 13 19.5C9.41015 19.5 6.5 16.5898 6.5 13ZM20.15 7.8C21.2269 7.8 22.1 6.92696 22.1 5.85C22.1 4.77304 21.2269 3.9 20.15 3.9C19.0731 3.9 18.2 4.77304 18.2 5.85C18.2 6.92696 19.0731 7.8 20.15 7.8Z"
      fill="black"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 26 26"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.484 0H24.516C25.2967 0 26 0.703277 26 1.484V24.516C26 25.2967 25.2967 26 24.516 26H1.484C0.703277 26 0 25.2967 0 24.516V1.484C0 0.703277 0.703277 0 1.484 0ZM18.4638 14.5989H22.0552L22.2113 11.1637H18.4638V8.62669C18.4638 7.6511 18.6587 7.10397 19.9079 7.10397H22.0939L22.1726 3.90237C22.1726 3.90237 21.197 3.74623 19.7917 3.74623C16.3565 3.74623 14.8338 5.89353 14.8338 8.19698V11.1637H12.2967V14.5989H14.8338V24.1238H18.4638V14.5989Z"
      fill="black"
    />
  </svg>
);

const LinkedIn = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 26 26"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.9194 0.00233189H2.2262C1.94659 -0.0107653 1.66713 0.0314029 1.40384 0.126447C1.14055 0.221491 0.898589 0.367526 0.691796 0.556184C0.485019 0.744858 0.317469 0.972467 0.198766 1.22596C0.0800622 1.47947 0.0125122 1.7539 0 2.03354V23.7756C0.0163796 24.3607 0.256191 24.9176 0.670183 25.3315C1.08417 25.7455 1.64095 25.9854 2.2262 26.0018H23.9194C24.4883 25.9764 25.0248 25.7291 25.4136 25.313C25.8025 24.8968 26.0127 24.345 25.9994 23.7756V2.03354C26.0041 1.76135 25.9531 1.49111 25.8496 1.23933C25.7461 0.987579 25.5922 0.759613 25.3974 0.569411C25.2027 0.379226 24.9711 0.230835 24.717 0.133321C24.4628 0.0358066 24.1915 -0.0087666 23.9194 0.00233189ZM8.12481 21.6794H4.33865V10.0934H8.12481V21.6794ZM6.3211 8.33839C6.0569 8.3476 5.79364 8.30207 5.54788 8.20467C5.30211 8.10727 5.07913 7.9601 4.89297 7.7724C4.7068 7.5847 4.56145 7.36054 4.46606 7.11398C4.37066 6.86743 4.32729 6.60381 4.33865 6.33969C4.32697 6.07271 4.37121 5.80624 4.46857 5.55738C4.56592 5.3085 4.71421 5.08273 4.90393 4.89454C5.09366 4.70634 5.32062 4.55988 5.57026 4.46456C5.81992 4.36922 6.08674 4.32714 6.3536 4.34098C6.61781 4.33179 6.88107 4.3773 7.12683 4.4747C7.3726 4.5721 7.59558 4.71927 7.78174 4.90697C7.96791 5.09467 8.11326 5.31884 8.20865 5.56539C8.30405 5.81195 8.34742 6.07556 8.33606 6.33969C8.34774 6.60667 8.30349 6.87313 8.20614 7.12199C8.10879 7.37087 7.9605 7.59665 7.77078 7.78483C7.58105 7.97304 7.35409 8.11949 7.10445 8.21481C6.85479 8.31015 6.58797 8.35224 6.3211 8.33839ZM21.677 21.6794H17.8746V15.342C17.8746 13.8308 17.3384 12.7908 15.9896 12.7908C15.5707 12.7944 15.163 12.9275 14.8227 13.1719C14.4823 13.4163 14.2259 13.76 14.0884 14.1558C13.9828 14.4525 13.9386 14.7676 13.9584 15.082V21.6794H10.221V10.0934H13.9584V11.7184C14.2907 11.1079 14.7852 10.6012 15.3874 10.2541C15.9896 9.90718 16.676 9.73344 17.3709 9.75211C19.8245 9.75211 21.677 11.3771 21.677 14.8383V21.6794Z"
      fill="black"
    />
  </svg>
);

export const social_icon = [
  {
    id: 0,
    name: "Twitter",
    Icon: TwitterIcon,
  },
  {
    id: 1,
    name: "Instagram",
    Icon: InstagramIcon,
  },
  {
    id: 2,
    name: "Facebook",
    Icon: FacebookIcon,
  },
  {
    id: 3,
    name: "LinkedIn",
    Icon: LinkedIn,
  },
];

export const navigation = [
  { id: 0, href: "#About", name: "About" },
  {
    id: 1,
    href: "#Product",
    name: "Product",
  },
  {
    id: 2,
    href: "#Gallery",
    name: "Gallery",
  },
  {
    id: 3,
    href: "#FAQs",
    name: "FAQs",
  },
];

export const customer_support = [
  {
    id: 0,
    text: "Shipping & Delivery",
  },
  {
    id: 1,
    text: "Help / FAQs",
  },
  {
    id: 2,
    text: "Returns & Exchange",
  },
  {
    id: 3,
    text: "Warranty / Product Care",
  },
];

export const company = [
  {
    id: 0,
    text: "Privacy Policy",
  },
  {
    id: 1,
    text: "Cookie Policy",
  },
  {
    id: 2,
    text: "Terms & Condition",
  },
];

export const help_center = [
  {
    id: 0,
    text: "+91 98765 43210",
  },
  {
    id: 1,
    text: "support.furnivo@gmail.com",
  },
  {
    id: 2,
    text: `123 Heritage Lane, Block B, Sector 21,
    New Delhi, Delhi 110001, India`,
  },
];
