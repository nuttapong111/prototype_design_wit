'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardBody } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            หมวดหมู่สินค้า
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ค้นหาสินค้าที่คุณต้องการ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            หมวดหมู่สินค้าที่หลากหลาย พร้อมให้คุณเลือกซื้อได้ตามความต้องการ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group card-hover bg-white border border-gray-100"
              isPressable
              as={Link}
              href={`/categories/${category.slug}`}
            >
              <CardBody className="p-0">
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      {category.icon}
                    </div>
                  </div>

                  {/* Product Count */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {category.productCount.toLocaleString()} รายการ
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    {category.description}
                  </p>

                  {/* Subcategories */}
                  <div className="space-y-2 mb-4">
                    {category.subcategories.slice(0, 3).map((subcategory) => (
                      <div key={subcategory.id} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {subcategory.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {subcategory.productCount}
                        </span>
                      </div>
                    ))}
                    {category.subcategories.length > 3 && (
                      <div className="text-xs text-gray-400">
                        และอีก {category.subcategories.length - 3} หมวดหมู่
                      </div>
                    )}
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

        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 button-primary px-8 py-4 rounded-xl text-lg font-semibold"
          >
            <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>ดูหมวดหมู่ทั้งหมด</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
