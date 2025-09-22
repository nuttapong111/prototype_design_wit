'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button, Card, CardBody, CardHeader, Chip } from '@heroui/react';
import { Star, Heart, Share2 } from 'lucide-react';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import PriceComparisonTable from '@/components/product/PriceComparisonTable';
import ARVRFeatures from '@/components/product/ARVRFeatures';
import { showAddToFavoritesSuccess, showShareSuccess } from '@/utils/sweetAlert';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === params.id);
    setProduct(foundProduct || null);
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ไม่พบสินค้า
          </h1>
          <p className="text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            สินค้าที่คุณกำลังมองหาอาจถูกลบหรือไม่พร้อมใช้งาน
          </p>
        </div>
      </div>
    );
  }


  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      showAddToFavoritesSuccess(product.name);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
    showShareSuccess(product.name);
  };

  const minPrice = Math.min(...product.stores.map(store => store.price));
  const maxPrice = Math.max(...product.stores.map(store => store.price));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div>
            <ProductImageGallery 
              images={product.images} 
              videos={product.videos || []} 
            />
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    {product.averageRating}
                  </span>
                  <span className="text-gray-500" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    ({product.totalReviews.toLocaleString()} รีวิว)
                  </span>
                </div>
                
                <Chip color="success" variant="flat" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  {product.category}
                </Chip>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-4" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ฿{minPrice.toLocaleString()}
                {minPrice !== maxPrice && (
                  <span className="text-lg text-gray-500 ml-2">
                    - ฿{maxPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                color={isFavorite ? "danger" : "default"}
                variant={isFavorite ? "solid" : "bordered"}
                size="lg"
                isIconOnly
                onPress={handleToggleFavorite}
                className="w-12"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
              
              <Button
                color="default"
                variant="bordered"
                size="lg"
                isIconOnly
                onPress={handleShare}
                className="w-12"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Description */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  รายละเอียดสินค้า
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  {product.description}
                </p>
              </CardBody>
            </Card>

            {/* Technical Specifications */}
            {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    ข้อมูลทางเทคนิค
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                          {key}:
                        </span>
                        <span className="text-gray-900" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            )}

            {/* AR/VR Features */}
            <ARVRFeatures
              productName={product.name}
              arModelUrl={product.arModelUrl}
              vrModelUrl={product.vrModelUrl}
            />
          </div>
        </div>

        {/* Price Comparison Table */}
        <div className="mt-12">
          <PriceComparisonTable stores={product.stores} />
        </div>
      </div>
    </div>
  );
}
