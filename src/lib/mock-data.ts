// Mock data for the U2U sell flow

export const sellCategories = [
  {
    id: "mobile",
    name: "Mobile",
    slug: "mobile",
    icon: "https://s3ng.cashify.in/cashify/web/045e5efa148a4fb9b0884388afaf1d2c.webp",
    description: "Sell your old smartphone and get instant cash",
    popular: true,
  },
  {
    id: "laptop",
    name: "Laptop",
    slug: "laptop",
    icon: "https://s3ng.cashify.in/cashify/web/8936e5c504884511aed545c490604782.webp",
    description: "Sell your used laptop at best prices",
    popular: true,
  },
  {
    id: "tablet",
    name: "Tablet",
    slug: "tablet",
    icon: "https://s3ng.cashify.in/cashify/web/efc7f78a7f1341a38fb4cb84c59f8dc6.webp",
    description: "Get value for your old iPad or Android tablet",
    popular: false,
  },
  {
    id: "watch",
    name: "Smartwatch",
    slug: "watch",
    icon: "https://s3ng.cashify.in/cashify/web/f7266ab933a44b56a6d296fa3746ed55.webp",
    description: "Sell your Apple Watch, Galaxy Watch, or Fitbit",
    popular: false,
  },
  {
    id: "desktop",
    name: "Desktop",
    slug: "desktop",
    icon: "https://s3ng.cashify.in/cashify/web/7da72ed7785f44c4a28c3530e5dc4025.webp",
    description: "Sell your old desktop computer",
    popular: false,
  },
  {
    id: "camera",
    name: "Camera",
    slug: "camera",
    icon: "https://s3ng.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?w=300",
    description: "DSLR, Mirrorless, and Point & Shoot cameras",
    popular: false,
  },
];

export const brandsByCategory: Record<string, Array<{ id: string; name: string; logo: string }>> = {
  mobile: [
    { id: "apple", name: "Apple", logo: "https://s3ng.cashify.in/builder/893fda6dd4c94ccaade0ab6b5dc114b2.svg" },
    { id: "samsung", name: "Samsung", logo: "https://s3ng.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?w=300" },
    { id: "oneplus", name: "OnePlus", logo: "https://s3ng.cashify.in/builder/b35c134330e5422699aed92d1254789d.webp?w=300" },
    { id: "xiaomi", name: "Xiaomi", logo: "https://s3ng.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?w=300" },
    { id: "realme", name: "Realme", logo: "https://s3ng.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?w=300" },
    { id: "oppo", name: "OPPO", logo: "https://s3ng.cashify.in/builder/ed7d743ec18f40f6b0cbb58bc6783d5b.webp?w=300" },
    { id: "vivo", name: "Vivo", logo: "https://s3ng.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?w=300" },
    { id: "google", name: "Google", logo: "https://s3ng.cashify.in/builder/5aba5b44686349a4a54d457016a257ac.webp?w=300" },
    { id: "nothing", name: "Nothing", logo: "https://s3ng.cashify.in/builder/893fda6dd4c94ccaade0ab6b5dc114b2.svg" },
    { id: "motorola", name: "Motorola", logo: "https://s3ng.cashify.in/builder/5aba5b44686349a4a54d457016a257ac.webp?w=300" },
  ],
  laptop: [
    { id: "apple", name: "Apple", logo: "https://s3ng.cashify.in/builder/893fda6dd4c94ccaade0ab6b5dc114b2.svg" },
    { id: "dell", name: "Dell", logo: "https://s3ng.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?w=300" },
    { id: "hp", name: "HP", logo: "https://s3ng.cashify.in/builder/b35c134330e5422699aed92d1254789d.webp?w=300" },
    { id: "lenovo", name: "Lenovo", logo: "https://s3ng.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?w=300" },
    { id: "asus", name: "ASUS", logo: "https://s3ng.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?w=300" },
    { id: "acer", name: "Acer", logo: "https://s3ng.cashify.in/builder/ed7d743ec18f40f6b0cbb58bc6783d5b.webp?w=300" },
    { id: "msi", name: "MSI", logo: "https://s3ng.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?w=300" },
  ],
  tablet: [
    { id: "apple", name: "Apple", logo: "https://s3ng.cashify.in/builder/893fda6dd4c94ccaade0ab6b5dc114b2.svg" },
    { id: "samsung", name: "Samsung", logo: "https://s3ng.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?w=300" },
    { id: "xiaomi", name: "Xiaomi", logo: "https://s3ng.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?w=300" },
    { id: "lenovo", name: "Lenovo", logo: "https://s3ng.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?w=300" },
  ],
  watch: [
    { id: "apple", name: "Apple", logo: "https://s3ng.cashify.in/builder/893fda6dd4c94ccaade0ab6b5dc114b2.svg" },
    { id: "samsung", name: "Samsung", logo: "https://s3ng.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?w=300" },
    { id: "garmin", name: "Garmin", logo: "https://s3ng.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?w=300" },
    { id: "fitbit", name: "Fitbit", logo: "https://s3ng.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?w=300" },
  ],
  desktop: [
    { id: "dell", name: "Dell", logo: "https://s3ng.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?w=300" },
    { id: "hp", name: "HP", logo: "https://s3ng.cashify.in/builder/b35c134330e5422699aed92d1254789d.webp?w=300" },
    { id: "lenovo", name: "Lenovo", logo: "https://s3ng.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?w=300" },
  ],
  camera: [
    { id: "canon", name: "Canon", logo: "https://s3ng.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?w=300" },
    { id: "nikon", name: "Nikon", logo: "https://s3ng.cashify.in/builder/b35c134330e5422699aed92d1254789d.webp?w=300" },
    { id: "sony", name: "Sony", logo: "https://s3ng.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?w=300" },
    { id: "fujifilm", name: "Fujifilm", logo: "https://s3ng.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?w=300" },
  ],
};

export const modelsByBrand: Record<string, Array<{ id: string; name: string; basePrice: number; image: string; storage: string[] }>> = {
  "apple-mobile": [
    { id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", basePrice: 80000, image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", storage: ["128GB", "256GB", "512GB", "1TB"] },
    { id: "iphone-14-pro", name: "iPhone 14 Pro", basePrice: 70000, image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", storage: ["128GB", "256GB", "512GB", "1TB"] },
    { id: "iphone-14", name: "iPhone 14", basePrice: 55000, image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", storage: ["128GB", "256GB", "512GB"] },
    { id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", basePrice: 65000, image: "https://s3ng.cashify.in/cashify/store/product/0b56deabd15c4fff836fb60516f65337.png", storage: ["128GB", "256GB", "512GB", "1TB"] },
    { id: "iphone-13-pro", name: "iPhone 13 Pro", basePrice: 58000, image: "https://s3ng.cashify.in/cashify/store/product/0b56deabd15c4fff836fb60516f65337.png", storage: ["128GB", "256GB", "512GB", "1TB"] },
    { id: "iphone-13", name: "iPhone 13", basePrice: 48000, image: "https://s3ng.cashify.in/cashify/store/product/0b56deabd15c4fff836fb60516f65337.png", storage: ["128GB", "256GB", "512GB"] },
    { id: "iphone-12", name: "iPhone 12", basePrice: 35000, image: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png", storage: ["64GB", "128GB", "256GB"] },
    { id: "iphone-se-3", name: "iPhone SE (3rd Gen)", basePrice: 22000, image: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png", storage: ["64GB", "128GB", "256GB"] },
  ],
  "samsung-mobile": [
    { id: "s23-ultra", name: "Galaxy S23 Ultra", basePrice: 65000, image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", storage: ["256GB", "512GB", "1TB"] },
    { id: "s23-plus", name: "Galaxy S23+", basePrice: 50000, image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", storage: ["256GB", "512GB"] },
    { id: "s23", name: "Galaxy S23", basePrice: 42000, image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", storage: ["128GB", "256GB"] },
    { id: "s22-ultra", name: "Galaxy S22 Ultra", basePrice: 48000, image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", storage: ["128GB", "256GB", "512GB"] },
    { id: "z-fold-5", name: "Galaxy Z Fold 5", basePrice: 95000, image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", storage: ["256GB", "512GB", "1TB"] },
    { id: "z-flip-5", name: "Galaxy Z Flip 5", basePrice: 55000, image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", storage: ["256GB", "512GB"] },
    { id: "a54", name: "Galaxy A54", basePrice: 22000, image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", storage: ["128GB", "256GB"] },
  ],
  "oneplus-mobile": [
    { id: "oneplus-12", name: "OnePlus 12", basePrice: 52000, image: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png", storage: ["256GB", "512GB"] },
    { id: "oneplus-11", name: "OnePlus 11", basePrice: 35000, image: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png", storage: ["128GB", "256GB"] },
    { id: "oneplus-10-pro", name: "OnePlus 10 Pro", basePrice: 28000, image: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png", storage: ["128GB", "256GB"] },
    { id: "oneplus-open", name: "OnePlus Open", basePrice: 85000, image: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png", storage: ["512GB", "1TB"] },
  ],
  "apple-laptop": [
    { id: "macbook-pro-16-m3", name: "MacBook Pro 16\" M3", basePrice: 180000, image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg", storage: ["512GB", "1TB", "2TB"] },
    { id: "macbook-pro-14-m3", name: "MacBook Pro 14\" M3", basePrice: 150000, image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg", storage: ["512GB", "1TB", "2TB"] },
    { id: "macbook-air-15-m2", name: "MacBook Air 15\" M2", basePrice: 95000, image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg", storage: ["256GB", "512GB", "1TB"] },
    { id: "macbook-air-13-m2", name: "MacBook Air 13\" M2", basePrice: 78000, image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg", storage: ["256GB", "512GB", "1TB"] },
    { id: "macbook-air-m1", name: "MacBook Air M1", basePrice: 60000, image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg", storage: ["256GB", "512GB"] },
  ],
};

// Questions for the sell flow
export const deviceQuestions = [
  {
    id: "screen-condition",
    question: "How is the screen condition?",
    options: [
      { id: "perfect", label: "Perfect - No scratches", deduction: 0 },
      { id: "minor", label: "Minor scratches visible under light", deduction: 5 },
      { id: "visible", label: "Visible scratches", deduction: 15 },
      { id: "cracked", label: "Cracked/Dead pixels", deduction: 40 },
    ],
  },
  {
    id: "body-condition",
    question: "How is the body/back condition?",
    options: [
      { id: "perfect", label: "Perfect - Like new", deduction: 0 },
      { id: "minor", label: "Minor dents/scuffs", deduction: 5 },
      { id: "visible", label: "Visible dents/scratches", deduction: 15 },
      { id: "heavy", label: "Heavy damage", deduction: 30 },
    ],
  },
  {
    id: "age",
    question: "How old is your device?",
    options: [
      { id: "3m", label: "Less than 3 months", deduction: 0 },
      { id: "6m", label: "3-6 months", deduction: 5 },
      { id: "1y", label: "6 months - 1 year", deduction: 10 },
      { id: "2y", label: "1-2 years", deduction: 20 },
      { id: "3y", label: "2+ years", deduction: 35 },
    ],
  },
  {
    id: "battery-health",
    question: "Battery Health",
    options: [
      { id: "excellent", label: "Above 90%", deduction: 0 },
      { id: "good", label: "80-90%", deduction: 10 },
      { id: "fair", label: "70-80%", deduction: 25 },
      { id: "poor", label: "Below 70%", deduction: 40 },
    ],
  },
  {
    id: "accessories",
    question: "Original accessories available?",
    options: [
      { id: "all", label: "Box + Charger + Cable + Bill", deduction: 0 },
      { id: "charger", label: "Only Charger", deduction: 2 },
      { id: "none", label: "None", deduction: 5 },
    ],
  },
  {
    id: "warranty",
    question: "Device warranty status?",
    options: [
      { id: "valid", label: "Brand warranty valid", deduction: 0 },
      { id: "expired", label: "Warranty expired", deduction: 5 },
    ],
  },
];
