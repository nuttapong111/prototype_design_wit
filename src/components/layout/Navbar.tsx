'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar
} from '@heroui/react';
import { Search, ShoppingCart, User, Menu, Home, Grid3X3, Store, Info } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const menuItems = [
    { name: 'หน้าแรก', href: '/', icon: Home },
    { name: 'หมวดหมู่', href: '/categories', icon: Grid3X3 },
    { name: 'ร้านค้า', href: '/stores', icon: Store },
    { name: 'เกี่ยวกับเรา', href: '/about', icon: Info }
  ];

  return (
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 h-20"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
                <NavbarBrand>
                  <Link href="/" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <span className="text-white font-bold text-2xl">E</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl text-gray-800 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'var(--font-sukhumvit)' }}>E-Commerce</p>
                      <p className="text-sm text-gray-500 -mt-1" style={{ fontFamily: 'var(--font-sukhumvit)' }}>เปรียบเทียบราคา</p>
                    </div>
                  </Link>
                </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                    >
                      <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-lg" style={{ fontFamily: 'var(--font-sukhumvit)' }}>{item.name}</span>
                    </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative">
                      <Input
                        type="text"
                        placeholder="ค้นหาสินค้า..."
                        style={{ fontFamily: 'var(--font-sukhumvit)' }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-80"
                        size="lg"
                        startContent={<Search size={20} className="text-gray-400" />}
                        classNames={{
                          input: "pr-20 text-lg",
                          inputWrapper: "hover:shadow-md transition-shadow duration-200 h-12"
                        }}
                      />
                      <Button
                        type="submit"
                        color="primary"
                        size="md"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-10 px-6"
                      >
                        <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>ค้นหา</span>
                      </Button>
            </div>
          </form>
        </NavbarItem>

                <NavbarItem>
                  <Button
                    as={Link}
                    href="/cart"
                    variant="light"
                    size="lg"
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 px-4"
                    startContent={<ShoppingCart size={22} />}
                  >
                    <span className="hidden sm:inline text-lg" style={{ fontFamily: 'var(--font-sukhumvit)' }}>ตะกร้า</span>
                  </Button>
                </NavbarItem>

                <NavbarItem>
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <Avatar
                        isBordered
                        as="button"
                        className="transition-all duration-200 hover:scale-105 hover:shadow-lg"
                        color="secondary"
                        name="User"
                        size="md"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=center"
                      />
                    </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">เข้าสู่ระบบ</p>
                <p className="font-semibold">user@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">การตั้งค่า</DropdownItem>
              <DropdownItem key="team_settings">ทีม</DropdownItem>
              <DropdownItem key="analytics">การวิเคราะห์</DropdownItem>
              <DropdownItem key="system">ระบบ</DropdownItem>
              <DropdownItem key="configurations">การกำหนดค่า</DropdownItem>
              <DropdownItem key="help_and_feedback">ช่วยเหลือและข้อเสนอแนะ</DropdownItem>
              <DropdownItem key="logout" color="danger">
                ออกจากระบบ
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-4 py-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2 px-4">
            <Input
              type="text"
              placeholder="ค้นหาสินค้า..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              startContent={<Search size={18} className="text-gray-400" />}
            />
            <Button type="submit" color="primary" size="sm">
              ค้นหา
            </Button>
          </form>
          
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                href={item.href}
                className="flex items-center gap-3 w-full text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroNavbar>
  );
}
