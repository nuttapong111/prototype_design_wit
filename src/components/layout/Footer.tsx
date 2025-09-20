import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <p className="font-bold text-xl">E-Commerce</p>
            </div>
            <p className="text-gray-300 text-sm">
              แพลตฟอร์มเปรียบเทียบราคาสินค้าจากทุกแพลตฟอร์ม 
              พร้อมฟีเจอร์ AR/VR เพื่อทดลองสินค้าในห้องของคุณ
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  หมวดหมู่สินค้า
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  ร้านค้า
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  เกี่ยวกับเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">หมวดหมู่สินค้า</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/electronics" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  อิเล็กทรอนิกส์
                </Link>
              </li>
              <li>
                <Link href="/categories/fashion" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  แฟชั่น
                </Link>
              </li>
              <li>
                <Link href="/categories/home" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  ของใช้ในบ้าน
                </Link>
              </li>
              <li>
                <Link href="/categories/beauty" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  ความงาม
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">ติดต่อเรา</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300 text-sm">02-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@ecommerce.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  123 ถนนสุขุมวิท<br />
                  กรุงเทพฯ 10110
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 E-Commerce. สงวนลิขสิทธิ์ทั้งหมด
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                เงื่อนไขการใช้งาน
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                นโยบายคุกกี้
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

