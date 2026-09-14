export const product = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    brand: "Apple",
    category: "Smartphone",

    price: 14990000,
    oldPrice: 15990000,
    discount: 6,

    stock: 12,
    rating: 4.9,
    reviews: 245,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Titanium korpusli premium Apple smartfoni. Kuchli kamera tizimi, yuqori unumdorlik va uzoq ishlaydigan batareya bilan kundalik foydalanish va professional vazifalar uchun mos.",

    shortDescription: "Premium titanium dizayn, kuchli kamera va A17 Pro chip.",

    sku: "APL-IP15PM-256",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: ["256GB", "512GB", "1TB"],
    ram: "8GB",
    colors: ["Black Titanium", "White Titanium", "Blue Titanium"],

    tags: ["new", "top", "apple", "premium"],

    features: [
      "A17 Pro chip",
      "48MP asosiy kamera",
      "Super Retina XDR display",
      "USB-C",
      "Face ID",
      "5G",
    ],

    specifications: {
      display: "6.7-inch Super Retina XDR",
      resolution: "2796 × 1290",
      processor: "Apple A17 Pro",
      ram: "8GB",
      storage: "256GB",
      mainCamera: "48MP + 12MP + 12MP",
      frontCamera: "12MP",
      battery: "4441 mAh",
      operatingSystem: "iOS",
      weight: "221g",
    },
  },

  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    brand: "Samsung",
    category: "Smartphone",

    price: 13990000,
    oldPrice: 14990000,
    discount: 7,

    stock: 18,
    rating: 4.8,
    reviews: 318,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Samsung Galaxy S24 Ultra — katta AMOLED displey, kuchli kamera tizimi va S Pen bilan premium Android tajribasini taqdim etadi.",

    shortDescription:
      "AI funksiyalari, S Pen va professional kamera tizimiga ega premium smartfon.",

    sku: "SAM-S24U-256",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: ["256GB", "512GB", "1TB"],
    ram: "12GB",
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet"],

    tags: ["new", "top", "samsung", "android"],

    features: [
      "Snapdragon 8 Gen 3",
      "200MP asosiy kamera",
      "S Pen",
      "120Hz AMOLED display",
      "AI features",
      "5G",
    ],

    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      resolution: "3120 × 1440",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      mainCamera: "200MP + 50MP + 12MP + 10MP",
      frontCamera: "12MP",
      battery: "5000 mAh",
      operatingSystem: "Android",
      weight: "232g",
    },
  },

  {
    id: 3,
    title: "MacBook Air M4",
    slug: "macbook-air-m4",
    brand: "Apple",
    category: "Laptop",

    price: 18990000,
    oldPrice: 19990000,
    discount: 5,

    stock: 5,
    rating: 4.9,
    reviews: 321,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image:
      "https://images.unsplash.com/photo-1657770295015-79b98a3e37ac?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Apple M4 chipli yengil va kuchli MacBook Air. Dasturlash, dizayn, o‘qish va kundalik professional ishlarda yuqori unumdorlik beradi.",

    shortDescription:
      "Yengil korpus, M4 chip va uzoq batareya ishlashiga ega zamonaviy noutbuk.",

    sku: "APL-MBA-M4-256",
    warranty: "1 yil",
    delivery: "1-3 ish kuni",

    storage: ["256GB", "512GB", "1TB"],
    ram: "16GB",
    colors: ["Silver", "Space Gray", "Midnight"],

    tags: ["laptop", "apple", "m4", "popular"],

    features: [
      "Apple M4 chip",
      "13.6-inch Liquid Retina",
      "16GB unified memory",
      "18-hour battery",
      "Wi-Fi 6E",
      "MagSafe charging",
    ],

    specifications: {
      display: "13.6-inch Liquid Retina",
      resolution: "2560 × 1664",
      processor: "Apple M4",
      ram: "16GB",
      storage: "256GB SSD",
      graphics: "Integrated GPU",
      battery: "Up to 18 hours",
      operatingSystem: "macOS",
      weight: "1.24kg",
    },
  },

  {
    id: 4,
    title: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    brand: "Sony",
    category: "Headphones",

    price: 4290000,
    oldPrice: 4690000,
    discount: 9,

    stock: 24,
    rating: 4.7,
    reviews: 187,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Sony WH-1000XM5 premium simsiz quloqchinlari kuchli shovqinni bostirish, tiniq ovoz va uzoq batareya ishlashini taklif qiladi.",

    shortDescription:
      "Premium ovoz sifati va kuchli Active Noise Cancellation.",

    sku: "SONY-XM5-BLK",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: null,
    ram: null,
    colors: ["Black", "Silver"],

    tags: ["audio", "sony", "wireless", "premium"],

    features: [
      "Active Noise Cancellation",
      "30-hour battery",
      "Bluetooth 5.2",
      "Multipoint connection",
      "Fast charging",
      "Built-in microphone",
    ],

    specifications: {
      type: "Over-ear headphones",
      connectivity: "Bluetooth 5.2",
      battery: "Up to 30 hours",
      charging: "USB-C",
      microphone: "Built-in",
      weight: "250g",
    },
  },
  {
    id: 5,
    title: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    brand: "Samsung",
    category: "Smartphone",
    price: 13490000,
    oldPrice: 14990000,
    discount: 10,
    stock: 18,
    rating: 4.8,
    reviews: 318,
    count: 0,
    isFavorite: false,
    isInCart: false,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&h=900&q=80",
    description:
      "Premium Android smartfoni, kuchli kamera va yorqin AMOLED displey bilan.",
    colors: ["Black", "Gray", "Violet"],
    tags: ["new", "top", "samsung"],
  },

  {
    id: 6,
    title: "Anker 737 Power Bank",
    slug: "anker-737-power-bank",
    brand: "Anker",
    category: "Power Bank",
    price: 1890000,
    oldPrice: 2190000,
    discount: 14,
    stock: 20,
    rating: 4.8,
    reviews: 156,
    count: 0,
    isFavorite: false,
    isInCart: false,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&h=900&q=80",
    description:
      "Yuqori quvvatli premium power bank. Bir nechta qurilmani tez quvvatlash uchun mo‘ljallangan.",
    colors: ["Black"],
    tags: ["anker", "powerbank", "portable"],
  },


  {
    id: 7,
    title: "MacBook Air M2",
    slug: "macbook-air-m2",
    brand: "Apple",
    category: "Laptop",

    price: 16990000,
    oldPrice: 18490000,
    discount: 8,

    stock: 9,
    rating: 4.9,
    reviews: 187,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Yupqa va yengil korpusda joylashgan kuchli M2 chipli noutbuk. Fan yo'qligiga qaramay yuqori unumdorlik va uzoq batareya ishlash vaqtini ta'minlaydi.",

    shortDescription: "M2 chip, yengil korpus va uzoq batareya vaqti.",

    sku: "APL-MBA-M2-256",
    warranty: "1 yil",
    delivery: "1-3 ish kuni",

    storage: ["256GB", "512GB"],
    ram: "8GB",
    colors: ["Midnight", "Starlight", "Space Gray"],

    tags: ["apple", "laptop", "top"],

    features: [
      "Apple M2 chip",
      "13.6-inch Liquid Retina",
      "1080p FaceTime kamera",
      "MagSafe zaryadlash",
      "Fanless dizayn",
    ],

    specifications: {
      display: "13.6-inch Liquid Retina",
      resolution: "2560 × 1664",
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB",
      mainCamera: "-",
      frontCamera: "1080p",
      battery: "52.6Wh (18 soatgacha)",
      operatingSystem: "macOS",
      weight: "1.24kg",
    },
  },
  {
    id: 8,
    title: "Dell XPS 15",
    slug: "dell-xps-15",
    brand: "Dell",
    category: "Laptop",

    price: 21990000,
    oldPrice: 23990000,
    discount: 8,

    stock: 6,
    rating: 4.7,
    reviews: 94,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Professional vazifalar va kreativ ishlar uchun mo'ljallangan kuchli noutbuk. InfinityEdge displey va zamonaviy dizayn bilan.",

    shortDescription: "Intel Core i7, RTX grafika va 4K OLED displey.",

    sku: "DEL-XPS15-512",
    warranty: "2 yil",
    delivery: "2-4 ish kuni",

    storage: ["512GB", "1TB"],
    ram: "16GB",
    colors: ["Platinum Silver", "Graphite"],

    tags: ["dell", "laptop", "pro"],

    features: [
      "Intel Core i7-13700H",
      "NVIDIA RTX 4050",
      "4K OLED InfinityEdge",
      "Thunderbolt 4",
      "Backlit klaviatura",
    ],

    specifications: {
      display: "15.6-inch 4K OLED",
      resolution: "3840 × 2400",
      processor: "Intel Core i7-13700H",
      ram: "16GB",
      storage: "512GB SSD",
      mainCamera: "-",
      frontCamera: "720p",
      battery: "86Wh",
      operatingSystem: "Windows 11",
      weight: "1.92kg",
    },
  },
  {
    id: 9,
    title: "iPad Pro 12.9 M2",
    slug: "ipad-pro-12-9-m2",
    brand: "Apple",
    category: "Tablet",

    price: 15990000,
    oldPrice: 16990000,
    discount: 6,

    stock: 14,
    rating: 4.8,
    reviews: 156,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Liquid Retina XDR displey va M2 chip bilan professional planshet. Grafika, video montaj va kundalik vazifalar uchun ideal.",

    shortDescription: "M2 chip, Liquid Retina XDR displey, Apple Pencil qo'llab-quvvatlaydi.",

    sku: "APL-IPADPRO-256",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: ["256GB", "512GB", "1TB"],
    ram: "8GB",
    colors: ["Space Gray", "Silver"],

    tags: ["apple", "tablet", "premium"],

    features: [
      "Apple M2 chip",
      "Liquid Retina XDR",
      "Face ID",
      "Apple Pencil (2-avlod) qo'llab-quvvatlash",
      "5G (ixtiyoriy)",
    ],

    specifications: {
      display: "12.9-inch Liquid Retina XDR",
      resolution: "2732 × 2048",
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB",
      mainCamera: "12MP + 10MP",
      frontCamera: "12MP",
      battery: "40.88Wh (10 soatgacha)",
      operatingSystem: "iPadOS",
      weight: "682g",
    },
  },
  {
    id: 10,
    title: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    brand: "Sony",
    category: "Headphones",

    price: 4290000,
    oldPrice: 4790000,
    discount: 10,

    stock: 27,
    rating: 4.9,
    reviews: 421,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Sanoatda yetakchi shovqinni bekor qilish texnologiyasiga ega simsiz quloqchinlar. Aniq tovush sifati va qulay dizayn bilan uzoq muddatli foydalanish uchun mos.",

    shortDescription: "Premium shovqinni bekor qilish va 30 soatgacha batareya.",

    sku: "SNY-WH1000XM5",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black", "Silver"],

    tags: ["sony", "audio", "top"],

    features: [
      "Active Noise Cancelling",
      "30 soatgacha batareya",
      "Multipoint ulanish",
      "Touch boshqaruv",
      "Tez zaryadlash",
    ],

    specifications: {
      display: "-",
      resolution: "-",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "30 soat (ANC yoqilgan)",
      operatingSystem: "-",
      weight: "250g",
    },
  },
  {
    id: 11,
    title: "LG OLED C3 55-inch",
    slug: "lg-oled-c3-55",
    brand: "LG",
    category: "TV",

    price: 18990000,
    oldPrice: 20990000,
    discount: 10,

    stock: 5,
    rating: 4.8,
    reviews: 78,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "4K OLED texnologiyasiga ega smart televizor. Chuqur qora ranglar, yuqori kontrast va o'yinlar uchun 120Hz yangilanish tezligi bilan.",

    shortDescription: "4K OLED, 120Hz, webOS smart platforma.",

    sku: "LG-OLEDC3-55",
    warranty: "2 yil",
    delivery: "2-4 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black"],

    tags: ["lg", "tv", "premium"],

    features: [
      "4K OLED panel",
      "120Hz yangilanish tezligi",
      "webOS 23",
      "Dolby Vision & Atmos",
      "4x HDMI 2.1",
    ],

    specifications: {
      display: "55-inch OLED",
      resolution: "3840 × 2160",
      processor: "α9 Gen6 AI",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "-",
      operatingSystem: "webOS 23",
      weight: "18.9kg",
    },
  },
  {
    id: 12,
    title: "Sony PlayStation 5",
    slug: "sony-playstation-5",
    brand: "Sony",
    category: "Gaming",

    price: 7990000,
    oldPrice: 8490000,
    discount: 6,

    stock: 11,
    rating: 4.9,
    reviews: 389,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Keyingi avlod o'yin konsoli. Tezkor SSD, 4K grafika va haptik qo'llab-quvvatlash bilan yangi o'yin tajribasini taqdim etadi.",

    shortDescription: "4K gaming, tezkor SSD va DualSense kontroller.",

    sku: "SNY-PS5-825",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: ["825GB"],
    ram: "16GB",
    colors: ["White"],

    tags: ["sony", "gaming", "top"],

    features: [
      "Custom SSD",
      "4K/120Hz qo'llab-quvvatlash",
      "Ray tracing",
      "DualSense haptik kontroller",
      "3D Audio",
    ],

    specifications: {
      display: "-",
      resolution: "4K",
      processor: "AMD Zen 2 8-core",
      ram: "16GB GDDR6",
      storage: "825GB SSD",
      mainCamera: "-",
      frontCamera: "-",
      battery: "-",
      operatingSystem: "PS5 OS",
      weight: "4.5kg",
    },
  },
  {
    id: 13,
    title: "Canon EOS R50",
    slug: "canon-eos-r50",
    brand: "Canon",
    category: "Camera",

    price: 9990000,
    oldPrice: 10990000,
    discount: 9,

    stock: 8,
    rating: 4.6,
    reviews: 52,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Boshlang'ich va o'rta darajadagi fotograflar uchun mo'ljallangan mirrorless kamera. Yengil korpus va yuqori sifatli video imkoniyatlari bilan.",

    shortDescription: "24.2MP sensor, 4K video, tezkor autofokus.",

    sku: "CAN-EOSR50-KIT",
    warranty: "1 yil",
    delivery: "2-3 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black", "White"],

    tags: ["canon", "camera"],

    features: [
      "24.2MP APS-C sensor",
      "4K30p video",
      "Dual Pixel CMOS AF II",
      "Vari-angle tach displey",
      "Wi-Fi va Bluetooth",
    ],

    specifications: {
      display: "3-inch Vari-angle",
      resolution: "24.2MP",
      processor: "DIGIC X",
      ram: "-",
      storage: "SD card",
      mainCamera: "24.2MP APS-C",
      frontCamera: "-",
      battery: "370 kadr",
      operatingSystem: "-",
      weight: "375g",
    },
  },
  {
    id: 14,
    title: "HP LaserJet Pro M404dn",
    slug: "hp-laserjet-pro-m404dn",
    brand: "HP",
    category: "Printer",

    price: 3290000,
    oldPrice: 3590000,
    discount: 8,

    stock: 15,
    rating: 4.4,
    reviews: 36,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Ofis va uy uchun tezkor qora-oq lazerli printer. Avtomatik ikki tomonlama chop etish va tarmoq ulanishini qo'llab-quvvatlaydi.",

    shortDescription: "Tezkor lazerli chop etish va tarmoq ulanishi.",

    sku: "HP-LJM404DN",
    warranty: "1 yil",
    delivery: "2-3 ish kuni",

    storage: [],
    ram: "256MB",
    colors: ["White"],

    tags: ["hp", "office"],

    features: [
      "38 bet/daqiqa tezlik",
      "Avtomatik dupleks chop etish",
      "Ethernet ulanishi",
      "USB 2.0",
      "Kam quvvat sarfi",
    ],

    specifications: {
      display: "2-line LCD",
      resolution: "1200 x 1200 dpi",
      processor: "800 MHz",
      ram: "256MB",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "-",
      operatingSystem: "-",
      weight: "8.5kg",
    },
  },
  {
    id: 15,
    title: "Anker PowerCore 20000mAh",
    slug: "anker-powercore-20000",
    brand: "Anker",
    category: "Power Bank",

    price: 590000,
    oldPrice: 690000,
    discount: 14,

    stock: 60,
    rating: 4.6,
    reviews: 289,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Yuqori sig'imli portativ quvvat banki. Safar va kundalik foydalanish uchun bir necha marta to'liq zaryadlash imkonini beradi.",

    shortDescription: "20000mAh sig'im, tezkor zaryadlash, ikkita USB port.",

    sku: "ANK-PC20000",
    warranty: "18 oy",
    delivery: "1-2 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black", "Blue"],

    tags: ["anker", "accessory"],

    features: [
      "20000mAh sig'im",
      "PowerIQ tezkor zaryadlash",
      "2x USB-A, 1x USB-C",
      "Kichik va yengil dizayn",
      "Ko'p qurilmali himoya",
    ],

    specifications: {
      display: "-",
      resolution: "-",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "20000 mAh",
      operatingSystem: "-",
      weight: "356g",
    },
  },
  {
    id: 16,
    title: "Logitech MX Keys",
    slug: "logitech-mx-keys",
    brand: "Logitech",
    category: "Keyboard",

    price: 1290000,
    oldPrice: 1490000,
    discount: 13,

    stock: 22,
    rating: 4.7,
    reviews: 145,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Professional foydalanuvchilar uchun simsiz klaviatura. Yoritilgan tugmalar va bir necha qurilma orasida almashish imkoniyati bilan.",

    shortDescription: "Simsiz, yoritilgan tugmalar, ko'p qurilmali ulanish.",

    sku: "LOG-MXKEYS",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Graphite", "Pale Gray"],

    tags: ["logitech", "accessory"],

    features: [
      "Smart Illumination",
      "3 qurilma orasida almashish",
      "Bluetooth va USB receiver",
      "10 kungacha batareya",
      "USB-C zaryadlash",
    ],

    specifications: {
      display: "-",
      resolution: "-",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "10 kungacha (yoritish bilan)",
      operatingSystem: "Windows/macOS/Linux",
      weight: "810g",
    },
  },
  {
    id: 17,
    title: "Logitech MX Master 3S",
    slug: "logitech-mx-master-3s",
    brand: "Logitech",
    category: "Mouse",

    price: 990000,
    oldPrice: 1190000,
    discount: 17,

    stock: 34,
    rating: 4.8,
    reviews: 231,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Yuqori aniqlikdagi sensorga ega professional simsiz sichqoncha. Silliq g'ildirak va ergonomik dizayn bilan uzoq muddatli qulaylikni ta'minlaydi.",

    shortDescription: "8000 DPI sensor, jimjit tugmalar, ergonomik dizayn.",

    sku: "LOG-MXM3S",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Graphite", "Pale Gray"],

    tags: ["logitech", "accessory", "top"],

    features: [
      "8000 DPI aniqlik",
      "Quiet Click texnologiyasi",
      "MagSpeed g'ildirak",
      "70 kungacha batareya",
      "USB-C tezkor zaryadlash",
    ],

    specifications: {
      display: "-",
      resolution: "-",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "70 kungacha",
      operatingSystem: "Windows/macOS/Linux",
      weight: "141g",
    },
  },
  {
    id: 18,
    title: "Samsung Odyssey G7 27-inch",
    slug: "samsung-odyssey-g7-27",
    brand: "Samsung",
    category: "Monitor",

    price: 6490000,
    oldPrice: 7290000,
    discount: 11,

    stock: 10,
    rating: 4.7,
    reviews: 88,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "O'yinchilar uchun mo'ljallangan egiluvchan gaming monitor. Yuqori yangilanish tezligi va tezkor javob berish vaqti bilan.",

    shortDescription: "240Hz, 1ms javob vaqti, 1000R egiluvchan ekran.",

    sku: "SAM-ODYG7-27",
    warranty: "2 yil",
    delivery: "2-3 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black"],

    tags: ["samsung", "gaming", "monitor"],

    features: [
      "240Hz yangilanish tezligi",
      "1ms javob vaqti",
      "1000R egiluvchanlik",
      "QHD rezolyutsiya",
      "G-Sync/FreeSync qo'llab-quvvatlash",
    ],

    specifications: {
      display: "27-inch QLED",
      resolution: "2560 × 1440",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "-",
      operatingSystem: "-",
      weight: "6.9kg",
    },
  },
  {
    id: 19,
    title: "JBL Charge 5",
    slug: "jbl-charge-5",
    brand: "JBL",
    category: "Speaker",

    price: 1690000,
    oldPrice: 1890000,
    discount: 11,

    stock: 29,
    rating: 4.8,
    reviews: 267,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Suv o'tkazmaydigan portativ Bluetooth dinamik. Kuchli bas va uzoq batareya ishlash vaqti bilan tashqarida dam olish uchun ideal.",

    shortDescription: "IP67 himoya, kuchli bas, 20 soatgacha batareya.",

    sku: "JBL-CHARGE5",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black", "Blue", "Red", "Camo"],

    tags: ["jbl", "audio"],

    features: [
      "IP67 suv va chang himoyasi",
      "20 soatgacha batareya",
      "PartyBoost qo'llab-quvvatlash",
      "Powerbank funksiyasi",
      "Bluetooth 5.1",
    ],

    specifications: {
      display: "-",
      resolution: "-",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "20 soat",
      operatingSystem: "-",
      weight: "960g",
    },
  },
  {
    id: 20,
    title: "ASUS ROG Strix G16",
    slug: "asus-rog-strix-g16",
    brand: "ASUS",
    category: "Laptop",

    price: 24990000,
    oldPrice: 26990000,
    discount: 7,

    stock: 4,
    rating: 4.7,
    reviews: 61,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Yuqori unumdorlikka ega gaming noutbuk. Kuchli protsessor va grafik karta bilan zamonaviy o'yinlarni yuqori sozlamalarda ishga tushiradi.",

    shortDescription: "Intel Core i9, RTX 4070, 165Hz displey.",

    sku: "ASU-ROGG16-1TB",
    warranty: "2 yil",
    delivery: "2-4 ish kuni",

    storage: ["1TB"],
    ram: "32GB",
    colors: ["Eclipse Gray"],

    tags: ["asus", "gaming", "laptop"],

    features: [
      "Intel Core i9-13980HX",
      "NVIDIA RTX 4070",
      "165Hz QHD displey",
      "RGB klaviatura",
      "Kuchli sovutish tizimi",
    ],

    specifications: {
      display: "16-inch QHD+",
      resolution: "2560 × 1600",
      processor: "Intel Core i9-13980HX",
      ram: "32GB",
      storage: "1TB SSD",
      mainCamera: "-",
      frontCamera: "720p",
      battery: "90Wh",
      operatingSystem: "Windows 11",
      weight: "2.5kg",
    },
  },
  {
    id: 21,
    title: "GoPro HERO12 Black",
    slug: "gopro-hero12-black",
    brand: "GoPro",
    category: "Camera",

    price: 5490000,
    oldPrice: 5990000,
    discount: 8,

    stock: 13,
    rating: 4.6,
    reviews: 97,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Ekstremal sport va sayohatlar uchun mo'ljallangan kichik va chidamli ekshn-kamera. Suv ostida ham yuqori sifatli video suratga oladi.",

    shortDescription: "5.3K video, HyperSmooth stabilizatsiya, suvga chidamli.",

    sku: "GPR-H12BLK",
    warranty: "1 yil",
    delivery: "2-3 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black"],

    tags: ["gopro", "camera", "action"],

    features: [
      "5.3K60 video",
      "HyperSmooth 6.0 stabilizatsiya",
      "10m suvga chidamli",
      "Touch displey",
      "Wi-Fi va Bluetooth",
    ],

    specifications: {
      display: "2.27-inch touch",
      resolution: "27MP foto",
      processor: "GP2",
      ram: "-",
      storage: "microSD",
      mainCamera: "27MP",
      frontCamera: "-",
      battery: "1720 mAh",
      operatingSystem: "-",
      weight: "154g",
    },
  },
  {
    id: 22,
    title: "Bose QuietComfort Earbuds II",
    slug: "bose-quietcomfort-earbuds-2",
    brand: "Bose",
    category: "Headphones",

    price: 3690000,
    oldPrice: 3990000,
    discount: 8,

    stock: 19,
    rating: 4.7,
    reviews: 176,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Kompakt quloqichi quloqchinlar, yuqori darajadagi shovqinni bekor qilish bilan. Shaxsiylashtirilgan tovush sozlamalarini qo'llab-quvvatlaydi.",

    shortDescription: "Yuqori darajadagi ANC va shaxsiylashtirilgan tovush.",

    sku: "BOS-QCE2",
    warranty: "1 yil",
    delivery: "1-2 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Black", "White"],

    tags: ["bose", "audio"],

    features: [
      "CustomTune tovush sozlash",
      "Yuqori darajadagi ANC",
      "6 soatgacha batareya (quloqchinda)",
      "IPX4 himoya",
      "Touch boshqaruv",
    ],

    specifications: {
      display: "-",
      resolution: "-",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "6 soat + 18 soat (case bilan)",
      operatingSystem: "-",
      weight: "6.2g (har biri)",
    },
  },
  {
    id: 23,
    title: "Huawei MatePad 11.5",
    slug: "huawei-matepad-11-5",
    brand: "Huawei",
    category: "Tablet",

    price: 5290000,
    oldPrice: 5790000,
    discount: 9,

    stock: 17,
    rating: 4.4,
    reviews: 64,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Katta ekranli, yuqori yangilanish tezligiga ega planshet. O'qish, ishlash va multimedia kontent uchun qulay.",

    shortDescription: "120Hz displey, kuchli batareya, M-Pencil qo'llab-quvvatlash.",

    sku: "HUA-MPAD11-128",
    warranty: "1 yil",
    delivery: "2-3 ish kuni",

    storage: ["128GB", "256GB"],
    ram: "6GB",
    colors: ["Space Gray", "Green"],

    tags: ["huawei", "tablet"],

    features: [
      "120Hz FullView displey",
      "7700 mAh batareya",
      "M-Pencil (2-avlod) qo'llab-quvvatlash",
      "Quad Speaker",
      "HarmonyOS/EMUI",
    ],

    specifications: {
      display: "11.5-inch LCD",
      resolution: "2200 × 1440",
      processor: "Snapdragon 7 Gen 1",
      ram: "6GB",
      storage: "128GB",
      mainCamera: "13MP",
      frontCamera: "8MP",
      battery: "7700 mAh",
      operatingSystem: "HarmonyOS",
      weight: "499g",
    },
  },
  {
    id: 24,
    title: "Dyson V15 Detect",
    slug: "dyson-v15-detect",
    brand: "Dyson",
    category: "Home Appliance",

    price: 8990000,
    oldPrice: 9990000,
    discount: 10,

    stock: 7,
    rating: 4.7,
    reviews: 58,

    count: 0,
    isFavorite: false,
    isInCart: false,

    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&h=900&q=80",

    description:
      "Simsiz changyutgich, lazer texnologiyasi yordamida chang zarralarini aniqlaydi. Kuchli so'rish quvvati va uzoq batareya ishlash vaqti bilan.",

    shortDescription: "Lazer chang aniqlash, kuchli so'rish, 60 daqiqa avtonom ish.",

    sku: "DYS-V15DET",
    warranty: "2 yil",
    delivery: "2-4 ish kuni",

    storage: [],
    ram: "-",
    colors: ["Yellow/Nickel"],

    tags: ["dyson", "home", "premium"],

    features: [
      "Laser Dust Detection",
      "LCD ekranda chang tahlili",
      "60 daqiqagacha ish vaqti",
      "HEPA filtrlash tizimi",
      "5 xil tozalash boshchasi",
    ],

    specifications: {
      display: "LCD ekran",
      resolution: "-",
      processor: "-",
      ram: "-",
      storage: "-",
      mainCamera: "-",
      frontCamera: "-",
      battery: "60 daqiqa",
      operatingSystem: "-",
      weight: "3.1kg",
    },
  },
];