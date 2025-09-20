'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardBody, Spinner, Button, Chip } from '@heroui/react';
import { ArrowLeft, Grid3X3, List } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/product/ProductCard';
import SearchFilters from '@/components/search/SearchFilters';
import SortOptions from '@/components/search/SortOptions';
import { mockCategories, mockProducts } from '@/data/mockData';
import { Product, SearchFilters as SearchFiltersType } from '@/types';

export default function CategoryDetailPage() {
  const params = useParams();
  const categorySlug = params.slug as string;
  
  const [category, setCategory] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [filters, setFilters] = useState<SearchFiltersType>({
    platforms: [],
    categories: [categorySlug],
    priceRange: { min: 0, max: 100000 },
    rating: 0,
    inStock: false,
    hasPhysicalStore: false
  });

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply category filter
    filtered = filtered.filter(product => product.category === categorySlug);

    // Apply platform filter
    if (filters.platforms.length > 0) {
      filtered = filtered.filter(product =>
        product.stores.some(store => filters.platforms.includes(store.platform))
      );
    }

    // Apply price range filter
    filtered = filtered.filter(product => {
      const minPrice = Math.min(...product.stores.map(store => store.price));
      return minPrice >= filters.priceRange.min && minPrice <= filters.priceRange.max;
    });

    // Apply rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.averageRating >= filters.rating);
    }

    // Apply in stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product =>
        product.stores.some(store => store.isInStock)
      );
    }

    // Apply physical store filter
    if (filters.hasPhysicalStore) {
      filtered = filtered.filter(product =>
        product.stores.some(store => store.hasPhysicalStore)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => {
          const priceA = Math.min(...a.stores.map(store => store.price));
          const priceB = Math.min(...b.stores.map(store => store.price));
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filtered.sort((a, b) => {
          const priceA = Math.min(...a.stores.map(store => store.price));
          const priceB = Math.min(...b.stores.map(store => store.price));
          return priceB - priceA;
        });
        break;
      case 'rating-desc':
        filtered.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 'reviews-desc':
        filtered.sort((a, b) => b.totalReviews - a.totalReviews);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [products, categorySlug, filters, sortBy]);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundCategory = mockCategories.find(c => c.slug === categorySlug);
      const categoryProducts = mockProducts.filter(p => p.category === categorySlug);
      
      setCategory(foundCategory || null);
      setProducts(categoryProducts);
      setLoading(false);
    }, 1000);
  }, [categorySlug]);


  const handleToggleFavorite = (product: Product) => {
    // TODO: Implement favorite functionality
    console.log('Toggled favorite:', product.name);
  };

  const handleClearFilters = () => {
    setFilters({
      platforms: [],
      categories: [categorySlug],
      priceRange: { min: 0, max: 100000 },
      rating: 0,
      inStock: false,
      hasPhysicalStore: false
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-gray-600">กำลังโหลดข้อมูลหมวดหมู่...</p>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ไม่พบหมวดหมู่</h1>
          <p className="text-gray-600 mb-6">หมวดหมู่ที่คุณกำลังมองหาอาจไม่พร้อมใช้งาน</p>
          <Link href="/categories">
            <Button color="primary" startContent={<ArrowLeft size={18} />}>
              กลับไปหมวดหมู่ทั้งหมด
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/categories">
              <Button
                isIconOnly
                variant="light"
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div className="text-4xl">{category.icon}</div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-6">
            {category.description}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-sm">สินค้าทั้งหมด</span>
              <div className="text-2xl font-bold">{category.productCount.toLocaleString()}</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-sm">หมวดหมู่ย่อย</span>
              <div className="text-2xl font-bold">{category.subcategories.length}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-80 flex-shrink-0">
            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <SortOptions
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalResults={filteredAndSortedProducts.length}
              />
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">มุมมอง:</span>
                <div className="flex border border-gray-300 rounded-lg">
                  <Button
                    isIconOnly
                    size="sm"
                    variant={viewMode === 'grid' ? 'solid' : 'light'}
                    color={viewMode === 'grid' ? 'primary' : 'default'}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant={viewMode === 'list' ? 'solid' : 'light'}
                    color={viewMode === 'list' ? 'primary' : 'default'}
                    onClick={() => setViewMode('list')}
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Subcategories */}
            <Card className="mb-6">
              <CardBody className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">หมวดหมู่ย่อย</h3>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((subcategory: any) => (
                    <Chip
                      key={subcategory.id}
                      variant="flat"
                      className="cursor-pointer hover:bg-blue-100"
                    >
                      {subcategory.name} ({subcategory.productCount})
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <Card>
                <CardBody className="text-center py-12">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ไม่พบสินค้าในหมวดหมู่นี้
                  </h3>
                  <p className="text-gray-600 mb-6">
                    ลองปรับเปลี่ยนตัวกรองหรือดูหมวดหมู่อื่น
                  </p>
                  <Button
                    color="primary"
                    onClick={handleClearFilters}
                  >
                    ล้างตัวกรองทั้งหมด
                  </Button>
                </CardBody>
              </Card>
            )}

            {/* Load More Button */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="text-center mt-8">
                <Button
                  color="primary"
                  variant="bordered"
                  size="lg"
                  className="px-8"
                >
                  โหลดเพิ่มเติม
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

