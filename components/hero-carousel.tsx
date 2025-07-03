"use client";

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Heart, Users, Target } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'ក្រុមអ្នកស្រឡាញ់សង្គម',
    subtitle: 'Building Stronger Communities Together',
    description: 'យើងជាក្រុមអ្នកស្រឡាញ់សង្គមដែលផ្តោតលើការអប់រំ វប្បធម៌ និងការអភិវឌ្ឍន៍សហគមន៍',
    cta: 'Discover Our Mission',
    ctaLink: '/about',
    stats: [
      { icon: Users, value: '150+', label: 'Members' },
      { icon: Target, value: '25+', label: 'Projects' },
      { icon: Heart, value: '1000+', label: 'Lives Impacted' },
    ]
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'គម្រោងកាត់សក់សប្បុរស',
    subtitle: 'Free Haircut Project',
    description: 'ការកាត់សក់ដោយឥតគិតថ្លៃសម្រាប់បងប្អូនដែលមានស្ថានភាពបញ្ហា',
    cta: 'View Our Projects',
    ctaLink: '/projects',
    stats: [
      { icon: Users, value: '500+', label: 'People Served' },
      { icon: Heart, value: '15', label: 'Volunteers' },
      { icon: Target, value: '3', label: 'Years Running' },
    ]
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'ការអប់រំ និងវប្បធម៌',
    subtitle: 'Education & Culture',
    description: 'ការលើកកម្ពស់ការអប់រំ និងការអភិរក្សវប្បធម៌ខ្មែរ',
    cta: 'Join Our Community',
    ctaLink: '/contact',
    stats: [
      { icon: Users, value: '200+', label: 'Students' },
      { icon: Target, value: '8', label: 'Programs' },
      { icon: Heart, value: '5', label: 'Schools' },
    ]
  },
];

export function HeroCarousel() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              </div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
                  animate={{ 
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, 15, 0],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="space-y-6 sm:space-y-8"
                    >
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                      >
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-white/90 text-sm font-medium">Community Impact Organization</span>
                      </motion.div>

                      {/* Main Content */}
                      <div className="space-y-4 sm:space-y-6">
                        <motion.h1
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                        >
                          {slide.title}
                        </motion.h1>
                        
                        <motion.p
                          className="text-xl sm:text-2xl md:text-3xl text-accent font-semibold"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                        >
                          {slide.subtitle}
                        </motion.p>
                      </div>

                      <motion.p
                        className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                      >
                        {slide.description}
                      </motion.p>

                      {/* Stats */}
                      <motion.div
                        className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 + index * 0.1 }}
                      >
                        {slide.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-white/70">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>

                      {/* CTA Buttons */}
                      <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                      >
                        <CTAButton
                          href={slide.ctaLink}
                          size="lg"
                          className="group bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white border-0 shadow-glow hover:shadow-glow-lg px-8 py-4"
                        >
                          {slide.cta}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </CTAButton>
                        
                        <CTAButton
                          href="/videos"
                          variant="outline"
                          size="lg"
                          className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary group px-8 py-4"
                        >
                          <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                          Watch Our Story
                        </CTAButton>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev !left-6 !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !rounded-full !border !border-white/20 after:!text-white after:!text-lg after:!font-bold hover:!bg-white/20 transition-all duration-300"></div>
        <div className="swiper-button-next !right-6 !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !rounded-full !border !border-white/20 after:!text-white after:!text-lg after:!font-bold hover:!bg-white/20 transition-all duration-300"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-8"></div>
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
}