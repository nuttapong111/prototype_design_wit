import { Product, Store, Category, Review, Banner } from '@/types';

export const mockStores: Store[] = [
  {
    id: 'store-1',
    name: 'TechHub Thailand',
    description: 'ผู้เชี่ยวชาญด้านอิเล็กทรอนิกส์และเทคโนโลยี มากกว่า 10 ปี',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
    banner: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=300&fit=crop&crop=center',
    rating: 4.8,
    totalReviews: 15420,
    hasPhysicalStore: true,
    physicalStoreAddress: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
    platforms: ['shopee', 'lazada', 'jd-central'],
    categories: ['electronics', 'computers', 'mobile'],
    establishedYear: 2014,
    totalProducts: 2500,
    responseRate: 98,
    averageResponseTime: '2 ชั่วโมง',
    returnPolicy: 'คืนสินค้าได้ภายใน 7 วัน',
    warrantyPolicy: 'รับประกัน 1 ปี',
    socialMedia: {
      facebook: 'https://facebook.com/techhubthailand',
      instagram: 'https://instagram.com/techhubthailand',
      line: '@techhubthailand'
    }
  },
  {
    id: 'store-2',
    name: 'Fashion Forward',
    description: 'แฟชั่นทันสมัยสำหรับทุกวัย ราคาเป็นมิตร',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center',
    banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=300&fit=crop&crop=center',
    rating: 4.6,
    totalReviews: 8930,
    hasPhysicalStore: true,
    physicalStoreAddress: '456 ถนนราชดำริ กรุงเทพฯ 10330',
    platforms: ['shopee', 'lazada'],
    categories: ['fashion', 'accessories', 'shoes'],
    establishedYear: 2018,
    totalProducts: 1800,
    responseRate: 95,
    averageResponseTime: '4 ชั่วโมง',
    returnPolicy: 'คืนสินค้าได้ภายใน 14 วัน',
    warrantyPolicy: 'รับประกันคุณภาพ 30 วัน',
    socialMedia: {
      facebook: 'https://facebook.com/fashionforward',
      instagram: 'https://instagram.com/fashionforward'
    }
  },
  {
    id: 'store-3',
    name: 'Home & Living Store',
    description: 'ของใช้ในบ้านคุณภาพดี ราคาไม่แพง',
    logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop&crop=center',
    banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop&crop=center',
    rating: 4.7,
    totalReviews: 12350,
    hasPhysicalStore: false,
    platforms: ['shopee', 'lazada', 'jd-central'],
    categories: ['home', 'furniture', 'kitchen'],
    establishedYear: 2016,
    totalProducts: 3200,
    responseRate: 97,
    averageResponseTime: '3 ชั่วโมง',
    returnPolicy: 'คืนสินค้าได้ภายใน 30 วัน',
    warrantyPolicy: 'รับประกัน 6 เดือน',
    socialMedia: {
      facebook: 'https://facebook.com/homelivingstore',
      line: '@homelivingstore'
    }
  }
];

export const mockCategories: Category[] = [
  {
    id: 'electronics',
    name: 'อิเล็กทรอนิกส์',
    slug: 'electronics',
    description: 'อุปกรณ์อิเล็กทรอนิกส์และเทคโนโลยี',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1498049794561-7780c723c765?w=400&h=300&fit=crop&crop=center',
    subcategories: [
      { id: 'mobile', name: 'โทรศัพท์มือถือ', slug: 'mobile', productCount: 1250 },
      { id: 'laptop', name: 'แล็ปท็อป', slug: 'laptop', productCount: 890 },
      { id: 'tablet', name: 'แท็บเล็ต', slug: 'tablet', productCount: 450 },
      { id: 'audio', name: 'หูฟังและลำโพง', slug: 'audio', productCount: 680 },
      { id: 'camera', name: 'กล้องถ่ายรูป', slug: 'camera', productCount: 320 }
    ],
    productCount: 3590
  },
  {
    id: 'fashion',
    name: 'แฟชั่น',
    slug: 'fashion',
    description: 'เสื้อผ้า รองเท้า และเครื่องประดับ',
    icon: '👗',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
    subcategories: [
      { id: 'men-clothing', name: 'เสื้อผ้าชาย', slug: 'men-clothing', productCount: 2100 },
      { id: 'women-clothing', name: 'เสื้อผ้าหญิง', slug: 'women-clothing', productCount: 3500 },
      { id: 'shoes', name: 'รองเท้า', slug: 'shoes', productCount: 1800 },
      { id: 'accessories', name: 'เครื่องประดับ', slug: 'accessories', productCount: 1200 },
      { id: 'bags', name: 'กระเป๋า', slug: 'bags', productCount: 950 }
    ],
    productCount: 9550
  },
  {
    id: 'home',
    name: 'ของใช้ในบ้าน',
    slug: 'home',
    description: 'เฟอร์นิเจอร์และของใช้ในบ้าน',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
    subcategories: [
      { id: 'furniture', name: 'เฟอร์นิเจอร์', slug: 'furniture', productCount: 1500 },
      { id: 'kitchen', name: 'ของใช้ในครัว', slug: 'kitchen', productCount: 2200 },
      { id: 'bedding', name: 'เครื่องนอน', slug: 'bedding', productCount: 800 },
      { id: 'decor', name: 'ของตกแต่ง', slug: 'decor', productCount: 1200 },
      { id: 'garden', name: 'สวนและนอกบ้าน', slug: 'garden', productCount: 600 }
    ],
    productCount: 6300
  }
];

export const mockProducts: Product[] = [
  {
    id: 'product-1',
    name: 'iPhone 15 Pro Max 256GB',
    description: 'สมาร์ทโฟน iPhone รุ่นล่าสุด พร้อมชิป A17 Pro และกล้อง 48MP',
    images: [
      'https://images.unsplash.com/photo-1592899677977-9c10b588e3e5?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1510557880182-3ee4f8559622?w=500&h=500&fit=crop&crop=center'
    ],
    videos: ['https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'],
    category: 'electronics',
    subcategory: 'mobile',
    technicalSpecs: {
      'หน้าจอ': '6.7 นิ้ว Super Retina XDR',
      'ชิป': 'A17 Pro',
      'กล้อง': '48MP หลัก + 12MP Ultra Wide + 12MP Telephoto',
      'แบตเตอรี่': '4422 mAh',
      'น้ำหนัก': '221 กรัม',
      'สี': 'Titanium Natural, Titanium Blue, Titanium White, Titanium Black'
    },
    arModelUrl: '/models/iphone15pro.ar',
    vrModelUrl: '/models/iphone15pro.vr',
    stores: [
      {
        storeId: 'store-1-shopee',
        storeName: 'TechHub Thailand',
        platform: 'shopee',
        price: 45900,
        originalPrice: 49900,
        discount: 8,
        rating: 4.8,
        reviewCount: 15420,
        hasPhysicalStore: true,
        physicalStoreAddress: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
        productUrl: 'https://shopee.co.th/iphone15promax',
        isInStock: true,
        shippingCost: 0,
        estimatedDelivery: '1-2 วัน'
      },
      {
        storeId: 'store-1-lazada',
        storeName: 'TechHub Thailand',
        platform: 'lazada',
        price: 46900,
        originalPrice: 49900,
        discount: 6,
        rating: 4.8,
        reviewCount: 15420,
        hasPhysicalStore: true,
        physicalStoreAddress: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
        productUrl: 'https://lazada.co.th/iphone15promax',
        isInStock: true,
        shippingCost: 50,
        estimatedDelivery: '2-3 วัน'
      }
    ],
    averageRating: 4.8,
    totalReviews: 15420,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  },
  {
    id: 'product-2',
    name: 'MacBook Pro 14" M3 Pro',
    description: 'แล็ปท็อป MacBook Pro รุ่นล่าสุด พร้อมชิป M3 Pro และหน้าจอ Liquid Retina XDR',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop&crop=center'
    ],
    category: 'electronics',
    subcategory: 'laptop',
    technicalSpecs: {
      'หน้าจอ': '14.2 นิ้ว Liquid Retina XDR',
      'ชิป': 'Apple M3 Pro',
      'RAM': '18GB',
      'SSD': '512GB',
      'กราฟิก': '18-core GPU',
      'น้ำหนัก': '1.6 กิโลกรัม'
    },
    arModelUrl: '/models/macbookpro.ar',
    vrModelUrl: '/models/macbookpro.vr',
    stores: [
      {
        storeId: 'store-1-macbook',
        storeName: 'TechHub Thailand',
        platform: 'shopee',
        price: 89900,
        originalPrice: 99900,
        discount: 10,
        rating: 4.8,
        reviewCount: 15420,
        hasPhysicalStore: true,
        physicalStoreAddress: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
        productUrl: 'https://shopee.co.th/macbookpro14',
        isInStock: true,
        shippingCost: 0,
        estimatedDelivery: '1-2 วัน'
      }
    ],
    averageRating: 4.9,
    totalReviews: 8920,
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z'
  },
  {
    id: 'product-3',
    name: 'เสื้อเชิ้ตผ้าฝ้าย 100%',
    description: 'เสื้อเชิ้ตผ้าฝ้ายคุณภาพดี ใส่สบาย เหมาะสำหรับทุกโอกาส',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&crop=center'
    ],
    category: 'fashion',
    subcategory: 'men-clothing',
    technicalSpecs: {
      'วัสดุ': 'ผ้าฝ้าย 100%',
      'สี': 'ขาว, น้ำเงิน, เขียว, เทา',
      'ขนาด': 'S, M, L, XL, XXL',
      'การดูแล': 'ซักเครื่องได้',
      'ประเทศผู้ผลิต': 'ไทย'
    },
    stores: [
      {
        storeId: 'store-2-shopee',
        storeName: 'Fashion Forward',
        platform: 'shopee',
        price: 890,
        originalPrice: 1290,
        discount: 31,
        rating: 4.6,
        reviewCount: 8930,
        hasPhysicalStore: true,
        physicalStoreAddress: '456 ถนนราชดำริ กรุงเทพฯ 10330',
        productUrl: 'https://shopee.co.th/cotton-shirt',
        isInStock: true,
        shippingCost: 30,
        estimatedDelivery: '2-4 วัน'
      },
      {
        storeId: 'store-2-lazada',
        storeName: 'Fashion Forward',
        platform: 'lazada',
        price: 950,
        originalPrice: 1290,
        discount: 26,
        rating: 4.6,
        reviewCount: 8930,
        hasPhysicalStore: true,
        physicalStoreAddress: '456 ถนนราชดำริ กรุงเทพฯ 10330',
        productUrl: 'https://lazada.co.th/cotton-shirt',
        isInStock: true,
        shippingCost: 40,
        estimatedDelivery: '3-5 วัน'
      }
    ],
    averageRating: 4.6,
    totalReviews: 8930,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'product-4',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'สมาร์ทโฟน Android รุ่นล่าสุด พร้อมกล้อง 200MP และ S Pen',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1510557880182-3ee4f8559622?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1592899677977-9c10b588e3e5?w=500&h=500&fit=crop&crop=center'
    ],
    category: 'electronics',
    subcategory: 'mobile',
    technicalSpecs: {
      'หน้าจอ': '6.8 นิ้ว Dynamic AMOLED 2X',
      'ชิป': 'Snapdragon 8 Gen 3',
      'กล้อง': '200MP หลัก + 50MP Periscope + 10MP Telephoto + 12MP Ultra Wide',
      'แบตเตอรี่': '5000 mAh',
      'น้ำหนัก': '232 กรัม',
      'สี': 'Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow'
    },
    stores: [
      {
        storeId: 'store-1-samsung',
        storeName: 'TechHub Thailand',
        platform: 'shopee',
        price: 38900,
        originalPrice: 42900,
        discount: 9,
        rating: 4.7,
        reviewCount: 12500,
        hasPhysicalStore: true,
        physicalStoreAddress: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
        productUrl: 'https://shopee.co.th/samsung-galaxy-s24-ultra',
        isInStock: true,
        shippingCost: 0,
        estimatedDelivery: '1-2 วัน'
      }
    ],
    averageRating: 4.7,
    totalReviews: 12500,
    createdAt: '2024-01-12T00:00:00Z',
    updatedAt: '2024-01-19T00:00:00Z'
  },
  {
    id: 'product-5',
    name: 'AirPods Pro 2nd Gen',
    description: 'หูฟังไร้สาย Apple พร้อม Active Noise Cancellation',
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop&crop=center'
    ],
    category: 'electronics',
    subcategory: 'audio',
    technicalSpecs: {
      'ชิป': 'H2',
      'แบตเตอรี่': '6 ชั่วโมง (ANC เปิด)',
      'การชาร์จ': 'MagSafe, Lightning, Wireless',
      'น้ำหนัก': '5.3 กรัม (แต่ละข้าง)',
      'สี': 'ขาว',
      'การเชื่อมต่อ': 'Bluetooth 5.3'
    },
    stores: [
      {
        storeId: 'store-1-airpods',
        storeName: 'TechHub Thailand',
        platform: 'shopee',
        price: 8900,
        originalPrice: 9900,
        discount: 10,
        rating: 4.8,
        reviewCount: 8900,
        hasPhysicalStore: true,
        physicalStoreAddress: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
        productUrl: 'https://shopee.co.th/airpods-pro-2',
        isInStock: true,
        shippingCost: 0,
        estimatedDelivery: '1-2 วัน'
      }
    ],
    averageRating: 4.8,
    totalReviews: 8900,
    createdAt: '2024-01-08T00:00:00Z',
    updatedAt: '2024-01-16T00:00:00Z'
  }
];

export const mockBanners: Banner[] = [
  {
    id: 'banner-1',
    title: 'ลองสินค้าในห้องด้วย AR',
    subtitle: 'เทคโนโลยีใหม่ล่าสุด',
    description: 'ใช้เทคโนโลยี AR เพื่อดูสินค้าในห้องของคุณก่อนตัดสินใจซื้อ',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4c4c8f4?w=1200&h=400&fit=crop&crop=center',
    buttonText: 'ลองใช้ AR',
    buttonLink: '/ar-demo',
    isActive: true,
    priority: 1
  },
  {
    id: 'banner-2',
    title: 'เปรียบเทียบราคาจากทุกแพลตฟอร์ม',
    subtitle: 'หาซื้อได้ในราคาที่ดีที่สุด',
    description: 'เปรียบเทียบราคาสินค้าจาก Shopee, Lazada, และ JD Central ในที่เดียว',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop&crop=center',
    buttonText: 'เริ่มค้นหา',
    buttonLink: '/search',
    isActive: true,
    priority: 2
  }
];

export const mockReviews: Review[] = [
  {
    id: 'review-1',
    productId: 'product-1',
    storeId: 'store-1',
    userId: 'user-1',
    userName: 'สมชาย ใจดี',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=center',
    rating: 5,
    title: 'คุ้มค่ามาก!',
    content: 'iPhone 15 Pro Max ใช้ได้ดีมาก กล้องถ่ายรูปสวยมาก แบตเตอรี่ทนได้ทั้งวัน',
    images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center'],
    verifiedPurchase: true,
    helpfulCount: 25,
    createdAt: '2024-01-20T10:30:00Z'
  },
  {
    id: 'review-2',
    productId: 'product-1',
    storeId: 'store-1',
    userId: 'user-2',
    userName: 'สมหญิง สวยงาม',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=center',
    rating: 4,
    title: 'ดีแต่ราคาแพง',
    content: 'คุณภาพดีมาก แต่ราคาค่อนข้างแพง การจัดส่งเร็วมาก',
    verifiedPurchase: true,
    helpfulCount: 12,
    createdAt: '2024-01-18T14:20:00Z'
  }
];
