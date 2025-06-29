"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Clock, Calendar, X } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const videosData = [
  {
    id: 1,
    title: 'ការកាត់សក់ដោយឥតគិតថ្លៃ - ការបេរ័ត្នសង្គម',
    title_en: 'Free Haircut Project - Community Service',
    description: 'ការផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃដល់ប្រជាជនដែលមានស្ថានភាពពិបាក',
    category: 'community',
    duration: '8:45',
    views: 12500,
    date: '2024-01-15',
    thumbnail: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ', // YouTube video ID
    featured: true,
  },
  {
    id: 2,
    title: 'ការបង្រៀនភាសាខ្មែរដល់កុមារ',
    title_en: 'Teaching Khmer Language to Children',
    description: 'កម្មវិធីបង្រៀនភាសាខ្មែរ និងអត្ថន័យវប្បធម៌ដល់កុមារក្នុងសហគមន៍',
    category: 'education',
    duration: '12:30',
    views: 8900,
    date: '2024-01-10',
    thumbnail: 'https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 3,
    title: 'ការប្រកួតរបាំប្រពៃណីខ្មែរ',
    title_en: 'Traditional Khmer Dance Competition',
    description: 'ការប្រកួតរបាំអប្សរា និងរបាំកំសាន្តក្នុងកម្មវិធីអភិរក្សវប្បធម៌',
    category: 'culture',
    duration: '15:20',
    views: 6750,
    date: '2024-01-05',
    thumbnail: 'https://images.pexels.com/photos/8369686/pexels-photo-8369686.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
  {
    id: 4,
    title: 'ការបរិច្ចាគអាហារដល់គ្រួសារក្រីក្រ',
    title_en: 'Food Donation to Poor Families',
    description: 'ការបរិច្ចាគអាហារ និងសម្ភារៈចាំបាច់ដល់គ្រួសារដែលមានស្ថានភាពពិបាក',
    category: 'community',
    duration: '10:15',
    views: 9200,
    date: '2023-12-20',
    thumbnail: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 5,
    title: 'ការបណ្តុះបណ្តាលជំនាញដល់យុវជន',
    title_en: 'Youth Skills Development Training',
    description: 'កម្មវិធីបណ្តុះបណ្តាលជំនាញបច្ចេកទេសដល់យុវជនក្នុងសហគមន៍',
    category: 'education',
    duration: '18:40',
    views: 7800,
    date: '2023-12-15',
    thumbnail: 'https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 6,
    title: 'ការប្រកួតកីឡាក្នុងសហគមន៍',
    title_en: 'Community Sports Tournament',
    description: 'ការប្រកួតកីឡាតុក្កតា បាល់បោះ និងកីឡាប្រពៃណីដើម្បីកសាងសាមគ្គីភាព',
    category: 'sports',
    duration: '22:10',
    views: 5600,
    date: '2023-12-10',
    thumbnail: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 7,
    title: 'ការបង្រៀនតន្ត្រីប្រពៃណីខ្មែរ',
    title_en: 'Traditional Khmer Music Lessons',
    description: 'ការបង្រៀនការលេងចាប៉ី ត្រចាក់ និងកាន់សេងដល់កុមារ',
    category: 'culture',
    duration: '14:25',
    views: 4200,
    date: '2023-12-05',
    thumbnail: 'https://images.pexels.com/photos/7964734/pexels-photo-7964734.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 8,
    title: 'ការជួសជុលផ្ទះដល់ប្រជាជន',
    title_en: 'House Repair for Community',
    description: 'ការជួសជុលផ្ទះ និងកែលម្អលំនៅដ្ឋានដល់គ្រួសារក្រីក្រ',
    category: 'community',
    duration: '16:55',
    views: 8300,
    date: '2023-11-30',
    thumbnail: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
];

const categories = [
  { id: 'all', name: 'ទាំងអស់', name_en: 'All' },
  { id: 'community', name: 'សហគមន៍', name_en: 'Community' },
  { id: 'education', name: 'ការអប់រំ', name_en: 'Education' },
  { id: 'culture', name: 'វប្បធម៌', name_en: 'Culture' },
  { id: 'sports', name: 'កីឡា', name_en: 'Sports' },
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredVideos = selectedCategory === 'all' 
    ? videosData 
    : videosData.filter(video => video.category === selectedCategory);

  const featuredVideos = videosData.filter(video => video.featured);

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-khmer-gold/10 via-white to-khmer-red/10">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              វីដេអូ
              <span className="gradient-text"> ជម្រុំ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              ស្វែងយល់ពីសកម្មភាព និងកម្មវិធីរបស់យើងតាមរយៈវីដេអូ
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Videos */}
      {featuredVideos.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container">
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                វីដេអូសំខាន់
                <span className="block text-xl md:text-2xl gradient-text mt-2">
                  Featured Videos
                </span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredVideos.map((video, index) => (
                <AnimatedSection key={video.id} delay={index * 0.2}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                    <div 
                      className="relative aspect-video overflow-hidden"
                      onClick={() => handleVideoClick(video)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                      
                      {/* Play Button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 text-khmer-gold ml-1" />
                        </div>
                      </motion.div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-khmer-gold text-white">
                          {categories.find(c => c.id === video.category)?.name_en}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(video.date).toLocaleDateString('km-KH')}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-khmer-gold transition-colors">
                        {video.title_en}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {video.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {video.views.toLocaleString()} views
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {video.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              វីដេអូទាំងអស់
              <span className="block text-xl md:text-2xl gradient-text mt-2">
                Video Gallery
              </span>
            </h2>
          </AnimatedSection>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name_en}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredVideos.map((video, index) => (
                  <AnimatedSection key={video.id} delay={index * 0.1}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div 
                        className="relative aspect-video overflow-hidden"
                        onClick={() => handleVideoClick(video)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                        
                        {/* Play Button */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                            <Play className="w-5 h-5 text-khmer-gold ml-0.5" />
                          </div>
                        </motion.div>
                        
                        {/* Duration */}
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {categories.find(c => c.id === video.category)?.name_en}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-khmer-gold transition-colors line-clamp-2">
                          {video.title_en}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                          {video.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {video.views.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(video.date).toLocaleDateString('km-KH')}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              {selectedVideo?.title_en}
            </DialogTitle>
          </DialogHeader>
          
          {selectedVideo && (
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-khmer-gold text-white">
                    {categories.find(c => c.id === selectedVideo.category)?.name_en}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(selectedVideo.date).toLocaleDateString('km-KH')}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye className="w-4 h-4 mr-1" />
                    {selectedVideo.views.toLocaleString()} views
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}