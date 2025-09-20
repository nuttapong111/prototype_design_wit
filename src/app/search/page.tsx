'use client';

import { useState, useEffect } from 'react';
import { Input, Button, Card, CardBody, CardHeader } from '@heroui/react';
import { Search, Filter } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import SearchFilters from '@/components/search/SearchFilters';
import SortOptions from '@/components/search/SortOptions';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types';
import { showNoResults } from '@/utils/sweetAlert';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    platforms: [] as string[],
    categories: [] as string[],
    priceRange: [0, 100000],
    minRating: 0,
    hasPhysicalStore: false,
    inStock: false
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let products = [...mockProducts];

    // กรองตามคำค้นหา
    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // กรองตามแพลตฟอร์ม
    if (filters.platforms.length > 0) {
      products = products.filter(product =>
        product.stores.some(store => filters.platforms.includes(store.platform))
      );
    }

    // กรองตามหมวดหมู่
    if (filters.categories.length > 0) {
      products = products.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    // กรองตามช่วงราคา
    products = products.filter(product => {
      const minPrice = Math.min(...product.stores.map(store => store.price));
      return minPrice >= filters.priceRange[0] && minPrice <= filters.priceRange[1];
    });

    // กรองตามคะแนนรีวิว
    if (filters.minRating > 0) {
      products = products.filter(product => product.averageRating >= filters.minRating);
    }

    // กรองตามหน้าร้านจริง
    if (filters.hasPhysicalStore) {
      products = products.filter(product =>
        product.stores.some(store => store.hasPhysicalStore)
      );
    }

    // กรองตามสินค้าคงเหลือ
    if (filters.inStock) {
      products = products.filter(product =>
        product.stores.some(store => store.isInStock)
      );
    }

    // เรียงลำดับ
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => {
          const minPriceA = Math.min(...a.stores.map(store => store.price));
          const minPriceB = Math.min(...b.stores.map(store => store.price));
          return minPriceA - minPriceB;
        });
        break;
      case 'price-high':
        products.sort((a, b) => {
          const minPriceA = Math.min(...a.stores.map(store => store.price));
          const minPriceB = Math.min(...b.stores.map(store => store.price));
          return minPriceB - minPriceA;
        });
        break;
      case 'rating-high':
        products.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 'rating-low':
        products.sort((a, b) => a.averageRating - b.averageRating);
        break;
      case 'newest':
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        products.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name, 'th'));
        break;
      case 'name-desc':
        products.sort((a, b) => b.name.localeCompare(a.name, 'th'));
        break;
    }

    setFilteredProducts(products);

    // แสดงการแจ้งเตือนถ้าไม่พบผลลัพธ์
    if (products.length === 0 && (searchQuery || Object.values(filters).some(v => Array.isArray(v) ? v.length > 0 : v !== false && v !== 0))) {
      showNoResults();
    }
  }, [searchQuery, filters, sortBy]);

  const handleSearch = () => {
    // การค้นหาจะทำงานผ่าน useEffect
  };

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ค้นหาสินค้า
          </h1>
          
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <Input
              type="text"
              placeholder="ค้นหาสินค้า..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              startContent={<Search className="w-4 h-4 text-gray-400" />}
              className="flex-1"
              classNames={{
                input: "font-sukhumvit",
                inputWrapper: "font-sukhumvit"
              }}
            />
            <Button
              color="primary"
              onPress={handleSearch}
              className="px-8"
              style={{ fontFamily: 'var(--font-sukhumvit)' }}
            >
              ค้นหา
            </Button>
            <Button
              variant="bordered"
              onPress={() => setShowFilters(!showFilters)}
              className="px-4"
              style={{ fontFamily: 'var(--font-sukhumvit)' }}
            >
              <Filter className="w-4 h-4 mr-2" />
              ตัวกรอง
            </Button>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              พบ {filteredProducts.length} รายการ
            </p>
            <SortOptions
              onSortChange={handleSortChange}
              currentSort={sortBy}
            />
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <SearchFilters onFiltersChange={handleFiltersChange} />
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <Card className="w-full">
                <CardBody className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    ไม่พบสินค้าที่ตรงกับเงื่อนไข
                  </h3>
                  <p className="text-gray-500" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    ลองปรับเปลี่ยนคำค้นหาหรือตัวกรอง
                  </p>
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
