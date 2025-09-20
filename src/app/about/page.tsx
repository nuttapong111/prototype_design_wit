'use client';

import { Card, CardBody, CardHeader } from '@heroui/react';
import { Heart, Target, Users, Mail, Phone, MapPin, Award, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            เราคือแพลตฟอร์มเปรียบเทียบราคาสินค้าออนไลน์ที่ช่วยให้คุณค้นหาและเปรียบเทียบสินค้าจากร้านค้าต่างๆ 
            ได้อย่างง่ายดาย พร้อมฟีเจอร์ AR/VR ที่ทันสมัย
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="h-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                วิสัยทัศน์
              </h2>
            </CardHeader>
            <CardBody className="text-center">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                เป็นแพลตฟอร์มเปรียบเทียบราคาสินค้าออนไลน์ชั้นนำของประเทศไทย 
                ที่ช่วยให้ผู้บริโภคสามารถตัดสินใจซื้อสินค้าได้อย่างชาญฉลาด 
                และได้รับประสบการณ์การช้อปปิ้งที่ดีที่สุด
              </p>
            </CardBody>
          </Card>

          <Card className="h-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                พันธกิจ
              </h2>
            </CardHeader>
            <CardBody className="text-center">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                พัฒนาและให้บริการแพลตฟอร์มเปรียบเทียบราคาที่มีประสิทธิภาพ 
                ปลอดภัย และใช้งานง่าย พร้อมนำเสนอเทคโนโลยี AR/VR 
                เพื่อเพิ่มประสบการณ์การช้อปปิ้งให้กับผู้ใช้
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ค่านิยมของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardBody className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  ความปลอดภัย
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  เราให้ความสำคัญกับความปลอดภัยของข้อมูลและความน่าเชื่อถือของร้านค้า
                </p>
              </CardBody>
            </Card>

            <Card className="text-center">
              <CardBody className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  นวัตกรรม
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  เรานำเสนอเทคโนโลยีล่าสุดอย่าง AR/VR เพื่อเพิ่มประสบการณ์การใช้งาน
                </p>
              </CardBody>
            </Card>

            <Card className="text-center">
              <CardBody className="pt-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  มุ่งเน้นผู้ใช้
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  เราใส่ใจในความต้องการของผู้ใช้และพัฒนาบริการให้ตอบโจทย์มากที่สุด
                </p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ตัวเลขที่น่าภูมิใจ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                10,000+
              </div>
              <div className="text-blue-100" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                สินค้า
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                500+
              </div>
              <div className="text-blue-100" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ร้านค้า
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                50,000+
              </div>
              <div className="text-blue-100" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ผู้ใช้
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                99.9%
              </div>
              <div className="text-blue-100" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ความพึงพอใจ
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ข้อมูลการติดต่อ
              </h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  contact@ecommerce-th.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  02-123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  123 ถนนสุขุมวิท กรุงเทพฯ 10110
                </span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                เวลาทำการ
              </h2>
            </CardHeader>
            <CardBody className="space-y-2">
              <div className="flex justify-between">
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>จันทร์ - ศุกร์</span>
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>เสาร์</span>
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>09:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>อาทิตย์</span>
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>ปิดทำการ</span>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Awards */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            รางวัลและความสำเร็จ
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg">
              <Award className="w-6 h-6 text-yellow-600" />
              <span className="font-semibold text-yellow-800" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                Best E-commerce Platform 2024
              </span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-800" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                Innovation Award 2024
              </span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
              <span className="font-semibold text-green-800" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                Customer Satisfaction Award
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
