'use client';

import { Card, CardBody, CardHeader, Checkbox, Slider, Button } from '@heroui/react';
import { Filter, X } from 'lucide-react';

import { SearchFilters as SearchFiltersType } from '@/types';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  onClearFilters: () => void;
}

export default function SearchFilters({ filters, onFiltersChange, onClearFilters }: SearchFiltersProps) {

  const platforms = [
    { id: 'shopee', name: 'Shopee' },
    { id: 'lazada', name: 'Lazada' },
    { id: 'jdcentral', name: 'JD Central' }
  ];

  const categories = [
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'fashion', name: 'แฟชั่น' },
    { id: 'home', name: 'ของใช้ในบ้าน' },
    { id: 'beauty', name: 'ความงาม' },
    { id: 'sports', name: 'กีฬา' }
  ];

  const handlePlatformChange = (platformId: string, checked: boolean) => {
    const newPlatforms = checked
      ? [...filters.platforms, platformId]
      : filters.platforms.filter(id => id !== platformId);
    
    const newFilters = { ...filters, platforms: newPlatforms };
    onFiltersChange(newFilters);
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, categoryId]
      : filters.categories.filter(id => id !== categoryId);
    
    const newFilters = { ...filters, categories: newCategories };
    onFiltersChange(newFilters);
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    const range = Array.isArray(value) ? value : [value, value];
    const newFilters = { ...filters, priceRange: { min: range[0], max: range[1] } };
    onFiltersChange(newFilters);
  };

  const handleRatingChange = (rating: number | number[]) => {
    const value = Array.isArray(rating) ? rating[0] : rating;
    const newFilters = { ...filters, rating: value };
    onFiltersChange(newFilters);
  };

  const handlePhysicalStoreChange = (checked: boolean) => {
    const newFilters = { ...filters, hasPhysicalStore: checked };
    onFiltersChange(newFilters);
  };

  const handleInStockChange = (checked: boolean) => {
    const newFilters = { ...filters, inStock: checked };
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    onClearFilters();
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ตัวกรอง
          </h3>
        </div>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          onPress={clearFilters}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardBody className="space-y-6">
        {/* แพลตฟอร์ม */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            แพลตฟอร์ม
          </h4>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <Checkbox
                key={platform.id}
                isSelected={filters.platforms.includes(platform.id)}
                onValueChange={(checked) => handlePlatformChange(platform.id, checked)}
                className="w-full"
              >
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  {platform.name}
                </span>
              </Checkbox>
            ))}
          </div>
        </div>

        {/* หมวดหมู่ */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            หมวดหมู่
          </h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <Checkbox
                key={category.id}
                isSelected={filters.categories.includes(category.id)}
                onValueChange={(checked) => handleCategoryChange(category.id, checked)}
                className="w-full"
              >
                <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                  {category.name}
                </span>
              </Checkbox>
            ))}
          </div>
        </div>

        {/* ช่วงราคา */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ช่วงราคา: ฿{filters.priceRange.min.toLocaleString()} - ฿{filters.priceRange.max.toLocaleString()}
          </h4>
          <Slider
            value={[filters.priceRange.min, filters.priceRange.max]}
            onChange={handlePriceRangeChange}
            minValue={0}
            maxValue={100000}
            step={1000}
            className="w-full"
            color="primary"
          />
        </div>

        {/* คะแนนรีวิว */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            คะแนนรีวิวขั้นต่ำ: {filters.rating} ดาว
          </h4>
          <Slider
            value={filters.rating}
            onChange={handleRatingChange}
            minValue={0}
            maxValue={5}
            step={0.5}
            className="w-full"
            color="primary"
          />
        </div>

        {/* ตัวเลือกเพิ่มเติม */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ตัวเลือกเพิ่มเติม
          </h4>
          <div className="space-y-2">
            <Checkbox
              isSelected={filters.hasPhysicalStore}
              onValueChange={handlePhysicalStoreChange}
              className="w-full"
            >
              <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                มีหน้าร้านจริง
              </span>
            </Checkbox>
            <Checkbox
              isSelected={filters.inStock}
              onValueChange={handleInStockChange}
              className="w-full"
            >
              <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                มีสินค้าคงเหลือ
              </span>
            </Checkbox>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
