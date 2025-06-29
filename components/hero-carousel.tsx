"use client";

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
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
    cta: 'Learn More',
    ctaLink: '/about',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'គម្រោងកាត់សក់សប្បុរស',
    subtitle: 'Free Haircut Project',
    description: 'ការកាត់សក់ដោយឥតគិតថ្លៃសម្រាប់បងប្អូនដែលមានស្ថានភាពបញ្ហា',
    cta: 'View Projects',
    ctaLink: '/projects',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'ការអប់រំ និងវប្បធម៌',
    subtitle: 'Education & Culture',
    description: 'ការលើកកម្ពស់ការអប់រំ និងការអភិរក្សវប្បធម៌ខ្មែរ',
    cta: 'Join Us',
    ctaLink: '/contact',
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <div className="space-y-3 sm:space-y-4">
                        <motion.h1
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                        >
                          {slide.title}
                        </motion.h1>
                        
                        <motion.p
                          className="text-lg sm:text-xl md:text-2xl text-accent-400 font-semibold"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                        >
                          {slide.subtitle}
                        </motion.p>
                      </div>

                      <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                      >
                        <CTAButton
                          href={slide.ctaLink}
                          size="lg"
                          className="group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-700 to-accent-500 hover:from-primary-800 hover:to-accent-600"
                        >
                          {slide.cta}
                          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </CTAButton>
                        
                        <CTAButton
                          href="/videos"
                          variant="outline"
                          size="lg"
                          className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                        >
                          <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                          Watch Video
                        </CTAButton>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-1/4 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-accent-500/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-600/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev !left-4 !w-10 !h-10 sm:!w-12 sm:!h-12 !bg-white/20 !backdrop-blur-sm !rounded-full !border !border-white/30 after:!text-sm sm:after:!text-base after:!text-white after:!font-bold"></div>
        <div className="swiper-button-next !right-4 !w-10 !h-10 sm:!w-12 sm:!h-12 !bg-white/20 !backdrop-blur-sm !rounded-full !border !border-white/30 after:!text-sm sm:after:!text-base after:!text-white after:!font-bold"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-6 sm:!bottom-8"></div>
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2" />
        </div>
      </motion.div>
    </div>
  );
}