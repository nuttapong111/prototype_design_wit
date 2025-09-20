'use client';

import { useState } from 'react';
import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Chip, Avatar, Tooltip } from '@heroui/react';
import { ExternalLink, Star, MapPin, Truck, Clock, Shield, Users } from 'lucide-react';
import { Product, StorePrice } from '@/types';

interface PriceComparisonTableProps {
  product: Product;
}

export default function PriceComparisonTable({ product }: PriceComparisonTableProps) {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'reviews'>('price');

  const sortedStores = [...product.stores].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'shopee':
        return 'primary';
      case 'lazada':
        return 'secondary';
      case 'jd-central':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'shopee':
        return 'Shopee';
      case 'lazada':
        return 'Lazada';
      case 'jd-central':
        return 'JD Central';
      default:
        return platform;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <Card>
      <CardBody className="p-0">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                เปรียบเทียบราคาจาก {product.stores.length} ร้านค้า
              </h3>
              <p className="text-blue-100" style={{ fontFamily: 'var(--font-sukhumvit)' }}>เปรียบเทียบราคา หน้าร้าน เวลาส่ง และคะแนนรีวิว</p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={sortBy === 'price' ? 'solid' : 'bordered'}
                color={sortBy === 'price' ? 'primary' : 'default'}
                className={sortBy === 'price' ? 'bg-white text-blue-600' : 'text-white border-white hover:bg-white/20'}
                onClick={() => setSortBy('price')}
              >
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>เรียงตามราคา</span>
              </Button>
              <Button
                size="sm"
                variant={sortBy === 'rating' ? 'solid' : 'bordered'}
                color={sortBy === 'rating' ? 'primary' : 'default'}
                className={sortBy === 'rating' ? 'bg-white text-blue-600' : 'text-white border-white hover:bg-white/20'}
                onClick={() => setSortBy('rating')}
              >
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>เรียงตามคะแนน</span>
              </Button>
              <Button
                size="sm"
                variant={sortBy === 'reviews' ? 'solid' : 'bordered'}
                color={sortBy === 'reviews' ? 'primary' : 'default'}
                className={sortBy === 'reviews' ? 'bg-white text-blue-600' : 'text-white border-white hover:bg-white/20'}
                onClick={() => setSortBy('reviews')}
              >
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>เรียงตามรีวิว</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table aria-label="Price comparison table">
            <TableHeader>
              <TableColumn className="bg-gray-50 font-semibold text-gray-700">ร้านค้า</TableColumn>
              <TableColumn className="bg-gray-50 font-semibold text-gray-700">ราคา</TableColumn>
              <TableColumn className="bg-gray-50 font-semibold text-gray-700">หน้าร้าน</TableColumn>
              <TableColumn className="bg-gray-50 font-semibold text-gray-700">เวลาส่ง</TableColumn>
              <TableColumn className="bg-gray-50 font-semibold text-gray-700">คะแนนรีวิว</TableColumn>
              <TableColumn className="bg-gray-50 font-semibold text-gray-700">การดำเนินการ</TableColumn>
            </TableHeader>
            <TableBody>
              {sortedStores.map((store, index) => (
                <TableRow key={`${store.storeId}-${store.platform}`} className="hover:bg-gray-50">
                  {/* Store Info */}
                  <TableCell className="py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-lg font-bold text-white">
                          {store.storeName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-900" style={{ fontFamily: 'var(--font-sukhumvit)' }}>{store.storeName}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Chip
                            color={getPlatformColor(store.platform) as any}
                            size="sm"
                            variant="flat"
                          >
                            {getPlatformName(store.platform)}
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  {/* Price */}
                  <TableCell className="py-6">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                        {formatPrice(store.price)}
                      </p>
                      {store.originalPrice && store.originalPrice > store.price && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(store.originalPrice)}
                          </span>
                          {store.discount && (
                            <Chip size="sm" color="danger" variant="flat">
                              -{store.discount}%
                            </Chip>
                          )}
                        </div>
                      )}
                      {store.shippingCost !== undefined && (
                        <p className="text-xs text-gray-500">
                          +{formatPrice(store.shippingCost)} ค่าส่ง
                        </p>
                      )}
                    </div>
                  </TableCell>

                  {/* Physical Store */}
                  <TableCell className="py-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className={store.hasPhysicalStore ? "text-green-600" : "text-gray-400"} />
                      <div>
                        <span className={`text-sm font-medium ${store.hasPhysicalStore ? "text-green-600" : "text-gray-500"}`} style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                          {store.hasPhysicalStore ? "มีหน้าร้าน" : "ออนไลน์เท่านั้น"}
                        </span>
                        {store.hasPhysicalStore && (
                          <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'var(--font-sukhumvit)' }}>สามารถไปซื้อได้ที่ร้าน</p>
                        )}
                      </div>
                    </div>
                  </TableCell>

                  {/* Delivery Time */}
                  <TableCell className="py-6">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-blue-600" />
                      <div>
                        <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                          {store.estimatedDelivery || "1-3 วัน"}
                        </span>
                        <div className="flex items-center gap-1 mt-1">
                          <Truck size={14} className="text-gray-400" />
                          <span className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                            {store.shippingCost === 0 ? "ฟรี" : `+${formatPrice(store.shippingCost)}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  {/* Rating */}
                  <TableCell className="py-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={star <= store.rating ? 'fill-current' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'var(--font-sukhumvit)' }}>{store.rating.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} className="text-gray-400" />
                        <span className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-sukhumvit)' }}>{store.reviewCount.toLocaleString()} รีวิว</span>
                      </div>
                    </div>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="py-6">
                    <div className="flex flex-col gap-2">
                      <Button
                        as="a"
                        href={store.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        className="button-primary text-sm font-semibold"
                        startContent={<ExternalLink size={16} />}
                      >
                        <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>ไปซื้อ</span>
                      </Button>
                      {store.hasPhysicalStore && (
                        <Button
                          variant="bordered"
                          size="sm"
                          className="text-xs text-gray-600 border-gray-300 hover:bg-gray-50"
                        >
                          <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>ดูแผนที่</span>
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield size={16} />
              <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ข้อมูลราคาและคะแนนร้านค้าอัปเดตล่าสุดเมื่อ {new Date().toLocaleDateString('th-TH')}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div>
                <span className="font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>ราคาต่ำสุด:</span> <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>{formatPrice(Math.min(...sortedStores.map(s => s.price)))}</span>
              </div>
              <div>
                <span className="font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>ราคาสูงสุด:</span> <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>{formatPrice(Math.max(...sortedStores.map(s => s.price)))}</span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
