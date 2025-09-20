'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  videos?: string[];
}

export default function ProductImageGallery({ images, videos = [] }: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const allMedia = [...images, ...videos];
  const isVideo = (index: number) => index >= images.length;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="w-full">
      {/* Main Image/Video Display */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        {isVideo(currentIndex) ? (
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              controls={isVideoPlaying}
              poster={images[0]} // ใช้รูปแรกเป็น poster
            >
              <source src={allMedia[currentIndex]} type="video/mp4" />
              เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
            </video>
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <Button
                  isIconOnly
                  color="primary"
                  size="lg"
                  onPress={toggleVideo}
                  className="bg-white bg-opacity-90"
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Image
            src={allMedia[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Navigation Arrows */}
        {allMedia.length > 1 && (
          <>
            <Button
              isIconOnly
              variant="solid"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
              onPress={prevImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              variant="solid"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
              onPress={nextImage}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}

        {/* Video Indicator */}
        {isVideo(currentIndex) && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            วิดีโอ
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {allMedia.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allMedia.map((media, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {isVideo(index) ? (
                <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
                  <Play className="w-4 h-4 text-gray-600" />
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-bl">
                    วิดีโอ
                  </div>
                </div>
              ) : (
                <Image
                  src={media}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Media Counter */}
      <div className="text-center text-sm text-gray-500 mt-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
        {currentIndex + 1} / {allMedia.length}
        {isVideo(currentIndex) && ' (วิดีโอ)'}
      </div>
    </div>
  );
}
