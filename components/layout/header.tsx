"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
    ]
  },
  { name: 'អ្នកឧបត្ថម្ភ', name_en: 'Sponsors', href: '/sponsors' },
  { name: 'ទំនាក់ទំនង', name_en: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-soft border-b border-border/50"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-10 h-10 lg:w-12 lg:h-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-xl group-hover:shadow-glow transition-all duration-300" />
              <div className="relative w-full h-full bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">M</span>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 text-secondary" />
                </motion.div>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className={cn(
                "text-xl lg:text-2xl font-bold transition-colors duration-300",
                isScrolled ? "text-primary" : "text-white"
              )}>
                Mettyerng
              </h1>
              <p className={cn(
                "text-xs lg:text-sm transition-colors duration-300",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}>
                ក្រុមអ្នកស្រឡាញ់សង្គម
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                {item.submenu ? (
                  <>
                    <button className={cn(
                      "flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200",
                      isScrolled 
                        ? "text-foreground/80 hover:text-accent hover:bg-muted/50" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}>
                      <span>{item.name_en}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-large border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-accent rounded-lg transition-all duration-200"
                          >
                            {subItem.name_en}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg font-medium transition-all duration-200",
                      pathname === item.href 
                        ? isScrolled 
                          ? "text-accent bg-accent/10" 
                          : "text-white bg-white/20"
                        : isScrolled
                          ? "text-foreground/80 hover:text-accent hover:bg-muted/50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.name_en}
                    {pathname === item.href && (
                      <motion.div
                        className={cn(
                          "absolute bottom-0 left-4 right-4 h-0.5 rounded-full",
                          isScrolled ? "bg-accent" : "bg-white"
                        )}
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
              className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white border-0 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>ចូលរួម Join Us</span>
                <Sparkles className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "transition-colors duration-300",
                  isScrolled 
                    ? "text-foreground hover:text-accent hover:bg-muted" 
                    : "text-white hover:text-white hover:bg-white/20"
                )}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white/95 backdrop-blur-xl border-l border-border/50">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-3 pb-6 border-b border-border">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary">Mettyerng</h2>
                    <p className="text-sm text-muted-foreground">ក្រុមអ្នកស្រឡាញ់សង្គម</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div 
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200",
                          pathname === item.href
                            ? "text-accent bg-accent/10"
                            : "text-foreground hover:text-accent hover:bg-muted"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-accent py-2 px-4 rounded-lg transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>
                
                <div className="pt-6 border-t border-border">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white shadow-soft"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center space-x-2">
                      <span>ចូលរួម Join Us</span>
                      <Sparkles className="w-4 h-4" />
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