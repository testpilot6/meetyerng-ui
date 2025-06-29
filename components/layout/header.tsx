"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FilterChip } from '@/components/ui/filter-chip';
import { useProjectStore } from '@/lib/stores/project-store';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'ទំព័រដើម', name_en: 'Home', href: '/' },
  { name: 'អំពីយើង', name_en: 'About', href: '/about' },
  { name: 'រចនាសម្ព័ន្ធ', name_en: 'Structure', href: '/structure' },
  { 
    name: 'ព័ត៌មាន', 
    name_en: 'News & Events', 
    href: '/news',
    submenu: [
      { name: 'ព័ត៌មានថ្មី', name_en: 'Latest News', href: '/news' },
      { name: 'ព្រឹត្តិការណ៍', name_en: 'Events', href: '/news?category=events' },
    ]
  },
  { name: 'វីដេអូ', name_en: 'Videos', href: '/videos' },
  { 
    name: 'គម្រោង', 
    name_en: 'Projects', 
    href: '/projects',
    submenu: [
      { name: 'គម្រោងទាំងអស់', name_en: 'All Projects', href: '/projects' },
      { name: 'សហគមន៍', name_en: 'Community', href: '/projects?category=community' },
      { name: 'ការអប់រំ', name_en: 'Education', href: '/projects?category=education' },
      { name: 'វប្បធម៌', name_en: 'Culture', href: '/projects?category=culture' },
      { name: 'កីឡា', name_en: 'Sports', href: '/projects?category=sports' },
    ]
  },
  { name: 'ទំនាក់ទំនង', name_en: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  const { getProjectCategories, setFilters } = useProjectStore();
  const projectCategories = getProjectCategories();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryFilter = (categoryId: string) => {
    setFilters({ category: categoryId });
  };

  const isProjectsPage = pathname === '/projects';

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary-900/95 backdrop-blur-md shadow-lg border-b border-primary-800/20"
          : "bg-primary-900"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-accent-400 to-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-lg lg:text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white">
                Mettyerng
              </h1>
              <p className="text-xs lg:text-sm text-gray-300">
                ក្រុមអ្នកស្រឡាញ់សង្គម
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.href} 
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="flex items-center space-x-1 text-white hover:text-accent-400 focus:text-accent-400 active:text-accent-300 transition-colors duration-200 py-2 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400/50">
                      <span className="font-medium">{item.name_en}</span>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.href && "rotate-180"
                      )} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-text-primary hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-900 active:bg-primary-100 transition-all duration-200 border-b border-neutral-100 last:border-b-0"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name_en}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-white hover:text-accent-400 focus:text-accent-400 active:text-accent-300 transition-colors duration-200 font-medium relative py-2 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400/50",
                      pathname === item.href && "text-accent-400"
                    )}
                  >
                    {item.name_en}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-400 rounded-full"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="bg-accent-400 text-white hover:bg-accent-500 focus:bg-accent-500 active:bg-accent-600 border border-accent-500 hover:border-accent-600 shadow-md hover:shadow-lg"
            >
              <Link href="/contact">ចូលរួម Join Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-accent-400 hover:bg-primary-800 focus:bg-primary-800 active:bg-primary-700 border border-transparent hover:border-accent-400/30"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white border-l border-neutral-200">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-3 pb-6 border-b border-neutral-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-700 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary-900">Mettyerng</h2>
                    <p className="text-sm text-gray-600">ក្រុមអ្នកស្រឡាញ់សង្គម</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-lg font-medium py-2 transition-colors duration-200 rounded-md px-2 hover:bg-primary-50 focus:bg-primary-50 active:bg-primary-100",
                          pathname === item.href
                            ? "text-primary-900 bg-primary-50"
                            : "text-text-primary hover:text-primary-900"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-primary-900 focus:text-primary-900 active:text-primary-950 py-1 px-2 rounded transition-colors duration-200 hover:bg-primary-50 focus:bg-primary-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                
                <div className="pt-6 border-t border-neutral-200">
                  <Button 
                    asChild 
                    className="w-full bg-primary-900 text-white hover:bg-primary-950 focus:bg-primary-950 active:bg-primary-950 shadow-md hover:shadow-lg"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      ចូលរួម Join Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}