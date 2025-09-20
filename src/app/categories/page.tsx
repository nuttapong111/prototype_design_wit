import { Card, CardBody } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { mockCategories } from '@/data/mockData';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            หมวดหมู่สินค้า
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ค้นหาสินค้าที่คุณต้องการจากหมวดหมู่ต่างๆ มากมาย
            พร้อมเปรียบเทียบราคาจากทุกแพลตฟอร์ม
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCategories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              isPressable
              as={Link}
              href={`/categories/${category.slug}`}
            >
              <CardBody className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center text-3xl">
                      {category.icon}
                    </div>
                  </div>

                  {/* Product Count */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                      {category.productCount.toLocaleString()} รายการ
                    </div>
                  </div>

                  {/* Category Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Subcategories */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">หมวดหมู่ย่อย</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {category.subcategories.slice(0, 4).map((subcategory) => (
                        <div key={subcategory.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <span className="text-sm text-gray-700">
                            {subcategory.name}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {subcategory.productCount}
                          </span>
                        </div>
                      ))}
                      {category.subcategories.length > 4 && (
                        <div className="text-xs text-gray-500 text-center pt-2">
                          และอีก {category.subcategories.length - 4} หมวดหมู่
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="text-sm">ดูสินค้าทั้งหมด</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardBody className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ไม่พบหมวดหมู่ที่คุณต้องการ?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                ใช้ระบบค้นหาของเราเพื่อหาสินค้าที่คุณต้องการ
                หรือติดต่อเราถ้าคุณต้องการให้เพิ่มหมวดหมู่ใหม่
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/search">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
                    ค้นหาสินค้า
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition-colors">
                    ติดต่อเรา
                  </button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

