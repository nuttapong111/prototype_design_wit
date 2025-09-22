'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardBody, Button, Chip, Avatar, Progress, Tabs, Tab, Spinner } from '@heroui/react';
import { Star, MapPin, Shield, ExternalLink, Facebook, Instagram, MessageCircle, TrendingUp, Package, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/product/ProductCard';
import { mockStores, mockProducts, mockReviews } from '@/data/mockData';
import { Store, Product, Review } from '@/types';

export default function StoreProfilePage() {
  const params = useParams();
  const storeId = params.id as string;
  
  const [store, setStore] = useState<Store | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('overview');

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundStore = mockStores.find(s => s.id === storeId);
      const storeProducts = mockProducts.filter(p => p.stores.some(s => s.storeId === storeId));
      const storeReviews = mockReviews.filter(r => r.storeId === storeId);
      
      setStore(foundStore || null);
      setProducts(storeProducts);
      setReviews(storeReviews);
      setLoading(false);
    }, 1000);
  }, [storeId]);


  const handleToggleFavorite = (product: Product) => {
    // TODO: Implement favorite functionality
    console.log('Toggled favorite:', product.name);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-gray-600">กำลังโหลดข้อมูลร้านค้า...</p>
        </div>
      </div>
    );
  }

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ไม่พบร้านค้า</h1>
          <p className="text-gray-600 mb-6">ร้านค้าที่คุณกำลังมองหาอาจไม่พร้อมใช้งาน</p>
          <Link href="/stores">
            <Button color="primary">
              กลับไปร้านค้าทั้งหมด
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Store Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar
              src={store.logo}
              alt={store.name}
              size="lg"
              className="w-24 h-24"
            />
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {store.name}
              </h1>
              <p className="text-blue-100 text-lg mb-4">
                {store.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  {renderStars(store.rating)}
                  <span className="text-sm">({store.totalReviews.toLocaleString()} รีวิว)</span>
                </div>
                
                {store.hasPhysicalStore && (
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin size={16} />
                    <span>มีหน้าร้านจริง</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1 text-sm">
                  <Package size={16} />
                  <span>{store.totalProducts.toLocaleString()} สินค้า</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-3">
                {store.socialMedia.facebook && (
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-white hover:bg-white/20"
                    as="a"
                    href={store.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={18} />
                  </Button>
                )}
                {store.socialMedia.instagram && (
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-white hover:bg-white/20"
                    as="a"
                    href={store.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} />
                  </Button>
                )}
                {store.socialMedia.line && (
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-white hover:bg-white/20"
                    as="a"
                    href={`https://line.me/ti/p/${store.socialMedia.line}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                  </Button>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                color="primary"
                variant="solid"
                className="bg-white text-blue-600 hover:bg-gray-100"
                startContent={<ExternalLink size={18} />}
              >
                ไปที่ร้านค้า
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Store Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="text-blue-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {store.rating.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">คะแนนเฉลี่ย</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-green-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {store.totalReviews.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">รีวิวทั้งหมด</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="text-purple-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {store.totalProducts.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">สินค้าทั้งหมด</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {store.responseRate}%
              </div>
              <div className="text-sm text-gray-600">อัตราการตอบกลับ</div>
            </CardBody>
          </Card>
        </div>

        {/* Store Details Tabs */}
        <div className="space-y-6">
          <Tabs
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key as string)}
            className="w-full"
          >
            <Tab key="overview" title="ภาพรวม">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Store Info */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardBody className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">ข้อมูลร้านค้า</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">แพลตฟอร์มที่จำหน่าย</h4>
                          <div className="flex flex-wrap gap-2">
                            {store.platforms.map((platform) => (
                              <Chip
                                key={platform}
                                color={
                                  platform === 'shopee' ? 'primary' :
                                  platform === 'lazada' ? 'secondary' : 'warning'
                                }
                                variant="flat"
                              >
                                {platform === 'shopee' ? 'Shopee' :
                                 platform === 'lazada' ? 'Lazada' : 'JD Central'}
                              </Chip>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">หมวดหมู่สินค้า</h4>
                          <div className="flex flex-wrap gap-2">
                            {store.categories.map((category) => (
                              <Chip key={category} variant="flat">
                                {category}
                              </Chip>
                            ))}
                          </div>
                        </div>

                        {store.hasPhysicalStore && store.physicalStoreAddress && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">ที่อยู่หน้าร้าน</h4>
                            <div className="flex items-start gap-2">
                              <MapPin size={18} className="text-gray-500 mt-1" />
                              <span className="text-gray-700">{store.physicalStoreAddress}</span>
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">นโยบาย</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Shield size={16} className="text-gray-500" />
                              <span className="text-sm text-gray-700">{store.returnPolicy}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield size={16} className="text-gray-500" />
                              <span className="text-sm text-gray-700">{store.warrantyPolicy}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  {/* Rating Distribution */}
                  <Card>
                    <CardBody className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">การกระจายคะแนน</h3>
                      <div className="space-y-3">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-3">
                            <span className="text-sm font-medium w-8">{rating}★</span>
                            <Progress
                              value={Math.random() * 100}
                              className="flex-1"
                              color="primary"
                            />
                            <span className="text-sm text-gray-600 w-12">
                              {Math.floor(Math.random() * 1000)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </div>

                {/* Store Performance */}
                <div className="space-y-6">
                  <Card>
                    <CardBody className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">ประสิทธิภาพร้านค้า</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">อัตราการตอบกลับ</span>
                            <span className="text-sm text-gray-600">{store.responseRate}%</span>
                          </div>
                          <Progress value={store.responseRate} color="success" />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">เวลาตอบกลับเฉลี่ย</span>
                            <span className="text-sm text-gray-600">{store.averageResponseTime}</span>
                          </div>
                          <Progress value={75} color="primary" />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">ความพึงพอใจลูกค้า</span>
                            <span className="text-sm text-gray-600">95%</span>
                          </div>
                          <Progress value={95} color="warning" />
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">ข้อมูลเพิ่มเติม</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">ก่อตั้งเมื่อ</span>
                          <span className="font-medium">{store.establishedYear}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">สินค้าทั้งหมด</span>
                          <span className="font-medium">{store.totalProducts.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">รีวิวทั้งหมด</span>
                          <span className="font-medium">{store.totalReviews.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Tab>

            <Tab key="products" title={`สินค้า (${products.length})`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            </Tab>

            <Tab key="reviews" title={`รีวิว (${reviews.length})`}>
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">รีวิวจากลูกค้า</h3>
                  
                  {reviews.length > 0 ? (
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start gap-4">
                            <Image
                              src={review.userAvatar}
                              alt={review.userName}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                                <div className="flex items-center gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      size={16}
                                      className={star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                                    />
                                  ))}
                                </div>
                                {review.verifiedPurchase && (
                                  <Chip size="sm" color="success" variant="flat">
                                    ซื้อแล้ว
                                  </Chip>
                                )}
                              </div>
                              <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                              <p className="text-gray-700 mb-3">{review.content}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>{new Date(review.createdAt).toLocaleDateString('th-TH')}</span>
                                <span>มีประโยชน์ {review.helpfulCount} คน</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">ยังไม่มีรีวิวสำหรับร้านค้านี้</p>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

