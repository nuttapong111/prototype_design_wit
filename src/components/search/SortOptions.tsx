'use client';

import { Select, SelectItem } from '@heroui/react';
import { ArrowUpDown } from 'lucide-react';

interface SortOptionsProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  totalResults: number;
}

export default function SortOptions({ sortBy, onSortChange, totalResults }: SortOptionsProps) {
  const sortOptions = [
    { value: 'relevance', label: 'ความเกี่ยวข้อง' },
    { value: 'price-low', label: 'ราคา: น้อยไปมาก' },
    { value: 'price-high', label: 'ราคา: มากไปน้อย' },
    { value: 'rating-high', label: 'คะแนนรีวิว: มากไปน้อย' },
    { value: 'rating-low', label: 'คะแนนรีวิว: น้อยไปมาก' },
    { value: 'newest', label: 'ใหม่ล่าสุด' },
    { value: 'oldest', label: 'เก่าที่สุด' },
    { value: 'name-asc', label: 'ชื่อ: A-Z' },
    { value: 'name-desc', label: 'ชื่อ: Z-A' }
  ];

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
        พบ {totalResults.toLocaleString()} รายการ
      </div>
      <div className="flex items-center gap-2">
        <ArrowUpDown className="w-4 h-4 text-gray-500" />
        <Select
        selectedKeys={[sortBy]}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          onSortChange(selectedKey);
        }}
        placeholder="เรียงตาม"
        className="w-48"
        classNames={{
          trigger: "font-sukhumvit",
          value: "font-sukhumvit"
        }}
      >
        {sortOptions.map((option) => (
          <SelectItem key={option.value}>
            <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              {option.label}
            </span>
          </SelectItem>
        ))}
        </Select>
      </div>
    </div>
  );
}
