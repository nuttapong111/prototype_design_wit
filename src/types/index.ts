export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  videos?: string[];
  category: string;
  subcategory?: string;
  technicalSpecs: Record<string, string>;
  arModelUrl?: string;
  vrModelUrl?: string;
  stores: StorePrice[];
  averageRating: number;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface StorePrice {
  storeId: string;
  storeName: string;
  platform: 'shopee' | 'lazada' | 'jd-central';
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  hasPhysicalStore: boolean;
  physicalStoreAddress?: string;
  productUrl: string;
  isInStock: boolean;
  shippingCost?: number;
  estimatedDelivery?: string;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  rating: number;
  totalReviews: number;
  hasPhysicalStore: boolean;
  physicalStoreAddress?: string;
  platforms: string[];
  categories: string[];
  establishedYear: number;
  totalProducts: number;
  responseRate: number;
  averageResponseTime: string;
  returnPolicy: string;
  warrantyPolicy: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    line?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  subcategories: Subcategory[];
  productCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  productCount: number;
}

export interface Review {
  id: string;
  productId: string;
  storeId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  verifiedPurchase: boolean;
  helpfulCount: number;
  createdAt: string;
}

export interface SearchFilters {
  platforms: string[];
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  inStock: boolean;
  hasPhysicalStore: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  isActive: boolean;
  priority: number;
}

