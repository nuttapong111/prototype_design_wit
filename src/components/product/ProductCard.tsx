'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Star, Eye, Heart } from 'lucide-react';
import { Product } from '@/types';
import { showAddToFavoritesSuccess, showRemoveFromFavorites } from '@/utils/sweetAlert';

interface ProductCardProps {
  product: Product;
  onToggleFavorite?: (product: Product) => void;
}

export default function ProductCard({ product, onToggleFavorite }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite?.(product);
    
    if (!isFavorite) {
      showAddToFavoritesSuccess(product.name);
    } else {
      showRemoveFromFavorites(product.name);
    }
  };


  const lowestPrice = Math.min(...product.stores.map(store => store.price));
  const highestDiscount = Math.max(...product.stores.map(store => store.discount || 0));

  return (
    <Card className="w-full card-hover bg-white border border-gray-100">
      <CardBody className="p-0">
        <div className="relative">
          <div className="aspect-square relative overflow-hidden rounded-t-2xl">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              onError={() => setCurrentImageIndex(0)}
            />
            
            {/* Image indicators */}
            {product.images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}

            {/* Discount badge */}
            {highestDiscount > 0 && (
              <Chip
                color="danger"
                size="sm"
                className="absolute top-2 left-2"
              >
                -{highestDiscount}%
              </Chip>
            )}

            {/* Favorite button */}
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              onClick={handleFavoriteToggle}
            >
              <Heart 
                size={18} 
                className={isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'} 
              />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-sm line-clamp-2 text-gray-800" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {product.name}
            </h3>
            <div className="flex items-center gap-1 ml-2">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-600">{product.averageRating}</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-3 line-clamp-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-lg font-bold text-blue-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ฿{lowestPrice.toLocaleString()}
              </span>
              {product.stores.length > 1 && (
                <span className="text-xs text-gray-500 ml-1" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  จาก {product.stores.length} ร้าน
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {product.totalReviews} รีวิว
            </div>
          </div>

          {/* Store badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.stores.map((store) => (
              <Chip
                key={store.storeId}
                size="sm"
                variant="flat"
                color={
                  store.platform === 'shopee' ? 'primary' :
                  store.platform === 'lazada' ? 'secondary' : 'warning'
                }
                className="text-xs"
              >
                {store.platform === 'shopee' ? 'Shopee' :
                 store.platform === 'lazada' ? 'Lazada' : 'JD Central'}
              </Chip>
            ))}
          </div>
        </div>
      </CardBody>

      <CardFooter className="pt-0 px-4 pb-4">
        <Button
          as={Link}
          href={`/product/${product.id}`}
          color="primary"
          size="sm"
          className="w-full text-xs"
          startContent={<Eye size={14} />}
        >
          <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>ดูรายละเอียด</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
