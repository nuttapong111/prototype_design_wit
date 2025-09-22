'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Banner } from '@/types';

interface HeroBannerProps {
  banners: Banner[];
}

export default function HeroBanner({ banners }: HeroBannerProps) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const activeBanners = banners.filter(banner => banner.isActive).sort((a, b) => a.priority - b.priority);

  useEffect(() => {
    if (activeBanners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % activeBanners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeBanners.length]);

  const goToPrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + activeBanners.length) % activeBanners.length);
  };

  const goToNext = () => {
    setCurrentBanner((prev) => (prev + 1) % activeBanners.length);
  };

  if (activeBanners.length === 0) return null;

  const currentBannerData = activeBanners[currentBanner];

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentBannerData.image}
          alt={currentBannerData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {currentBannerData.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-100 mb-4 font-medium" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {currentBannerData.subtitle}
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {currentBannerData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as={Link}
                href={currentBannerData.buttonLink}
                size="lg"
                className="button-primary px-8 py-4 text-lg font-semibold"
                startContent={<Play size={20} />}
              >
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>{currentBannerData.buttonText}</span>
              </Button>
              <Button
                as={Link}
                href="/search"
                size="lg"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg transition-all duration-200"
              >
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>เริ่มค้นหา</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {activeBanners.length > 1 && (
        <>
          <Button
            isIconOnly
            variant="light"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white z-20"
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white z-20"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {activeBanners.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {activeBanners.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBanner
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setCurrentBanner(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
