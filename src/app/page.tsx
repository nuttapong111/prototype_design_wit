import HeroBanner from '@/components/home/HeroBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { mockBanners, mockCategories, mockProducts } from '@/data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max section-padding">
          <HeroBanner banners={mockBanners} />
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white">
        <CategoryGrid categories={mockCategories} />
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50">
        <FeaturedProducts 
          products={mockProducts}
          title="สินค้าแนะนำ"
          subtitle="สินค้าที่ได้รับความนิยมและมีคุณภาพดี"
        />
      </section>

      {/* Popular Products */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <FeaturedProducts 
            products={mockProducts}
            title="สินค้าขายดี"
            subtitle="สินค้าที่มียอดขายสูงสุดในสัปดาห์นี้"
            showViewAll={false}
          />
        </div>
      </section>

      {/* AR/VR Feature Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-max section-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              เทคโนโลยีล้ำสมัย
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              ลองสินค้าในห้องด้วย
              <span className="gradient-text block">AR/VR</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              ใช้เทคโนโลยี Augmented Reality เพื่อดูสินค้าในห้องของคุณก่อนตัดสินใจซื้อ
              ประสบการณ์ใหม่ที่เปลี่ยนวิธีการช้อปปิ้งของคุณ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-primary px-8 py-4 rounded-xl text-lg font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ลองใช้ AR
              </button>
              <button className="button-secondary px-8 py-4 rounded-xl text-lg font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ดูตัวอย่าง
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-gray-600">สินค้า</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500K+</div>
              <div className="text-gray-600">ผู้ใช้</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-gray-600">ร้านค้า</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99%</div>
              <div className="text-gray-600">ความพึงพอใจ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}