'use client';

import { useState } from 'react';
import { Card, CardBody, Button, Chip } from '@heroui/react';
import { Star, TrendingUp, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

export default function FeaturedProducts({ 
  products, 
  title = "สินค้าแนะนำ",
  subtitle = "สินค้าที่ได้รับความนิยมและมีคุณภาพดี",
  showViewAll = true
}: FeaturedProductsProps) {
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'reviews'>('rating');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.averageRating - a.averageRating;
      case 'price':
        return Math.min(...a.stores.map(s => s.price)) - Math.min(...b.stores.map(s => s.price));
      case 'reviews':
        return b.totalReviews - a.totalReviews;
      default:
        return 0;
    }
  });

  const handleToggleFavorite = (product: Product) => {
    // TODO: Implement favorite functionality
    console.log('Toggled favorite:', product.name);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              {title}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {subtitle}
            </p>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-600">เรียงตาม:</span>
            <div className="flex gap-2">
              {[
                { value: 'rating', label: 'คะแนน', icon: Star },
                { value: 'price', label: 'ราคา', icon: TrendingUp },
                { value: 'reviews', label: 'รีวิว', icon: Star }
              ].map((option) => (
                <Chip
                  key={option.value}
                  size="sm"
                  color={sortBy === option.value ? 'primary' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setSortBy(option.value as any)}
                  startContent={<option.icon size={14} />}
                >
                  {option.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {sortedProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center">
            <Button
              size="lg"
              className="button-primary px-8 py-4 text-lg font-semibold"
              endContent={<ArrowRight size={20} />}
            >
              <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>ดูสินค้าทั้งหมด</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
