import { Card, CardBody, Button, Chip, Avatar, Input } from '@heroui/react';
import { Search, Star, MapPin, Package, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { mockStores } from '@/data/mockData';

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ร้านค้าทั้งหมด
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            ค้นหาและเปรียบเทียบร้านค้าจากทุกแพลตฟอร์ม
            พร้อมข้อมูลความน่าเชื่อถือและรีวิวจากลูกค้า
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="ค้นหาร้านค้า..."
              className="w-full"
              startContent={<Search size={20} className="text-gray-400" />}
              size="lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="text-blue-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {mockStores.length}
              </div>
              <div className="text-sm text-gray-600">ร้านค้าทั้งหมด</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="text-green-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                4.7
              </div>
              <div className="text-sm text-gray-600">คะแนนเฉลี่ย</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-purple-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                36.7K
              </div>
              <div className="text-sm text-gray-600">รีวิวทั้งหมด</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-orange-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                2
              </div>
              <div className="text-sm text-gray-600">มีหน้าร้านจริง</div>
            </CardBody>
          </Card>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockStores.map((store) => (
            <Card
              key={store.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              isPressable
              as={Link}
              href={`/stores/${store.id}`}
            >
              <CardBody className="p-0">
                {/* Store Banner */}
                <div className="relative h-32 overflow-hidden rounded-t-lg">
                  <Image
                    src={store.banner}
                    alt={store.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Store Logo */}
                  <div className="absolute bottom-4 left-4">
                    <Avatar
                      src={store.logo}
                      alt={store.name}
                      size="lg"
                      className="w-16 h-16 border-2 border-white"
                    />
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 rounded-full px-3 py-1 flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{store.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {store.description}
                  </p>

                  {/* Store Stats */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">คะแนน</span>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-medium">{store.rating}</span>
                        <span className="text-gray-500">({store.totalReviews.toLocaleString()})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">สินค้า</span>
                      <span className="font-medium">{store.totalProducts.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">การตอบกลับ</span>
                      <span className="font-medium">{store.responseRate}%</span>
                    </div>

                    {store.hasPhysicalStore && (
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <MapPin size={14} />
                        <span>มีหน้าร้านจริง</span>
                      </div>
                    )}
                  </div>

                  {/* Platforms */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {store.platforms.map((platform) => (
                        <Chip
                          key={platform}
                          size="sm"
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

                  {/* Action Button */}
                  <Button
                    color="primary"
                    className="w-full"
                    startContent={<ExternalLink size={16} />}
                  >
                    ดูรายละเอียดร้านค้า
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            color="primary"
            variant="bordered"
            size="lg"
            className="px-8"
          >
            โหลดเพิ่มเติม
          </Button>
        </div>
      </div>
    </div>
  );
}

